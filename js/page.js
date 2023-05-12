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
    document.getElementById("main2").style.display = "none";
    document.getElementById("news").style.display = "none"
}
function noneInformationdesign() {
    document.getElementById("logo").style.display = "inline-flex";
    document.getElementById("searchcontent").style.display = "block";
    document.getElementById("chatbox").style.display = "none";
    document.getElementById("bidark").setAttribute("onclick", "darkmode()")
    document.getElementById("main2").style.display = "block";
    document.getElementById("news").style.display = "block"
}
function lightmode() {
    $('input').removeClass('inp');
    localStorage.removeItem("mode")
    localStorage.setItem("mode", "")
    document.getElementById("body").setAttribute("class", localStorage.getItem("mode"))
    document.getElementById("bidark").style.display = "block"
    document.getElementById("bilight").style.display = "none"

}
function darkmode() {
    localStorage.removeItem("mode")
    localStorage.setItem("mode", "dark")
    document.getElementById("body").setAttribute("class", localStorage.getItem("mode"))
    $('input').addClass('inp');
    document.getElementById("bidark").style.display = "none"
    document.getElementById("bilight").style.display = "block"
}
