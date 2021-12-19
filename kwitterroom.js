var firebaseConfig = {
      apiKey: "AIzaSyDKiNAQI-1rkM92WNb4vrHSW4YBnqyZZRU",
      authDomain: "kwitter-updated-ec89c.firebaseapp.com",
      databaseURL: "https://kwitter-updated-ec89c-default-rtdb.firebaseio.com",
      projectId: "kwitter-updated-ec89c",
      storageBucket: "kwitter-updated-ec89c.appspot.com",
      messagingSenderId: "851663655688",
      appId: "1:851663655688:web:30704e8a24b02ecde392bd"
    };
    
    firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

function addRoom() {
      roomname = document.getElementById("room_name").value;

      firebase.database().ref("/").child(roomname).update({
            purpose: "adding room"
      });
      localStorage.setItem("roomname", roomname);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Roomname - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
