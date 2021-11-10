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
        element.style.fontSize = x;
    }
}

function increaseFontSize(paragraph){
    document.getElementById(`${paragraph}`).style.fontSize = "calc(100% + 1px)";
}

function decreaseFontSize(paragraph){
    document.getElementById(`${paragraph}`).style.fontSize = "calc(100% - 1px)";
}