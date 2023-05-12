const firebaseConfig12 = {
  apiKey: "AIzaSyBAxtR9C4RFn6zhOAJi2S9e6f3p1jjpT1Y",
  authDomain: "disunic-f3e5a.firebaseapp.com",
  databaseURL: "https://disunic-f3e5a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "disunic-f3e5a",
  storageBucket: "disunic-f3e5a.appspot.com",
  messagingSenderId: "552563434858",
  appId: "1:552563434858:web:c1d6aed31d2fbef0c3b113",
  measurementId: "G-SQRVGL6S7H"
};

firebase.initializeApp(firebaseConfig12);

const database = firebase.database();
const storage = firebase.storage();

const fileInput = document.getElementById('fileInput');
const output = document.getElementById('output');

fileInput.addEventListener('change', handleFileSelect, false);

function handleFileSelect(evt) {
  const file = evt.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    const base64String = event.target.result.split(',')[1];
    uploadImageToFirebase(base64String);
  };
  reader.readAsDataURL(file);
}

function uploadImageToFirebase(base64String) {
  const imagesRef = database.ref('images/').push();
  const fileName = `${Date.now()}.jpg`;
  const storageRef = storage.ref().child(fileName);
  const uploadTask = storageRef.putString(base64String, 'base64');

  uploadTask.on('state_changed', (snapshot) => {
    // Show the upload progress to the user
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    output.innerHTML = `Uploading... ${progress.toFixed(2)}%`;
  }, (error) => {
    // Handle errors during the upload
    console.error(error);
    output.innerHTML = `Error: ${error.message}`;
  }, () => {
    // Get the download URL of the uploaded image
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      // Save the download URL to the database
      imagesRef.set({
        image: downloadURL
      }).then(() => {
        // Show the download URL to the user
        output.innerHTML = `Download URL: <a href="${downloadURL}" target="_blank">${downloadURL}</a>`;
      }).catch((error) => {
        // Handle errors during the database write
        console.error(error);
        output.innerHTML = `Error: ${error.message}`;
      });
    });
  });
}