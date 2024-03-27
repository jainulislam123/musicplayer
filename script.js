let vdobtn = document.querySelector(".vdobtn span");
let audio = new Audio('fg.mp3');
let flag = 1
vdobtn.addEventListener("click",()=>{
    if(flag==1){
        vdobtn.innerHTML='<i class="fas fa-pause"></i>';
        audio.play();
        flag=2
    }else{
        vdobtn.innerHTML='<i class="fas fa-play"></i>';
        audio.pause(); 
        flag=1
    }
})