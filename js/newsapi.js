const apiKey = 'b5629f4742df4fcb93749f7624e8ea87';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
const firebaseConfig22 = {
  apiKey: "AIzaSyAj-XTZ4jOizBf3Wv1Fexvc0IDezV5SpY0",
  authDomain: "disunic-news.firebaseapp.com",
  projectId: "disunic-news",
  databaseURL: "https://disunic-news-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "disunic-news.appspot.com",
  messagingSenderId: "534300792154",
  appId: "1:534300792154:web:aadf87834bdb6abd404f63",
  measurementId: "G-W90PZZYCZK"
};
const myApp4 = firebase.initializeApp(firebaseConfig22, 'MyCustomApp22');
const db6 = myApp4.database();
const dbRef = db6.ref('news');
const newssfg = "news";
// db6.ref(newssfg).remove();
function run(){
  $.ajax({
    url: apiUrl,
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      for (let article of data.articles) {
        const title = article.title;
        const url = article.url;
        const imageUrl = article.urlToImage;
        window.scrollTo(0, document.body.scrollHeight);
        db6.ref(newssfg).remove();
        setTimeout(() => {
          db6.ref(newssfg).push({
            title,
            url,
            imageUrl
          });
        }, 2000);
      }
    },
    error: function (error) {
      console.log(error);
    }
  });
}
// Listen for new news added to the database and log their titles and URLs
// dbRef.on('child_added', function(snapshot) {
//   const childData = snapshot.val();
//   const li = `
//         <div class="newsdiv" id="newsdiv">
//           <img src="${childData.imageUrl}" alt="" width="100">
//           <p><a id="newsa" href="${childData.url}" target="_blank">${childData.title}</a></p>
//         </div>
//       `;
//       $('#news').append(li);
// });
