import { useEffect, useState } from "react";
import { useFetcher, useLoaderData, useNavigate } from "react-router-dom";
import { Button, Stack, TextField, Typography } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SubjectList2 from "./SubjectList2";

function Zadatak4a() {
    const [q, setQ] = useState("");
    const [subjects,setSubjects] =useState( useLoaderData());
    const fetcher = useFetcher();
    const nav=useNavigate();
    useEffect(()=>{
        if(fetcher.data){
            setSubjects(fetcher.data);
        }
    },[fetcher.data]);


    return (
        <Stack direction="column">
            <Typography variant='h2' align="center" sx={{ color: "#ad5e00", marginTop:"20px" }}>Subjects</Typography>
            <Stack direction="row">
                <TextField
                    placeholder="Search..."
                    value={q}
                    onChange={(e) => {
                        setQ(e.target.value);
                        fetcher.load(`?q=${encodeURIComponent(e.target.value)}`);
                    }}
                    sx={{
                        margin: "20px auto",
                        width: "80%",
                        border: "0px solid",
                        borderRadius: "5px",
                        maxWidth: "400px",
                        backgroundColor: "white"
                        
                    }}
                />
            </Stack>
            <Stack direction="row" justifyContent="center" sx={{ margin: "20px 0" }}>
                <Button sx={{ color: "#ad5e00", justifyContent: "center", width: "18%",fontWeight:"bold"  }} onClick={e => nav("/zadatak4a/add")}>
                    <PersonAddIcon sx={{ marginRight: "5px", color: "#ad5e00",fontSize:"35px" }} />Add subject
                </Button>
            </Stack>
            <SubjectList2 subjects={subjects} />
            
        </Stack>
        
    );
}

export default Zadatak4a;