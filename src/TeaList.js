import React, {useState, useEffect} from 'react';
import { TEA_ROUTE } from './apiConstants';
import TeaString from './TeaString';


const TeaList = () => {

    const [teaList, setTeaList] = useState([]);
    const [sortingValue, setSortingValue] = useState('date');
  
    useEffect(() => {
        fetch(TEA_ROUTE)
            .then(response => response.json())
            .then(data => {
                console.log('TeaList-data:', data);
                setTeaList(data);
            })
            .catch(error => {
                console.log('TeaList-error:', error);
            });
    }, [sortingValue]);

    const handleSort = (e) => {
        setSortingValue(e.target.value);
        console.log('sortingValue:', sortingValue)
    }

    function compare(a, b) {

        if (a.sortingValue < b.sortingValue){
          return -1;
        }
        if (a.sortingValue > b.sortingValue){
          return 1;
        }
        return 0;
      }


    return(
        <div className='container'>
            <label>Sortuj po:</label>
            <select
                name='sort'
                value={sortingValue}
                onChange={handleSort}>
                    <option>Wybierz</option>
                    <option value="date">dacie</option>
                    <option value="name">nazwie</option>
                    <option value="type">typie</option>
                    <option value="country">kraju</option>
            </select>
            <ol>
                {(teaList.sort(compare)).map(tea => {
                    return (
                        <li key={tea.id}> 
                            <TeaString name={tea.name} country={tea.country} date={tea.date} id={tea.id} /> 
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default TeaList;
