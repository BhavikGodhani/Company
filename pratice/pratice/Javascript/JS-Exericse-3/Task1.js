function validatetion(email){
var result = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
return result.test(email);
}
console.log(validatetion('bhavikgodhani51@gmail.com'));



function hideAddress(str){
    const string = str.slice(0,3).padEnd(6,"*");
    const string1 = str.slice(4);
    return string+string1;
   }
   const Input1 =  'abcdef@mail.com';
   console.log(hideAddress(Input1))


function remove(str){
    if( str == null || str == ''){
        return false;
    }
    return str.replace(/<[^>]*>/g, '');
}
const Input = '<p><strong><em>Javascript​ Exercises</em></strong></p>';
console.log(remove(Input));

function table(){
    rn = window.prompt("Input Number of rows",5);
    cn = window.prompt("Input Number of column",5);

    for( var r =0;r<parseInt(rn);r++){
        var x = document.getElementById('myTable').insertRow(r);
        for(var c= 0;c<parseInt(cn);c++){
            var y = x.insertCell(c);
            y.innerHTML ="Row -" + r 
            +"Column-"+c;
        }
    }
}