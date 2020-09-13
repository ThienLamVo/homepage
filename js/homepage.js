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