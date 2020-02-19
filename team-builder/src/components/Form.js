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

    

    return (
        <form>
            <label htmlFor='name'>Name</label>
            <input 
            type="text"
            placeholder="Enter Name"
            id="name"
            name="name"
             />
        </form>
    )
}


export default TeamForm