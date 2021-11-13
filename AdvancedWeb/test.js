function changeColor() {
    document.getElementById("paragraph1").style.color = "green";
    document.getElementById("paragraph2").style.color = "yellow";
    document.getElementById("paragraph3").style.color = "red";
}


function changeBgColor(color){
    document.getElementsByTagName("body")[0].style.backgroundColor = `${color}`;
}


function copyContent(paragraph1, paragraph2){
    document.getElementById(`${paragraph1}`).innerText = document.getElementById(`${paragraph2}`).innerText;
}

function changeFontSize(x){
    let arr = document.getElementsByTagName("p");
    for(element of arr){
        element.style.fontSize = x +"px";
    }
}

function increaseFontSize(paragraph){
    const fontSize = parseFloat(document.getElementById(paragraph).style.fontSize);
    if(fontSize <= 29){
        document.getElementById(paragraph).style.fontSize = fontSize + 1 + "px";
    }
}

function decreaseFontSize(paragraph){
    const fontSize = parseFloat(document.getElementById(paragraph).style.fontSize);
    if(fontSize >= 11){
        document.getElementById(paragraph).style.fontSize = fontSize -1 + "px";
    }
}