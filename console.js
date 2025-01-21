let text=document.querySelector("#text");
let conversion=document.querySelector("#conversion");
let answer=document.querySelector("#answer p");
let calculate=document.querySelector("#calculate");


calculate.addEventListener('click',()=>{
let b;
if(text.value!==""){
    if(conversion.value==="decimal to binary"){
        b=dec_to_bi();
    }
    else if(conversion.value==="decimal to hexadecimal"){
        b=dec_to_hex();
    }
    else if(conversion.value==="decimal to octal"){
        b=dec_to_oct();
    }
    else if(conversion.value==="binary to decimal"){
        b=bi_to_dec();
    }
    else if(conversion.value==="hexadecimal to decimal"){
        b=hex_to_dec();
    }
    else if(conversion.value==="octal to decimal"){
        b=oct_to_dec();
    }
    else{

    }
}

if(b==undefined){
    answer.innerText="enter value first";
    answer.style.backgroundcolor="red";

}
else{
    answer.innerText=b;
    answer.style.backgroundcolor="green";
}


})

function dec_to_bi(){
    let sum=0;
    let b=Number(text.value);
    let c=2048;
    
     let s="";
        for(let i=c;i>=1;i=i/2){
                    if((sum+i)<=b){
                        sum=sum+i;
                        s=s+"1";
                        console.log(sum);
                    }
                    else{
                        s=s+"0";
                    }
    }
   return s;
}

function dec_to_hex(){
    let b=Number(text.value);
    let c=[];
    let i=0;
    let s="";
    do{
        c[i]=b%16;
        b=Math.trunc(b/16);
        i++;
    }while(b!=0);
    c=c.reverse();

    for(let j=0;j<=i-1;j++){
        if([0,1,2,3,4,5,6,7,8,9].includes(c[j])){   
           s=s+c[j];
        }
        else { 
            console.log("hii");
             s=s+String.fromCharCode(64+c[j]-9);
        }      
    }
return s;
}

function dec_to_oct(){
    let b=Number(text.value);
    let c=[];
    let i=0;
    let s="";
    
    do{
        c[i]=b%8;
        b=Math.trunc(b/8);
        i++;
    }while(b!=0);

    c=c.reverse();
    for(let j=0;j<=i-1;j++){
            s=s+c[j];
    }
return s;
}

function bi_to_dec(){
    let b=Number(text.value);
    let sum=0;
    
    let s="";
    let i=0;
    do{
       sum=sum+((b%10)*Math.pow(2,i));
        i++;
        b=Math.trunc(b/10);
        
    }while(b>0);
    
return s+sum;
}

function hex_to_dec(){
      let b=[];
    let str=text.value;
    let s="";

    let c;
    for(let i=0;i<str.length;i++){
        if(["0","1","2","3","4","5","6","7","8","9"].includes(str[i])){
        b[i]=Number(str[i]);
       }
       else if(["A","B","C","D","E","f"].includes(str[i])){
        b[i]=Number(str[i].charCodeAt(0))-55;
       }
    }

    let k=0;
    let sum=0;

    for(let j=(str.length)-1;j>=0;j--){
        sum=sum+b[j]*Math.pow(16,k);
        k++;
    }
    
return s+sum;
}

function oct_to_dec(){
   
    let sum=0;
    let b=Number(text.value);
    let i=0;
    let s="";

    do{
    sum=sum+((b%10)*Math.pow(8,i));
    b=Math.trunc(b/10);
    i++;
    
    }while(b!=0);

return s+sum;
}
