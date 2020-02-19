import React, { useState } from 'react'

const TeamForm = props => {

    const [ member, setMember ] = useState([
        {
            id: "",
            name: "",
            email: "",
            class: "",
            level: ""
          }
    ]);

    const handleChanges = event => {
        setMember({ ...member, [event.target.name]: event.target.value })
    }

    const submitForm = event => {
        console.log("Submitting!");
        event.preventDefault();
        props.addNewMember(member);
        setMember({
            name: "",
            email: "",
            class: "",
            level: ""
        })
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name: </label>
            <input 
            type="text"
            placeholder="Enter Name"
            id="name"
            name="name"
            onChange={handleChanges}
             />
             <label htmlFor='email'>Email: </label>
            <input 
            type="email"
            placeholder="Enter Email"
            id="email"
            name="email"
            onChange={handleChanges}
             />
             <label htmlFor='class'>Class: </label>
            <input 
            type="text"
            placeholder="Enter Class"
            id="class"
            name="class"
            onChange={handleChanges}
             />
             <label htmlFor='level'>Level: </label>
            <input 
            type="number"
            placeholder="Enter Level"
            id="level"
            name="level"
            onChange={handleChanges}
             />

            <button type='submit'>Add Member</button>
        </form>
    )
}


export default TeamForm