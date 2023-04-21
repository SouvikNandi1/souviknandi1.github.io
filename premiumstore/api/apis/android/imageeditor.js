let imgeditorforandroid = document.getElementById("image-editors");

// Create an ajax get request
const xhr2 = new XMLHttpRequest();
xhr2.open("GET", `./premiumstore/api/database/android/imageeditor.json`, true);

// What to do when response is ready
xhr2.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let api = json.api;
        let contents = "";
        api.forEach(function (element) {
            let content = `
                    <a href="${element["url"]}">
                        <div class="apps">
                            <img src="${element["img"]}" alt="">
                            <p>${element["title"]}</p>
                        </div>
                    </a>`;
            contents += content;
        });
        imgeditorforandroid.innerHTML = contents;
    } else {
        console.log("_🤔");
    }
};
xhr2.send();