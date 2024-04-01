



// calculate function....
function calculate() { 

    // get input value...
    const value1 = Number(document.getElementById("Input1").value);
    const value2 = Number(document.getElementById('Input2').value);
    const item = document.getElementById('exampleFormControlSelect1').value;
    let addition = document.getElementById('addition').value;
    let subtraction= document.getElementById('subtraction').value;
    let multiplication = document.getElementById('multiplication').value;
    let divid = document.getElementById('divid').value;
     
    //  validation number & text ....
    if( !Number( value1,value2 ) ){
        document.getElementById('result').value = 'Please Type Number Value !';
    }
    else{
        
        // calculate condition ....

        if( item == addition ){
            let totall = value1 + value2;
            document.getElementById('result').value = totall;
        }
        else if( item == subtraction ){
            let totall = value1 - value2;
            document.getElementById('result').value = totall;
        }
        else if( item == multiplication ){
            let totall = value1 * value2;
            document.getElementById('result').value = totall;
        }
        else if( item == divid ){
            let totall = value1 / value2;
            document.getElementById('result').value = totall;
        }
        else{
            document.getElementById('result').value = 'not fount';
        }
    }
    
}