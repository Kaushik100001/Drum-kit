for(let i=0;i<document.querySelectorAll(".drum").length ;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", clicked)

function clicked(){
 let btn=this.innerHTML
 document.querySelector("." + btn).classList.add("pressed")
 setTimeout(() => {
   document.querySelector("." + btn).classList.remove("pressed")
 

 }, 100);
   switch(btn){
      case "w" :
      new Audio("sounds/tom-1.mp3").play()
         break;
      case "a" :
      new Audio("sounds/tom-2.mp3").play()
         break;
      case "s" :
      new Audio("sounds/tom-3.mp3").play()
               break;
      case "d" :
      new Audio("sounds/tom-4.mp3").play()
                  break;
      case "j" :
      new Audio("sounds/crash.mp3").play()
                                 break;
      case "k" :
      new Audio("sounds/kick-bass.mp3").play()
                                                break;
      case "l" :
      new Audio("sounds/snare.mp3").play()
      break;


   }
    
}
}


document.addEventListener("keypress",function(event){
   
   let keyboard=event.key
   document.querySelector("." + keyboard).classList.add("pressed")
   setTimeout(() => {
      document.querySelector("." + keyboard).classList.remove("pressed")
   }, 100);
   
   switch(keyboard){
      case "w" :
         new Audio("sounds/tom-1.mp3").play()
            break;
         case "a" :
         new Audio("sounds/tom-2.mp3").play()
            break;
         case "s" :
         new Audio("sounds/tom-3.mp3").play()
                  break;
         case "d" :
         new Audio("sounds/tom-4.mp3").play()
                     break;
         case "j" :
         new Audio("sounds/crash.mp3").play()
                                    break;
         case "k" :
         new Audio("sounds/kick-bass.mp3").play()
                                                   break;
         case "l" :
         new Audio("sounds/snare.mp3").play()
         break;

   }
})

