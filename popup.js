$(document).ready(function() {
  // get background page
  var bkg = chrome.extension.getBackgroundPage();


  $('body').click(function(e){
    console.log(bkg.getId());
    alert(bkg.getUser());
    alert(bkg.getSearch());
  })

});

