import React from 'react'
import axios from 'axios';
const DeleteButton = (props) => {
    const { petId, successCallback } = props;
    const deletePet = e => {
        axios.delete('http://localhost:8000/api/pets/' + petId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button className="btn btn-success mt-2" onClick={deletePet}>
            Adopt
        </button>
    )
}
export default DeleteButton;

