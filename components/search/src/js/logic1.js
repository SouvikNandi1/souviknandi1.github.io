function mainload() {
    document.getElementById("___gcse_0").setAttribute("id", "main_disunic")
    // Tab Bar
    let tabbar = document.getElementsByClassName("gsc-tabsArea")
    try {
        tabbar[0].innerHTML = `<div class="tabs">
                                    <div class="tb" id="sweb" onclick='sweb()' ">Web</div>
                                    <div class="tb" id="simg" onclick='simg()'>Images</div>
                                </div>`;
    }
    catch {
        // window.open("https://disunic.github.io/","_self")
        console.log("error")
    }
    // Search Button
    const buttonimg = document.getElementsByClassName("gsc-search-button-v2");
    buttonimg[0].innerHTML = "<i class='bi bi-search'></i>";
    let query = document.getElementById("gsc-i-id1").value;
}
// Tab Bar
function sweb() {
    localStorage.setItem("tab", "web")
    checkonload2()
    let query = document.getElementById("gsc-i-id1").value;
    window.open("https://disunic.github.io/search.html#gsc.tab=0&gsc.sort=&gsc.q=" + query, "_self")
}
function simg() {
    localStorage.setItem("tab", "img")
    checkonload2()
    let query = document.getElementById("gsc-i-id1").value;
    window.open("https://disunic.github.io/search.html#gsc.tab=1&gsc.sort=&gsc.q=" + query, "_self")
}
