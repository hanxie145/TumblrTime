$(document).ready(function() {

  // id and user variables to be passed into the API 
  var id, user, search;

  // get tags 
  var tag = new Array();

  // get background page
  var bkg = chrome.extension.getBackgroundPage();

  var url;

  $('body').click(function(e){
    id = bkg.getId();
    user = bkg.getUser();
    search = bkg.getSearch();

    // get the pair of id and user name. use the pair to make ajax requests to API 
    // and get back tags. Also get search terms and use them as well.
    for(var i = 0; i < id.length; i++){
      alert("The " + (i+1) + " post has id " + id[i] + " and user: " + user[i]);
      $.ajax({
	url: 'http://api.tumblr.com/v2/blog/'+user[i]+'.tumblr.com/posts?api_key=AcHybTTrgYoIk1a5HiBDGKvE0TEon8JeRxjF2LJnl4tkR1jlVX&id='+id[i],
    	dataType: 'jsonp',  // You  need to use 'jsonp' here because it is cross domain request 
    	success: alert(response.posts.tags);
	});
      
      /*url = 'http://api.tumblr.com/v2/blog/'+user[i]+'.tumblr.com/posts?api_key=AcHybTTrgYoIk1a5HiBDGKvE0TEon8JeRxjF2LJnl4tkR1jlVX&id='+id[i];
      $.getJSON(url, function(data){
	  	tags =     
	 })*/
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



