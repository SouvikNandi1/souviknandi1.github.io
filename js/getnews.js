const firebaseConfig23 = {
    apiKey: "AIzaSyAj-XTZ4jOizBf3Wv1Fexvc0IDezV5SpY0",
    authDomain: "disunic-news.firebaseapp.com",
    projectId: "disunic-news",
    databaseURL: "https://disunic-news-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "disunic-news.appspot.com",
    messagingSenderId: "534300792154",
    appId: "1:534300792154:web:aadf87834bdb6abd404f63",
    measurementId: "G-W90PZZYCZK"
  };
  const myApp5 = firebase.initializeApp(firebaseConfig23, 'MyCustomApp223');
  const db7 = myApp5.database();
  const dbRef2 = db7.ref('news');
  const newssfg2 = "news";
  dbRef2.on('child_added', function(snapshot) {
    const childData = snapshot.val();
    const li = `
          <div class="newsdiv" id="newsdiv">
            <img src="${childData.imageUrl}" alt="" width="100">
            <p><a id="newsa" href="${childData.url}" target="_blank">${childData.title}</a></p>
          </div>
        `;
        $('#news').append(li);
        document.getElementById("about").style.display = "grid"
  });