import { Stack, TextField } from "@mui/material"


const SubjectForm = ({onChange, subject={name:"",fund:""}}) => {
    return <Stack direction="column" sx={{padding:"20px", gap:"20px"}}>
            <TextField value={subject.name} label="Name: " onChange={e=> onChange("name",e.target.value)} ></TextField>
             <TextField value={subject.fund} label="Fund: " onChange={e=> onChange("fund",e.target.value)}></TextField>
            
    </Stack>
}
export default SubjectForm;