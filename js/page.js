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
function inputclickfunc() {
    document.getElementById("logo").style.display="none"
    document.getElementById("news").style.display="none"
    document.getElementById("about").style.display="none"
    document.getElementById("btn2").style.display="block"
    document.getElementById("searchcontent").style.animation="ani1 1s"
    document.getElementById("searchcontent").style.marginTop="110px"
}
function userabout() {
    document.getElementById("userabout").style.display = "block"
    document.getElementById("userabout").innerHTML =
        `
    <div class="edits">
        <img src="${document.getElementById("disunicuser").src}"></img>
        <button id="useredit")">Edit <i style="font-size:13px;" class="bi bi-pen"></i></button>
    </div>
    <div class="names">
        <p>${localStorage.getItem("username")}</p>
        <p>${localStorage.getItem("lastname")}</p>
        </div>
    `
}
function checkinp() {
    if (document.getElementById("inp").value === "") {
        document.getElementById("btn").disabled = true
    }
    else {
        document.getElementById("btn").disabled = false
    }
}
function singincheck() {
    if (localStorage.getItem("singuser") === null) {
        // window.open("./login.html", "_self")
        document.getElementById("disunicuser").style.display = "none"
        document.getElementById("btn-main-sing").style.display = "block"
        localStorage.setItem("singuser2", "disunicuser@gmail.com")
    }
    else {
        document.getElementById("disunicuser").style.display = "block"
        document.getElementById("btn-main-sing").style.display = "none"
    }
}
function nnbmmm() {

}