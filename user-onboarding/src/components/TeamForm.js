import React from 'react'

export default function TeamForm(props) {
const { values, update, submit } = props

const onChange = evt => {
  const name = evt.target.name;
  const value = evt.target.value;
  update(name,value);
}

const onSubmit = evt => {
  evt.preventDefault();
  submit();
}

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label> Name 
          <input
            type="text"
            name="name"
            value={values.name}
            placeholder="Type Team Member name"
            maxLength="30"
            onChange={onChange}
          />

        </label>
        <label> Email 
          <input
            type="email"
            name="email"
            value={values.email}
            placeholder="Type Team Member e-mail"
            maxLength="50"
            onChange={onChange}
          />

        </label>

         <label>Role
          {/* 🔥 STEP 5 - Make dropdown for role. */}
          <select value={values.role} name="role" onChange={onChange}>
            <option value=''>-- Select a Role --</option>
            <option value='Student'>Student</option>
            <option value='TL'>Team Lead</option>
            <option value='Instructor'>Instructor</option>
            <option value='Alumni'>Alumni</option>
            <option value='Founder and CEO'></option>
          </select>
        </label>
        <div className='submit'>
          <button>submit</button>
        </div>

      
    </div>

    </form>
    
  )
}


