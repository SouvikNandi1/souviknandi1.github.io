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
    // myApp1.auth().signInWithPopup(provider);
}
myApp1.auth().getRedirectResult()
    .then(function (result) {
        if (result.user) {
            var user = result.user;
            var photoURL = user.photoURL;
            localStorage.setItem("singuser", user.email)
            localStorage.setItem("userlogo", photoURL)
            localStorage.setItem("disunicloginmode", "Google")
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
            localStorage.setItem("disunicloginmode", "Disunic")
            localStorage.setItem("singuser", user.email)
            window.open("./index.html", "_self")
            // Redirect to dashboard or home page
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // Show error message to user
            function fffFflof() {
                setTimeout(() => {
                    document.getElementById("error").style.display = "none"
                }, 5000);
            }
            if (errorCode === 'auth/invalid-email') {
                // console.log('Invalid email format');
                document.getElementById("error").innerHTML = `Invalid email format`
                document.getElementById("error").style.display = "block"
            }
            else if (errorCode === 'auth/wrong-password') {
                // console.log('Wrong password');
                document.getElementById("error").style.display = "block "
                document.getElementById("error").innerHTML = `Wrong password`

            }
            else if (errorCode === 'auth/user-not-found') {
                console.log('User not found');
                document.getElementById("error").innerHTML = `User not found`
                document.getElementById("error").style.display = "block"
            }
            else if (errorCode === 'auth/user-disabled') {
                console.log('User is disabled');
                document.getElementById("error").innerHTML = `User is disabled`
                document.getElementById("error").style.display = "block"
            }
            else if (errorCode === 'auth/weak-password') {
                // console.log('Weak password');
                document.getElementById("error").innerHTML = `Weak password`
                document.getElementById("error").style.display = "block"
            }
            else if (errorCode === 'auth/email-already-in-use') {
                // console.log('Email is already in use');
                document.getElementById("error").innerHTML = `Email is already in use`
                document.getElementById("error").style.display = "block"
            }
            else if (errorCode === 'auth/operation-not-allowed') {
                // console.log('Operation not allowed');
                document.getElementById("error").innerHTML = `Operation not allowed`
                document.getElementById("error").style.display = "block"
            }
            else if (errorCode === 'auth/too-many-requests') {
                // console.log('Too many requests. Please try again later');
                document.getElementById("error").innerHTML = `Too many requests. Please try again later`
                document.getElementById("error").style.display = "block"
            }
            else if (errorCode === 'auth/invalid-credential') {
                // console.log('Invalid credential');
                document.getElementById("error").innerHTML = `Invalid credential`
                document.getElementById("error").style.display = "block"
            }
            else if (errorCode === 'auth/account-exists-with-different-credential') {
                console.log('An account already exists with the same email address but different sign-in credentials');
            }
            else if (errorCode === 'auth/network-request-failed') {
                console.log('Network request failed. Please check your internet connection');
            }
            else {
                console.log('Unknown error occurred');
                console.log(errorCode);
            }
            fffFflof()
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
            localStorage.setItem("disunicloginmode", "Disunic")
            localStorage.setItem("singuser", user.email)
            window.open("./frames/uploaddp.html", "_self")
        })
        // .catch((error) => {
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // Show error message to user
        // });
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            function fffFflof2() {
                setTimeout(() => {
                    document.getElementById("error").style.display = "none"
                }, 5000);
            }
            if (errorCode === 'auth/invalid-email') {
                // console.log('Invalid email format');
                document.getElementById("error").innerHTML = `Invalid email format`
                document.getElementById("error").style.display = "block"
            }
            else if (errorCode === 'auth/wrong-password') {
                // console.log('Wrong password');
                document.getElementById("error").innerHTML = `Wrong password`
                document.getElementById("error").style.display = "block"
            }
            else if (errorCode === 'auth/user-not-found') {
                // console.log('User not found');
                document.getElementById("error").innerHTML = `User not found`
                document.getElementById("error").style.display = "block "
            }
            else if (errorCode === 'auth/user-disabled') {
                // console.log('User is disabled');
                document.getElementById("error").innerHTML = `User is disabled`
                document.getElementById("error").style.display = "block"
            }
            else if (errorCode === 'auth/weak-password') {
                // console.log('Weak password');
                document.getElementById("error").innerHTML = `Weak password`
                document.getElementById("error").style.display = "block"
            }
            else if (errorCode === 'auth/email-already-in-use') {
                // console.log('Email is already in use');
                document.getElementById("error").innerHTML = `Email is already in use`
                document.getElementById("error").style.display = "block"
            }
            else if (errorCode === 'auth/operation-not-allowed') {
                // console.log('Operation not allowed');
                document.getElementById("error").innerHTML = `Operation not allowed`
                document.getElementById("error").style.display = "block"
            }
            else if (errorCode === 'auth/too-many-requests') {
                // console.log('Too many requests. Please try again later');
                document.getElementById("error").innerHTML = `Too many requests. Please try again later`
                document.getElementById("error").style.display = "block"
            }
            else if (errorCode === 'auth/invalid-credential') {
                // console.log('Invalid credential');
                document.getElementById("error").innerHTML = `Invalid credential`
                document.getElementById("error").style.display = "block"
            }
            else if (errorCode === 'auth/account-exists-with-different-credential') {
                console.log('An account already exists with the same email address but different sign-in credentials');
            }
            else if (errorCode === 'auth/network-request-failed') {
                console.log('Network request failed. Please check your internet connection');
            }
            else {
                console.log('Unknown error occurred');
                console.log(errorCode);
            }
            fffFflof2()
        });

});
function singupfunction() {
    document.getElementById("fname").innerHTML = 'Signup Now'
    document.getElementById("login-form").style.display = "none"
    document.getElementById("signup-form").style.display = "block"
    document.getElementById("sbtnp").innerHTML = 'Already have an account?'
    document.getElementById("sbtnpbtn").innerHTML = 'Log in here!'
    document.getElementById("sbtnpbtn").setAttribute("onclick", "location.reload()")
}

function resetpass() {
    try {
        var email = document.getElementById('email').value;

        myApp1.auth().sendPasswordResetEmail(email)
            .then(() => {
                // Password reset email sent successfully
                // Show success message to user
                console.log('Password reset email sent successfully');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // Show error message to user
                console.log('Error sending password reset email:', errorCode, errorMessage);
                if (errorCode === 'auth/invalid-email') {
                    // console.log('Invalid email format');
                    document.getElementById("error").innerHTML = `Invalid email format`
                    document.getElementById("error").style.display = "block"
                }
                else if (errorCode === 'auth/wrong-password') {
                    // console.log('Wrong password');
                    document.getElementById("error").innerHTML = `Wrong password`
                    document.getElementById("error").style.display = "block"
                }
                else if (errorCode === 'auth/user-not-found') {
                    // console.log('User not found');
                    document.getElementById("error").innerHTML = `User not found`
                    document.getElementById("error").style.display = "block "
                }
            });
    }
    catch {
        if (errorCode === 'auth/invalid-email') {
            // console.log('Invalid email format');
            document.getElementById("error").innerHTML = `Invalid email format`
            document.getElementById("error").style.display = "block"
        }
        else if (errorCode === 'auth/wrong-password') {
            // console.log('Wrong password');
            document.getElementById("error").innerHTML = `Wrong password`
            document.getElementById("error").style.display = "block"
        }
        else if (errorCode === 'auth/user-not-found') {
            // console.log('User not found');
            document.getElementById("error").innerHTML = `User not found`
            document.getElementById("error").style.display = "block "
        }
    }
}