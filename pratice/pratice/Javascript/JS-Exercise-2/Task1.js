      
      // function firstandLastElement(arr, n) {
      //       const first_element = arr.slice(0, n);
      //       const last_element = arr.slice(-n);

      //       return {
      //        first:   first_element,
      //        last:   last_element,
      //       };

      //   }
      //   const static_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      //   const n = 3;
      //   const ans = firstandLastElement(static_array, n);
      //   console.log(ans.first);
      //   console.log(ans.last);
      
            function str(string){
                  var words = string.toUpperCase().split(" ");
                  for (var i = 0; i < words.length; i++) {
                    var precedingChars = words[i].slice(0,-1);
                    var lastChar = words[i].slice(-1).toLowerCase();  
                    words[i] = precedingChars + lastChar;
                  }
                  return words.join(" "); 
            } 
           console.log(str("My Name is Strong"));