export const get_teachers = async () => {
    let t= await fetch("http://localhost:8080/school/teachers");
    let tt= await t.json();
    return tt;
}