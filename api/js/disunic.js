let newsAccordion = document.getElementById("aboutwebsite");

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open("GET", `/api/json/main.json`, true);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let api = json.api;
    console.log(api)
    let newareess = "";
    api.forEach(function (element) {
      let news = `<p><a style="color:#048bff;" href="${element["url"]}">Disunic Corporation</a> - ${element["year"]} All Rights Reserved</p>`;
      newareess += news;
    });
    newsAccordion.innerHTML = newareess;
  } else {
    console.log("_🤔");
  }
};
xhr.send();