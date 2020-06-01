function hello() {
    let name = document.querySelector("#name").value;
    if (name === "")
    {
        document.querySelector("#result").innerHTML = "Hi";
    }
    else
    {
        document.querySelector("#result").innerHTML = "Hi " + name;
    }
    document.getElementById("nameForm").style.display = "none";
}

function presentation() {
    let x = document.getElementsByTagName("button");
    let y = document.getElementsByTagName("h2");
    let z = document.getElementsByTagName("h3");
    for (let k = 0; k < x.length; k++) {
        x[k].style.backgroundColor = "grey";
    }
    for (let l = 0; l < y.length; l++) {
        y[l].style.display = "none";
    }    
    for (let m = 0; m < z.length; m++) {
        z[m].style.display = "none";
    }
    document.querySelector("br").style.display = "none";
    document.querySelector("hr").style.display = "none";
    document.querySelector("#heading").style.display = "none";
    document.querySelector("body").style.backgroundColor = "black";
}

function regular() {
    let x = document.getElementsByTagName("button");
    let y = document.getElementsByTagName("h2");
    let z = document.getElementsByTagName("h3");
    for (let k = 0; k < x.length; k++) {
        x[k].style.backgroundColor = "white";
    }
    for (let l = 0; l < y.length; l++) {
        y[l].style.display = "block";
    }    
    for (let m = 0; m < z.length; m++) {
        z[m].style.display = "block";
    }
    document.querySelector("br").style.display = "block";
    document.querySelector("hr").style.display = "block";
    document.querySelector("#heading").style.display = "block";
    document.querySelector("body").style.backgroundColor = "white";
}