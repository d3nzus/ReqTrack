import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";

type Subject = {
    id: string;
    name: string;
};

function DbTest() {
    const [subjects, setSubjects] = useState<Subject[]>([]);

    useEffect(() => {
        getSubjects();
    }, []);

    async function getSubjects() {
        const { data, error } = await supabase.from('subjects').select();

        if (error) {
            console.error(error);
            return;
        }

        setSubjects(data);
    }

    return (
        <ul>
            {subjects.map((subjects) => (
                <li key={subjects.id}>{subjects.name}</li>
            ))}
        </ul>
    );
}

export default DbTest;