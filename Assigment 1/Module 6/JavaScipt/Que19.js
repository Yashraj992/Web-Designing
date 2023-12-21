let a = document.getElementById('num1');
let b = document.getElementById('num2');
function addition(){
            let c = parseInt(a.value)+parseInt(b.value);
            document.getElementById('result').innerHTML = c;
        }
function substraction(){
            let c = parseInt(a.value)-parseInt(b.value);
            document.getElementById('result').innerHTML = c;
       }
function multiply(){
            let c = parseInt(a.value)*parseInt(b.value);
            document.getElementById('result').innerHTML = c;

       }   
function division(){
            let c = parseInt(a.value)/parseInt(b.value);
            document.getElementById('result').innerHTML = c;

       }  
function modulas(){
            let c = parseInt(a.value)%parseInt(b.value);
            document.getElementById('result').innerHTML = c;

}
