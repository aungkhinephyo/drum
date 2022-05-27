
// document.querySelector("button").addEventListener("click", function(){
//     var audio = new Audio("assets/sounds/tom-1.mp3");
//     audio.play();
// })


 // click and make sound
var buttonArray = document.querySelectorAll("button");

for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click",function(){

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    })
    
}

// pressed key  and make sound
document.addEventListener("keydown", function(event){
    
    makeSound(event.key);

    buttonAnimation(event.key);
 })




function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("assets/sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("assets/sounds/tom-2.mp3");
            audio.play();
            break;  

        case "s":
            var audio = new Audio("assets/sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("assets/sounds/tom-4.mp3");
            audio.play();
            break;    

        case "j":
            var audio = new Audio("assets/sounds/crash.mp3");
            audio.play();
            break;   

        case "k":
            var audio = new Audio("assets/sounds/snare.mp3");
            audio.play();
            break;  

        case "l":
            var audio = new Audio("assets/sounds/kick-bass.mp3");
            audio.play();
            break;    

        default: console.log();
            
    }
}

function buttonAnimation(currentButton){
    var buttonPressed = document.querySelector("." + currentButton);
    buttonPressed.classList.add("pressed");
    
    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    },200);

}
