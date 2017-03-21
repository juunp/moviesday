var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var CronJob = require('cron').CronJob;
var app = express();

app.set('port', (process.env.PORT || 5000));

var dir = 'mov';
var job = new CronJob('0 5 0 * * *', function(){
  scrape('http://www.allocine.fr/seance/salle_gen_csalle=P0087.html', dir);
}, function(){}, true, 'Europe/Paris');

var secondJob = new CronJob('0 0 0 * * 0', function(){
  eraseFiles(dir);
}, function(){}, true, 'Europe/Paris');

function scrape(url, dir){

  var date = new Date();
  var month = date.getUTCMonth >= 10 ? date.getUTCMonth()+1 : "0" + (date.getUTCMonth() + 1);
  date = date.getUTCFullYear() + '-' + month + '-' + date.getUTCDate();

  request(url, function(error, response, html){
    if (!error){
      var $ = cheerio.load(html);
      var movies = [];
      var json_info, theater_id;

      $('.section.js-movie-list').filter(function(){
        json_info = JSON.parse($(this).attr('data-movies-showtimes'));
        theater_id = $(this).attr('data-theater-id');
      });
      for (var i in json_info.movies){
        movies[movies.length] = {
          id: i,
          title: json_info.movies[i].title,
          poster: json_info.movies[i].poster.file_name,
          timetable: (theater_id && date && json_info.showtimes[theater_id][date] && json_info.showtimes[theater_id][date][i] !== undefined) ? json_info.showtimes[theater_id][date][i][0].showtimes: null
        };
      };
      fs.writeFile(dir + '/' + date + '.json', JSON.stringify(movies, null, 4), function(err){
        console.log('File successfully written! - Check your project directory for the file');
      });
    }
    else{
      console.log(error);
    }
  })
}

function eraseFile(file_name){
  fs.unlink(file_name, function(err){
    if (err){
      console.error(err);
    }
  });
}

function eraseFiles(dir){
  fs.readdir(dir, function(err, files){
    if (err){
      console.error(err);
    }
    for (var i in files){
      eraseFile(files);
    }
  });
}
app.use(express.static('build'));

// app.get('/scrape', function(req, res){
//   var url = 'http://www.allocine.fr/seance/salle_gen_csalle=P0087.html';
//   scrape(url, dir);
// });
//
// app.get('/files', function(req, res){
//   eraseFiles('mov');
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

exports = module.exports = app;
