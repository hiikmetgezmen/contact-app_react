import { useEffect, useState } from 'react'
import Form from './form/Form'
import List from './list/List'
import "./style.css"


function Contact() {
    const [contacts,setContacts] = useState([
        {
        name:"Hikmet",
        number:123
    },
    {
        name:"Ayşe Nur",
        number:123
    },
    {
        name:"Hikmet",
        number:123
    }
]);

    useEffect(()=>{
        console.log(contacts);
    },[contacts]);
  return (
    <div id='container'>
      <List contacts = {contacts}/>
      <Form addContact = {setContacts} contacts ={contacts}/>
    </div>
  )
}

export default Contact;
