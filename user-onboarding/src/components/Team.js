import React from 'react'

export default function Team({ details }) {
  if (!details) {
    return <h3>Working fetching your Team Member&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <h2>{details.first_name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
      <p>Password: {details.password}</p>
      <p>Terms of Service: {details.terms}</p>

      {/* {
        !!details.terms && !!details.terms.length &&
        <div>
          Terms of Service:
          <ul>
            {details.terms.map((role, id) => <li key={id}>{role}</li>)}
          </ul>
        </div>
      } */}

    </div>
  )
}
