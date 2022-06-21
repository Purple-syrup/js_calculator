var firstNo= parseFloat(prompt("input first number",));
var secondNo= parseFloat(prompt("input second number",));

console.log(typeof(firstNo));

function operate(){
    var operator= prompt("pick an operation: + - * / %",);
if(typeof(firstNo)== 'number' && typeof(secondNo)== 'number')
{
    if(operator== '+')
    {   
        console.log(`the result is ${firstNo + secondNo}`);
        alert(`the result is ${firstNo + secondNo}`);
        again();
    }else if(operator =='-')
    {
        console.log(`the result is ${firstNo - secondNo}`)
        alert(`the result is ${firstNo - secondNo}`);
        again();
    }else if(operator== '*')
    {
        console.log(`the result is ${firstNo * secondNo}`)
        alert(`the result is ${firstNo * secondNo}`);
        again();
    }else if(operator=='/')
    {
        console.log(`the result is ${firstNo / secondNo}`)
        alert(`the result is ${firstNo / secondNo}`);
        again();
    }else if(operator =='%')
    {
        console.log(`the result is ${firstNo % secondNo}`)
        alert(`the result is ${firstNo % secondNo}`);
        again();
    }else
    {
        alert('enter valid operator');
        again();
    }
}else{
    alert('enter valid input(s)');
}
}

function again()
{
    var redo= prompt('would you like another operation? [Y/N]');
    if(redo=='Y'||redo=='y')
    {
        operate()
    }else if(redo=='N'||redo=='n')
    {
        alert('Thank you, goodbye');
    }else{
        alert('enter Y/N');
        again()
    }
}
operate();