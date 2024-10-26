let count=0;
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
let   displayElement= document.getElementById('counter');

incrementButton.addEventListener('click', incrementCount);
decrementButton.addEventListener('click', decrementCount);

function incrementCount(){
    if(count<10)
    {
    count+=1;
    }
    displayElement.innerText=count;
}
function decrementCount(){
    if(count>-10)
        {
        count-=1;
        }
    displayElement.innerText=count;
}