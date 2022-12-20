
var firebaseConfig = {
      apiKey: "AIzaSyAFAJhr1hF_ijeb-0_VGPbUjPWsJvkM4CU",
      authDomain: "kwitter-7bb91.firebaseapp.com",
      databaseURL: "https://kwitter-7bb91-default-rtdb.firebaseio.com",
      projectId: "kwitter-7bb91",
      storageBucket: "kwitter-7bb91.appspot.com",
      messagingSenderId: "1053984326779",
      appId: "1:1053984326779:web:ecd165a5c1b33316058ede",
      measurementId: "G-1N30Y9WG27"
    };
    
    
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name")
    document.getElementById("welcome").innerHTML="Welcome "+user_name+"!"
    
    function  addRoom(){
      room_name=document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      }) 
      
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_name-"+Room_names)
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+" </div><hr>"
      //End code
      document.getElementById("output").innerHTML+=row
      });});}
getData();

function redirecttoroomname(name){
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}