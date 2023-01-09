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

    var traduccion = newText.join('')
    console.log(traduccion);
    document.getElementById("traductor").innerHTML = `<div class="box-traductor-hidden">
                                                            <span id="texto-traducido" class="texto-traducido">${traduccion}</span>
                                                            <button onclick="copiar()" class="button-copiar">Copiar</button>
                                                        </div>`; 

}

function desencriptar(){
    var p1 = document.getElementById("text-area-1").value;
    console.log(p1);

    const diccionario = {'ai':'a','enter':'e','imes':'i','ober':'o','ufat':'u'}

    var traduccion = p1.replace(/ai|enter|imes|ober|ufat/g, m => diccionario[m])

    console.log(traduccion);
    document.getElementById("traductor").innerHTML = `<div class="box-traductor-hidden">
                                                            <span id="texto-traducido" class="texto-traducido">${traduccion}</span>
                                                            <button onclick="copiar()" class="button-copiar">Copiar</button>
                                                        </div>`; 
}

function copiar() {
    console.log("Empesamos");
    const textToCopy = document.getElementById("texto-traducido")

    const range = document.createRange()

    range.selectNodeContents(textToCopy);

    window.getSelection().removeAllRanges();

    
    window.getSelection().addRange(range);

    const successful = document.execCommand('copy');

    if(successful){
      alert("Copiado!")
    } else {
      alert("No se pudo copiar!! upss")
    }
    window.getSelection().removeAllRanges()
}