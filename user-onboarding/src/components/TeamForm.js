import React from 'react'

export default function TeamForm(props) {
  const { 
    values, 
    submit,
    change, 
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='box'>
        <h2>Add a Team Member</h2>

        <button disable={disabled.toString()}>submit</button>

        <div className='errors'>
          <div>{errors.first_name}</div>
          <div>{errors.email}</div>
          <div>{errors.terms}</div>
          <div>{errors.role}</div>
          <div>{errors.password}</div>
        </div>

      </div>

      <div className='form-group inputs'>
        <h2>Informations</h2>

        <label> Name 
          <input
            type="text"
            name="first_name"
            value={values.first_name}
            onChange={onChange}
          />
        </label>
        <label> Email 
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label> Password 
          <input
            type="text"
            name="password"
            value={values.password}
            onChange={onChange}
          />
        </label>
         <label>Role
          <select value={values.role} name="role" onChange={onChange}>
            <option value=''>-- Select a Role --</option>
            <option value='Student'>Student</option>
            <option value='TL'>Team Lead</option>
            <option value='Instructor'>Instructor</option>
            <option value='Alumni'>Alumni</option>
            <option value='CEO'>Founder and CEO</option>
          </select>
        </label>
         <div className='form-group checkboxes'>
              <h2>Terms of Service</h2>
              <label>Yes
                <input
                  type="radio"
                  name="terms"
                  value="yes"
                  checked={values.terms === 'yes'}
                  onChange={onChange}
                />

              </label>

              <label>No
                <input
                  type="radio"
                  name="terms"
                  value="no"
                  checked={values.terms === 'yes'}
                  onChange={onChange}
                />

              </label>

              </div>
      </div>
    </form>
  )
}


