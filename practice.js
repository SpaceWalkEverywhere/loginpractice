var firebaseConfig = {
    apiKey: "AIzaSyCVWrQYrHjze_2rVDNuARf8eecp115Uq9U",
    authDomain: "chatweb-53865.firebaseapp.com",
    databaseURL: "https://chatweb-53865-default-rtdb.firebaseio.com",
    projectId: "chatweb-53865",
    storageBucket: "chatweb-53865.appspot.com",
    messagingSenderId: "889379280424",
    appId: "1:889379280424:web:1275d6886e7a5e4864071d"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addusername(){
    urname=document.getElementById("username").value;
    firebase.database().ref("/").child(urname).update({
        Name:urname,
    })
    localStorage.setItem("username",urname);
}
function seturname(){
    uname=localStorage.getItem("username");
    document.getElementById("username").value=uname;
}