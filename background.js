
// id is an array that stores a list of all the ids of the posts you have clicked
var id = new Array()

// user is an array that stores a corresponding list of the users of those ids
var user = new Array(); 

// search is an array that stores a seperate list of all search terms the user has used
var search = new Array();

chrome.extension.onMessage.addListener(
        function(request, sender, sendResponse){
        if(request.user != null && request.id != null){
          user.push(request.user);
          id.push(request.id);
        }
        if(request.search != null){
          search.push(request.search);
          alert(search);
        }
      }
)


// functions to access variables from the popup.js page
function getId(){
  return id;
}

function getUser(){
  return user;
}

function getSearch(){
  return search;
}