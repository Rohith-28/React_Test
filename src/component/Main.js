import React from 'react'
import './main.css'
import { useState,useEffect } from 'react'
import Dropdown from './Dropdown'

function Main(props) {
 const [value, setvalue] = useState(null)
 const [arr, setarr] = useState([])
 const [segementname,setname]=useState('')
 const [options,setoptions]=useState([
    {Label: "First Name" ,Value: "first_name"},
        { Label: "Last Name", Value: "last_name"},
        { Label: "Gender", Value: "gender"},
        { Label: "Age", Value: "age"},
         {Label: "Account Name", Value: "account_name"},
        {Label: "City" ,Value: "city"},
         {Label: "State" ,Value: "state"}
 ])

useEffect(()=>{
  setarr(["first_name","account_name"])
},[])
    const onchange=(val)=>{
        setvalue(val)
    }
const addSchema=()=>{
  if(value){
    console.log(value);
   setarr((arr)=>[
    ...arr,value
   ])
   setvalue(null)
  }
}
const render=()=>{
   return(
    arr.length>0  &&
    
    <div className='boxdropdown'>
        <Dropdown setarr={setarr} options={options} arr={arr} value={value} />
        </div>
     
  
        )
        
}
const saveSegment=async()=>{
  if(segementname&&arr.length>0){

    console.log(segementname);
    let schema=options.filter((current)=>arr.includes(current.Value))
console.log(schema);
const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "segment_name": segementname,
      "schema": schema
    })
  };
  try{
    await fetch('https://webhook.site/45245f61-9331-4d96-aa91-7c545f4650ad', requestOptions)
    .then(response => {console.log("reponse",response);
if(response.status===200){
  props.setmodal(false)
}else{
  alert("Please try Again After Some Time")
  props.setmodal(false)
}
} )          
}catch(e){
  alert("Please try Again After Some Time")
  props.setmodal(false)
}
}
}
return (
 
<>
<div >

<header>
<span className='arrow' style={{cursor:"pointer"}} onClick={()=>props.setmodal(false)}></span>

    <p className='heading'>Saving Segment</p>
</header>
<div className='innerbody'>
    <div className='segmentname'>
        <p>Enter the Name of the Segment</p>
        <input onChange={((e)=>setname(e.target.value))} type='textbox' placeholder='Name of the segment'/>
        <p>To Save your segment, you need to add the schemas to build the query</p>
    </div>
    <div className='traits'>
          <div  className='user'><span >.</span> - User Traits</div>
            <div className='group'><span>.</span> - Group Traits</div>
            
        
    </div>
    
      {render()}
     
  
   <div className='maindropdown'>
   <div className='colored-circle' style={{background:"lightgray"}}></div>
    <select  onChange={(e)=>onchange(e.target.value)}  id="schema">
    <option  value="Add schema to segment"   hidden>Add schema to segment</option>
    {options.map((option) => (
      !arr.includes(option.Value)&&
<option key={option.Value} value={option.Value}>{option.Label}</option>

))}
 
 
</select>
<div className='remove_dropdown'>
 <button disabled >&#8212;</button>
</div> 
</div>
<div className='addingschema'>

<p style={{cursor:value?"pointer":"no-drop" }} onClick={addSchema} >+Add new schema</p>

</div>

</div>
</div>
<footer>
  <div className='actionbutton'>
    
  <button onClick={saveSegment}  style={{background:"#5DDB78",color:"white",opacity:arr.length===0&&"0.5",cursor:arr.length===0 &&"no-drop"}}>Save the Segment</button>
  <button onClick={()=>props.setmodal(false)} style={{background:"white",color:"red"}}>Cancel</button>
  </div>
</footer>
</>
  )
}
export default Main;