function mainload() {

    document.getElementById("___gcse_0").setAttribute("id", "main_disunic")
    // Tab Bar
    let tabbar = document.getElementsByClassName("gsc-tabsArea")
    try {
        tabbar[0].innerHTML = `<div class="tabs">
                                    <div class="tb" id="sweb" onclick='sweb()'">Web</div>
                                    <div class="tb" id="simg" onclick='simg()'>Images</div>
                                    <div class="tb" id="svideo" onclick='svideo()'>Videos</div>
                                </div>`;
    }
    catch {
        // window.open("https://disunic.github.io/","_self")
        console.log("error")
    }
    // Search Button
    const buttonimg = document.getElementsByClassName("gsc-search-button-v2");
    buttonimg[0].innerHTML = "<i class='bi bi-search'></i>";
    let query = document.getElementById("gsc-i-id1").value;
    wiki()
    document.getElementsByClassName("gsc-search-button-v2")[0].setAttribute("onclick", "wiki()");
}

// Tab Bar
function sweb() {
    localStorage.setItem("tab", "web")
    checkonload2()
    let query = document.getElementById("gsc-i-id1").value;
    // https://souvik112004.github.io/search.html#gsc.tab=0&gsc.sort=&gsc.q=
    // https://disunic.github.io/search.html#gsc.tab=0&gsc.sort=&gsc.q=
    let url = "https://disunic.github.io/search.html#gsc.tab=0&gsc.sort=&gsc.q="
    let urlbeta = "https://souviknandi2004.github.io/search.html#gsc.tab=0&gsc.sort=&gsc.q="
    window.open(urlbeta + query, "_self")
}
function simg() {
    localStorage.setItem("tab", "img")
    checkonload2()
    let query = document.getElementById("gsc-i-id1").value;
    let url = "https://disunic.github.io/search.html#gsc.tab=1&gsc.sort=&gsc.q="
    let urlbeta = "https://souviknandi2004.github.io/search.html#gsc.tab=1&gsc.sort=&gsc.q="
    window.open(urlbeta + query, "_self")
}
function svideo() {
    localStorage.setItem("tab", "video")
    checkonload2()
    let query = document.getElementById("gsc-i-id1").value;
    document.getElementsByClassName("gsc-wrapper")[0].style.display = "none"
    document.getElementById("wrapper-video").style.display = "block"
    videosearch()
}
function wiki() {
    setTimeout(() => {
        var userInput = $("#gsc-i-id1").val();
        // var userInput = document.getElementById("gsc-i-id1").value
        $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&redirects=1&gsrnamespace=0&gsrlimit=1&prop=pageimages|extracts&pilimit=max&exintro&pithumbsize=400&explaintext&exsentences=8&exlimit=max&gsrsearch=" + encodeURIComponent(userInput) + "&callback=?", function (data) {
            try {
                wikiaddsenginedisunic()
                var pages = data.query.pages;
                var resultHtml = "";
                $.each(pages, function (id, page) {
                    resultHtml += "<img src='" + page.thumbnail.source + "' alt='" + page.title + "'>";
                    resultHtml += "<p id='wikitext'>" + page.extract + "</p>";
                    resultHtml += "<a href='https://en.wikipedia.org/?curid=" + page.pageid + "' target='_blank'>Read more</a>";
                    resultHtml += "<a style='float: ;margin-left: 15px; ' onclick='wikilisten()'>Listen</a>"
                });
                console.clear()
                logo()
                $("#wikidisunic").html(resultHtml);
            }
            catch {
                document.getElementById("wikidisunic").remove()
            }
        });
    }, 500);

}
function wikiaddsenginedisunic() {
    $(".gsc-webResult").eq(1).after("<div class='gsc-webResult gsc-result' id='wikidisunic'></div>");
}

function wikilisten() {
    const utterance = new SpeechSynthesisUtterance();

    // Set the text you want to convert to speech
    utterance.text = document.querySelector("#wikitext").textContent;

    // Speak the text using the SpeechSynthesis API
    const voices = speechSynthesis.getVoices();

    // Set the voice you want to use for text-to-speech
    utterance.voice = voices.find(voice => voice.name === "Microsoft David - English (United States)");

    // Speak the text using the SpeechSynthesis API
    speechSynthesis.speak(utterance);
}