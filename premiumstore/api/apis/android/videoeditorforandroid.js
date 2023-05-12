let videoeditorforandroid = document.getElementById("video-editors");

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open("GET", `./premiumstore/api/database/android/videoeditor.json`, true);

// What to do when response is ready
xhr.onload = function () {
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
        videoeditorforandroid.innerHTML = contents;
    } else {
        console.log("_🤔");
    }
};
xhr.send();