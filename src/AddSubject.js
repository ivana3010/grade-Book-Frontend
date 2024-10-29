import { useImmer } from "use-immer";
import SubjectForm from "./SubjectForm";
import { useNavigate } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { add_subject } from "./data/SubjectSource";

const AddSubject = () => {
    const nav = useNavigate();
    const [subject, setSubject] = useImmer({ name: "", fund: "" });
    const change_handler = (prop, value) => {
        setSubject(draft => {
            draft[prop] = value;
        })
    }
    const handleSubmit = async () => {
        try {
            await add_subject(subject);
            nav("/zadatak4a");
            alert("Subject added successfully");
        } catch (error) {
            console.error("Error adding subject", error);
        }
    };
    return <Stack>
        <Typography variant="h3" sx={{ color: "#ad5e00", padding: "20px" }}>Add new subject</Typography>
        <SubjectForm subject={subject} onChange={change_handler} />
        <Stack direction="row" sx={{ justifyContent: "space-between", margin: "auto 20px " }}>
            <Button variant="contained" sx={{ backgroundColor: "#ad5e00" }} onClick={e => nav(-1)}>Cancel</Button>
            <Button variant="contained" sx={{ backgroundColor: "#ad5e00" }} onClick={e => handleSubmit()}>Add</Button>
        </Stack>
    </Stack>
}
export default AddSubject;