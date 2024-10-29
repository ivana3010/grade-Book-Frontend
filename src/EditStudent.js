import { useImmer } from "use-immer";
import StudentForm from "./StudentForm";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { get_student, update_student } from "./data/StudentSource";
import { useEffect } from "react";

const EditStudent = () => {
    const { studentId } = useParams();
    const allClasses=useLoaderData();
    const nav=useNavigate();
    const [student,setStudent]= useImmer({name:"",surname:"",email:"",odeljenje:null});
    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const data = await get_student(studentId);
                setStudent(data);  
            } catch (error) {
                console.error("Failed to fetch student data", error);
            }
        };

        fetchStudent();
    }, [studentId, setStudent]);
    const change_handler=(prop,value) =>{
        setStudent(draft =>{
            draft[prop]=value;
        })
        }
    const handleSubmit = async () => {
      try {
        await update_student(studentId, student); 
        nav("/zadatak4b");  
    } catch (error) {
        console.error("Error updating student", error);
    }
    };
    return <Stack>
            <Typography variant="h3" sx={{color:"#ad5e00", padding:"20px"}}>Edit student {student.name} {student.surname}</Typography>
            <StudentForm student={student} onChange={change_handler} allClasses={allClasses}/> 
            <Stack direction="row" sx={{justifyContent:"space-between",margin:"auto 20px "}}>
                <Button variant="contained" sx={{backgroundColor:"#ad5e00"}} onClick={e=>nav(-1)}>Cancel</Button>
                <Button variant="contained" sx={{backgroundColor:"#ad5e00"}} onClick={e => handleSubmit()}>Done</Button>
            </Stack>
        </Stack>
}
export default EditStudent;