import { Box, Paper} from '@mui/material';
import Student from './Student'

const StudentList = ({students}) => {
    if (!Array.isArray(students)) {
        return <p>No students available</p>;  
    }

    return <Paper sx={{backgroundColor: "#fddda2"}}>
        
             <Box sx={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center", gap:"20px"}}>
                
            {students.map(v => <Student key={v.studentId} student={v} />)}
        </Box>
    </Paper>
       
     
};

export default StudentList;