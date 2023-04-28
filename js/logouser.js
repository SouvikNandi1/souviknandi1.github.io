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
const database = myApp2.database();
function uploaduserlogo() {
    window.scrollTo(0, document.body.scrollHeight);
    window.scrollTo(0, document.body.scrollHeight);
    let logo = "nuyy"
    console.log(localStorage.getItem("singuser"))
    const newStr = localStorage.getItem("singuser").replace(/\./g, "@disunic");
    database.ref(newStr).set({
        logo,
    });
}
const newStr = localStorage.getItem("singuser").replace(/\./g, "@disunic");
const userRef = database.ref(newStr);
userRef.once("value", function(snapshot) {
  const userData = snapshot.val();
  const logoUrl = userData.logo;
//   console.log(logoUrl);
});



