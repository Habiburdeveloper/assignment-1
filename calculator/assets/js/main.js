



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
     
    //  validation number  ....
    if( !Number( value1 ) ){
        document.getElementById('result').value = 'Please Type Number Value !';
        validation();
    }
    else if( !Number( value2 ) ){
        document.getElementById('result').value = 'Please Type Number Value !';
        validation();
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
    
} // calculate function End....

// Validation .....
function validation() { 
    const value1 = document.getElementById("Input1");
    const value2 = document.getElementById('Input2');

    // Input 1....
    if( value1.value.trim() == "" ){
        document.getElementById("msg").innerHTML = 'Invalid Inpute';
        return false;
    }
    else{
        document.getElementById("msg").innerHTML = '';
    }

    // Input 2....
    if( value2.value.trim() == "" ){
        document.getElementById("msg2").innerHTML = 'Invalid Inpute';
        return false;
    }
    else{
        document.getElementById("msg2").innerHTML = '';
    }
 } // Validation End.....
 