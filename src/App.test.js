import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('App renders nested components', () => {
    let app = shallow(<App />);
    expect(app.find('Loader').length).toEqual(1);
    expect(app.find('DateInput').length).toEqual(1);
    expect(app.find('ListMovies').length).toEqual(1);
    expect(app.find('button')).toBePresent();
    expect(app.find('Planner').length).toEqual(1);
  });

  it('handleChange update date', function(){
    let app = shallow(<App />);
    let dateInput = app.find('DateInput').first();
    dateInput.props().handleChange({target: {value: "2016-05-23"}});
    app.update();
    expect(app.state().date).toEqual("2016-05-23");
  });

  it('onClick search for movie planning', function(){
    let movies = [
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
        }
    ];
    for (let i in movies){
      movies[i].selected = true;
    }
    let app = shallow(<App />);
    app.state().movies = movies;
    let button = app.find('button').first();
    button.props().onClick();
    expect(app.state().result.start).toEqual("2017-03-21T15:30:00.000Z");
    expect(app.state().result.end).toEqual("2017-03-21T23:51:00.000Z");
    expect(app.state().result.order[0].title).toEqual('Grave');
  })
});
