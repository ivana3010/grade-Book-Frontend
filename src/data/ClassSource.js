export const get_classes = async () => {
    let t= await fetch("http://localhost:8080/school/classes");
    let tt= await t.json();
    return tt;
}