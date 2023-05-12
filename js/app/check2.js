function check2() {
    // for mode
    if (localStorage.getItem("mode") === "") {
        document.getElementById("bilight").style.display = "none"
        document.getElementById("bidark").style.display = "block"
        document.getElementById("body").setAttribute("class", localStorage.getItem("mode"))
        if (localStorage.getItem("engine") === "Information") {
            Informationdesign()
        }
    }
    else if (localStorage.getItem("mode") === "dark") {
        document.getElementById("bidark").style.display = "none"
        document.getElementById("bilight").style.display = "block"
        $('input').addClass('inp');
        document.getElementById("body").setAttribute("class", localStorage.getItem("mode"))
        if (localStorage.getItem("engine") === "Information") {
            Informationdesign()
        }

    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.getElementById("bilight").style.display = "none"
        document.getElementById("bidark").style.display = "block"
        document.getElementById("body").setAttribute("class", "")
        if (localStorage.getItem("engine") === "Information") {
            Informationdesign()
        }

    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("bidark").style.display = "none"
        document.getElementById("bilight").style.display = "block"
        document.getElementById("body").setAttribute("class", "dark")
        $('input').addClass('inp');
        if (localStorage.getItem("engine") === "Information") {
            Informationdesign()
        }

    }
}
function check3() {
    const select = document.querySelector('select')
    select.value = "Normal"
}