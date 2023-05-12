const firebaseConfig2 = {
    apiKey: "AIzaSyBAxtR9C4RFn6zhOAJi2S9e6f3p1jjpT1Y",
    authDomain: "disunic-f3e5a.firebaseapp.com",
    databaseURL: "https://disunic-f3e5a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "disunic-f3e5a",
    storageBucket: "disunic-f3e5a.appspot.com",
    messagingSenderId: "552563434858",
    appId: "1:552563434858:web:c1d6aed31d2fbef0c3b113",
    measurementId: "G-SQRVGL6S7H"
};

firebase.initializeApp(firebaseConfig2);

const db = firebase.database();
const fetchChat = db.ref("bugs/");
window.scrollTo(0, document.body.scrollHeight);
// 
function sendMessage() {
    window.scrollTo(0, document.body.scrollHeight);
// 
    window.scrollTo(0, document.body.scrollHeight);
    const timestamp = Date.now();
    const username = localStorage.getItem("singuser")
    const Username = username ? username : "";
    const YMD = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    document
        .getElementById("messages")
    // .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    console.log(localStorage.getItem("singuser"))
    // db.ref("messages/" + timestamp).set({
    db.ref("Search/" + timestamp).set({
        Username,
        YMD,
    });
}