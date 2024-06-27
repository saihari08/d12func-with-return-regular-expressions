import React,{useRef} from 'react'

function MarksSheet() {

    let FirstNameInputRef=useRef();
    let LastNameInputRef=useRef();
    let EmailInputRef=useRef();
    let PasswordInputRef=useRef();
    let EnglishInputRef=useRef();
    let TeluguInputRef=useRef();
    let HindiInputRef=useRef();
    let MathsInputRef=useRef();
    let ScienceInputRef=useRef();
    let SocialInputRef=useRef();

    let resultParaRef=useRef();
    let FirstNamespanRef=useRef();
    let LastNamespanRef=useRef();
    let EmailspanRef=useRef();
    let PasswordspanRef=useRef();
    let EnglishSpanRef=useRef();
    let TeluguSpanRef=useRef();
    let HindiSpanRef=useRef();
    let MathsSpanRef=useRef();
    let ScienceSpanRef=useRef();
    let SocialSpanRef=useRef();

const NameRegex = /^[a-zA-Z]{2,30}$/;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-zA-Z]{2,}$/;

const passwordRegex = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,30}$/;




let validateEmail=(inputRef,spanRef)=>{
    let result=emailRegex.test(inputRef.current.value);
    if(result==true){
        spanRef.current.innerHTML="vaild";
    }else{
        spanRef.current.innerHTML="Invalid";
    }
    }

    let validatePassword=(inputRef,spanRef)=>{
        let result=passwordRegex.test(inputRef.current.value);
        if(result==true){
            spanRef.current.innerHTML="vaild";
        }else{
            spanRef.current.innerHTML="Invalid";
        }
        }
    
    




let validateName=(inputRef,spanRef)=>{
    let result=NameRegex.test(inputRef.current.value);
if(result==true){
    spanRef.current.innerHTML="vaild";
}else{
    spanRef.current.innerHTML="Invalid";
}
}

let calculateResult=()=>{

};

let inputOnFocus=(inputRef)=>{inputRef.current.style.backgroundColor="orange";}

let inputOnChange=(inputRef,spanRef)=>{
    inputRef.current.style.backgroundColor="yellow";

if(inputRef.current.value>=0 && inputRef.current.value <=100){
    if(inputRef.current.value >35)
        {spanRef.current.innerHTML="Pass";
          spanRef.current.style.backgroundColor="green"  
        }else{
        spanRef.current.innerHTML="Fail";
        spanRef.current.style.backgroundColor="red";  
        }
}else{
    spanRef.current.innerHTML="invalid";
    spanRef.current.style.backgroundColor="blue"; 
}    
};

let inputOnBlur=(inputRef)=>{inputRef.current.style.backgroundColor="";}

  return (
<div>
<form className='MarksSheet'>
<fieldset>
<legend>MarksSheet</legend>

<div>
<label>FirstName</label>
<input ref={FirstNameInputRef}type="text"
    onFocus={()=>{
        inputOnFocus(FirstNameInputRef);
        }}
    onChange={()=>{
        validateName(FirstNameInputRef,FirstNamespanRef)
        }}
    onBlur={()=>{
        inputOnBlur(FirstNameInputRef);
        }}
    ></input>
<span ref={FirstNamespanRef}></span>
</div>

<div>
<label>LastName</label>
<input ref={LastNameInputRef}type="text"
    onFocus={()=>{
        inputOnFocus(LastNameInputRef);
        }}
    onChange={()=>{
        validateName(LastNameInputRef,LastNamespanRef);
        }}
    onBlur={()=>{
        inputOnBlur(LastNameInputRef);
        }}></input>
    <span ref={LastNamespanRef}></span>
</div>


<div>
<label>Email</label>
<input ref={EmailInputRef}type="text"
    onFocus={()=>{
        inputOnFocus(EmailInputRef);
        }}
    onChange={()=>{
        validateEmail(EmailInputRef,EmailspanRef);
        }}
    onBlur={()=>{
        inputOnBlur(EmailInputRef);
        }}></input>
    <span ref={EmailspanRef}></span>
</div>

<div>
<label>Password</label>
<input ref={PasswordInputRef}type="text"
    onFocus={()=>{
        inputOnFocus(PasswordInputRef);
        }}
    onChange={()=>{
        validatePassword(PasswordInputRef,PasswordspanRef);
        }}
    onBlur={()=>{
        inputOnBlur(PasswordInputRef);
        }}></input>
    <span ref={PasswordspanRef}></span>
</div>






<div>
<label>English</label>
<input ref={EnglishInputRef} type="number"
    onFocus={()=>{
        inputOnFocus(EnglishInputRef);
        }}
    onChange={()=>{
        inputOnChange(EnglishInputRef,EnglishSpanRef);
        }}
    onBlur={()=>{
        inputOnBlur(EnglishInputRef);
        }}>          
</input>
<span ref={EnglishSpanRef}></span>
</div>

<div>
<label>Telugu</label>
<input ref={TeluguInputRef}type="number"
onFocus={()=>{
    inputOnFocus(TeluguInputRef)     
}}
onChange={()=>{
    inputOnChange(TeluguInputRef,TeluguSpanRef);  
}}
onBlur={()=>{
    inputOnBlur(TeluguInputRef);   
}}        
></input>
<span ref={TeluguSpanRef}></span>
</div>
     
<div>
<label>Hindi</label>
<input ref={HindiInputRef}type="number" 

onFocus={()=>{
     inputOnFocus(HindiInputRef); 
}}
onChange={()=>{
    inputOnChange(HindiInputRef,HindiSpanRef);  
}}
onBlur={()=>{
    inputOnBlur(HindiInputRef);
}}
></input>
<span ref={HindiSpanRef}></span>
</div>

<div>
<label>Maths</label>
<input ref={MathsInputRef}type="number"
        
onFocus={()=>{
    inputOnFocus(MathsInputRef)
}}
onChange={()=>{
    inputOnChange(MathsInputRef,MathsSpanRef);
}}
onBlur={()=>{
     inputOnBlur(MathsInputRef);   
}}>
</input>
<span ref={MathsSpanRef}></span>
</div>

<div>
<label>Science</label>
<input ref={ScienceInputRef} type="number"
onFocus={()=>{
    inputOnFocus(ScienceInputRef)
 }}
onChange={()=>{
    inputOnChange(ScienceInputRef,ScienceSpanRef);
}}
onBlur={()=>{
    inputOnBlur(ScienceInputRef);
}}>
</input>
<span ref={ScienceSpanRef}></span>
</div>

<div>
<label>Social</label>
<input ref={SocialInputRef} type="number"
onFocus={()=>{
     inputOnFocus(SocialInputRef)
}}
onChange={()=>{
    inputOnChange(SocialInputRef,SocialSpanRef);
}}
onBlur={()=>{
    inputOnBlur(SocialInputRef);
}}>
</input>
<span ref={SocialSpanRef}></span>
</div>

</fieldset>
<div> 
<button type="button" onClick={()=>{

let English=Number(EnglishInputRef.current.value);
let Telugu=Number(TeluguInputRef.current.value);
let Hindi=Number(HindiInputRef.current.value);
let Science=Number(ScienceInputRef.current.value);
let Maths=Number(MathsInputRef.current.value);
let Social=Number(SocialInputRef.current.value);

let result;

if(English >=35 && Telugu >=35 && 
   Hindi >=35 && Science >=35 &&
   Maths >=35 && Social >=35 )
    {result="Pass";
}else{
     result="Fail";
}

let totalmarks=English+Telugu+Hindi+Maths+Science+Social

let perc=(totalmarks/600)*100
//alert(`${FirstNameInputRef.current.value} totalmarks are ${totalmarks}`);//

resultParaRef.current.innerHTML=`${FirstNameInputRef.current.value}
${LastNameInputRef.current.value} ${result} in Tenth with
totalmarks are ${totalmarks} with percentage ${perc.toFixed(2)}%`;

}}>Submit</button>
<button type="button" onClick={()=>{
      
      let HallticketNo="no";
      let RollNumber="no";
      let FullName="no";
    
   if(HallticketNo=="yes"||
    RollNumber=="yes"||
    FullName=="yes"){
      console.log("you can check  your results");
   }else{
    console.log("you can check your results");
   }   

}}>Result</button>
</div>
<p id="resultPara" ref={resultParaRef}></p>
</form>
</div>
  )
}

export default MarksSheet;
