function search() {
    let input = document.getElementById("inp").value
    if (engine === "Google") {
        window.open("https://google.com/search?q=" + input, "_self")
    }
    else if (engine === "Disunic") {
        window.open("https://disunic.github.io/search.html#gsc.tab=0&gsc.q=" + input, "_self")
    }
    else if (engine === "Bing") {
        window.open("https://www.bing.com/search?q=" + input, "_self")
    }
    else if (engine === "Brave") {
        window.open("https://search.brave.com/search?q=" + input, "_self")
    }
    else if (engine === "Yahoo") {
        window.open("https://in.search.yahoo.com/search;_ylt=Awr1Tfk6LyNkpswTTja6HAx.;_ylc=X1MDMjExNDcyMzAwMgRfcgMyBGZyAwRmcjIDc2ItdG9wLXNlYXJjaARncHJpZAMxSEM0dUtjbVJ2cWouRGJNYzlnbjBBBG5fcnNsdAMwBG5fc3VnZwM5BG9yaWdpbgNpbi5zZWFyY2gueWFob28uY29tBHBvcwMwBHBxc3RyAwRwcXN0cmwDMARxc3RybAM2BHF1ZXJ5A2dvb2dsZQR0X3N0bXADMTY4MDAyNzQ1Mw--?p=" + input, "_self")
    }
    else if (engine === "DuckDuckGo") {
        window.open("https://duckduckgo.com/" + input, "_self")
    }
    else if (engine === "Metager") {
        window.open("https://metager.org/meta/meta.ger3?eingabe=" + input, "_self")
    }
    else if (engine === "Aol") {
        window.open("https://search.aol.com/aol/search?q=" + input, "_self")
    }
    else if (engine === "Mojeek") {
        window.open("https://www.mojeek.com/search?q=" + input, "_self")
    }
    else if (engine === "Qwant") {
        window.open("https://www.qwant.com/?l=en&q=" + input, "_self")
    }
    else if (engine === "Dogpile") {
        window.open("https://www.dogpile.com/serp?q=" + input, "_self")
    }
    else if (engine === "Ecosia") {
        window.open("https://www.ecosia.org/search?method=index&q=" + input, "_self")
    }
    else if (engine === "Yandex") {
        window.open("https://yandex.com/search/touch/?text=" + input, "_self")
    }
    else if (engine === "Kiddle") {
        window.open("https://www.kiddle.co/s.php?q=" + input, "_self")
    }
    else if (engine === "Codepen") {
        window.open("https://codepen.io/search/pens?q=" + input, "_self")
    }
    else {
    }
}

function searchusingtype() {
    let input = document.getElementById("inp").value
    if (engine === "Google") {
        window.open("https://google.com/search?q="  + input +" filetype:"+filetype2, "_self")
    }
    else if (engine === "Disunic") {
        window.open("https://disunic.github.io/search.html#gsc.tab=0&gsc.q=" + input +" filetype:"+filetype2, "_self")
    }
    else if (engine === "Bing") {
        window.open("https://www.bing.com/search?q=" + input +" filetype:"+filetype2, "_self")
    }
    else if (engine === "Brave") {
        window.open("https://search.brave.com/search?q=" + input +" filetype:"+filetype2, "_self")
    }
    else if (engine === "Yahoo") {
        window.open("https://in.search.yahoo.com/search;_ylt=Awr1Tfk6LyNkpswTTja6HAx.;_ylc=X1MDMjExNDcyMzAwMgRfcgMyBGZyAwRmcjIDc2ItdG9wLXNlYXJjaARncHJpZAMxSEM0dUtjbVJ2cWouRGJNYzlnbjBBBG5fcnNsdAMwBG5fc3VnZwM5BG9yaWdpbgNpbi5zZWFyY2gueWFob28uY29tBHBvcwMwBHBxc3RyAwRwcXN0cmwDMARxc3RybAM2BHF1ZXJ5A2dvb2dsZQR0X3N0bXADMTY4MDAyNzQ1Mw--?p=" + input +" filetype:"+filetype2,  "_self")
    }
    else if (engine === "DuckDuckGo") {
        window.open("https://duckduckgo.com/" + input +" filetype:"+filetype2,  "_self")
    }
    else if (engine === "Metager") {
        window.open("https://metager.org/meta/meta.ger3?eingabe=" + input +" filetype:"+filetype2,  "_self")
    }
    else if (engine === "Aol") {
        window.open("https://search.aol.com/aol/search?q=" + input +" filetype:"+filetype2,  "_self")
    }
    else if (engine === "Mojeek") {
        window.open("https://www.mojeek.com/search?q=" + input +" filetype:"+filetype2,  "_self")
    }
    else if (engine === "Qwant") {
        window.open("https://www.qwant.com/?l=en&q=" + input +" filetype:"+filetype2,  "_self")
    }
    else if (engine === "Dogpile") {
        window.open("https://www.dogpile.com/serp?q=" + input +" filetype:"+filetype2,  "_self")
    }
    else if (engine === "Ecosia") {
        window.open("https://www.ecosia.org/search?method=index&q=" + input +" filetype:"+filetype2,  "_self")
    }
    else if (engine === "Yandex") {
        window.open("https://yandex.com/search/touch/?text=" + input +" filetype:"+filetype2,  "_self")
    }
    else if (engine === "Kiddle") {
        window.open("https://www.kiddle.co/s.php?q=" + input + " filetype:"+filetype2,  "_self")
    }
    else {
    }
}