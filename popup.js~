$(document).ready(function() {
  // get background page
  //var bkg = chrome.extension.getBackgroundPage();


  $('body').click(function(e){
    alert(bkg.getId());
    alert(bkg.getUser());
  });

	//fade-in and out of UI dashboards
  $('#start-tracking').click(function(){
		$('#start').fadeOut(500, function(){ });
		$('#stats').delay(600).fadeIn(500);
	});

  $('#export-data').click(function(){
		$('#stats').fadeOut(500, function(){ });
		$('#exported').delay(600).fadeIn(500);
	});

	//renders user story on #stats and #exported
  var story = "<div id='story'><h2 id='user-story'>Your Story</h2><p id='story-body'>Once, there was a tumblr user called USERNAME who decided to go on a/n TOP_TAG adventure. First, they visited the city FIRST_TAG where they wandered the streets and bought equipment. Then, they found that there was trouble in FIRST_TAG - the evil SECOND_TAG was destroying all of the FIRST_TAG_STUFF. USERNAME vowed to save the city and rode out to fight SECOND_TAG. THIRD_TAG. With the powers of HIGHEST_STAT and FOURTH_TAG, USERNAME and THIRD_TAG took down SECOND_TAG and saved FIRST_TAG.</p></div><!--story-->";

  $('#stats').append(story);
  $('#exported').append(story);

});

