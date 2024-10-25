function array(arr){
    
    //       for(let i =0 ; i<arr[0].length;i++){
    //   if(arr[i].length > 5){
    //     console.log(arr[i]);
    //   }
    // }
    // return true;
    
    return arr.filter((x) => x.length > 5);
    }
    console.log(array(["abdsdc","abcde","abcded","ddsa"]));  
    