import React, { Component } from 'react';
import Loader from './Loader'
import DateInput from './DateInput';
import ListMovies from './ListMovies';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      date: "2017-03-21",
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
        json[i].selected = false;
      }
      component.setState({movies: json});
    }, function(){
      console.log('error while retrieving movies for ' + component.state.date);
      component.setState({
        movies:
        [
          {
              "id": "170399",
              "title": "Kong: Skull Island",
              "poster": "/pictures/17/02/24/14/49/440855.jpg",
              "selected": false,
              "timetable": [
                  {
                      "hasBooking": true,
                      "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093705&part=all",
                      "showStart": "2017-03-21T16:15:00.000Z",
                      "movieStart": "2017-03-21T16:15:00.000Z",
                      "movieEnd": "2017-03-21T18:14:00.000Z",
                      "group_key": "5d0aecf55448879a63d7887b64c07a7e",
                      "screenLabel": null,
                      "hasRoughTime": true
                  },
                  {
                      "hasBooking": true,
                      "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093687&part=all",
                      "showStart": "2017-03-21T19:00:00.000Z",
                      "movieStart": "2017-03-21T19:00:00.000Z",
                      "movieEnd": "2017-03-21T20:59:00.000Z",
                      "group_key": "5d0aecf55448879a63d7887b64c07a7e",
                      "screenLabel": null,
                      "hasRoughTime": true
                  },
                  {
                      "hasBooking": true,
                      "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093632&part=all",
                      "showStart": "2017-03-21T21:50:00.000Z",
                      "movieStart": "2017-03-21T21:50:00.000Z",
                      "movieEnd": "2017-03-21T23:49:00.000Z",
                      "group_key": "5d0aecf55448879a63d7887b64c07a7e",
                      "screenLabel": null,
                      "hasRoughTime": true
                  }
              ]
          },
          {
              "id": "197410",
              "title": "T2 Trainspotting",
              "poster": "/pictures/17/02/02/17/43/138334.jpg",
              "selected": false,
              "timetable": [
                  {
                      "hasBooking": true,
                      "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093712&part=all",
                      "showStart": "2017-03-21T16:40:00.000Z",
                      "movieStart": "2017-03-21T16:40:00.000Z",
                      "movieEnd": "2017-03-21T18:37:00.000Z",
                      "group_key": "33bc21277a943758c4a4e41cd5fbf3ae",
                      "screenLabel": null,
                      "hasRoughTime": true
                  },
                  {
                      "hasBooking": true,
                      "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093725&part=all",
                      "showStart": "2017-03-21T21:50:00.000Z",
                      "movieStart": "2017-03-21T21:50:00.000Z",
                      "movieEnd": "2017-03-21T23:47:00.000Z",
                      "group_key": "33bc21277a943758c4a4e41cd5fbf3ae",
                      "screenLabel": null,
                      "hasRoughTime": true
                  }
              ]
          }
        ]
      });
    });
  }

  processMovies(){
    const movies = this.state.movies.slice();
    const selectedMovies = [];
    for (var i in movies){
      if (movies[i].selected){
        selectedMovies[selectedMovies.length] = movies[i];
      }
    }
    this.setState({
      result: {
        start: '',
        end: '',
        order: []
      }
    });
  }

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
      </div>
    );
  }
}

export default App;
