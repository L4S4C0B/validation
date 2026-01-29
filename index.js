function control_username() {
    const username = document.getElementById("username").value;
    const regex = /^[A-Za-z\s]+$/;

    if (regex.test(username) == false) {
        document.getElementById("warnUsername").textContent =
            "Username non valido: solo lettere e spazi";
        return false;
    } else {
        document.getElementById("warnUsername").textContent = "";
        return true;
    }
}

function control_eta() {
    const eta = document.getElementById("eta").value;

    if (eta < 18 || eta > 100) {
        document.getElementById("warnEta").textContent =
            "Età non valida (18-100)";
        return false;
    } else {
        document.getElementById("warnEta").textContent = "";
        return true;
    }
}

function control_password() {
    const password = document.getElementById("password").value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*])[A-Za-z\d!@#$%&*]{8,20}$/;

    if (regex.test(password) == false) {
        document.getElementById("warnPassword").textContent =
            "La password deve contenere 8-20 caratteri, almeno una lettera maiuscola, una minuscola, un numero e un carattere speciale (!@#$%&*)";
        return false;
    } else {
        document.getElementById("warnPassword").textContent = "";
        return true;
    }
}

function control_consenso() {
    const consenso = document.getElementById("consenso").checked;

    if (consenso == false) {
        document.getElementById("warnConsenso").textContent =
            "Devi accettare il consenso";
        return false;
    } else {
        document.getElementById("warnConsenso").textContent = "";
        return true;
    }
}


function controlloFinale() {
    let errori = [];

    document.getElementById("erroriFinali").innerHTML = "";
    document.getElementById("successo").textContent = "";

    if (control_username() == false){
        errori.push("Username non valido");
    }
    if (control_eta() == false){
        errori.push("Età non valida");
    }
    if (control_password() == false){
        errori.push("Password non valida");
    }
    if (control_consenso() == false){
        errori.push("Consenso mancante");
    }

    if (errori.length > 0) {
        document.getElementById("erroriFinali").innerHTML =
            errori.join("<br>");
        return false;
    } else {
        document.getElementById("successo").textContent = "Dati corretti";
        return false;
    }
}