$(document).ready(function() {

  // clicking like button
  $('a.post_control.like_button').click(function(e){
    alert("clicked like button");
    var id = $(this).attr('data-root-post-id');
    alert(id);
    var user = $('#post_'+id+ ' .reblog_button').attr('data-tumblelog-name');
    alert(user);
  });

  // clicking reblog button
  $('a.post_control.reblog_button').click(function(e){
    alert("clicked reblog button");
    var id = $(this).attr('data-reblog-id');
    alert(id);
    var user = $(this).attr('data-tumblelog-name');
    alert(user);
  });

  // clicking image thumbnail
  $('.post_content').click(function(e){
    alert("clicked image thumbnail");
    var id = $(this).attr('id');
    var temp = []; 
    temp = id.split("_");
    id = temp[2];
    alert(id);
    var user = $('#post_'+id+ ' .reblog_button').attr('data-tumblelog-name');
    alert(user);
  });

  // create post
  $('#create_post').click(function(e){
    alert("clicked create post");
    var id = $(this).attr('data-root-post-id');
    alert(id);
  });

  // when you press the enter button while searching 
  $(document).keypress(function(e) {
    if(e.which == 13) {
        var value = $("#search_query").val();
        alert(value);
    }
  });

});