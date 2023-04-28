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

// firebase.initializeApp(firebaseConfig);
const myApp1 = firebase.initializeApp(firebaseConfig, 'config1');
function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    myApp1.auth().signInWithRedirect(provider);
}
// signInWithGoogle()
// Get the user's data after sign in
myApp1.auth().getRedirectResult()
.then(function (result) {
    if (result.user) {
        var user = result.user;
        var photoURL = user.photoURL;
        localStorage.setItem("singuser", user.email)
        localStorage.setItem("singuserphoto", photoURL)
        window.open("./index.html", "_self")
    }
}).catch(function (error) {
    // Handle errors here
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
});






// Login form
var loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var email = loginForm['email'].value;
    var password = loginForm['password'].value;

    myApp1.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user.email); // Print email to console
            localStorage.setItem("singuser", user.email)
            window.open("./index.html", "_self")
            // Redirect to dashboard or home page
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // Show error message to user
        });

});

// Signup form
var signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var email = signupForm['email'].value;
    var password = signupForm['password'].value;
    var confirmPassword = signupForm['confirm-password'].value;

    if (password !== confirmPassword) {
        // Show error message to user
        return;
    }

    myApp1.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up
            var user = userCredential.user;
            // Redirect to dashboard or home page
            localStorage.setItem("singuser", user.email)
            window.open("./index.html", "_self")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // Show error message to user
        });
});











function singupfunction(){
    document.getElementById("fname").innerHTML = 'Signup Now'
    document.getElementById("login-form").style.display = "none"
    document.getElementById("signup-form").style.display = "block"
    document.getElementById("sbtnp").innerHTML = 'Already have an account?'
    document.getElementById("sbtnpbtn").innerHTML = 'Log in here!'
    document.getElementById("sbtnpbtn").setAttribute("onclick","location.reload()")
}