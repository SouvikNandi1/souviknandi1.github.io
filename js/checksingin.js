const firebaseConfig = {
    apiKey: "AIzaSyBAxtR9C4RFn6zhOAJi2S9e6f3p1jjpT1Y",
    authDomain: "disunic-f3e5a.firebaseapp.com",
    databaseURL: "https://disunic-f3e5a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "disunic-f3e5a",
    storageBucket: "disunic-f3e5a.appspot.com",
    messagingSenderId: "552563434858",
    appId: "1:552563434858:web:c1d6aed31d2fbef0c3b113",
    measurementId: "G-SQRVGL6S7H"
};

firebase.initializeApp(firebaseConfig);

function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider);
}
// signInWithGoogle()
// Get the user's data after sign in
firebase.auth().getRedirectResult().then(function (result) {
    if (result.user) {
        var user = result.user;
        // console.log("User ID:", user.email); // Log user's ID
        localStorage.setItem("singuser", user.email)
        window.open("./index.html", "_self")
    }
}).catch(function (error) {
    // Handle errors here
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
});
function singincheck() {
    if (localStorage.getItem("singuser") === null) {
        window.open("./login.html", "_self")
    }
    // else if (localStorage.setItem("singuser") ===localStorage.getItem("singuser")) {
    //     window.open("./index.html", "_self")
    // }
}