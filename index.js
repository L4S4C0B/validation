

function control_username(){
    const numeri = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let x = document.getElementById("username")

    if(x.contains(numeri) && x.isalpha() == false){
        document.getElementById("warn").textContent = "Username non valido!!!"
    }

}