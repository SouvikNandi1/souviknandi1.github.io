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
    document.getElementById("news").style.display = "none"
    
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
    document.getElementById("news").style.display = "block"
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