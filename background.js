
// id is an array that stores a list of all the ids of the posts you have clicked
var id = new Array()

// user is an array that stores a corresponding list of the users of those ids
var user = new Array(); 

// search is an array that stores a seperate list of all search terms the user has used
var search = new Array();

// stat variables 
var cattiness = 0, foodiness = 0, intellectual = 0, hipsterness = 0

chrome.extension.onMessage.addListener(
        function(request, sender, sendResponse){
        if(request.id != null){
          user.push(request.user);
          id.push(request.id);
        }
        if(request.search != null){
          search.push(request.search);
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

function getCattiness(){
  return cattiness;
}

function getIntellectual(){
  return intellectual;
}

function getHipsterness(){
  return hipsterness;
}

function getFoodiness(){
  return foodiness;
}

function setCattiness(value){
  cattiness = value;
}

function setIntellectual(value){
  intellectual = value;
}

function setHipsterness(value){
  hipsterness = value;
}

function setFoodiness(value){
  foodiness = value;
}











//makes sure user is on the right page
var isTracking = false;

//variable for username
var username = '';

//counter for likes;
var likes = 0;

