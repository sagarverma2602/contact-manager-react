import React, { useState,useEffect } from "react"
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import {v4} from 'uuid'
function App() {
  const LOCAL_STORAGE_KEY="contacts"
  const [contacts,setContacts]=useState(()=>{
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))||[]
  })
  const addContactHandler=(contact)=>{
    setContacts([...contacts,{id:v4(),...contact}])
    
  }
  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])
  const deletehandler=(id)=>{
    const newcontactlist=contacts.filter((contact)=>{
      return contact.id!=id
    })
    setContacts(newcontactlist)

  }
  return (
    <div className="ui container">
    <Header/>
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts} getContactId={deletehandler}/> 
    </div>
  );
}

export default App;
