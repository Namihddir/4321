const firebaseConfig = {
      apiKey: "AIzaSyDfd8eLWPp8U4iohIPiPblCD4-d4Yeyq3A",
      authDomain: "mwitter-a376e.firebaseapp.com",
      databaseURL: "https://mwitter-a376e-default-rtdb.firebaseio.com",
      projectId: "mwitter-a376e",
      storageBucket: "mwitter-a376e.appspot.com",
      messagingSenderId: "1061848275140",
      appId: "1:1061848275140:web:fa83bc03b9bae176e41191"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addRoom()
    {
        room_name = document.getElementById("room_name").value;
    
        firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    
    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row ="<div class='room_name"
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "Kwitter_page.html";
}


function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}