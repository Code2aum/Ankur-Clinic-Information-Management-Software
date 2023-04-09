import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Box,
  Heading,
} from 'grommet';
import './App.css';
import { Button } from 'grommet';
import {useHistory} from "react-router-dom"

const Admin = () => {
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  const token = localStorage.getItem("token");
  const history = useHistory();
  const fetchData = async () => {
    const res = await axios.get('http://localhost:3002/Admin_Doctor/');
    setData(res.data)
    console.log(res.data)
  }
  const deleteAction = async(email) => {
    await axios.post('http://localhost:3002/Admin_Update_Doctor?email=' + email)
    
  }
  const deleteAction1 = async(email) => {
    await axios.post('http://localhost:3002/Admin_Update_Patient?email=' + email)
    
  }
  const fetchData1 = async () => {
    const res = await axios.get('http://localhost:3002/Admin_Patient_list/');
    setData1(res.data.data)
    console.log(res.data.data)
  }
  useEffect(() => {
    fetchData()
    fetchData1()
    if(!token){
      history.push("/AdminLogin")
    }
  }, [])
  let check = false
  const getSchedule = () => {
    check = true
  };
  const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      style={{ zIndex: '1' }}
      {...props} />
  );

  return (
    
  
    <div>
      <AppBar>
        <a style={{ color: 'inherit', textDecoration: 'inherit'}} href="/"><Heading level='3' margin='none'>HMS</Heading> </a>
        <Button class="btn btn-outline-primary" variant='contained' onClick={()=>{localStorage.clear();history.push("/AdminLogin")}} > Logout</Button>
        </AppBar>

      <h1 className="text-center">Admin Page</h1>
      <h3 className="text-center">Doctor List</h3>
      
      <table border="1"  className="table">
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Gender</th>
            <th>Email id</th>
            <th>Schedule Number</th>
            <th>Delete Action</th>
         

          </tr>

        </thead>
        <tbody>
          {data.map((x) => {
            return (
                <tr>
              <td>{x?.NAME}</td>
              <td>{x?.GENDER}</td>
              <td>{x?.EMAIL}</td>
              <td>{x?.SCHED}</td>
              <td>
              <button className="btn btn-outline-danger" onClick={() => deleteAction(x?.EMAIL)}>Delete</button>
              </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='text-center'>
      <a href="http://localhost:3000/MakeDoc" target="_blank">
        <button className='btn btn-outline-success my-3'>Add Doctor</button>
      </a>
      </div>
      {<table border="1"  className="table my-4">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Gender</th>
            <th>Email id</th>
            <th>Delete Action</th>
          </tr>

        </thead>
        <tbody>
          {data1.map((x) => {
            return (
                <tr>
              <td>{x?.NAME}</td>
              <td>{x?.GENDER}</td>
              <td>{x?.EMAIL}</td>
              <td>
              <button className="btn btn-outline-danger" onClick={() => deleteAction1(x?.EMAIL)}>Delete</button>
              </td>
              </tr>
            )
          })}
        </tbody>
      </table>}
      <div className='text-center'>
      <a href="http://localhost:3000/createAcc" target="_blank">
        <button className='btn btn-outline-warning my-3'>Add Patient</button>
      </a>
      </div>
    </div>
  
  )
}

export default Admin