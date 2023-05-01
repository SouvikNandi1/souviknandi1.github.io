const firebaseConfig3 = {
    apiKey: "AIzaSyBPS2iAm0tiHXYRIEvZHTPdSilB8iNRcpA",
    authDomain: "disunic2.firebaseapp.com",
    databaseURL: "https://disunic2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "disunic2",
    storageBucket: "disunic2.appspot.com",
    messagingSenderId: "604645934046",
    appId: "1:604645934046:web:e504b5a575e98713c1d34f",
    measurementId: "G-6H37MH3F4P"
};
// firebase.initializeApp(firebaseConfig3);
const myApp2 = firebase.initializeApp(firebaseConfig3, 'MyAppName2');
const databaselogo = myApp2.database();
function uploaduserlogo() {
    window.scrollTo(0, document.body.scrollHeight);
    window.scrollTo(0, document.body.scrollHeight);
    let fname = document.getElementById("first-name").value
    let lname = document.getElementById("last-name").value
    let logo = localStorage.getItem("userlogo")
    const newStr = localStorage.getItem("singuser").replace(/\./g, "@disunic");
    databaselogo.ref(newStr).set({
        fname,
        lname,
        logo,
    });
}
function getlogofromdb() {
    if (localStorage.getItem("disunicloginmode") === "Disunic") {
        const newStr = localStorage.getItem("singuser").replace(/\./g, "@disunic");
        const userRef = databaselogo.ref(newStr);
        userRef.once("value", function (snapshot) {
            const userData = snapshot.val();
            const logoUrl = userData.logo;
            const username = userData.fname;
            localStorage.setItem("username", username)
            const lastname = userData.lname;
            localStorage.setItem("lastname", lastname)
            // console.log(logoUrl + username + lastname);
            localStorage.setItem("infologo",logoUrl)
            document.getElementById("disunicuser").src = logoUrl
            
        });
    }
    else if(localStorage.getItem("disunicloginmode") === "Google"){
        document.getElementById("disunicuser").src = localStorage.getItem("userlogo")
    }
}