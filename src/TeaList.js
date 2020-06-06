import React, {useState, useEffect} from 'react';
import { TEA_ROUTE } from './apiConstants';
import TeaString from './TeaString';


const TeaList = () => {

    const [teaList, setTeaList] = useState([]);
    const zmianaWTeaList = '';
    // !! co wrzucić w [] w useEffect?

    useEffect(() => {

        fetch(TEA_ROUTE)
            .then(response => response.json())
            .then(data => {
                console.log('data:', data);
                setTeaList(prevTeaList => data);
                console.log('teaList:', teaList)
            })
            .catch(error => {
                console.log('myError:', error);
            });

    }, [zmianaWTeaList]);

    return(
        <ul>
            {teaList.map(tea => {
                return (
                    <li key={tea.id}> 
                        <TeaString name={tea.name} country={tea.country} date={tea.date} id={tea.id}/> 
                    </li>
                )
            })}
        </ul>
    )
}

export default TeaList;
