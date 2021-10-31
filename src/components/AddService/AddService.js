import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://possessed-village-08190.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
        console.log(data)
    };
    return (
        <div className="service-form">
            <h2>please add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="name" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="img url" />
                <input style={{ backgroundColor: "blue", color: "white", borderRadius: "5px", marginRight: "5px" }} type="submit" />
            </form>
        </div>
    );
};

export default AddService;