function encriptar(){
    var p1 = document.getElementById("text-area-1").value;
    console.log(p1);

    var array = p1.split('')
    console.log(array);

    var newText = []
    
    array.forEach(e => {
        if (e == "a") {
            newText.push("ai")
        } else if (e == "e"){
            newText.push("enter")
        } else if (e == "i"){
            newText.push("imes")
        } else if (e == "o"){
            newText.push("ober")
        }else if (e == "u"){
            newText.push("ufat")
        } else {
            newText.push(e)
        }

    });

    console.log(newText.join(''));


}