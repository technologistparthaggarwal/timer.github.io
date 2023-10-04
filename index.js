  var current = document.querySelector(".current");
var next = document.querySelector(".next");
var input = document.querySelector("input");


function Counter(){
    var userinput = input.value;
    var number = parseInt(userinput);
    if(number <= 9 && !isNaN(number))
    {
            current.textContent= number;
            next.textContent= number-1;
            
          var interval = setInterval(animate, 1000);
        
        
            function animate()
           {
            
            next.classList.add('animate')
            current.classList.add('n1')
           
            
            var t1 = setTimeout(function(){
                next.classList.remove('animate')
                
                console.log(`Next Number is ${nextno}`);
                var nextno = next.textContent - 1
                next.textContent = nextno.toString()
               number--
               
               if(nextno <= -1 )
               {
                  clearInterval(interval)
                  clearTimeout(t1)
                  alert('timer ended')
               }
            }, 500)
            console.log("world")
           

                
     
    }
}
    
    else{
    alert("Please enter a valid number!")
}

}

// js function using jquery 

// var current = document.querySelector(".current");
// var next = document.querySelector(".next");
// var input = document.querySelector("input");


// function Counter(){
//     var userinput = input.value;
//     var number = parseInt(userinput);
//     if(!isNaN(number))
//     {
//             current.textContent= `${userinput}`;
//             next.textContent= `${userinput-1}`;
            
//           var interval = setInterval(animate, 1000);
        
        
//             function animate()
//            {
//             var nextno = next.textContent
//             next.classList.add('animate')
//             current.classList.add('n1')
           
            
//             var t1 = setTimeout(function(){
//                 next.classList.remove('animate')
                
//                 console.log(`Next Number is ${nextno}`);
//                next.textContent = `${nextno-1}`.toString()
               
//                if(nextno <= 0 )
//                {
//                   clearInterval(interval)
//                   clearTimeout(t1)
//                   alert('timer ended')
//                }
//             }, 500)
//             console.log("world")
           

                
     
//     }
// }
// else{
//     alert("Please enter a valid number!")
// }

// }




