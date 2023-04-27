function alwayscheck() {
    filetype = document.getElementById("filetype").value
    check = document.getElementById("btn")
    if (filetype === "Normal") {
        check.setAttribute("onclick", "search()")
        filetype2 = "Normal"
    }
    else if (filetype === "Pdf") {
        check.setAttribute("onclick", "searchusingtype()()")
        filetype2 = "pdf"
    }
    else if (filetype === "Doc") {
        check.setAttribute("onclick", "searchusingtype()")
        filetype2 = "doc"
    }
    else if (filetype === "Docx") {
        check.setAttribute("onclick", "searchusingtype()")
        filetype2 = "docx"
    }
    else if (filetype === "xls") {
        check.setAttribute("onclick", "searchusingtype()")
        filetype2 = "xls"
    }
    else if (filetype === "pptx") {
        check.setAttribute("onclick", "searchusingtype()")
        filetype2 = "pptx"
    }
    else if (filetype === "txt") {
        check.setAttribute("onclick", "searchusingtype()")
        filetype2 = "txt"
    }
    else if (filetype === "png") {
        check.setAttribute("onclick", "searchusingtype()")
        filetype2 = "png"
    }
    else if (filetype === "jpg") {
        check.setAttribute("onclick", "searchusingtype()")
        filetype2 = "jpg"
    }
    else if (filetype === "rtf") {
        check.setAttribute("onclick", "searchusingtype()")
        filetype2 = "rtf"
    }
}

function alwayschecks() {
    if (filetype === "Normal") {
        search()
    }
    else if (filetype === "Pdf") {
        searchusingtype()
    }
    else if (filetype === "Doc") {
        searchusingtype()
    }
    else if (filetype === "Docx") {
        searchusingtype()
    }
    else if (filetype === "xls") {
        searchusingtype()
    }
    else if (filetype === "pptx") {
        searchusingtype()
    }
    else if (filetype === "txt") {
        searchusingtype()
    }
    else if (filetype === "png") {
        searchusingtype()
    }
    else if (filetype === "jpg") {
        searchusingtype()
    }
    else if (filetype === "rtf") {
        searchusingtype()
    }
}