//detecting button press
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
document.querySelectorAll(".drum")[i].addEventListener("click",hand_click);
function hand_click(){
    var but_inner=this.innerHTML;
    makesound(but_inner);
    btn_anima(but_inner);
    alert(but_inner);
}

//detecting key press
document.addEventListener('keypress',function(event){
    makesound(event.key);
    btn_anima(event.key);


})

function makesound(key){

switch(key){
    case "w": 
    var audio=new Audio('sounds/tom-1.mp3');
    audio.play();
    break;

    case "a":

        var audio=new Audio('sounds/tom-2.mp3');
        audio.play();
        break;

    case "s":
    var audio=new Audio('sounds/tom-3.mp3');
    audio.play(); 
    break;    

    case "d":

    var audio=new Audio('sounds/tom-4.mp3');
     audio.play();
     break;
     
     case "j":
      var audio=new Audio('sounds/crash.mp3');
       audio.play();
       break;

    case "k":
      var audio=new Audio('sounds/kick-bass.mp3');
       audio.play();
       break;
       
    case "l":
      var audio=new Audio('sounds/snare.mp3');
       audio.play(); 
       break; 

    default:console.log(but_inner);
    
}
}

function btn_anima(cur_btn){
    var n=document.querySelector("."+cur_btn);
    n.classList.add("pressed");
    setTimeout(function(){
        n.classList.remove("pressed");
    },150)

}
// function HouseKeeper(name,work_exp,language,exp_sal){
//     this.name=name;
//     this.work_exp=work_exp;
//     this.language=language;
//     this.exp_sal=exp_sal;
// }

// var h=new HouseKeeper("angella","new","english","1000");
// document.write(h.exp_sal);


// function housekeeper(name,work_exp,language,exp_sal){
//     this.name=name;
//       this.work_exp=work_exp;
//       this.language=language;
//       this.exp_sal=exp_sal;
//       this.clean=function(){
//         alert("i cleaned");
//       }

// }
// var h=new housekeeper();
// h.clean();