alert("hello");
document.querySelector("button").addEventListener("click",function(){
    this.innerHTML= "agreed";
}
);
document.addEventListener("keydown",function(event){
    alert(event.key);
})
