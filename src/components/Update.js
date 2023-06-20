import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'


const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [detail, setDetail] = useState("");

    const navigate = useNavigate()

    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setPrice(localStorage.getItem("price"))
        setDetail(localStorage.getItem("detail"))
    },[])

    function handleUpdate(e){
  e.preventDefault()
  axios.put(`https://6437a3340c58d3b145754311.mockapi.io/API/CRUD/${id}`,{
    name : name,
    price: price,
    detail: detail
  }).then(()=>{
    navigate("/read")
  })
    }
    return (
        <>
            <div className='container col-md-5'>
                <Link to="/read" className='btn btn-outline-danger'>
                    Read Details
                </Link>
                <div className="text text-center bg-dark mt-3 text-white">
                    <h1>Update Details</h1>
                </div>


                <form>
                    <label>Product Name : </label>
                    <input type="text" name='name' placeholder='Update Product Name'
                        value={name}
                         onChange={(e)=>setName(e.target.value)}
                        className='form-control' />
                    <br />
                    <label>Product Price :</label>
                    <input type="number" name='price' placeholder='Update Product Price'
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                        className='form-control' />
                    <br />
                    <label>Product Details :</label>
                    <input type="text" name='detail' placeholder='Update Product Details'
                         value={detail} 
                         onChange={(e)=>setDetail(e.target.value)} 
                        className='form-control' />
                    <br />
                    <button className='btn btn-primary' onClick={handleUpdate}>Update</button>
                </form>
            </div>
        </>
    )
}

export default Update