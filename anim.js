function anim(){
    const hand=document.getElementById('ab');
    hand.style.marginLeft='400px'   
    hand.style.transition='1.5s ease-in-out'
    hand.style.transform='rotate(180deg)'
    hand.style.marginTop='-53px'
    hand.style.borderRadius='17px 0px 0px 17px'
    hand.style.borderRight='10px solid white'
    hand.style.width='105px'
    hand.style.height='45px'
    hand.style.background='linear-gradient(-90deg, rgb(241, 0, 241), rgb(255, 142,179))'
    hand.innerText="HƆꓤⱯƎS"
    
    const input=document.getElementById('abc')
        input.style.animation = '';;
        input.style.width='500px'
        input.style.height='40px'
        input.style.borderRadius='20px'
        input.style.transition=' 1.5s ease-in-out'      
}    
function resetStyling() {
    const hand = document.getElementById('ab');
    hand.style.marginLeft = '';
    hand.style.transition = '0.9s ease-in-out';
    hand.style.transform = '';
    hand.style.marginTop = '';
    hand.style.borderRadius = '';
    hand.style.borderRight = '';
    hand.style.width = '';
    hand.style.height = '';
    hand.style.background = '';
    hand.innerText = '';

    const input = document.getElementById('abc');
    input.style.width = '';
    input.style.height = '';
    input.style.borderRadius = '';
    input.style.borderTop = 'solid 9px lightseagreen';
    input.style.transition = '0.9s ease-in-out';
    if (input.style.animation) {
        } 
    else {
        input.style.animation = 'spin 1s linear 1s';
    }
    input.style.animationIterationCount = '2';
    input.onclick = null;
    setTimeout(function() {
        input.onclick = anim;
    }, 2200);

}
