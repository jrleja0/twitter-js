const express = require('express');
const app = express();
const volleyball = require('volleyball')
const nunjucks = require('nunjucks')

var PORT = 3000;
app.listen(PORT, function() {
  console.log(`Server listening on ${PORT}`);
});

app.use(volleyball)

app.get('/', function (req, res) {
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );
	// console.log('get /')
  // res.send('Hello World!')
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
// 	console.log(output);
// })


// app.get('/is-anybody-in-there/yessomeones', function (req, res) {
// 	console.log('get /is-anybody-in-there')
//   res.send('Hello World!')
// });
//
// app.post('/modernism', function (req, res) {
// 	console.log('POST /modernism')
// });
//
//
// app.get('/news', function (req, res) {
// 	res.send('you are on the news page. woop!')
// });

// var locals = {
// 	title: 'An Example',
// 	people: [
// 		{ name: 'Gandalf'},
// 		{ name: 'Frodo'},
// 		{ name: 'Hermione'}
// 	]
// };
