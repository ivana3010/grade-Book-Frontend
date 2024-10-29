import {  Paper } from '@mui/material';
import Subject2 from './Subject2'

const SubjectList2 = ({subjects}) => {
    if (!Array.isArray(subjects)) {
        return <p>No subject available</p>;  
    }

    return <Paper sx={{backgroundColor: "#fddda2", boxShadow: "none"}}>  
            {subjects.map(v => <Subject2 key={v.subjectId} subject={v} />)}
    </Paper>
};
export default SubjectList2;