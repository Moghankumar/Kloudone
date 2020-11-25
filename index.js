if(window.localStorage){
    console.log("SuccessFul Localstorage ");
}
else{
    console.log("Failed LocalStorage");
}


var button=document.getElementById("post");

button.onclick=function(event){
    event.preventDefault;
    storage();
}
function storage(){
    var title=document.querySelector(".titlearticle").value;
    var content=document.querySelector(".contentarticle").value;
    
    localStorage.setItem("title",title);
    localStorage.setItem("content",content);

    var titleart=localStorage.getItem("title");
    var contentart=localStorage.getItem("content");

    var option1=document.querySelector(".newart").value;
    if(option1==="newarticle"){
        newart(titleart,contentart);
    }
    else{
        console.log("Failed New Article");
    }

    var option2=document.querySelector("#funart").value;
    if(option2==="funarticle"){
        funart(titleart,contentart);
    }
    else{
        console.log("Failed Fun Article");
    }
}
function newart(titleart,contentart){
    var newtitle=document.querySelector(".newtitle");
    var newcontent=document.querySelector("#newcontent");
    var calnew=document.querySelector(".calcnew");

    newtitle.innerText=titleart;
    newcontent.innerHTML=contentart;
    calnew.innerHTML="Number of New Articles : 5";

}


function funart(titleart,contentart){
    var funtitle=document.querySelector("#funtitle");
    var funcontent=document.querySelector("#funcontent");
    var calfun=document.querySelector(".calcfun");

    funtitle.innerHTML=titleart;
    funcontent.innerHTML=contentart;
    calfun.innerHTML="Number of Fun Articles : 6";
}