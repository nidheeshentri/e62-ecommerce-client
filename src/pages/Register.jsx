import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
        <form>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Username</legend>
                <input type="text" className="input" placeholder="Username" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Email ID</legend>
                <input type="email" className="input" placeholder="Email ID" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Password</legend>
                <input type="password" className="input" placeholder="Password" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Confirm Password</legend>
                <input type="password" className="input" placeholder="Confirm Password" />
            </fieldset>
            <p>Don'Already have account? <Link to = "/login">Login</Link></p>
            <button className="btn btn-success">Register</button>
        </form>
    </div>
  )
}

export default Register