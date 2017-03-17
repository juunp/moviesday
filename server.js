var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req, res){
  url = 'http://www.allocine.fr/seance/salle_gen_csalle=P0087.html';

  request(url, function(error, response, html){
    if (!error){
      var $ = cheerio.load(html);
      var movies, links, timetables, durations;
      var json = {movies: [], links:[], timetables: [], durations: []};
      $('a.meta-title-link').filter(function(){
        var data = $(this);
        var links = data.attr('href');
        var movies = data.text();
        json.movies = movies;
        json.links = links;
      });

      $('.meta-body-item.meta-body-info').filter(function(){
        var data = $(this);
        var durations = $(this).clone().children().remove().end().text();
        json.durations = durations;
      });

      $('.showtimes').filter(function(){
        var data = $(this);
        var timetables = data.children('.hours-item-value').text();
        json.timetables = timetables;
        console.log(timetables);
      })

    }
    else{
      console.log(error);
    }
  })
});

app.listen('8081');

console.log('yeah');

exports = module.exports = app;
