// form


function validation(){
    var name=document.querySelector("#name").value;
    var password=document.querySelector("#Password").value
    var Email=document.getElementById("Email").value;
    var x=Email.indexOf("@");
    var y=Email.lastIndexOf(".")

    if(name==null||name==""){
        alert("blank name cant be allowed")
        return false
    }
    if(x<1|| y<x+2 || y+2>=Email.length){
        alert("please use @ symbol and use .com at the end")
        return false
    }
    if(name.length<5){
        alert("name should be min 5 charector");
    }
    if(password.length<4){
        alert('password must be min 4 letters')
        return false
    }
}

