import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';
const Create = () => {
    const [name, setName]=useState();
    const [price, setPrice]=useState();
    const [detail, setDetail]=useState();

    const navigate = useNavigate();


    function handleSubmit(e){
        e.preventDefault();
        axios.post("https://6437a3340c58d3b145754311.mockapi.io/API/CRUD",{
            name : name,
            price: price,
            detail: detail
        }).then((res)=>{
            console.log(res)
        })
        navigate("/read")
    }

  return (
    <div className='container col-sm-5 '>
     <Link to="/read" className='btn btn-outline-danger'>
                Read Details
            </Link>
        <div className="text text-center bg-dark mt-3 text-white">
            <h1>Add Products</h1>
        </div>
       

        <form onSubmit={handleSubmit}>
            <label>Product Name : </label>
            <input type="text" name='name' placeholder='Enter Product Name' value={name} onChange={(e)=>setName(e.target.value)} className='form-control'/>
<br />
            <label>Product Price :</label>
            <input type="number" name='price' placeholder='Enter Product Price' value={price} onChange={(e)=>setPrice(e.target.value)}  className='form-control'/>
<br />
            <label>Product Details :</label>
            <input type="text" name='detail' placeholder='Enter Product Details' value={detail} onChange={(e)=>setDetail(e.target.value)}  className='form-control'/>
            <br />
            <button className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default Create