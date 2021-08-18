import '../App.css';
import React, { useState } from 'react'

const Team = [
  { Name: 'Austen Allred', Role: 'Founder & CEO', email: 'austen@lambda.com' },
  { Name: 'Chris Atoki', Role: 'Instructor', email: 'chris@lambda.com' },
  { Name: 'Brit hemming', Role: 'Instructor', email: 'brit@lambda.com' },
  { Name: 'Priscila Monteiro', Role: 'Student', email: 'priscila@lambda.com' }

]
const initialFormValues = { Name: '', Role: '', email: '' }

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [team, setTeam] = useState(Team)

  const change =(event) => {
    const { value, name } = event.target
    setFormValues({...formValues, [name]:value})
  }

  const submit = (event) => {
    event.preventDefault()
    const newMembers = {
      Name: formValues.Name.trim(),
      Role: formValues.Role.trim(),
      email: formValues.email.trim(),
    }
    setTeam([...team, newMembers])
    setFormValues(initialFormValues)
  }

  return (
    
    <div className="form container">
      <h1>Team Builder</h1>
        <div className="form container" >
          {
            team.map((member, idx) => {
            return <div className='form-group inputs ' 
            key={idx}>{member.Name} - {member.Role} - {member.email}</div>
            })
          }
        </div>
        
          <form className="form container" onSubmit={submit}>
            <label>Name
              <input
                type='text'
                name='Name'
                onChange={change}
                value={formValues.Name}
              />
            </label>
            <label> E-mail
              <input
                type='text'
                name='Role'
                onChange={change}
                value={formValues.Role}
              />
            </label>
            <label>Role
              <select value={formValues.role} name="role" onChange={change}>
            <option value=''>-- Select a Role --</option>
            <option value='Student'>Student</option>
            <option value='TL'>Team Lead</option>
            <option value='Instructor'>Instructor</option>
            <option value='Alumni'>Alumni</option>
            <option value='Founder and CEO'></option>
          </select>
            </label>
            <button>submit</button>
          </form>
        {/* </header>  */}
         
    </div>
  )

}

export default App;