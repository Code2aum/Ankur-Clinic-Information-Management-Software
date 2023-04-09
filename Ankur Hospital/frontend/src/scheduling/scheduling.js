import {TextField, Typography, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import { Box } from '@mui/material/';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./events";


const Scheduling = () => {
    const [doctorList, setDoctorList] = useState([]);
    const [dateList, setDateList] = useState([]);

    const [selectedDoctor, setselectedDoctor] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [concerns, setConcerns] = useState("");
    
    useEffect(() => {
      const fetchDetails = async()=>{
        const doctorList = (await axios.get("http://localhost:3001/docInfo")).data;
        setDoctorList(doctorList?.data);

        const dateList = (await axios.get("http://localhost:3001/Admin_appointment")).data;
        setDateList(dateList?.data);
      }
      fetchDetails();
    }, [])
    
    console.log(doctorList, dateList);

  return (
    <Box sx={{
        width:"100%",
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"90px 20px 90px 20px",
        gap:"20px"
    }} >
        <Typography variant="h1" >Schedulings</Typography>
        <FormControl sx={{width:"300px"}} >
        <InputLabel id="demo-simple-select-label">Select Doctor</InputLabel>
        <Select
        sx={{
            width:"200px"
        }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedDoctor}
            label="Select Doctor"
            onChange={(e)=>setselectedDoctor(e.target.value)} fullWidth
  >
   {
    doctorList?.map !=undefined && doctorList?.map(d=>(
        <MenuItem value={d?.email} >{d?.name}</MenuItem>
    ))
   }
  </Select>
  <Scheduler events={EVENTS} />

<TextField label={"Concerns"} multiline rows={3} fullWidth sx={{margin:"20px 0px"}} placeholder={"Enter your Concerns"} value={concerns} onChange={e=>setConcerns(e.target.value)} />

<TextField label={"Symptoms"} multiline rows={3} fullWidth sx={{margin:"20px 0px"}} placeholder={"Enter your Symptoms"}  value={symptoms} onChange={e=>setSymptoms(e.target.value)} />




</FormControl>
    </Box>
  )
}

export default Scheduling