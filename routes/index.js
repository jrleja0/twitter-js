const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
	let tweets = tweetBank.list();
	res.render( 'index', {tweets: tweets });
	// next()
});

router.use(express.static('public'))

// router.get('/stylesheets/style.css', function(req, res) {
// 	// res.sendFile(__dirname....... './stylesheets/style.css')
// })





module.exports = router;



