import axios from 'axios'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const api_domain = import.meta.env.VITE_API_DOMAIN

const Login = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const loginHandler = (event) => {
        event.preventDefault()
        axios.post(`${api_domain}/api/user/login`, data)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            alert("Loggedin successfully")
            navigate("/")
        })
        .catch(err => {
            console.log(err.response)
            alert(err.response.data.message)
        })
    }

    const changeHandler = (event) => {
        const tempData = {...data}
        tempData[event.target.name] = event.target.value
        setData(tempData)
    }
  return (
    <div>
        <form onSubmit = {loginHandler}>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Email ID</legend>
                <input type="email" className="input" name = "email" onChange = {changeHandler} placeholder="Email ID" value = {data.email}/>
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Password</legend>
                <input type="password" className="input" name = "password" onChange = {changeHandler} placeholder="Password" value = {data.password}/>
            </fieldset>
            <p>Don't have account? <Link to = "/register">Register</Link></p>
            <button className="btn btn-success">Login</button>
        </form>
    </div>
  )
}

export default Login