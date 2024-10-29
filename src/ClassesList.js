import {  FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material"
import { useState } from "react";

const ClassesList = ({classes,allClasses, onChange}) => {
    const[current,setCurrent] = useState("");
    if (!allClasses || allClasses.length === 0) {
        return <div>No classes available</div>;
      }
    return <Stack direction="column">
        <Stack direction="row">
            <FormControl variant="standard" sx={{ width:"150px"}}>
                <InputLabel>Class</InputLabel>
                    <Select
                    value={current}
                    onChange={(e) => {
                        const selectedClass = allClasses.find(v => v.classId === e.target.value);
                        setCurrent(e.target.value);
                        onChange(selectedClass); 
                    }}
                    >
                    {allClasses.map(v => (<MenuItem key={v.classId} value={v.classId}>{v.name}</MenuItem>))}
                </Select>
      </FormControl>
        </Stack>
    </Stack>
}
export default ClassesList;