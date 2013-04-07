var id[], user[], search[]; 


chrome.extension.onMessage.addListener(
        function(request, sender, sendResponse){
        if(request.user && request.id){
          user.push(request.user);
          id.push(request.id);
        }
        if(request.search){
          search.push(request.search);
        }
      }
)

function getId(){
  return id;
}

function getUser(){
  return user;
}

function getSearch(){
  return search;
}