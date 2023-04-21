function themecheck() {
    if (localStorage.getItem("theme") === "light") {
        document.getElementById("body").setAttribute("class", "light")
        document.getElementById("bilight").style.display = "none";
        document.getElementById("bidark").style.display = "block";
        localStorage.setItem("theme", "light")
    }
    else if (localStorage.getItem("theme") === "dark") {
        document.getElementById("body").setAttribute("class", "dark")
        document.getElementById("bilight").style.display = "block";
        document.getElementById("bidark").style.display = "none";
        localStorage.setItem("theme", "dark")
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.getElementById("body").setAttribute("class", "light")
        document.getElementById("bilight").style.display = "none";
        document.getElementById("bidark").style.display = "block";
        localStorage.setItem("theme", "light")
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("body").setAttribute("class", "dark")
        document.getElementById("bilight").style.display = "block";
        document.getElementById("bidark").style.display = "none";
        localStorage.setItem("theme", "dark")
    }
}
function lightmode() {
    document.getElementById("bilight").style.display = "none";
    document.getElementById("bidark").style.display = "block";
    localStorage.setItem("theme", "light")
    themecheck()
    // onlight()
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";
    // document.getElementById().style = "";

}
function darkmode() {
    document.getElementById("bilight").style.display = "block";
    document.getElementById("bidark").style.display = "none";
    localStorage.setItem("theme", "dark")
    themecheck()
}