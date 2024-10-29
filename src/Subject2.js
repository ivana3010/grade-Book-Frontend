
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { delete_subject } from "./data/SubjectSource";

const Subject2 = (props) => {
    const su= props.subject;
    const nav=useNavigate();

    const handleDelete = async () => {
      const confirmDelete = window.confirm(`Are you sure you want to delete ${su.name} ?`);
      if (confirmDelete) {
         
              await delete_subject(su.subjectId); 
              
              alert("Subject deleted successfully");
              nav("/zadatak4a"); 
          
      }
  };
   
    return <Accordion sx={{backgroundColor:"#white", width:"30%", display:"inline-block", margin:"20px", border: "2px solid #ad5e00", borderRadius: "12px", transition: "all 0.3s ease",}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>{su.name}</Typography>
        </AccordionSummary>
        <AccordionDetails align="center">
        <Typography variant="h4">
            Subject details:
            </Typography>
            <Typography>
            Subject ID: {su.subjectId} 
            </Typography>
            <Typography>
            Fund: {su.fund}
            
            </Typography>
            <EditIcon  sx={{ color: '#ad5e00' , fontSize:"28px", cursor:"pointer",margin:"10px" }} onClick={() => nav(`/zadatak4a/edit/${su.subjectId}`)}/>
            <DeleteIcon sx={{ color: '#ad5e00', fontSize:"28px",cursor:"pointer",margin:"10px"  }} onClick={handleDelete}/>
          
        </AccordionDetails>
      </Accordion>
}
export default Subject2;