import React from 'react'
import user from '../images/user.png'
const ContactCard = (props) => {
    const {id,name,email}=props.contact
    return (
        <div className='item' key={id}>
            <img className='ui avatar image' src={user}/>
            <div className='content'>
                <div className='header'>
                    {name}
                </div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon"
            style={{color:"red",marginTop:'7px'}}
            onClick={()=>props.clickhandler(id)}></i>
        </div>
    )
}

export default ContactCard