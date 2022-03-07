document.addEventListener("DOMContentLoaded", onkoKirjautunut)


function onkoKirjautunut(){
    document.getElementById("kirjaudu_ulos").style.display = "none";
    if (localStorage.getItem("kirjautunut") === "kylla") {
        document.getElementById("tervetuloa_teksti").textContent += " " + localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";
        document.getElementById("kirjaudu_ulos").style.display = "initial";
    
    }
}

function kirjaudu() {
    localStorage.setItem("nimi", document.getElementById("nimi").value)
    localStorage.setItem("kirjautunut", "kylla")
}

function ulos() {
   localStorage.clear();
}

