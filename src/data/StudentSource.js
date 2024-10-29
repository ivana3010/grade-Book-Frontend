export const get_students = async () => {
    let t= await fetch("http://localhost:8080/school/students");
    let tt= await t.json();
    return tt;
}
export const search_students = async(searchStudent) => {
    let t=await fetch (`http://localhost:8080/school/students/search?name=${encodeURIComponent(searchStudent)}`);
    let tt=await t.json();
    return tt;
}
export const delete_student = async (studentId) => {
    const response = await fetch(`http://localhost:8080/school/students/${studentId}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Failed to delete student");
    }
    return response;
};
export const add_student = async (student) => {
    const response = await fetch("http://localhost:8080/school/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
    });

    if (!response.ok) {
        throw new Error("Error adding student");
    }

    return response;
};
export const update_student = async (studentId, updatedStudent) => {
    const response = await fetch(`http://localhost:8080/school/students/${studentId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedStudent),
    });

    if (!response.ok) {
        throw new Error("Failed to update student");
    }

    return response;
};
export const get_student = async (studentId) => {
    const response = await fetch(`http://localhost:8080/school/students/${studentId}`);
    if (!response.ok) {
        throw new Error("Failed to fetch student");
    }
    return response.json();
};