import { useEffect, useState } from "react";
import SubjectList from "./SubjectList";
import { useFetcher, useLoaderData } from "react-router-dom";

function Zadatak1() {
    const [q, setQ] = useState("");
    const [subjects,setSubjects] =useState( useLoaderData());
    const fetcher = useFetcher();//za slanje zahteva na serveru
    useEffect(()=>{//treba ponovo da renderujemo stranicu, samo odabrani predmeti se prikazuju
        if(fetcher.data){
            setSubjects(fetcher.data);
        }
    },[fetcher.data]);

    return <>
        <input
            type="text"
            placeholder=" Search..."
            value={q}
            onChange={(e) => {
                setQ(e.target.value);
                fetcher.load(`?q=${encodeURIComponent(e.target.value)}`);//pomocu ovoga saljemo zahteve serveru svaki put kad se promeni

            }}
            className="search-input"
        />
        <SubjectList subjects={subjects} />
    </>

}
export default Zadatak1;