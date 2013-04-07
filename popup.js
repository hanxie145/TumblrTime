$(document).ready(function() {

  // id and user variables to be passed into the API 
  var id, user, search;

  // get tags 
  var tag = new Array();

  // get background page
  var bkg = chrome.extension.getBackgroundPage();

  $('body').click(function(e){
    id = bkg.getId();
    user = bkg.getUser();
    search = bkg.getSearch();


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
