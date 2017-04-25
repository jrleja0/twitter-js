const express = require('express');
const router = express.Router();
// const bodyParser = require('body-parser');
const tweetBank = require('../tweetBank');

router.use(express.static('public'))

router.get('/', function (req, res) {
	let tweets = tweetBank.list();
	res.render( 'index', {tweets: tweets, showForm: true });
	//next();  // next is only needed for async requests.
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: tweets, showForm: true, name: name } );
	//next();
});

router.get('/tweets/:id', function(req, res) {
  var id = req.params.id;
  var tweets = tweetBank.find( {id: id} );
	console.log(id + "&&" + tweets.id)
  res.render( 'index', { tweets: tweets } );
	//next();
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});


// router.get('/stylesheets/style.css', function(req, res) {
// 	// res.sendFile(__dirname....... './stylesheets/style.css')
// })





module.exports = router;
