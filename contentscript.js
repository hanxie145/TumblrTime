$(document).ready(function() {

  // clicking like button
  $('a.post_control.like_button').click(function(e){
    alert("clicked like button");
  });

  // clicking reblog button
  $('a.post_control.reblog_button').click(function(e){
    alert("clicked reblog button");
  });

  // clicking image thumbnail
  $('img.image_thumbnail').click(function(e){
    alert("clicked image thumbnail");
  });

  // create post
  $('#create_post').click(function(e){
    alert("clicked create post");
  });

});