const num1=document.getElementById('number1');
const num2=document.getElementById(' number2');
const compareButton=document.getElementById('compare');

const result=document.getElementById('result');
function compare(){
    if(num1>num2)
    {
        const number1=num1.value;
        const number2=num2.value;

        alert("num1 is greater than num2");
    }
    else if(num1<num2)
    {
        alert("num1 is less than num2");
       
    }
    else
    {
        alert("They are equal");
    }
}
compareButton.addEventListener('click', compare); //callback function