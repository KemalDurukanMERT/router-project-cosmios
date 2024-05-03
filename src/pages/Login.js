import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
import { setUser } from "../features/userSlice";

const Login = ({login, setLogin}) => {

    //useState

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const dispatch = useDispatch()
    // const navigate = useNavigate()


    // event : olay
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("form submitlendi")

        console.log(name)
        console.log(surname)
        console.log(email)
        console.log(password)

        //todo Form submitlendiginde yapilacak islemler
        //! 1. islem kullanici giris yapti
        setLogin(true)

        //!2.islem kullanici bilgileri (redux)
        dispatch(setUser({name, surname, email, password}))
 


        setName("")
        setSurname("")
        setEmail("")
        setPassword("")


    }

  return (
    <form className="login"  onSubmit={handleSubmit}>
    <h1 className="text-center my-3">Login</h1>
      <div className="form-group my-3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group my-3">
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          className="form-control"
          id="surname"
          aria-describedby="emailHelp"
          placeholder="Enter your surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)} 
        />
      </div>
      <div className="form-group my-3">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group my-3">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      <button type="submit" className="btn btn-primary w-100">
        Submit
      </button>
    </form>
  );
};

export default Login;
