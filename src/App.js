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
      date: "2017-03-21",
      loading: false,
      movies: [],
      result: {
        start: null,
        end: null,
        order: [],
        orderedTt: []
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
    },
    {
        "id": "219070",
        "title": "Les Figures de l'ombre",
        "poster": "/pictures/17/01/10/15/08/573198.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093380&part=all",
                "showStart": "2017-03-21T16:10:00.000Z",
                "movieStart": "2017-03-21T16:10:00.000Z",
                "movieEnd": "2017-03-21T18:16:00.000Z",
                "group_key": "fa338c7d2e14a62e831e94761d434a1b",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093502&part=all",
                "showStart": "2017-03-21T19:05:00.000Z",
                "movieStart": "2017-03-21T19:05:00.000Z",
                "movieEnd": "2017-03-21T21:11:00.000Z",
                "group_key": "fa338c7d2e14a62e831e94761d434a1b",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093490&part=all",
                "showStart": "2017-03-21T21:45:00.000Z",
                "movieStart": "2017-03-21T21:45:00.000Z",
                "movieEnd": "2017-03-21T23:51:00.000Z",
                "group_key": "fa338c7d2e14a62e831e94761d434a1b",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "223754",
        "title": "The Lost City of Z",
        "poster": "/pictures/17/02/15/10/45/490751.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093610&part=all",
                "showStart": "2017-03-21T17:15:00.000Z",
                "movieStart": "2017-03-21T17:15:00.000Z",
                "movieEnd": "2017-03-21T19:36:00.000Z",
                "group_key": "8037cb43d3e85dcdd018322f69e9f5e9",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093617&part=all",
                "showStart": "2017-03-21T20:15:00.000Z",
                "movieStart": "2017-03-21T20:15:00.000Z",
                "movieEnd": "2017-03-21T22:36:00.000Z",
                "group_key": "8037cb43d3e85dcdd018322f69e9f5e9",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "225116",
        "title": "Logan",
        "poster": "/pictures/17/01/19/16/02/513278.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093625&part=all",
                "showStart": "2017-03-21T16:10:00.000Z",
                "movieStart": "2017-03-21T16:10:00.000Z",
                "movieEnd": "2017-03-21T18:27:00.000Z",
                "group_key": "e67738654c264c859842ae4e26e05708",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093657&part=all",
                "showStart": "2017-03-21T19:00:00.000Z",
                "movieStart": "2017-03-21T19:00:00.000Z",
                "movieEnd": "2017-03-21T21:17:00.000Z",
                "group_key": "e67738654c264c859842ae4e26e05708",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093645&part=all",
                "showStart": "2017-03-21T21:45:00.000Z",
                "movieStart": "2017-03-21T21:45:00.000Z",
                "movieEnd": "2017-03-22T00:02:00.000Z",
                "group_key": "e67738654c264c859842ae4e26e05708",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "229070",
        "title": "Lion",
        "poster": "/pictures/17/01/25/09/36/363964.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093551&part=all",
                "showStart": "2017-03-21T16:45:00.000Z",
                "movieStart": "2017-03-21T16:45:00.000Z",
                "movieEnd": "2017-03-21T18:43:00.000Z",
                "group_key": "8cf6c90da9d245770f60200694a17829",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093533&part=all",
                "showStart": "2017-03-21T19:30:00.000Z",
                "movieStart": "2017-03-21T19:30:00.000Z",
                "movieEnd": "2017-03-21T21:28:00.000Z",
                "group_key": "8cf6c90da9d245770f60200694a17829",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093537&part=all",
                "showStart": "2017-03-21T22:00:00.000Z",
                "movieStart": "2017-03-21T22:00:00.000Z",
                "movieEnd": "2017-03-21T23:58:00.000Z",
                "group_key": "8cf6c90da9d245770f60200694a17829",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "229490",
        "title": "La La Land",
        "poster": "/pictures/16/11/10/13/52/169386.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093370&part=all",
                "showStart": "2017-03-21T16:10:00.000Z",
                "movieStart": "2017-03-21T16:10:00.000Z",
                "movieEnd": "2017-03-21T18:18:00.000Z",
                "group_key": "bb4a5299c3e0e300ea8836aae36aed46",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093352&part=all",
                "showStart": "2017-03-21T19:05:00.000Z",
                "movieStart": "2017-03-21T19:05:00.000Z",
                "movieEnd": "2017-03-21T21:13:00.000Z",
                "group_key": "bb4a5299c3e0e300ea8836aae36aed46",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093373&part=all",
                "showStart": "2017-03-21T21:50:00.000Z",
                "movieStart": "2017-03-21T21:50:00.000Z",
                "movieEnd": "2017-03-21T23:58:00.000Z",
                "group_key": "bb4a5299c3e0e300ea8836aae36aed46",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "240516",
        "title": "Split",
        "poster": "/pictures/16/12/09/09/51/046535.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093896&part=all",
                "showStart": "2017-03-21T16:15:00.000Z",
                "movieStart": "2017-03-21T16:15:00.000Z",
                "movieEnd": "2017-03-21T18:12:00.000Z",
                "group_key": "0526dd9d8dac3562e8e190b8945c1319",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093909&part=all",
                "showStart": "2017-03-21T19:15:00.000Z",
                "movieStart": "2017-03-21T19:15:00.000Z",
                "movieEnd": "2017-03-21T21:12:00.000Z",
                "group_key": "0526dd9d8dac3562e8e190b8945c1319",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093812&part=all",
                "showStart": "2017-03-21T21:50:00.000Z",
                "movieStart": "2017-03-21T21:50:00.000Z",
                "movieEnd": "2017-03-21T23:47:00.000Z",
                "group_key": "0526dd9d8dac3562e8e190b8945c1319",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "240878",
        "title": "La Confession",
        "poster": "/pictures/17/01/05/16/33/344015.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093735&part=all",
                "showStart": "2017-03-21T19:15:00.000Z",
                "movieStart": "2017-03-21T19:15:00.000Z",
                "movieEnd": "2017-03-21T21:11:00.000Z",
                "group_key": "23d1bb7f1adf22c05dbd94e1d9994b4f",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "241763",
        "title": "Patients",
        "poster": "/pictures/16/12/19/15/00/385646.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093787&part=all",
                "showStart": "2017-03-21T16:35:00.000Z",
                "movieStart": "2017-03-21T16:35:00.000Z",
                "movieEnd": "2017-03-21T18:25:00.000Z",
                "group_key": "6c301b2d697155215664eff2215c6076",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093802&part=all",
                "showStart": "2017-03-21T19:20:00.000Z",
                "movieStart": "2017-03-21T19:20:00.000Z",
                "movieEnd": "2017-03-21T21:10:00.000Z",
                "group_key": "6c301b2d697155215664eff2215c6076",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "242054",
        "title": "Moonlight",
        "poster": "/pictures/17/03/02/11/56/134486.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093471&part=all",
                "showStart": "2017-03-21T19:20:00.000Z",
                "movieStart": "2017-03-21T19:20:00.000Z",
                "movieEnd": "2017-03-21T21:11:00.000Z",
                "group_key": "61f3f7dc8093465bd81aeb8b285c8ad8",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093436&part=all",
                "showStart": "2017-03-21T22:00:00.000Z",
                "movieStart": "2017-03-21T22:00:00.000Z",
                "movieEnd": "2017-03-21T23:51:00.000Z",
                "group_key": "61f3f7dc8093465bd81aeb8b285c8ad8",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "242293",
        "title": "Monsieur & Madame Adelman",
        "poster": "/pictures/17/02/23/12/23/004447.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093564&part=all",
                "showStart": "2017-03-21T16:45:00.000Z",
                "movieStart": "2017-03-21T16:45:00.000Z",
                "movieEnd": "2017-03-21T18:45:00.000Z",
                "group_key": "9b43ce04f58e8e5e9726ca63f3f997ac",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093674&part=all",
                "showStart": "2017-03-21T19:25:00.000Z",
                "movieStart": "2017-03-21T19:25:00.000Z",
                "movieEnd": "2017-03-21T21:25:00.000Z",
                "group_key": "9b43ce04f58e8e5e9726ca63f3f997ac",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093681&part=all",
                "showStart": "2017-03-21T21:55:00.000Z",
                "movieStart": "2017-03-21T21:55:00.000Z",
                "movieEnd": "2017-03-21T23:55:00.000Z",
                "group_key": "9b43ce04f58e8e5e9726ca63f3f997ac",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "243439",
        "title": "Sonita",
        "poster": "/pictures/16/09/13/15/29/342177.jpg",
        "timetable": null
    },
    {
        "id": "243516",
        "title": "L’autre côté de l’espoir",
        "poster": "/pictures/17/03/17/11/51/409507.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093776&part=all",
                "showStart": "2017-03-21T15:10:00.000Z",
                "movieStart": "2017-03-21T15:10:00.000Z",
                "movieEnd": "2017-03-21T16:48:00.000Z",
                "group_key": "e59752e79454228f989de5f51e91a0b5",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093753&part=all",
                "showStart": "2017-03-21T17:20:00.000Z",
                "movieStart": "2017-03-21T17:20:00.000Z",
                "movieEnd": "2017-03-21T18:58:00.000Z",
                "group_key": "e59752e79454228f989de5f51e91a0b5",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093760&part=all",
                "showStart": "2017-03-21T19:30:00.000Z",
                "movieStart": "2017-03-21T19:30:00.000Z",
                "movieEnd": "2017-03-21T21:08:00.000Z",
                "group_key": "e59752e79454228f989de5f51e91a0b5",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093757&part=all",
                "showStart": "2017-03-21T22:10:00.000Z",
                "movieStart": "2017-03-21T22:10:00.000Z",
                "movieEnd": "2017-03-21T23:48:00.000Z",
                "group_key": "e59752e79454228f989de5f51e91a0b5",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "244238",
        "title": "Rock'n Roll",
        "poster": "/pictures/16/12/08/13/39/179029.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093485&part=all",
                "showStart": "2017-03-21T15:45:00.000Z",
                "movieStart": "2017-03-21T15:45:00.000Z",
                "movieEnd": "2017-03-21T17:48:00.000Z",
                "group_key": "6534dbc75b5ccce18872d9cc9c940103",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093464&part=all",
                "showStart": "2017-03-21T21:50:00.000Z",
                "movieStart": "2017-03-21T21:50:00.000Z",
                "movieEnd": "2017-03-21T23:53:00.000Z",
                "group_key": "6534dbc75b5ccce18872d9cc9c940103",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "244414",
        "title": "Grave",
        "poster": "/pictures/16/12/07/16/37/538324.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093344&part=all",
                "showStart": "2017-03-21T15:30:00.000Z",
                "movieStart": "2017-03-21T15:30:00.000Z",
                "movieEnd": "2017-03-21T17:08:00.000Z",
                "group_key": "334e8a632d895868df1f0909ef71a6ed",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093309&part=all",
                "showStart": "2017-03-21T17:50:00.000Z",
                "movieStart": "2017-03-21T17:50:00.000Z",
                "movieEnd": "2017-03-21T19:28:00.000Z",
                "group_key": "334e8a632d895868df1f0909ef71a6ed",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093327&part=all",
                "showStart": "2017-03-21T20:05:00.000Z",
                "movieStart": "2017-03-21T20:05:00.000Z",
                "movieEnd": "2017-03-21T21:43:00.000Z",
                "group_key": "334e8a632d895868df1f0909ef71a6ed",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093323&part=all",
                "showStart": "2017-03-21T22:15:00.000Z",
                "movieStart": "2017-03-21T22:15:00.000Z",
                "movieEnd": "2017-03-21T23:53:00.000Z",
                "group_key": "334e8a632d895868df1f0909ef71a6ed",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "244750",
        "title": "Corporate",
        "poster": "/pictures/17/02/22/10/47/140482.jpg",
        "timetable": null
    },
    {
        "id": "245042",
        "title": "Miss Sloane",
        "poster": "/pictures/17/01/26/16/37/172587.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093830&part=all",
                "showStart": "2017-03-21T16:15:00.000Z",
                "movieStart": "2017-03-21T16:15:00.000Z",
                "movieEnd": "2017-03-21T18:27:00.000Z",
                "group_key": "d1784e643af4f212ea63f347a0758945",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093837&part=all",
                "showStart": "2017-03-21T19:00:00.000Z",
                "movieStart": "2017-03-21T19:00:00.000Z",
                "movieEnd": "2017-03-21T21:12:00.000Z",
                "group_key": "d1784e643af4f212ea63f347a0758945",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093834&part=all",
                "showStart": "2017-03-21T21:45:00.000Z",
                "movieStart": "2017-03-21T21:45:00.000Z",
                "movieEnd": "2017-03-21T23:57:00.000Z",
                "group_key": "d1784e643af4f212ea63f347a0758945",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "247411",
        "title": "Alibi.com",
        "poster": "/pictures/16/12/22/15/06/567544.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093399&part=all",
                "showStart": "2017-03-21T15:35:00.000Z",
                "movieStart": "2017-03-21T15:35:00.000Z",
                "movieEnd": "2017-03-21T17:05:00.000Z",
                "group_key": "f5ad3503f491dbc2b5d8c1532121eb23",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "248250",
        "title": "De plus belle",
        "poster": "/pictures/17/02/09/09/14/017126.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093432&part=all",
                "showStart": "2017-03-21T17:35:00.000Z",
                "movieStart": "2017-03-21T17:35:00.000Z",
                "movieEnd": "2017-03-21T19:13:00.000Z",
                "group_key": "975e1efc31879aace947a1444ce6e3a1",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "248351",
        "title": "Chacun sa vie",
        "poster": "/pictures/17/01/26/14/27/021264.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093302&part=all",
                "showStart": "2017-03-21T15:15:00.000Z",
                "movieStart": "2017-03-21T15:15:00.000Z",
                "movieEnd": "2017-03-21T17:08:00.000Z",
                "group_key": "8574d5a400608941df996e180583e4e2",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093267&part=all",
                "showStart": "2017-03-21T17:30:00.000Z",
                "movieStart": "2017-03-21T17:30:00.000Z",
                "movieEnd": "2017-03-21T19:23:00.000Z",
                "group_key": "8574d5a400608941df996e180583e4e2",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093946&part=all",
                "showStart": "2017-03-21T19:50:00.000Z",
                "movieStart": "2017-03-21T19:50:00.000Z",
                "movieEnd": "2017-03-21T21:43:00.000Z",
                "group_key": "8574d5a400608941df996e180583e4e2",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093281&part=all",
                "showStart": "2017-03-21T22:10:00.000Z",
                "movieStart": "2017-03-21T22:10:00.000Z",
                "movieEnd": "2017-03-22T00:03:00.000Z",
                "group_key": "8574d5a400608941df996e180583e4e2",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "248355",
        "title": "L'Embarras du choix",
        "poster": "/pictures/17/02/14/12/56/161798.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093527&part=all",
                "showStart": "2017-03-21T15:40:00.000Z",
                "movieStart": "2017-03-21T15:40:00.000Z",
                "movieEnd": "2017-03-21T17:15:00.000Z",
                "group_key": "9e45d193616973b8fe442a6e5806f895",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093947&part=all",
                "showStart": "2017-03-21T17:50:00.000Z",
                "movieStart": "2017-03-21T17:50:00.000Z",
                "movieEnd": "2017-03-21T19:25:00.000Z",
                "group_key": "9e45d193616973b8fe442a6e5806f895",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093454&part=all",
                "showStart": "2017-03-21T20:05:00.000Z",
                "movieStart": "2017-03-21T20:05:00.000Z",
                "movieEnd": "2017-03-21T21:40:00.000Z",
                "group_key": "9e45d193616973b8fe442a6e5806f895",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093458&part=all",
                "showStart": "2017-03-21T22:15:00.000Z",
                "movieStart": "2017-03-21T22:15:00.000Z",
                "movieEnd": "2017-03-21T23:50:00.000Z",
                "group_key": "9e45d193616973b8fe442a6e5806f895",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "249056",
        "title": "1:54",
        "poster": "/pictures/17/03/14/15/24/495141.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093864&part=all",
                "showStart": "2017-03-21T15:00:00.000Z",
                "movieStart": "2017-03-21T15:00:00.000Z",
                "movieEnd": "2017-03-21T16:46:00.000Z",
                "group_key": "4f3336c6123bc0ca9a70d38c9610862c",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093861&part=all",
                "showStart": "2017-03-21T17:10:00.000Z",
                "movieStart": "2017-03-21T17:10:00.000Z",
                "movieEnd": "2017-03-21T18:56:00.000Z",
                "group_key": "4f3336c6123bc0ca9a70d38c9610862c",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093868&part=all",
                "showStart": "2017-03-21T19:25:00.000Z",
                "movieStart": "2017-03-21T19:25:00.000Z",
                "movieEnd": "2017-03-21T21:11:00.000Z",
                "group_key": "4f3336c6123bc0ca9a70d38c9610862c",
                "screenLabel": null,
                "hasRoughTime": true
            },
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261093921&part=all",
                "showStart": "2017-03-21T22:00:00.000Z",
                "movieStart": "2017-03-21T22:00:00.000Z",
                "movieEnd": "2017-03-21T23:46:00.000Z",
                "group_key": "4f3336c6123bc0ca9a70d38c9610862c",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "249860",
        "title": "C'est beau la vie quand on y pense",
        "poster": "/pictures/17/02/24/14/18/327781.jpg",
        "timetable": [
            {
                "hasBooking": true,
                "urlTicketing": "http://www.ugc.fr/reservationAccueil.html?id=330261091838&part=all",
                "showStart": "2017-03-21T20:15:00.000Z",
                "movieStart": "2017-03-21T20:15:00.000Z",
                "movieEnd": "2017-03-21T21:50:00.000Z",
                "group_key": "3fd35b2f1aa70cb54d7a35cc4b9bacd1",
                "screenLabel": null,
                "hasRoughTime": true
            }
        ]
    },
    {
        "id": "253361",
        "title": "L'Opéra",
        "poster": "/pictures/17/02/15/14/40/337011.jpg",
        "timetable": null
    }
]
      });
    });
  }

  processMovies(){
    const movies = this.state.movies.slice();
    const selectedMovies = [];
    for (var i in movies){
      if (movies[i].selected && movies[i].timetable.length){
        selectedMovies[selectedMovies.length] = movies[i];
      }
    }
    var result = Object.assign({}, this.state.result);
    if (selectedMovies.length > 1){
      //algo to find quickest way to see all movies selected
    }

    this.setState({
      result: result
    });
  }

  formatResults(orderedTt, order){
    let o = order.slice();
    const tt = orderedTt.slice();
    o.map((i, idx) => {
      return i.selectedTt = tt[idx];
    });
    return {
      start: orderedTt[0].movieStart,
      end: orderedTt[orderedTt.length - 1].movieEnd,
      order: o
    }
  }

  calcPauseDuration(end, start){
    return moment(start) - moment(end);
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
        <Planner value={this.state.result}/>
      </div>
    );
  }
}

export default App;
