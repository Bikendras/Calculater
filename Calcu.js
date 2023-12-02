
// input box ko selct karne ke liye uski id se box ko select kiya gai hai aur ek variable me store kiya gaya hai...
let input=document.getElementById('inputbox');
// sare buttton ko select karne ke liye Query selector ka use karke button ko select kiya hai......
let buttons=document.querySelectorAll('button');
// empity string liya jisme result ko store karege...
let string = "";
// sare button ko select karne ke liye ek array bana lete hai button ko store karne ko aur sari botton arr pe store ho gayi hai.....
let arr=Array.from(buttons);
// aur foreach loop button pe nhi chalti wo array pe chalta hai.. 
arr.forEach(button=>{
    //ab button ke click pe (e) pass hota rahega.. 
    button.addEventListener('click',(e)=>{
        // aur (e) me jo bhi key ya EQUEL(=) button hai to output dikhana hai to   value ya operation proferm karege wo display hota rahega..
        if(e.target.innerHTML=='='){
            // equel (=) hai to ye functio chalega....evaluate function yah function javascript ka envilt function  hai..value ko evaluate karke de dega..
            string=eval(string);
            // input me hai value ko store kara duga.. jab bhi equel key (=) press hoga to string ki value dispplay me dikhe gi...
            input.value=string;
        }
// AC ke click pe input box pe placeholder pe jo value hai wo show hone lagegi....
        else if(e.target.innerHTML=='AC')
        {
            string="";
            // string ki value ko input box pe hota rahega aur AC key pres karte hi placeholder me jo value hai wo show hone lagegi...
            input.value=string;
        }
// DeL ke click pe input box ke jo number show ho rahe hai unme se last ka digit delete ho jayega....
        else if(e.target.innerHTML=="DEL")
        {
            // substring function se last ke one digit ko remove karke dega...
            string=string.substring(0,string.length-1);
            // aur baki ki string ko input box pe string ke jaise soo hota rahega..
            input.value=string;
        }
        else
        // = (AC) aur (DEL) ki key ko chod kar sali key ki value display me show hoti rahegi...
        {
          string+=e.target.innerHTML;
          // aur wah string input box pe display ho jayegi...
          input.value=string;
        }
        
})
})