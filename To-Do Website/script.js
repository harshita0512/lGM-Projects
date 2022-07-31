
function addtask() 
{
  var li = document.createElement("li");
  var inputValue = document.getElementById("tasks").value;
  var task = document.createTextNode(inputValue);
  li.appendChild(task);
  if (inputValue === '')
   {
    alert("Enter your task...");
  } 
  else
   {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("tasks").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("close");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) 
  {
    close[i].onclick = function() 
    {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < list.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Close");
  span.className = "close";
  span.appendChild(txt);
  list[i].appendChild(span);
}




var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}




var list = document.querySelector('ul');
list.addEventListener('click', function(mk) {
  if (mk.target.tagName === 'LI') 
  {
    mk.target.classList.toggle('checked');
  }
},);