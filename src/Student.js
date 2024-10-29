import { Alert, Avatar, Box, Card, CardContent, Paper, Typography } from "@mui/material";
import "./Zadatak1.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { delete_student } from "./data/StudentSource";
import { useNavigate } from "react-router-dom";
const Student = ({student}) => {
    const st= student;
    const nav=useNavigate();
    const imageMap = {
        "Ivana Gabrić": "student1.jpg",
        "Kornelija Kornjacic": "student2.jpg",
        "Mila Vukicevic": "student353.jpg",
        "Marija Malesevic": "student402.jpg",
        "Nadja Lukic": "student403.jpg",
        "Anastasija Tojagic": "student404.jpg",
        "Aleksandra Tepavac": "student405.jpg",
        "Svetlana Tepavac": "student406.jpg",
        "Dusan Bogdanov": "student407.jpg",
        "Ivana Gabric": "student502.jpg",
    };
    const studentImage = imageMap[`${st.name} ${st.surname}`] || "default.jpg";

    const handleDelete = async () => {
        const confirmDelete = window.confirm(`Are you sure you want to delete ${st.name} ${st.surname}?`);
        if (confirmDelete) {
           
                await delete_student(st.studentId); 
                
                alert("Student deleted successfully");
                nav("/zadatak4b"); 
            
        }
    };
        return <Paper sx={{margin:"40px"}}>
            <Card className="card" sx={{ position:'relative'}}>
                <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                    <Avatar
                        alt={`${st.name} ${st.surname}`}
                        src={`/images/${studentImage}`}
                        sx={{ width: 56, height: 56, border: "3px solid red",borderColor:"#ad5e00" }}
                    />
                </Box>
                <CardContent>
                    <Typography className="typo" variant="h6">{st.name}</Typography>
                    <Typography className="typo" variant="h6">{st.surname}</Typography>
                    <Typography className="typo" variant="h6">Email: {st.email}</Typography>
                    <Typography className="typo" variant="h6">Class: {st.odeljenje.name}</Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 1 }}>
                    <EditIcon  sx={{ color: '#ad5e00' , fontSize:"28px", cursor:"pointer" }} onClick={() => nav(`/zadatak4b/edit/${st.studentId}`)}/>
                    <DeleteIcon sx={{ color: '#ad5e00', fontSize:"28px",cursor:"pointer" }} onClick={handleDelete}/>
                </Box>
            </Card>
            
            </Paper> 
}
export default Student;