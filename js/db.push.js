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

// firebase.initializeApp(firebaseConfig2);
const myApp = firebase.initializeApp(firebaseConfig2, 'MyCustomApp');
const db = myApp.database();
const fetchChat = db.ref("bugs/");
window.scrollTo(0, document.body.scrollHeight);
// 
function sendMessage() {
    const db = myApp.database();
    window.scrollTo(0, document.body.scrollHeight);
    // 
    window.scrollTo(0, document.body.scrollHeight);
    const timestamp = Date.now();
    const username = document.getElementById("inp").value
    const Search = username ? username : "";
    const YMD = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    document
        .getElementById("messages")
    // .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    console.log(localStorage.getItem("singuser"))
    // db.ref("messages/" + timestamp).set({
    hdhdhdhhd()
    // const newStr = localStorage.getItem("singuser").replace(/\./g, "@disunic");
   
    function hdhdhdhhd(){
        if(localStorage.getItem("singuser") === null){
            const newStr10 = localStorage.getItem("singuser2").replace(/\./g, "@disunic");
            db.ref(newStr10).push({
                Search,
                YMD,
                timestamp,
            });
        }
        else{
            const newStr = localStorage.getItem("singuser").replace(/\./g, "@disunic");
            db.ref(newStr).push({
                Search,
                YMD,
                timestamp,
            });
        }
    }
    
}