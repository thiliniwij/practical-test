import React from 'react';
import { useState, useEffect } from 'react';
import './Page.css';
import Axios from 'axios';

function Display(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [hobby, setHobby] = useState('');

    const [userList, setUserList] = useState([]);

    function addUserInfo(){
        Axios.post('http://localhost:3001/info', {
            name: name,
            email: email,
            phoneno: phoneno,
            hobby: hobby
        }).then(() => {
            console.log('success display');
        })
    }

    function getUser(){
        Axios.get(('http://localhost:3001/user').then((response) => {
            setUserList(response.data);
        }));
    }

   

    return(
        <div className='display-container'>
            <form className='display-box' action='#'>
                <i className="fa fa-user form-icon"></i>
                <input type="text" name="nm" placeholder="Name" onChange={(e) =>{
                    setName(e.target.value);
                }}/><br/>
                <i className="fa fa-envelope form-icon"></i>
                <input type="text" name="email" placeholder="Email" onChange={(e) =>{
                    setEmail(e.target.value);
                }}/><br/>
                <i className="fa fa-phone form-icon"></i>
                <input type="text" name="pno" placeholder="Phone Number" onChange={(e) => {
                    setPhoneno(e.target.value);
                }}/><br/>
                <i className="far fa-grin-alt form-icon"></i>
                <input type="text" name="hobby" placeholder="Hobbies" onChange={(e) => {
                    setHobby(e.target.value);
                }}/><br/>
                <button type='submit' onClick={addUserInfo}>Submit</button>
            </form>
            <div className='display-box' style={{marginTop: '15px'}}>
                <button onClick={getUser}>User Information</button>
                {userList.map((val, key) => {
                    return(
                        <div>
                            <h4>{val.username}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Display;