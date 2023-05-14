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
    searchRecipes()
    document.getElementsByClassName("gsc-search-button-v2")[0].setAttribute("onclick", "wiki(),videosearch(),searchRecipes()");
}

// Tab Bar
function sweb() {
    localStorage.setItem("tab", "web")
    checkonload2()
    let query = document.getElementById("gsc-i-id1").value;
    window.open("#gsc.tab=0&gsc.sort=&gsc.q=" + query, "_self")
    document.getElementsByClassName("gsc-wrapper")[0].style.display = "block"
    document.getElementById("wrapper-video").style.display = "none"
}
function simg() {
    localStorage.setItem("tab", "img")
    checkonload2()
    let query = document.getElementById("gsc-i-id1").value;
    window.open("#gsc.tab=1&gsc.sort=&gsc.q=" + query, "_self")
    document.getElementsByClassName("gsc-wrapper")[0].style.display = "block"
    document.getElementById("wrapper-video").style.display = "none"
}
function svideo() {
    localStorage.setItem("tab", "video")
    checkonload2()
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
                // wikiaddsenginedisunic()
                var pages = data.query.pages;
                var resultHtml = "";
                // let gghgjgk = page.title;
                $.each(pages, function (id, page) {
                    localStorage.setItem("bjfl",page.title)
                    wiki2()
                });
                console.clear()
                logo()
                // $("#wikidisunic").html(resultHtml);
            }
            catch {
                document.getElementById("wikidisunic").remove()
            }
        });
    }, 400);

}
function wiki2() {
    // const searchTerm = $('input[type="text"]').val();
    const searchTerm = localStorage.getItem("bjfl")
    $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        data: {
            action: 'parse',
            format: 'json',
            page: searchTerm,
            prop: 'text',
            disabletoc: 1,
            section: 0,
            noimages: 1,
            contentmodel: 'wikitext',
            disableeditsection: 1,
            disablestylededuplication: 1,
            disablelimitreport: 1,
            disablelangconversion: 1,
            disableeditlinks: 1,
            disablecategorylinks: 1,
            disableformatconversion: 1,
            disableparseroutput: 1,
            disablepp: 1,
            disableexpandtemplates: 1,
            mobileformat: 1,
            only: 'template'
        },
        dataType: 'jsonp',
        success: function (data) {
            
            const resultText = data.parse.text['*'];
            const resultDiv = $('#result');
            wikiaddsenginedisunic()
            resultDiv.html(resultText);
            const elements = document.querySelectorAll('*');
            const infobox = $(resultText).find('.infobox');
            $('#wikidisunic').html(infobox)
            const links = document.querySelectorAll('a');
            links.forEach(link => {
                if (!link.classList.contains('external')) {
                    let href = link.getAttribute('href');
                    href = "https://en.wikipedia.org" + href;
                    link.setAttribute('href', href);
                }
            });
            $('#result').remove();
            setTimeout(() => {
                removenotshow()
            }, 1000);
            function removenotshow(){
                if(document.getElementById("wikidisunic") === ""){
                    document.getElementById("wikidisunic").remove()
                }
            }
        },
        error: function (error) {
            console.error(error);
            document.getElementById("wikidisunic").remove()
        }
    });
}

function wikiaddsenginedisunic() {
    $(".gsc-webResult").eq(1).after("<div class='gsc-webResult gsc-result' id='wikidisunic'></div>");
}
function recipeaddsenginedisunic() {
    $(".gsc-webResult").eq(2).after("<div class='gsc-webResult gsc-result' id='recipedisunic'></div>");
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