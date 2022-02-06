var firebaseConfig = {
      apiKey: "AIzaSyBAFUENsYGEM4gr0BOew7-ddIb8JwbfspU",
      authDomain: "kwitter-updated-updated.firebaseapp.com",
      databaseURL: "https://kwitter-updated-updated-default-rtdb.firebaseio.com",
      projectId: "kwitter-updated-updated",
      storageBucket: "kwitter-updated-updated.appspot.com",
      messagingSenderId: "263127775997",
      appId: "1:263127775997:web:d973f0e67242805ac19c94"
    
    };
    
    firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("roomname");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      like = message_data["like"]
      name1 = "<h3>" + message_data["name"] + "<img src='tick.png' class='user_tick'></h3>";
      message = "<h4 class='message_h4'>" + message_data["msg"] + "</h4>";
      like1 = ike_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      spanwithtag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + like + "</span></button><hr>";

      row = name1 + message + like1 + spanwithtag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            msg: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}

function updateLike(message_id) {
      console.log("clicked on like button" + message_id);
      button_id = message_id;
      likes= document.getElementById(button_id).value;
      updated_likes = Number(likes) +1 ;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}