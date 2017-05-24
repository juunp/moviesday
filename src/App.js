import React, { Component } from 'react';
import Loader from './Loader'
import DateInput from './DateInput';
import ListMovies from './ListMovies';
import Planner from './Planner';
import './App.css';

var moment = require('moment');

class App extends Component {
  constructor(){
    super();
    this.state = {
      date: moment(new Date()).format("YYYY-MM-DD"),
      maxDate: moment(new Date()).format("YYYY-MM-DD"),
      loading: false,
      movies: [],
      result: {
        start: null,
        end: null,
        order: []
      }
    };

    this.selectDate = this.selectDate.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.processMovies = this.processMovies.bind(this);
  }

  componentDidMount(){
    this.getMovies(this.state.date);
  }

  selectDate(event){
    this.setState({date: event.target.value});
    this.getMovies(this.state.date);
  }

  getMovies(date){
    var component = this;
    fetch('/mov/' + date + '.json', {'Content-Type': 'application/json'})
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      for (var i = 0; i < json.length; i++){
        json[i].selected = '';
      }
      component.setState({movies: json});
    }, function(){
      console.log('error while retrieving movies for ' + component.state.date);
    });
  }

  processMovies(){
    const movies = this.state.movies.slice();
    let selectedMovies = [];
    for (var i in movies){
      if (movies[i].selected && movies[i].timetable && movies[i].timetable.length){
        selectedMovies[selectedMovies.length] = movies[i];
      }
    }
    var result = Object.assign({}, this.state.result);
    if (selectedMovies.length > 1){
      //algo to find quickest way to see all movies selected
      selectedMovies = this.findPauses(selectedMovies);
      result = this.orderMovies([], selectedMovies);
    }

    this.setState({
      result: result
    });
  }

  /**
  return result for panel
  **/
  orderMovies(result, moviesList){
    let res = result.slice();
    let movies = moviesList.slice();
    if (res.length < moviesList.length){
      if (res.length) {
        let moviesAfter = this.timeForAnotherMovie(res, movies, true);
        let moviesBefore = this.timeForAnotherMovie(res, movies, false);
        if (moviesAfter.length || moviesBefore.length){
          //find movie before first result
          if (moviesBefore.length){
            let beforeResult = this.findShortestPause(movies, res[0], moviesBefore, false);
            res = [beforeResult[0]].concat(res);
          }
          //find movie after last result
          else if (moviesAfter.length){
            let afterResult = this.findShortestPause(movies, res[res.length - 1], moviesAfter, true);
            res[res.length] = afterResult[1];
          }
        }
        else if (!moviesAfter.length && !moviesBefore.length){
          return this.formatResultForPanel(res);
        }
      }
      else{
        //find shortest pause
        res = this.findShortestPause(movies);
      }
      return this.orderMovies(res, movies);
    }
    else{
      return this.formatResultForPanel(res);
    }
  }

  formatResultForPanel(res){
    return {
      order: res.slice(),
      start: res[0].selectedTt.movieStart,
      end: res[res.length - 1].selectedTt.movieEnd
    };
  }

  /**
  calculate pause between every movie and return the list provided
  **/
  findPauses(moviesList){
    let movies = moviesList.slice();
    //iterate over every movie except last
    for (let i = 0; i < movies.length - 1; i++){
      let movie = movies[i];
      if (movie.timetable.length){
        //iterate over movie timetable
        for (let j = 0; j < movie.timetable.length; j++){
          for (let v = 0; v < movies.length; v++){
            if (v !== i){
              let nextMovie = movies[v];
              //iterate over nextMovie timetable
              for (let w = 0; w < nextMovie.timetable.length; w++){
                if (movie.timetable[j][nextMovie.id] === undefined){
                  //create array if not defined
                  movie.timetable[j][nextMovie.id] = [];
                }
                movie.timetable[j][nextMovie.id][movie.timetable[j][nextMovie.id].length] = this.calcPauseDuration(movie.timetable[j].movieEnd, nextMovie.timetable[w].movieStart);
                if (nextMovie.timetable[w][movie.id] === undefined){
                  //create array if not defined
                  nextMovie.timetable[w][movie.id] = [];
                }
                nextMovie.timetable[w][movie.id][nextMovie.timetable[w][movie.id].length] = this.calcPauseDuration(nextMovie.timetable[w].movieEnd, movie.timetable[j].movieStart);
              }
            }
          }
        }
      }
    }
    return movies;
  }

  /**
    return two movies ordered with the shortest pause
  **/
  findShortestPause(moviesList, designatedMovie, res, after){
    let movies = moviesList.slice();
    let shortest = null;
    let idList = this.getPropList(movies, 'id');
    if (designatedMovie === undefined){
      for (let i = 0; i < movies.length; i++){
        let movie = movies[i];
        for (let j = 0; j < movie.timetable.length; j++){
          for (let k = 0; k < idList.length; k++){
            if (idList[k] !== movie.id){
              if (movie.timetable[j][idList[k]] !== undefined){
                for (let l = 0; l < movie.timetable[j][idList[k]].length; l++){
                  if (movie.timetable[j][idList[k]][l] > 0 && ((shortest === null)  || (shortest !== null && shortest.time > movie.timetable[j][idList[k]][l]))){
                    shortest = {
                      time: movie.timetable[j][idList[k]][l], //reference
                      movieStart: movie,
                      movieEndId: idList[k],
                      timetables: [j, l]
                    };
                  }
                }
              }
            }
          }
        }
      }
    }
    else {
      let result = res.slice();
      let idList = this.getPropList(result, 'id');
      let mov = Object.assign({}, designatedMovie);
      if (after){
        for (let i = 0; i < idList.length; i++){
          if (mov.selectedTt[idList[i]] !== undefined){
            for (let j = 0; j < mov.selectedTt[idList[i]].length; j++){
              if (mov.selectedTt[idList[i]][j] > 0 && ((shortest === null) || (shortest !== null && shortest.time > mov.selectedTt[idList[i]][j]))){
                shortest = {
                  time: mov.selectedTt[idList[i]][j],
                  movieStart: mov,
                  movieEndId: idList[i],
                  timetables: [0, j]
                };
              }
            }
          }
        }
      }
      else{
        for (let i = 0; i < result.length; i++){
          let movie = result[i];
          for (let j = 0; j < movie.timetable.length; j++){
            if (movie.timetable[j][mov.id] !== undefined && moment(movie.timetable[j].movieEnd) < moment(mov.selectedTt.movieStart)){
              for (let k = 0; k < movie.timetable[j][mov.id].length; k++){
                if (movie.timetable[j][mov.id][k] > 0 && ((shortest === null) || (shortest !== null && shortest.time > movie.timetable[j][mov.id][k]))){
                  shortest = {
                    time: movie.timetable[j][mov.id][k],
                    movieStart: movie,
                    movieEnd: mov,
                    timetables: [j, 0]
                  };
                }
              }
            }
          }
        }
      }
    }
    let orderedList = [shortest.movieStart];
    if (shortest !== null){
      for (let i = 0; i < movies.length; i++){
        if (shortest.movieEnd !== undefined){
          orderedList[1] = shortest.movieEnd
        }
        else if (movies[i].id === shortest.movieEndId){
          orderedList[1] = movies[i];
        }
      }
    }

    for (let i = 0; i < orderedList.length; i++){
      if (orderedList[i].selectedTt === undefined){
        orderedList[i].selectedTt = orderedList[i].timetable[shortest.timetables[i]];
      }
    }
    // console.log(orderedList);
    return orderedList;
  }

  timeForAnotherMovie(orderMovies, moviesList, after){
    let oMovies = orderMovies.slice();
    let movies = moviesList.slice();
    let idList = this.getDiffList(this.getPropList(oMovies, 'id'), this.getPropList(movies, 'id'));
    let result = false;
    for(let i = 0; i < movies.length; i++){
      let movie = movies[i];
      for (let j = 0; j < idList.length; j++){
        let id = idList[j];
        let idx = after ? movie.timetable.length - 1 : 0;
        let idx2 = after ? oMovies.length - 1 : 0;
        if (movie.id === id && ((after && moment(movie.timetable[idx].movieStart) > moment(oMovies[idx2].selectedTt.movieEnd)) ||
          (!after && moment(movie.timetable[idx].movieEnd) < moment(oMovies[idx2].selectedTt.movieStart)))){
          if (!result){
            result = [];
          }
          result[result.length] = movie
        }
      }
    }
    return result;
  }

  /**
  returns a list of property from a list of objects
  **/
  getPropList(list, prop){
    let l = list.slice();
    let propList = [];
    for (let i = 0; i < l.length; i++){
      if(l[i][prop] === undefined){
        throw new Error("property does not exist");
      }
      propList[propList.length] = l[i][prop];
    }
    return propList;
  }

  /**
  returns difference between two arrays
  **/
  getDiffList(list1, list2){
    for (let a in list1){
      for (let b in list2){
        if (list1[a] === list2[b]){
          list2.splice(b, 1);
        }
      }
    }
    return list2;
  }


  /**
  return milliseconds between end of first movie and start of second movie
  **/
  calcPauseDuration(end, start){
    return moment(start) - moment(end);
  }

  /**
    change state movies when movie is selected
  **/
  selectMovie(i){
    const movieId = i;
    const movies = this.state.movies.slice();
    for (var j in movies){
      if (movies[j].id === movieId){
        movies[j].selected = movies[j].selected === 'selected' ? false : 'selected';
      }
    }
    this.setState({
      movies: movies
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <Loader isVisible={this.state.loading}/>
        <DateInput value={this.state.date} handleChange={(i) => this.selectDate(i)}/>
        <ListMovies date={this.state.date} movies={this.state.movies} handleChange={(i) => this.selectMovie(i)}/>
        <button onClick={this.processMovies}>Go on</button>
        <Planner value={this.state.result}/>
      </div>
    );
  }
}

export default App;
