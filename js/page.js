let searchch = document.getElementById("searchch");
let searchch2 = document.getElementById("searchch2");
let engine = "";
function changesearchengine() {
    document.getElementById("searchengines").style.display = "block"
    document.getElementById("main").style.opacity = "10%"
    document.getElementById("main2").style.opacity = "10%"
}
function changesearchenginecls() {
    document.getElementById("searchengines").style.display = "none"
    document.getElementById("main").style.opacity = "100"
    document.getElementById("main2").style.opacity = "100"
}
function changesearchengine2() {
    document.getElementById("searchengines").style.display = "block"
    document.getElementById("main").style.opacity = "10%"
    document.getElementById("main2").style.opacity = "10%"
}
function changesearchenginecls2() {
    document.getElementById("searchengines").style.display = "none"
    document.getElementById("logo").style.display = "none"
    document.getElementById("main").style.opacity = "100"
    document.getElementById("main2").style.opacity = "100"
}
function Informationdesign() {
    document.getElementById("logo").style.display = "none";
    document.getElementById("searchcontent").style.display = "none";
    document.getElementById("chatbox").style.display = "block";
    // document.getElementById("bidark").setAttribute("onclick", "")
    document.getElementById("main2").style.display = "none";
    // onlight()
}
function noneInformationdesign() {
    document.getElementById("logo").style.display = "inline-flex";
    document.getElementById("searchcontent").style.display = "block";
    document.getElementById("chatbox").style.display = "none";
    document.getElementById("bidark").setAttribute("onclick", "darkmode()")
    document.getElementById("main2").style.display = "block";
}
function check() {
    // for search
    setTimeout(() => {
        const select = document.querySelector('select')
        select.value = "Normal"
    }, 100);
    document.getElementById("sugen").style.display = "none";
    if (localStorage.getItem("engine") === "Google") {
        googlesearchforlogic()
    }
    else if (localStorage.getItem("engine") === "Disunic") {
        disunicsearchforlogic()
    }
    else if (localStorage.getItem("engine") === "Bing") {
        bingsearchforlogic()
    }
    else if (localStorage.getItem("engine") === "Information") {
        informationsearchforlogic()
        Informationdesign()
    }
    else if (localStorage.getItem("engine") === "Brave") {
        bravesearchforlogic()
    }
    else if (localStorage.getItem("engine") === "Yahoo") {
        yahoosearchforlogic()
    }
    else if (localStorage.getItem("engine") === "DuckDuckGo") {
        duckduckgosearchforlogic()
    }
    else if (localStorage.getItem("engine") === "Metager") {
        metagersearchforlogic()
    }
    else if (localStorage.getItem("engine") === "Aol") {
        aolsearchforlogic()
    }
    else if (localStorage.getItem("engine") === "Mojeek") {
        mojeeksearchforlogic()
    }
    else if (localStorage.getItem("engine") === "Qwant") {
        qwantsearchforlogic()
    }
    else if (localStorage.getItem("engine") === "Dogpile") {
        dogpilesearchforlogic()
    }
    else if (localStorage.getItem("engine") === "Ecosia") {
        ecosiasearchforlogic()
    }
    else if (localStorage.getItem("engine") === "Yandex") {
        yandexsearchforlogic()
    }
    else if (localStorage.getItem("engine") === "Kiddle") {
        kiddlesearchforlogic()
    }
    else if (localStorage.getItem("engine") === "Codepen") {
        codepensearchforlogic()
    }
    else {
        googlesearchforlogic()
    }
}
function check2() {
    // for mode
    if (localStorage.getItem("mode") === "light") {
        document.getElementById("bilight").style.display = "none"
        onlight()
        if (localStorage.getItem("engine") === "Information") {
            Informationdesign()
        }

    }
    else if (localStorage.getItem("mode") === "dark") {
        document.getElementById("bidark").style.display = "none"
        ondark()
        if (localStorage.getItem("engine") === "Information") {
            Informationdesign()
        }

    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.getElementById("bilight").style.display = "none"
        onlight()
        if (localStorage.getItem("engine") === "Information") {
            Informationdesign()
        }

    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("bidark").style.display = "none"
        ondark()
        if (localStorage.getItem("engine") === "Information") {
            Informationdesign()
        }

    }
}
let usermldfkjjgiijpiohvvfdtdgfyufgugugghvbcvcbjghsurgrhghr985it83utujghjrgnebgnrbnjhgirigirngrgrjgjrhgrgrihtihti = "120934875665"
function check3() {
    const select = document.querySelector('select')
    select.value = "Normal"
}
function lightmode() {
    localStorage.removeItem("mode")
    localStorage.setItem("mode", "light")
    onlight()
}
function darkmode() {
    localStorage.removeItem("mode")
    localStorage.setItem("mode", "dark")
    ondark()
}
function onlight() {
    document.getElementById("bilight").style.display = "none"
    document.getElementById("bidark").style.display = "block"
    document.getElementById("body").style.background = "white"
    document.getElementById("u").style.color = "#1f2533"
    document.getElementById("searchch").style.boxShadow = "0px 0px 5px 0px #747474"
    document.getElementById("nav").style.background = "white"
    document.getElementById("ch3").style.color = "black"
    document.getElementById("searchbar").style.background = "white"
    document.getElementById("inp").style.background = "white"
    document.getElementById("inp").style.color = "black"
    document.getElementById("btn").style.color = "black"
    $('.sed1').css("background", "white")
    $('.se1h2').css("color", "black")
    document.getElementById("searchengines").style.background = "white"
    document.getElementById("searchengines").style.color = "black"
    document.getElementById("biclose").style.color = "black"
    document.getElementById("sugen").style.background = "white"
    document.getElementById("sugen").style.color = "black";
    document.getElementById("btn2").style.color = "black";
    document.getElementById("filetype").style.background = "white"
    document.getElementById("filetype").style.color = "black"
    // document.getElementById("morescbtn").style.background = "white"
    // document.getElementById("morescbtn").style.color = "black"
    
    document.getElementById("chatbox").setAttribute("class","chatlight")
    // document.getElementById("").style. = ""
    // document.getElementById("").style. = ""
    // document.getElementById("").style. = ""
    // document.getElementById("").style.color = ""
    $('input').removeClass('inp');
}
function ondark() {
    document.getElementById("bilight").style.display = "block"
    document.getElementById("bidark").style.display = "none"
    document.getElementById("body").style.background = "#1f2533"
    document.getElementById("u").style.color = "white"
    document.getElementById("searchbar").style.background = "white"
    document.getElementById("sugen").style.background = "white"
    document.getElementById("searchch").style.boxShadow = "0px 0px 5px 0px #ffffff"
    document.getElementById("nav").style.background = "rgb(97 97 97 / 24%)"
    document.getElementById("ch3").style.color = "white"
    document.getElementById("searchbar").style.background = "#1f2533"
    document.getElementById("inp").style.background = "#1f2533"
    document.getElementById("inp").style.color = "white"
    document.getElementById("btn").style.color = "white"
    $('.sed1').css("background", "#1f2533")
    $('.se1h2').css("color", "white")
    document.getElementById("se1h2").style.color = "white"
    document.getElementById("searchengines").style.background = "#1f2533"
    document.getElementById("searchengines").style.color = "white"
    document.getElementById("biclose").style.color = "white"
    document.getElementById("sugen").style.background = "#1f2533"
    document.getElementById("sugen").style.color = "white";
    document.getElementById("btn2").style.color = "white";
    document.getElementById("filetype").style.background = "#1f2533"
    document.getElementById("filetype").style.color = "white"
    // document.getElementById("morescbtn").style.background = "#1f2533"
    // document.getElementById("morescbtn").style.color = "white"
    // document.getElementById("").style.color = ""
    // document.getElementById("").style. = ""
    // document.getElementById("").style.color = ""
    document.getElementById("chatbox").setAttribute("class","chatdark")
    $('input').addClass('inp');
}
function inpclick() {
    document.getElementById("main2").style.display = "none";
    document.getElementById("logo").style.display = "none";
    document.getElementById("searchcontent").style.marginTop = "0px";
    document.getElementById("searchcontent").style.width = "100%";
    document.getElementById("btn2").style.display = "block";
    document.getElementById("searchcontent").style.animation = "ani1 500ms";
    document.getElementById("searchch2").style.display = "block";
    document.getElementById("nav").style.display = "none";
    document.getElementById("searchcontent").style.borderRadius = "0px";
    document.getElementById("searchbar").style.borderRadius = "0px";
    document.getElementById("searchbar").style.height = "65px";
    document.getElementById("searchbar").style.border = "none";
    document.getElementById("searchcontent").style.borderBottom = "3px solid";
    document.getElementById("searchcontent").style.borderImage = "linear-gradient(315deg, #00ddff 0%, #ff00d4 74%) 80";
    document.getElementById("info").style.display = "none"
    document.getElementById("moresc").style.display = "flex"
    
    // 
    document.getElementById("google").setAttribute("onclick", "googlesearchforlogic2()")
    document.getElementById("disunic").setAttribute("onclick", "disunicsearchforlogic2()")
    document.getElementById("bing").setAttribute("onclick", "bingsearchforlogic2()")
    document.getElementById("brave").setAttribute("onclick", "bravesearchforlogic2()")
    document.getElementById("yahoo").setAttribute("onclick", "yahoosearchforlogic2()")
    document.getElementById("duckduckgo").setAttribute("onclick", "duckduckgosearchforlogic2()")
    document.getElementById("metager").setAttribute("onclick", "metagersearchforlogic2()")
    document.getElementById("aol").setAttribute("onclick", "aolsearchforlogic2()")
    document.getElementById("mojeek").setAttribute("onclick", "mojeeksearchforlogic2()")
    document.getElementById("qwant").setAttribute("onclick", "qwantsearchforlogic2()")
    document.getElementById("dogpile").setAttribute("onclick", "dogpilesearchforlogic2()")
    document.getElementById("ecosia").setAttribute("onclick", "ecosiasearchforlogic2()")
    document.getElementById("yandex").setAttribute("onclick", "yandexsearchforlogic2()")
    document.getElementById("kiddle").setAttribute("onclick", "kiddlesearchforlogic2()")
    document.getElementById("codepen").setAttribute("onclick", "codepensearchforlogic2()")
}
function inpclickback() {
    document.getElementById("main2").style.display = "";
    document.getElementById("logo").style.display = "inline-flex";
    document.getElementById("searchcontent").style.marginTop = "0px";
    document.getElementById("searchcontent").style.width = "85%";
    document.getElementById("searchcontent").style.animation = "ani2 500ms";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("searchch2").style.display = "none";
    document.getElementById("nav").style.display = "flex";
    document.getElementById("searchcontent").style.borderTopRightRadius = "10px";
    document.getElementById("searchcontent").style.borderTopLeftRadius = "10px";
    document.getElementById("searchbar").style.borderTopLeftRadius = "10px";
    document.getElementById("searchbar").style.borderTopRightRadius = "10px";
    document.getElementById("searchbar").style.borderBottom = "3px solid";
    document.getElementById("searchbar").style.borderImage = "linear-gradient(315deg, #00ddff 0%, #ff00d4 74%) 80";
    document.getElementById("searchcontent").style.borderBottom = "none";
    document.getElementById("sugen").style.display = "none";
    document.getElementById("searchbar").style.height = "55px";
    document.getElementById("info").style.display = "flex";
    document.getElementById("moresc").style.display = "none"
    removeandcorrect()
}
function removeandcorrect() {
    document.getElementById("google").setAttribute("onclick", "googlesearchforlogic()")
    document.getElementById("disunic").setAttribute("onclick", "disunicsearchforlogic()")
    document.getElementById("bing").setAttribute("onclick", "bingsearchforlogic()")
    document.getElementById("brave").setAttribute("onclick", "bravesearchforlogic()")
    document.getElementById("yahoo").setAttribute("onclick", "yahoosearchforlogic()")
    document.getElementById("duckduckgo").setAttribute("onclick", "duckduckgosearchforlogic()")
    document.getElementById("metager").setAttribute("onclick", "metagersearchforlogic()")
    document.getElementById("aol").setAttribute("onclick", "aolsearchforlogic()")
    document.getElementById("mojeek").setAttribute("onclick", "mojeeksearchforlogic()")
    document.getElementById("qwant").setAttribute("onclick", "qwantsearchforlogic()")
    document.getElementById("dogpile").setAttribute("onclick", "dogpilesearchforlogic()")
    document.getElementById("ecosia").setAttribute("onclick", "ecosiasearchforlogic()")
    document.getElementById("yandex").setAttribute("onclick", "yandexsearchforlogic()")
    document.getElementById("kiddle").setAttribute("onclick", "kiddlesearchforlogic()")
    document.getElementById("codepen").setAttribute("onclick", "codepensearchforlogic()")
}