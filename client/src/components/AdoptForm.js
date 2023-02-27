import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const AdoptForm = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");
    const [errors, setErrors] = useState([""]);
    const navigate = useNavigate();
    
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets/', {
            name,
            type,
            description,
            skills
        })
            .then(res=>{
                console.log(res)
                navigate('/');
            })
            .catch(err => { 
                setErrors(err.response.data.errors);      
            })
    }

    return (
        <div >

            <form onSubmit={onSubmitHandler}>
                {errors && errors.length && 
                    errors.map((err,index) => (
                        <p key={index}>{err}</p>
                        ))}
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">Pet Shelter</span>
                </nav>
                <h4>Know a Pet looking for a home?</h4>
                <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >Name:</label>
                        <div className='col-sm-5'>
                        <input className="form-control" type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        { errors.name ? 
                            <p>{errors.name.message}</p>
                            : null
                        }
                </div><br/>
                <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Type:</label>
                        <div className='col-sm-5'>
                        <input className="form-control" type="text" value={type} name ="type" onChange={(e) => setType(e.target.value)} />
                        </div>
                        { errors.type ? 
                            <p>{errors.type.message}</p>
                            : null
                        }
                </div><br/>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Description:</label>
                    <div className='col-sm-5'>
                    <textarea className="form-control" type="text" value={description} name="description" onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    { errors.description ? 
                        <p>{errors.description.message}</p>
                        : null
                    }
                </div><br/>
                <div className="for-group row">
                    <label className="col-sm-2 col-form-label">Skills (optional):</label>
                    <div className='col-sm-5'>
                    <input className="form-control" type="text" value={skills} name="skills" onChange={(e) => setSkills(e.target.value)} />
                    </div>
                    { errors.skills ? 
                        <p>{errors.skills.message}</p>
                        : null
                    }
                </div>
                <button className="btn btn-primary mt-2" type="submit">Add Pet</button>
            </form>
            <Link to={`/`}>back to home</Link>
        </div>
    )
}
export default AdoptForm;