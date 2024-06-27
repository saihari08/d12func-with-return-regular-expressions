import logo from './logo.svg';
import './App.css';
import TenthForm from './components/TenthForm';

function App() {

let calculateResult=(engMarks,telMarks,
  hindiMarks,sciMarks,socMarks,mathsMarks)=>{
 
 
let totalMarks= engMarks+telMarks+
hindiMarks+sciMarks+socMarks+mathsMarks

let perc=totalMarks/600*100;
let passMarks=35;
let result;

if(engMarks>=passMarks && 
  telMarks>=passMarks &&
  hindiMarks>=passMarks &&
  sciMarks>=passMarks &&
  socMarks>=passMarks &&
  mathsMarks>=passMarks)
{
  result="pass";
}else{
  result="fail";
}
  
let summary={
  tot:totalMarks,
  perc:perc,
  res:result,
}
  return summary;
};

let totalMarks=calculateResult(88,75,90,80,70,95);

console.log(totalMarks);


  return (
    <div className="App">
     <TenthForm></TenthForm>
    </div>
  );
}

export default App;
