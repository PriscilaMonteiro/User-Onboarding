import React, { useState, useEffect } from 'react'
import TeamForm from './TeamForm';
import Team from './Team';
import axios from 'axios';
import * as yup from 'yup';
import schema from '../validation/formSchema';
import '../App.css';

const initialFormValues = { 
  first_name: '', 
  role: '', 
  email: '', 
  password: '', 
  terms: '', 
}

const initialFormErrors = { 
  first_name: '', 
  role: '', 
  email: '', 
  password: '', 
  terms: '', 
}

  

const initialTeam = []

const initialDisabled = true


export default function App() {
  const [team, setTeam] = useState(initialTeam)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getTeam = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setTeam(res.data.data);
      }).catch(err => console.error(err))
  }
  const postNewMember = newMember => {
    axios.post('https://reqres.in/api/users', newMember)
    .then(res =>{
      setTeam([res.data, ...team]);
    }).catch(err => console.error(err));
    setFormValues(initialFormValues);
  }
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]})) 
  }
  const inputChange = (name, value) => {
    validate(name, value);
    

    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    });
  }
  const formSubmit = () => {
    const newTeamMember = {
      first_name: formValues.first_name.trim(),
      password: formValues.password.trim(),
      email: formValues.email.trim(),
      terms: formValues.terms.trim(),
      role: formValues.role,
    }

    postNewMember(newTeamMember);
  }

  useEffect(() => {
    getTeam()
  }, [])
// Disabled isnt working
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    
    <div className="container">
      <header><h1>User Onboarding</h1></header>
      
      <TeamForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
        
      {
        team.map(member => {
          return (
            <Team key={member.id} details={member}/>
          )  
        })
      }
           
    </div>
  )

}

