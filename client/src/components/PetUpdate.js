import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, useNavigate, useParams} from "react-router-dom";

const PetUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log('id', id);
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res => {
                console.log('update',res);
                console.log(res.data);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkills(res.data.skills);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])
    const updatePet = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${id}`,{
            name,
            type,
            description,
            skills
        }
        )
            .then(res => {
                navigate("/");
            })
            .catch(err => console.log(err));  
    }
    console.log(name,type,description,skills)
    
    return (
        <div>
            {loaded && (
                <form onSubmit = {updatePet}>
                    <nav className="navbar navbar-light bg-light">
                        <span className="navbar-brand mb-0 h1">Pet Shelter</span>
                    </nav>
                    <h3>Edit {name}</h3>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Name:</label><br/>
                        <div className='col-sm-5'>
                            <input className="form-control" type="text" name="name" value={name} 
                            onChange = {(e) => {setName(e.target.value)}} />
                        </div>
                    </div><br/>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Type:</label><br/>
                        <div className='col-sm-5'>
                            <input className="form-control" type="text" name="type" value={type} 
                            onChange = {(e) => {setType(e.target.value)}} />
                        </div>
                    </div><br/>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Description:</label><br/>
                        <div className='col-sm-5'>
                            <input className="form-control" type="text" name="description" value={description} 
                            onChange = {(e) => {setDescription(e.target.value)}} />
                        </div>
                    </div><br/>
                    <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Skills:</label>
                        <div className='col-sm-5'>
                            <input className="form-control" type="text" name="skills" value={skills} 
                            onChange = {(e) => {setSkills(e.target.value)}} />
                        </div>
                    </div>
                    <input className="btn btn-primary mt-2" type="submit" value="Update" />
                </form>
            )}
            <Link to={`/`}>back to home</Link>
        </div>
    )
}
export default PetUpdate;
