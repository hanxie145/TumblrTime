var id, user; 


chrome.extension.onMessage.addListener(
        function(request, sender, sendResponse){
        user = request.user;
        id = request.id;
        }
)

function getId(){
  return id;
}

function getUser(){
  return user;
}