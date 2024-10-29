import Subject from './Subject'

const SubjectList = ({subjects}) => {
    if (!Array.isArray(subjects)) {
        return <p>No subjects available</p>;  // ako subjects nije niz, ovo prikaye
    }

    return (
        <div className="cards">
            {subjects.map(v => <Subject key={v.subjectId} subject={v} />)}
        </div>
    );
};

export default SubjectList;