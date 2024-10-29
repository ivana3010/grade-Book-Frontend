import { useEffect, useState } from "react";
import { useFetcher, useLoaderData, useNavigate } from "react-router-dom";
import StudentList from "./StudentList";
import { Button, Stack, TextField, Typography } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function Zadatak4b() {
    const [searchStudent, setSearchStudent] = useState("");
    const [students,setStudents] =useState( useLoaderData());
    const fetcher = useFetcher();
    const nav=useNavigate();
    useEffect(()=>{
        if(fetcher.data){
            setStudents(fetcher.data);
        }
    },[fetcher.data]);


    return (
        <Stack direction="column">
            <Typography variant='h2' align="center" sx={{ color: "#ad5e00", marginTop:"20px" }}>Students</Typography>
            <Stack direction="row">
                <TextField
                    placeholder="Search..."
                    value={searchStudent}
                    onChange={(e) => {
                        setSearchStudent(e.target.value);
                        fetcher.load(`?searchStudent=${encodeURIComponent(e.target.value)}`);
                    }}
                    sx={{
                        margin: "20px auto",
                        width: "80%",
                        border: "1px solid #4d5e00",
                        borderRadius: "5px",
                        maxWidth: "400px",
                        backgroundColor: "white"
                    }}
                />
            </Stack>
            <Stack direction="row" justifyContent="center" sx={{ margin: "20px 0" }}>
                <Button sx={{ color: "#ad5e00", justifyContent: "center", width: "10%"  }} onClick={e => nav("/zadatak4b/add")}>
                    <PersonAddIcon sx={{ marginRight: "5px", color: "#ad5e00" }} />Add student
                </Button>
            </Stack>
            <StudentList students={students} />
        </Stack>
    );
}

export default Zadatak4b;