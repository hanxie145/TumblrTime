$(document).ready(function() {

  // id and user variables to be passed into the API 
  var id, user, search;

  // get tags 
  var tag = new Array();

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
<<<<<<< HEAD
    alert(bkg.getId());
    alert(bkg.getUser());
    var dat = client.posts(bkg.getUser(), {id:bkg.getId()}, function(json){
    	var getTags = JSON.parse(dat);
	getTags = getTags.tags;
	for (var i = 0; i < getTags.length; i++){
		//do something with our tags
	}
    
    });
    
  })
=======
    id = bkg.getId();
    user = bkg.getUser();
    search = bkg.getSearch();
>>>>>>> ba5a30afac18bc0c903b0e80222714326f93d20e


    // get the pair of id and user name. use the pair to make ajax requests to API 
    // and get back tags. Also get search terms and use them as well.
    for(var i = 0; i < id.length; i++){
      alert("The " + (i+1) + " post has id " + id[0] + " and user: " + user[0]);
    }

    for(var i = 0; i < search.length; i++){
      alert("The " + (i+1) + " search term is " + search[i]);
    }

    // Once you get tags then convert them to point values
    // i.e. psuedocode:
      // getTags = get tags from API with user name and id 
      // for EACH in getTags

        // tags[i] = getTags 

        //  assign point value
        // use jquery to update popup.html

        // stat category value += point value
        // use jquery to update stats in popup.html 

        // check for level up
        // use jquery to update level in popup.html 
        // use jquery to update title in popup.html

      // END


    
  });

});
