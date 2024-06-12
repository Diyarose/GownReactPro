import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewGown = () => {
    const [data,setData] = useState([])
    const fetchData = () => {
        axios.post("http://localhost:8080/view",data).then(
            (response) => {
                console.log(response.data)
                setData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
            }
        )
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            {data.map(
                                (value,index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.gimage} class="card-img-top" alt="..."></img>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.gname}</h5>
                                                <p class="card-text">{value.gid}</p>
                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewGown