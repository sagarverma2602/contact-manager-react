import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    const deleteContactHandler=(id)=>{
      props.getContactId(id)
    }
    const renderCL=props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} clickhandler={deleteContactHandler} key={contact.id} />
        )
    })
  return (
    <div className='ui celled list' >{renderCL}</div>
  )
}

export default ContactList