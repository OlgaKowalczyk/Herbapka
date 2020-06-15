import React, {useState, useEffect} from 'react';
import { TEA_ROUTE } from './apiConstants';
import TeaString from './TeaString';


const TeaList = () => {

    const [teaList, setTeaList] = useState([]);
    const [sortingValue, setSortingValue] = useState('date');
    // const numberOfTeas = teaList.length;
  
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

        if (a[sortingValue] < b[sortingValue]){
          return -1;
        }
        if (a[sortingValue] > b[sortingValue]){
          return 1;
        }
        return 0;
      }
    
    // const handleActualize = () => {
    //     fetch(TEA_ROUTE)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('TeaList-data:', data);
    //             setTeaList(data);
    //         })
    //         .catch(error => {
    //             console.log('TeaList-error:', error);
    //         });
    // }

    return(
        <div className='container'>
            <div className='teaString_sort'>
                <label className='sortLabel'>Sortuj po:</label>
                <br/>
                <select 
                    className='teaString_select'
                    name='sort'
                    value={sortingValue}
                    onChange={handleSort}>
                        <option>Sortuj po:</option>
                        <option value="date">dacie</option>
                        <option value="name">nazwie</option>
                        <option value="type">typie</option>
                        <option value="country">kraju</option>
                </select>
            </div>
            <div className='teaString_box'>
                <ul style={{listStyle: 'none'}}>
                    {(teaList.sort(compare)).map(tea => {
                        return (
                            <li key={tea.id}> 
                                <TeaString name={tea.name} country={tea.country} date={tea.date} id={tea.id}/> 
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TeaList;
