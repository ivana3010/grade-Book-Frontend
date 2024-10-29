import { useImmer } from "use-immer";
import SubjectForm from "./SubjectForm";
import {  useNavigate, useParams } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { get_subject,  update_subject } from "./data/SubjectSource";
import { useEffect } from "react";

const EditSubject = () => {
    const { subjectId } = useParams();
    const nav=useNavigate();
    const [subject,setSubject]= useImmer({name:"",fund:""});
    
    useEffect(() => {
        const fetchSubject = async () => {
            try {
                const data = await get_subject(subjectId);
                setSubject(data); 
            } catch (error) {
                console.error("Failed to fetch subject data", error);
            }
        };

        fetchSubject();
    }, [subjectId, setSubject]);

    const change_handler=(prop,value) =>{
        setSubject(draft =>{
            draft[prop]=value;
        })
        }
    const handleSubmit = async () => {
      try {
        await update_subject(subjectId, subject); 
        nav("/zadatak4a");  
    } catch (error) {
        console.error("Error updating subject", error);
    }
    };
    return <Stack>
            <Typography variant="h3" sx={{color:"#ad5e00", padding:"20px"}}>Edit subject {subject.name}</Typography>
            <SubjectForm subject={subject} onChange={change_handler} /> 
            <Stack direction="row" sx={{justifyContent:"space-between",margin:"auto 20px "}}>
                <Button variant="contained" sx={{backgroundColor:"#ad5e00"}} onClick={e=>nav(-1)}>Cancel</Button>
                <Button variant="contained" sx={{backgroundColor:"#ad5e00"}} onClick={e => handleSubmit()}>Done</Button>
            </Stack>
        </Stack>
}
export default EditSubject; 