const apiKey = 'b5629f4742df4fcb93749f7624e8ea87';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

$.ajax({
  url: apiUrl,
  method: 'GET',
  dataType: 'json',
  success: function(data) {
    for (let article of data.articles) {
      const title = article.title;
      const description = article.description;
      const url = article.url;
      const imageUrl = article.urlToImage;
      const li = `
        <div class="newsdiv" id="newsdiv">
          <img src="${imageUrl}" alt="${title}" width="100">
          <p><a id="newsa" href="${url}" target="_blank">${title}</a></p>
        </div>
      `;
      $('#news').append(li);
    }
  },
  error: function(error) {
    console.log(error);
  }
});
{/* <p>${description}</p> */}