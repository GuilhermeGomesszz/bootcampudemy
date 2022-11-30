

for (let i =0; i<document.querySelectorAll('.drum').length; i++) {
l
    document.querySelectorAll('.drum')[i].addEventListener('click', handleClick);

function handleClick() {
   
   var buttonInnerHTML = this.innerHTML
   switch (buttonInnerHTML) {
    case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();

        break;
    case 'a':
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
   
    default:
        break;
   }
   
   
   
   
    

}
}
document.addEventListener('keypress'), function(event){alert('Key pressed')
console.log(event)


}




