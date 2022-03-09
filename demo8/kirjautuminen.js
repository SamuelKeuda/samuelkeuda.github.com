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
    if (document.getElementById("nimi").value === "" || document.getElementById("salasana").value === "") {
        if (document.getElementById("nimi").value === "") {
            localStorage.setItem("anna","nimi")
            if (document.getElementById("salasana").value === "") {
                localStorage.setItem("Anna", "salasana")
            }
        } else if (document.getElementById("salasana").value === "") {
            localStorage.setItem("Anna", "salasana") 
        } else {
            localStorage.setItem("anna","nimi")
            localStorage.setItem("Anna", "salasana")
        }
    } else if (localStorage.getItem("nimi") === document.getElementById("nimi").value && document.getElementById("nimi") != "") {
        document.getElementById("olemassa").style.display = "initial";
        
    } else {
        localStorage.setItem("nimi", document.getElementById("nimi").value)
        localStorage.setItem("salasana", document.getElementById("salasana").value)
        localStorage.setItem("kirjautunut", "kylla")
    }
}

function ulos() {
   localStorage.removeItem("kirjautunut");
}
