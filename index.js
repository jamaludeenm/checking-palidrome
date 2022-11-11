
    let num=123454321
     let store=num
         let result=0

            while(num>0){
                let rem=num%10

                num=(num-rem)/10

               result=(result*10)+rem
            }
            console.log(result)
            if(store===result){
                console.log("palindrom number")
            }else{
                console.log("not polindrom");
            }