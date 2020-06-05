var reset=document.querySelector(".btn"),
    squares=document.querySelectorAll("td");

reset.addEventListener("click",function(){
    for(var i=0;i<squares.length;i++){
        squares[i].textContent="";
    }
})
function ChangeMaker(){
    if(this.textContent===""){
        this.textContent="X";
    }else if(this.textContent==="X"){
        this.textContent="O";
    }else{
        this.textContent="";
    }
}

for(var i=0;i<squares.length;i++){
    squares[i].addEventListener("click",ChangeMaker);
}
