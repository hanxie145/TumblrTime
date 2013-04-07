$(document).ready(function() {
  // get background page
  //var bkg = chrome.extension.getBackgroundPage();

/*
  $('body').click(function(e){
    alert(bkg.getId());
    alert(bkg.getUser());
  });
*/

//	var tracking = localStorage.startedTracking;
//	alert(tracking);

//	if (tracking){
//		$('#start').css('display', 'none');
//		$('#stats').css('display', 'block');
//	}

	var tracking = chrome.extension.getBackgroundPage().isTracking;

	var username = chrome.extension.getBackgroundPage().username;
	var avatar = 'http:/api.tumblr.com/v2/blog/' + username + '.tumblr.com/avatar';
	var imgtag = "	<img class='avatar' src=" + avatar + "/>";

	if (tracking){
		$('#login').css('display', 'none');
		$('#start').css('display', 'none');
		$('#stats').css('display', 'block');
		$('#user-rank').prepend(imgtag);
		$('#user-rank').prepend("<h3 class='username'>" + username + "</h3>"); 
	}

	//gets user avatars and shit
	$('#submit-text').click(function(){
		var textData = document.getElementById('text-data').value;
		chrome.extension.getBackgroundPage().username = textData;
		var avatar = 'http:/api.tumblr.com/v2/blog/' + textData + '.tumblr.com/avatar';
		var imgtag = "	<img class='avatar' src=" + avatar + "/>";
		$('#start').prepend(imgtag);
		$('#start').prepend("<h3 class='username'>" + textData + "</h3>");
		$('#login').fadeOut(500, function(){ });
		$('#start').delay(600).fadeIn(500);
	});
	
	//fade-in and out of UI dashboards
  $('#start-tracking').click(function(){
		var username = chrome.extension.getBackgroundPage().username;
		var avatar = 'http:/api.tumblr.com/v2/blog/' + username + '.tumblr.com/avatar';
		var imgtag = "	<img class='avatar' src=" + avatar + "/>";
		$('#user-rank').prepend(imgtag);
		$('#user-rank').prepend("<h3 class='username'>" + username + "</h3>"); 
		$('#start').fadeOut(500, function(){ });
		$('#stats').delay(600).fadeIn(500);
		chrome.extension.getBackgroundPage().isTracking = true;

	});

  $('#export-data').click(function(){
		$('#stats').fadeOut(500, function(){ });
		$('#exported').delay(600).fadeIn(500);
		chrome.extension.getBackgroundPage().isTracking = false;
	});

	//renders user story on #stats and #exported
	var storyhead = "<div id='story'><h2 id='user-story'>Your Story</h2><p id='story-body'>";
	var story1 = "Once, there was a tumblr user called " + username;
	var story2 = " who decided to go on a " + TOP_TAG + " adventure.";
	var story3 = " First, they visited the city " + FIRST_TAG;
	var story4 = " where they wandered the streets and bought equipment. Then, they found that there was trouble in " + FIRST_TAG;
	var story5 = " - the evil " + SECOND_TAG + " was destroying all of the " + FIRST_TAG_STUFF;
	var story6 = ". " + username[0].toUpperCase() + username.slice(1) + " vowed to save the city and rode out to fight " + SECOND_TAG; 
	var story7 = ". " + THIRD_TAG[0].toUpperCase() + THIRD_TAG.slice(1) + ", With the powers of " + HIGHEST_STAT + " and " + FOURTH_TAG;
	var story8 = ", " + username + " and " + THIRD_TAG + " took down " + SECOND_TAG + " and saved " + FIRST_TAG + "."
	var storytail = "</p></div><!--story-->";
	
	var story = storyhead + story1 + story2 + story3 + story4 + story5 + story6 + story7 + story8 + storytail;
 /* var story = "Once, there was a tumblr user called USERNAME who decided to go on a/n TOP_TAG adventure. First, they visited the city FIRST_TAG where they wandered the streets and bought equipment. Then, they found that there was trouble in FIRST_TAG - the evil SECOND_TAG was destroying all of the FIRST_TAG_STUFF. USERNAME vowed to save the city and rode out to fight SECOND_TAG. THIRD_TAG, With the powers of HIGHEST_STAT and FOURTH_TAG, USERNAME and THIRD_TAG took down SECOND_TAG and saved FIRST_TAG.</p></div><!--story-->"; */

  $('#stats').append(story);
  $('#exported').append(story);

});


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
    	success: alert(response.posts.tags)
	});
      
      //url = 'http://api.tumblr.com/v2/blog/'+user[i]+'.tumblr.com/posts?api_ke//y=AcHybTTrgYoIk1a5HiBDGKvE0TEon8JeRxjF2LJnl4tkR1jlVX&id='+id[i];
      //$.getJSON(url, function(data){
	//  	tags =     
	 //})
    }

    for(var i = 0; i < search.length; i++){
      alert("The " + (i+1) + " search term is " + search[i]);
    }

    // Once you get tags then convert them to point values
    // i.e. psuedocode:
    $.getJSON('jQuery/url here') , {userID : id} ,
        function(output) {
          $('#user').html(popup.html).show();
        } 
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




