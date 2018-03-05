
var knapp = document.getElementById('send');

function send() {
    var value = document.getElementById("todo").value;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            var obj = JSON.parse(xmlHttp.response);
            console.log(obj.punkt1);
        }
    }
    xmlHttp.open("POST", "/add", true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.send("todo="+value+"&key2=value2");
}

knapp.onclick = send;

