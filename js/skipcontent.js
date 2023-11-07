var ul = document.getElementById("pagemenu");
var content = document.querySelectorAll(ul.innerHTML);
var letters = "";
for (let index = 0; index < content.length; index++) {
    const name = content[index].innerHTML.toLowerCase();
    let result = name.charAt(0).toUpperCase() + name.slice(1);

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(result));
    letters += "<li><a href='#" + name + "'>"  + result + "</a></li>";
}
ul.innerHTML = letters;