import React, { Component } from 'react';
import CheckboxInputLabel from './CheckboxInputLabel';
import './ListMovies.css';

class ListMovies extends Component{
  constructor(props){
    super(props);
    this.state = {movies: [], selectedMovies: []};
    this.selectMovie = this.selectMovie.bind(this);
  }

  componentDidMount(){
    var component = this;
    fetch('/mov/' + this.props.date + '.json', {'Content-Type': 'application/json'})
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      for (var i = 0; i < json.length; i++){
        json[i].selected = false;
      }
      component.setState({movies: json});
    }, function(){
      console.log('error while retrieving movies for ' + component.props.date);
      component.setState({
        movies:
        [
          {
              "id": "170399",
              "title": "Kong: Skull Island",
              "poster": "/pictures/17/02/24/14/49/440855.jpg",
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

  selectMovie(event, item){
    const selectedMovies = this.state.selectedMovies;
    this.setState({selectedMovies : selectedMovies});
  }

  render(){
    this.list = this.state.movies.map((item) =>
    <li key={item.id.toString()}>
      <CheckboxInputLabel id={item.id.toString()} value={item.selected} children={[<img src={item.poster} alt={item.title}/>,<span>{item.title}</span>]}/>
    </li>
    );
    return (
      <ul>
        {this.list}
      </ul>
    );
  }
}

ListMovies.propTypes = {
  date: React.PropTypes.string
}

export default ListMovies;
