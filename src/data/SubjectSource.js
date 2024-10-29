export const get_subjects = async () => {
    let t= await fetch("http://localhost:8080/school/subjects");
    let tt= await t.json();
    return tt;
}
export const search_subjects = async(q) => {
    let t=await fetch (`http://localhost:8080/school/subjects/search?name=${encodeURIComponent(q)}`);
    let tt=await t.json();
    return tt;
}
export const delete_subject = async (subjectId) => {
    const response = await fetch(`http://localhost:8080/school/subjects/${subjectId}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Failed to delete subject");
    }
    return response;
};
export const add_subject = async (subject) => {
    const response = await fetch("http://localhost:8080/school/subjects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(subject),
    });

    if (!response.ok) {
        throw new Error("Error adding subject");
    }

    return response;
};
export const update_subject = async (subjectId, updatedSubject) => {
    const response = await fetch(`http://localhost:8080/school/subjects/${subjectId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedSubject),
    });

    if (!response.ok) {
        throw new Error("Failed to update subject");
    }

    return response;
};
export const get_subject = async (subjectId) => {
    const response = await fetch(`http://localhost:8080/school/subjects/${subjectId}`);
    if (!response.ok) {
        throw new Error("Failed to fetch subject");
    }
    return response.json();
};