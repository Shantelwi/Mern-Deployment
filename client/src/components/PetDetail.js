import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';
import {useParams, useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';

const PetDetail = (props) => {
    const [pet, setPet] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + id)
        .then( res => {
            console.log(res.data);
            setPet(res.data);
        })
        .catch( err => console.log(err) );
    }, []);
    return (
        <div className= 'card mt-5 mx-5'>
            <div className='card-body'>
                <h1>Details about: {pet.name}</h1>
                <p className="card-text">Name: {pet.name}</p>
                <p className="card-text">Type: {pet.type}</p>
                <p className="card-text">Description: {pet.description}</p>
                <p className="card-text">Skills: {pet.skills}</p>
                <DeleteButton petId={pet._id} successCallback={() => navigate("/")} />
            </div>
            <Link to={`/`}>Back Home</Link>
        </div>
    );
}
export default PetDetail;