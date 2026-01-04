import React, { useState } from 'react';
import Userform from './components/Userform';
import Userdata from './components/Userdata';

const App = () => {
  const data=[
    {
      id:"name",
      label:"Name",
      inpuType:"text",
      buttonName:"Next",
      placeholder:"Your Name.."
    },
    {
      id:"email",
      label:"Email",
      inpuType:"email",
      buttonName:"Next",
      placeholder:"Your Email.."
    },
    {
      id:"dob",
      label:"DOB",
      inpuType:"date",
      buttonName:"Next",
      placeholder:""
    },
    {
      id:"password",
      label:"Password",
      inpuType:"password",
      buttonName:"Submit",
      placeholder:""
    }
  ];

  const [form, setForm] = useState(data);
  const [index, setIndex] = useState(0);
  const [inputVal,setInputVal]=useState("");
  const [isSubmitted,setIsSubmitted]=useState(false);
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    dob:"",
    password:""
  })

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(index===form.length-1){
      setIsSubmitted(true);
      console.log("Forms Submitted");
    }
    else
    setIndex(prev=>prev+1);
    setInputVal("");
  }

  const handleBack=(e)=>{
    e.preventDefault();
    setIndex(prev=>prev-1);
  }

  const handleInputChange=(e)=>{
    const id=e.target.id;
    const val=e.target.value;
    setInputVal(val);
    const copyFormData={...formData};
    copyFormData[id]=val;
    setFormData(copyFormData);
  }
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      {!isSubmitted ? <Userform index={index} form={form} inputVal={inputVal} handleBack={handleBack} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>:<Userdata formData={formData}/>}
    </div>
  )
}

export default App;