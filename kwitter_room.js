
var firebaseConfig = {
      apiKey: "AIzaSyDe7OiXDI8tuCXzpx_ikC2hv2fkJ3aLdSs",
      authDomain: "imran-brlo.firebaseapp.com",
      databaseURL: "https://imran-brlo-default-rtdb.firebaseio.com",
      projectId: "imran-brlo",
      storageBucket: "imran-brlo.appspot.com",
      messagingSenderId: "796199461529",
      appId: "1:796199461529:web:435ea820b1fd0f7bb74e08"
    };
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
