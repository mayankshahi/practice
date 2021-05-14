 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyARULyIKEsnKiwAx2wyh1ywF9DiAzMyk7k",
    authDomain: "kwitter-dda2a.firebaseapp.com",
    databaseURL: "https://kwitter-dda2a-default-rtdb.firebaseio.com",
    projectId: "kwitter-dda2a",
    storageBucket: "kwitter-dda2a.appspot.com",
    messagingSenderId: "1080512007667",
    appId: "1:1080512007667:web:641536d57b1a10093e9686"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() 
  { 
      user_name = document.getElementById("user_name").value;
       firebase.database().ref("/").child(user_name).update({ purpose : "adding user" }); }