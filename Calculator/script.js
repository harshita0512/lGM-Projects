function calc()
{
    var l = document.getElementById("result").value;
    var m = eval(l);
    document.getElementById("result").value = m;
}

function clearScr() {
    document.getElementById("result").value = "";
}
 
function display(value) {
    document.getElementById("result").value += value;
}
 
