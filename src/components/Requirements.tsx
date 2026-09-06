import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase.ts";
import { Requirement } from "../types/types.ts";
import { getReqs } from "../utils/api.ts";

function Requirements() {
  const [reqs, setReqs] = useState<Requirement[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getReqs();
      setReqs(data ?? []);
    })();
  }, []);

  return (
    <table>
        <th>
            <td>Deadline</td>
            <td>Note</td>
            <td>Subject</td>
        </th>
        {reqs.map((reqs) => (
                <tr key={reqs.id}>
                    <td>{reqs.deadline}</td>
                    <td>{reqs.note}</td>     
                    <td>{reqs.subject}</td>
                </tr>
            ))}
    </table>
  );
}

export default Requirements;
