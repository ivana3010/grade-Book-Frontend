import { Stack, TextField } from "@mui/material"
import ClassesList from "./ClassesList";


const StudentForm = ({allClasses, onChange, student={name:"",surname:"",email:"",odeljenje:[]}}) => {
    return <Stack direction="column" sx={{padding:"20px", gap:"20px"}}>
            <TextField value={student.name} label="Name: " onChange={e=> onChange("name",e.target.value)} ></TextField>
             <TextField value={student.surname} label="Surname: " onChange={e=> onChange("surname",e.target.value)}></TextField>
             <TextField value={student.email} label="Email: " onChange={e=> onChange("email",e.target.value)}></TextField>
            <ClassesList classes={student.odeljenje} allClasses={allClasses} onChange={(v) => onChange("odeljenje", v)} />
            
            
    </Stack>
}
export default StudentForm;