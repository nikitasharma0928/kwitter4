//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAtABfCF7HD88iQjP7dMim8oMkZPq0F_Ow",
      authDomain: "kwitter-2f081.firebaseapp.com",
      databaseURL: "https://kwitter-2f081-default-rtdb.firebaseio.com",
      projectId: "kwitter-2f081",
      storageBucket: "kwitter-2f081.appspot.com",
      messagingSenderId: "628740527303",
      appId: "1:628740527303:web:40ab43dae595a829505ae2",
      measurementId: "G-46BG3TECRY"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    
    function send(){ 
      msg = document.getElementById("message_input").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("message_input").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
