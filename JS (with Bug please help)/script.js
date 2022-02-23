document.getElementById("form").onsubmit = function(){
    let first = document.getElementById("first_page").value;
    let last = document.getElementById("last_page").value;
    
    var radios = document.getElementsByName('type');

    for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
    var type = radios[i].value;

    // only one radio can be logically checked, don't check the rest
    break;
  }
}

if(type == 4)
{
    var tag = document.createElement("span");
    var j;
      for(i=first ; i<=last; i+=6)
    {
        j = parseInt(i)+3;
        if(j>last)
            j = last-1;
        var text = document.createTextNode(i + '-' + j + ',');
        
        tag.appendChild(text);
        var element = document.getElementById("front1");
        element.appendChild(tag);

    }
    var tag2 = document.createElement("span");
}

else if (type == 2)
{

}
    
    
    
    return false;
}