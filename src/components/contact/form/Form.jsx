import {useEffect, useState} from 'react'
import "../style.css"

const initalFormValues = {name:'',number:''};

function Form({addContact, contacts}) {
    const [form,setForm] = useState(initalFormValues);

    const onChangeInput = (e) =>{
        setForm({...form, [e.target.name]: e.target.value});
    }

    useEffect(()=>{
        setForm(initalFormValues);
    },[contacts]);

    const onSubmit = (e)=>{
        e.preventDefault();
        if(form.name===""  || form.number ==="" )
        return false;

        addContact([...contacts,form]);
        console.log(form);
    }
  return (
    <form onSubmit ={onSubmit}>
    <div>
      <input name='name' value={form.name} placeholder='name' onChange={onChangeInput}></input>
      <input name='number' value={form.number} placeholder='number' onChange={onChangeInput}></input>
      <button>Add</button>
    </div>
    </form>
  )
}

export default Form;
