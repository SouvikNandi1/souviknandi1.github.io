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
        disunicsearchforlogic()
    }
}