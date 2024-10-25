    function string(str){
    
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '(') {
                count++;
            } else {
                count--;
                if (count < 0) {
                    return false; 
                }
            }
        }
        if(count === 0) {
            return true;
        }
    }
    
    console.log(string("(((((((("));



   
    

   