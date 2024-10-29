import { useImmer } from "use-immer";
import StudentForm from "./StudentForm";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { add_student } from "./data/StudentSource";

const AddStudent = () => {
    const allClasses = useLoaderData();
    const nav = useNavigate();
    const [student, setStudent] = useImmer({ name: "", surname: "", email: "", odeljenje: null });
    const change_handler = (prop, value) => {
        setStudent(draft => {
            draft[prop] = value;
        })
    }
    const handleSubmit = async () => {
        try {
            await add_student(student);
            nav("/zadatak4b");
            alert("Student added successfully");
        } catch (error) {
            console.error("Error adding student", error);
        }
    };
    return <Stack>
        <Typography variant="h3" sx={{ color: "#ad5e00", padding: "20px" }}>Add new student</Typography>
        <StudentForm student={student} onChange={change_handler} allClasses={allClasses} />
        <Stack direction="row" sx={{ justifyContent: "space-between", margin: "auto 20px " }}>
            <Button variant="contained" sx={{ backgroundColor: "#ad5e00" }} onClick={e => nav(-1)}>Cancel</Button>
            <Button variant="contained" sx={{ backgroundColor: "#ad5e00" }} onClick={e => handleSubmit()}>Add</Button>
        </Stack>
    </Stack>
}
export default AddStudent;