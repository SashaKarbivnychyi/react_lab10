import { useState, useEffect } from "react";
import Person from "../Person/Person";

export default function People() {
    const [peopleList, setPeopleList] = useState([]);
    const fetchPeople = async () => {
        try {
            const res = await fetch("https://randomuser.me/api/?" + new URLSearchParams({
                results: 10
            }).toString())

            if (!res.ok) {
                throw new Error(`Status: ${res.status}`);
            }

            return await res.json();
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPeople();
            if (data) {
                console.log(data);
                setPeopleList(data.results);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h1>API Results</h1>
            <div>
                {
                    peopleList.map(x => (
                        <Person
                            name={x.name.first}
                            surname={x.name.last}
                            age={x.dob.age}
                            image={x.picture.medium}
                            key={x.id.value}
                        />
                    ))
                }
            </div>
        </>
    )
}