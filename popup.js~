$(document).ready(function() {
  // get background page
  var bkg = chrome.extension.getBackgroundPage();
  var tumblr = require('tumblr.js');
  var client = tumblr.createClient({
  	consumer_key: 'AcHybTTrgYoIk1a5HiBDGKvE0TEon8JeRxjF2LJnl4tkR1jlVX',
  	consumer_secret: 'D8Ff3FoSb65tFM2ubQLPgw358bhFyx1k5PUn4CBHshs4KWW89L',
  	token: 'http://www.tumblr.com/oauth/request_token',
  	token_secret: '<oauth token secret>'
	});
  


  $('body').click(function(e){
    alert(bkg.getId());
    alert(bkg.getUser());
    var dat = client.posts(bkg.getUser(), id = bkg.getId(), function(json){
    	var getTags = JSON.parse(dat);
	getTags = getTags.tags;
	for (var i = 0; i < getTags.length; i++){
		//do something with our tags
	}
    
    });
    
  })

});

