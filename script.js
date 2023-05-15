const input = document.getElementById("inputText");
const button1 = document.getElementById("encriptar");
const button2 = document.getElementById("desencriptar");
const output = document.getElementById("outputSection");
const outputChild = document.getElementById("Output");




function letterFilter(value) {
    console.log(value)
    try {
    let letter = value.match(/[A-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ]+/g);
        console.log(letter);
        if(letter != null){
            console.log(letter.length);
            throw "iinputError";
        }else{
            return true;
        }
    } catch (iinputError) {
        return false;
    }
}    




button1.addEventListener("click",e => {
    let value = input.value;
    
    
    if(letterFilter(value)){
        let newValue = "";
        output.removeChild(output.lastChild);
        output.removeChild(output.lastChild);
        for(let i = 0; i < value.length; i++) {
            if(value[i] == "a"){
                newValue += "ai";
            }else if(value[i] == "e"){
                newValue += "enter";
            }else if(value[i] == "i"){
                newValue += "imes";
            }else if(value[i] == "o"){
                newValue += "ober";
            }else if(value[i] == "u"){
                newValue += "ufat";
            }else{
                newValue += value[i];
            }
            
        }
        console.log(newValue);
        /*OUTPUT*/
        outputChild.style.display = "none";
        let outputText = document.createElement("textarea");
        let buttonCopy = document.createElement("button");
        let iconCopy = document.createElement("span");
        outputText.innerHTML = `${newValue}`;
        outputText.readOnly = true;
        iconCopy.className = "material-symbols-outlined";
        iconCopy.innerHTML = "file_copy";
        buttonCopy.appendChild(iconCopy);
        buttonCopy.id = "buttonCoppy";
        outputText.style.overflow = "auto";
        output.appendChild(outputText);
        output.appendChild(buttonCopy);
        buttonCopy.addEventListener("click", e =>{
            navigator.clipboard.writeText(newValue)
            .then(text => {
                
        })
            .catch(err => {
                
        })
        })
    }else{
        alert("Error, asegurece de que no haya mayusculas o caracteres especificos.");
    }
    
    
});
// 


button2.addEventListener("click",e => {
    let value = input.value;
    if(letterFilter(value)){
        output.removeChild(output.lastChild);
        output.removeChild(output.lastChild);
        let valueArray = value.split(" ");
        for(let i = 0; i < valueArray.length; i++) {
            valueArray[i] = valueArray[i].replaceAll("ai","a");
            valueArray[i] = valueArray[i].replaceAll("enter","e"); 
            valueArray[i] = valueArray[i].replaceAll("imes","i"); 
            valueArray[i] = valueArray[i].replaceAll("ober","o"); 
            valueArray[i] = valueArray[i].replaceAll("ufat","u");  
        };
        let newValue = valueArray.join(" ");
        console.log(newValue);
        
        /*OUTPUT*/
        outputChild.style.display = "none";
        let outputText = document.createElement("textarea");
        let buttonCopy = document.createElement("button");
        let iconCopy = document.createElement("span");
        outputText.innerHTML = `${newValue}`;
        iconCopy.className = "material-symbols-outlined";
        iconCopy.innerHTML = "file_copy";
        buttonCopy.appendChild(iconCopy);
        outputText.readOnly = true;
        outputText.style.overflow = "auto";
        buttonCopy.id = "buttonCoppy";
        output.appendChild(outputText);
        output.appendChild(buttonCopy);
        buttonCopy.addEventListener("click", e =>{
            navigator.clipboard.writeText(newValue)
            .then(text => {
                
        })
            .catch(err => {
                
        })
        })
    }else{
        alert("Error, asegurece de que no haya mayusculas o caracteres especificos.");
    }
    
    
});
