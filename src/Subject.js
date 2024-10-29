import "./Zadatak1.css";
const Subject = (props) => {
    const su= props.subject;
    return <div className="card">
        
        <h1>{su.name}</h1>
        <h3>Subject ID: {su.subjectId}</h3>
        <h4>Fund: {su.fund}</h4>
        <button className="button" variant="contained">Details</button>
    </div>
}
export default Subject;