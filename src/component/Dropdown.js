import React,{useState} from 'react'
import './dropdown.css'
function Dropdown(props) {
  const [counter,setcount]=useState([1,2])
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
    const [options,setoptions]=useState([
        {Label: "First Name" ,Value: "first_name"},
            { Label: "Last Name", Value: "last_name"},
            { Label: "Gender", Value: "gender"},
            { Label: "Age", Value: "age"},
             {Label: "Account Name", Value: "account_name"},
            {Label: "City" ,Value: "city"},
             {Label: "State" ,Value: "state"}
     ])
  const handletext=async(e)=>{
    console.log(e.target.value,props.arr);
    
    
   let prv= e.target.getAttribute("prvvalue");
   console.log(prv);
   let newarr=props.arr
   
   let index= newarr.findIndex((x)=>x===prv)
   console.log(index);
   newarr.splice(index, 1, e.target.value);
  console.log(newarr);
  await props.setarr(()=>[...newarr])
   
  
  
    console.log(props.arr);
  }  
  const removedropdown = (value) => {
console.log("remove",value);
props.setarr((current) =>
current.filter((arr) => arr !== value)
);
  };
 
  return (
  
    props.arr.map((count)=>
    <div key={count} className='sub_dropdown'> 
   <div className='colored-circle' style={{background:count==="account_name"?"red":"#5DDB78"}}></div>
  <select prvvalue={count} value={count}  onChange={(e)=>handletext(e)}  id="schema">
    {
    options.map((option) => (
props.arr.includes( option.Value)?
<option key={option.Value} default hidden value={option.Value}>{option.Label}</option>:<option key={option.Value} onClick={(e)=>console.log(e)}  value={option.Value}>{option.Label}</option>

))}


</select>
<div className='remove_dropdown'>
  <button  style={{cursor:"pointer"}} onClick={(e)=>removedropdown(e.target.value)} value={count}>&#8212;</button>
</div>
</div>
)
  )
}

export default Dropdown

