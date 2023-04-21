function checkonload() {
    let mode = localStorage.getItem("mode")
    if (mode === "dark") {
        document.getElementById("body").setAttribute("class", "dark")
    }
    else if (mode === "light") {
        document.getElementById("body").setAttribute("class", "light")
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.getElementById("body").setAttribute("class", "light")
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("body").setAttribute("class", "dark")
    }
}
function checkonload2() {
    setTimeout(() => {
        try {
            let tab = localStorage.getItem("tab");
            if (tab === "web") {
                document.getElementById("sweb").style.borderBottom = "3px solid #005bff";
                document.getElementById("simg").style.borderBottom = "none";
            }
            else if (tab === "img") {
                document.getElementById("simg").style.borderBottom = "3px solid #005bff";
                document.getElementById("sweb").style.borderBottom = "none";
            }
        }
        catch {
            // window.open("https://disunic.github.io/","_self")
            console.log("error")
        }
    }, 50);
}