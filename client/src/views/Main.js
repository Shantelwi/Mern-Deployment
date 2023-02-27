import React, { useState, useEffect } from 'react';
import AdoptForm from '../components/AdoptForm';
import axios from 'axios';


const Main = () => {
    const [petList, setPetList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/')
            .then(res => {
                setPetList([...petList,res.data])
            })
            .catch((err) =>console.log(err))
    },[])

    return (
        <div>
            <AdoptForm />
        </div>
    )
}

export default Main;