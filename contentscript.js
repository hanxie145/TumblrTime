$(document).ready(function() {

  // clicking like button
  $('a.post_control.like_button').click(function(e){
    var id = $(this).attr('data-root-post-id');

    // get li element with post id then anchor tag with .reblog_button
    var user = $('#post_'+id+ ' .reblog_button').attr('data-tumblelog-name');


    // send the info to the background page, where it will be parsed and passed
    // onto the chrome extension
    chrome.extension.sendMessage({"id" : id, "user": user});

  });

  // clicking reblog button
  $('a.post_control.reblog_button').click(function(e){
	

    // get the id of the reblog
    var id = $(this).attr('data-reblog-id');

    // get the user
    var user = $(this).attr('data-tumblelog-name');

    // send the info to the background page, where it will be parsed and passed
    // onto the chrome extension
    chrome.extension.sendMessage({"id" : id, "user": user});
  });

  // clicking image thumbnail
  $('.post_content').click(function(e){
    var id = $(this).attr('id');
    var temp = []; 
    temp = id.split("_");
    id = temp[2];
    var user = $('#post_'+id+ ' .reblog_button').attr('data-tumblelog-name');

    chrome.extension.sendMessage({"id" : id, "user": user});
  });

  // create post
  // this doesn't work as well as it should...
  $('#create_post').click(function(e){
    var id = $(this).attr('data-root-post-id');
  });

  // when you press the enter button while searching 
  $(document).keypress(function(e) {
    if(e.which == 13) {
      // get the value from the search box
      var value = $("#search_query").val();

      // send search value to background page
      chrome.extension.sendMessage({"search" : value});
    }
  });

 
});
