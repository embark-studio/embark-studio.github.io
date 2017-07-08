const script = document.createElement("script")
script.src ="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"
document.body.appendChild(script)
script.onload = function(){
  var config = {
    apiKey: "AIzaSyDWcM8KvU5jPFnnl654MOkGHp6Neue2hN4",
    authDomain: "embark-studio.firebaseapp.com",
    databaseURL: "https://embark-studio.firebaseio.com",
    projectId: "embark-studio",
    storageBucket: "embark-studio.appspot.com",
    messagingSenderId: "828778274702"
  };
  firebase.initializeApp(config);
  db = firebase.database()
  window.addDeveloper = function(developer){
    db.ref("developers").push(developer)
  } 
  window.addOrganization = function(organization){
    db.ref("organizations").push(organization)
  } 
}