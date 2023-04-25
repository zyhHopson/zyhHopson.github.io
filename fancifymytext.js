function makeBigger(){
    document.getElementById("inputText-1").style.fontSize = "24pt";
}

function setToBold(){
    document.getElementById("inputText-1").style.fontWeight = "bold";
    document.getElementById("inputText-1").style.color = "blue";
    document.getElementById("inputText-1").style.textDecoration = "underline";
}

function setToNormal(){
    document.getElementById("inputText-1").style.fontWeight = "normal";
    document.getElementById("inputText-1").style.color = "black";
    document.getElementById("inputText-1").style.textDecoration = "none";
}

function setMoo(){
    const text = document.getElementById("inputText-1").value;
    const words = text.split(" ")
    for (var i = 0; i<words.length-1;i++){
        let word = words[i].trim();
        word +="-Moo";
        words[i] = word;
    }
    document.getElementById("inputText-1").value = words.join(" ");
}