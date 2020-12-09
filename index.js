

document.onload = setInterval(colorchg, 1000);
function colorchg() {
    var m = document.querySelectorAll('.bold');
    for(var i =0; i<25; i++)
    {
        if (m[i].style.color == "black")
        m[i].style.color = "gray";
        else
        m[i].style.color = "black";
    }
    
}

document.onload = setInterval(colorchg1, 1000);
function colorchg1() {
    var m = document.querySelectorAll('.blod');
    for(var i =0; i<25; i++)
    {
        if (m[i].style.color == "gray")
        m[i].style.color = "black";
        else
        m[i].style.color = "gray";
    }
    
}
