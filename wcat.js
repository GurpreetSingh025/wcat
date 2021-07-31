let fs = require("fs");
let path = require("path");
let input = process.argv.slice(2);
//console.log(input);
  let filesArr = [];
  let optionArr = [];
    
     for(let i=0 ; i<input.length ; i++){
         let firstChar = input[i].charAt(0);
          if(firstChar=='-'){
            optionArr.push(input[i]);
          }else{
              filesArr.push(input[i]);
          }
     }
  
    for(let i=0 ; i<filesArr.length;i++){
        let exist = fs.existsSync(filesArr[i]);
            if(exist==false){
                console.log(" File does not exist ");
                return;
            }        
    }

    let content = "";

    for(let i=0 ; i<filesArr.length ; i++){
        let filePath = filesArr[i];
         content+= fs.readFileSync(filePath);   
        // console.log(content);     
    } 

    
//console.log("file array is : "+filesArr);
//console.log("option array is : "+optionArr);



  let bool = false;


     for(let k = 0 ; k<optionArr.length ; k++){
      
         let operation = optionArr[k];

                if(operation=='-s'){
                    console.log("\n -s opration activated \n");
                    let ans = sOperation();
                    console.log(ans);
                    
                }

                if(operation=='-b' && bool==false){
                    console.log("\n -b opration activated \n");
                  let ans =  bOperation();
                  console.log(ans);
                   bool=true;
                }

                if(operation=='-n' && bool==false){
                    console.log("\n -n opration activated\n");
                    let ans = nOperation();
                    console.log(ans);
                    bool=true;
                }
    }             
        
       function sOperation(){
        let sFile = content.split("\r\n");
         let ans = '';
           for(let i=0 ; i<sFile.length ; i++){
                 if(sFile[i]!=''){
                     ans+=sFile[i]+"\n\n";
                 }
           }
           return ans;
       }

       function nOperation(){
           let str = content.split("\n");
           let ans = '';
            for(let i=0 ; i<str.length ; i++){
               ans+= i+1 + " " + str[i]+"\n";   
            }
            return ans;
       }

       function bOperation(){
            let str = content.split("\r\n");
            let ans = '';
             for(let i=0 ; i<str.length ; i++){
                 if(str[i]!=''){
                     ans+= i+1 +" " + str[i] + "\n\n";
                 }
             }
             return ans;
       }
                
     
