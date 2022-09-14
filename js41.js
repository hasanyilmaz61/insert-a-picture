let aside =document.getElementById("aside");
let input=document.getElementById("input");
let left=document.getElementById("left");

function add() {

let img=document.createElement("img");
img.src=input.value;



img.onclick =function(){

    imgclickt(img.src);
};

aside.appendChild(img);
    


}

function imgclickt(quelle) {

   

left.style.backgroundImage="url("+quelle+")";


    
}