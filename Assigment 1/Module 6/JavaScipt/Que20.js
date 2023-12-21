function enter(){
    // console.log('in func');
    let a =parseInt(document.getElementById('num1').value);
    let b =parseInt(document.getElementById('num2').value);
    let c =parseInt(document.getElementById('num3').value);
    let d =parseInt(document.getElementById('num4').value);
    let e =parseInt(document.getElementById('num5').value);
    let f =parseInt(document.getElementById('num6').value);
    let g =parseInt(document.getElementById('num7').value);
    if(a<=50 && a>0 && b<=50 && b>0 && c<=50 && c>0 && d<=50 && d>0 && e<=50 && e>0 && f<=50 && f>0 && g<=50 && g>0){
    let h = a + b + c + d + e + f + g;
    document.getElementById('total').innerHTML= h;
    let i = h/7 ;
    document.getElementById('percentage').innerHTML=i;
    }
    else {
    alert('enter marks between 0 to 50')
     }
    }
