$(document).ready(function() {
  // get background page
  //var bkg = chrome.extension.getBackgroundPage();

/*
  $('body').click(function(e){
  });
*/

//	var tracking = localStorage.startedTracking;

//	if (tracking){
//		$('#start').css('display', 'none');
//		$('#stats').css('display', 'block');
//	}

	var tracking = chrome.extension.getBackgroundPage().isTracking;


	if (tracking){
		$('#login').css('display', 'none');
		$('#start').css('display', 'none');
		$('#stats').css('display', 'block');
		var username = chrome.extension.getBackgroundPage().username;
		var avatar = 'http:/api.tumblr.com/v2/blog/' + username + '.tumblr.com/avatar';
		var imgtag = "	<img class='avatar' src=" + avatar + "/>";
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
  var story = "<div id='story'><h2 id='user-story'>Your Story</h2><p id='story-body'>Once, there was a tumblr user called <b id=username>USERNAME</b> who decided to go on a/n TOP_TAG adventure. First, they visited the city FIRST_TAG where they wandered the streets and bought equipment. Then, they found that there was trouble in FIRST_TAG - the evil SECOND_TAG was destroying all of the FIRST_TAG_STUFF. USERNAME vowed to save the city and rode out to fight SECOND_TAG. THIRD_TAG. With the powers of HIGHEST_STAT and FOURTH_TAG, USERNAME and THIRD_TAG took down SECOND_TAG and saved FIRST_TAG.</p></div><!--story-->";


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

  // stat variables 
  var cattiness = 0, foodiness = 0, intellectual = 0, hipsterness = 0

  $('body').click(function(e){

    foodiness = bkg.getFoodiness();
    $('#foodiness').html("Foodiness " + foodiness.toString());
    cattiness = bkg.getCattiness(); 
    $('#cattiness').html("Cattiness " + cattiness.toString());
    intellectual = bkg.getIntellectual();
    $('#intellectual').html("Intellectual " + intellectual.toString());
    hipsterness = bkg.getHipsterness();
    $('#hipsterness').html("Hipsterness " + hipsterness.toString());



    id = bkg.getId(); 
    user = bkg.getUser();
    search = bkg.getSearch();

    // get the pair of id and user name. use the pair to make ajax requests to API 
    // and get back tags. Also get search terms and use them as well.
    for(var i = 0; i < id.length; i++){
      if(id[i] == 47360923253){
        tag.push("foodiness");
      }
      if(id[i] == 4022367198){
        tag.push("hipsterness");
      }
      if(id[i] == 44835997787){
        tag.push("cattiness");
      }
      if(id[i] == 44836310289){
        tag.push('hipsterness');
      }
      if(id[i] == 47361365436){
        tag.push('hipsterness');
      }
      if(id[i] == 47361201567){
        tag.push("hipsterness");
      }
      if(id[i] == 47359370430){
        tag.push("foodiness");
      }
      if(id[i] == 47359030988){
        tag.push("intellectual");
      }
      if(id[i] == 47360681630){
        tag.push("intellectual");
      }
      if(id[i] == 46509740669){
        tag.push("cattiness");
      }
      if(id[i] == 47199017625){
        tag.push("intellectual");
      }
      if(id[i] == 31094833806){
        tag.push("hipsterness");
      }
      if(id[i] == 32528499164){
        tag.push("intellectual");
      }
      if(id[i] == 46589190804){
        tag.push("foodiness");
      }
      if(id[i] == 46395092678){
        tag.push("foodiness");
      }
      if(id[i] == 45279205051){
        tag.push("foodiness");
      }
      if(id[i] == 47359644618){
        tag.push("cattiness");
      }
      if(id[i] == 24841902607){
        tag.push("intellectual");
      }
      if(id[i] == 47299579775){
        tag.push("intellectual");
      }
      if(id[i] == 46428561032){
        tag.push("intellectual");
      }
      delete(id[i]);
     }

    for(var i = 0; i < search.length; i++){
    }

    // Once you get tags then convert them to point values
    // i.e. psuedocode:
    for(var i = 0; i < tag.length; i++){
      if(tag[i] === "foodiness"){
        foodiness = bkg.getFoodiness();
        foodiness += 5
        bkg.setFoodiness(foodiness);
        $('#foodiness').html("Foodiness " + foodiness.toString());
        delete(tag[i]);
      }
      if(tag[i] === "cattiness"){
        cattiness = bkg.getCattiness(); 
        cattiness += 8;
        bkg.setCattiness(cattiness);
        $('#cattiness').html("Cattiness " + cattiness.toString());
        delete(tag[i]);
      }
      if(tag[i] === "intellectual"){
        intellectual = bkg.getIntellectual();
        intellectual += 7;
        bkg.setIntellectual(intellectual);
        $('#intellectual').html("Intellectual " + intellectual.toString());
        delete(tag[i]);
      }
      if(tag[i] === "hipsterness"){
        hipsterness = bkg.getHipsterness();
        hipsterness += 4;
        bkg.setHipsterness(hipsterness);
        $('#hipsterness').html("Hipsterness " + hipsterness.toString());
        delete(tag[i]);
      }
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




