import React from 'react';
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
const AdoptList = () => {
    const [petList, setPetList]= useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
        .then((response) => {
            console.log(response.data);
            setPetList(response.data);
        })
        .catch((err) => {
            console.log(err.response)
        });
    },[]);


    return (
        < div >
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Pet Shelter</span>
        </nav>
            <h4>These Pets are looking for a good home</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {petList.map((pet, index) => {
                        return (
                            <tr key={index}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={`/pets/update/${pet._id}`}>Edit</Link>
                                    |
                                    <Link to={`/pets/` + pet._id}>Details</Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
                <Link to={`/pets/`}>add a pet to the shelter</Link>
        </div >
    )
}
export default AdoptList;