import React from 'react';
import { TEA_ROUTE }  from './apiConstants';
import { Link } from 'react-router-dom';


const TeaString = ({name, country, date, id}) => {

    console.log('TeaString-id:', id)
    const handleDelete = (e) => {
        if (window.confirm('Na pewno chcesz usunąć ten wpis?')){
            fetch(`${TEA_ROUTE}/${id}`, {
            method: "DELETE"
            })
            .then(response => {
                console.log('deleteResponse:', response.ok);
            })
            .catch(error => {
                console.log('error', error);
            });
        } else {
            return null;
        }
        // fetch(TEA_ROUTE)
        // .then(response => response.json())
        // .then(data => {
        //     console.log('TeaString-newList:', data)
        //     actualize(data);
        // })
        // .catch(error => {
        //     console.log('TeaString-newList-error:', error);
        // });
    }

    return(
        <div className='teaString'>
            <Link to={`/tea/${id}`}>
                <p>{name} -- {country} -- {date}</p>
            </Link>
            <Link to={`/editTea/${id}`}>
                <button className='teaString_btn'>Edytuj</button>
            </Link>   
            <button className='teaString_btn' onClick={handleDelete}> Usuń </button> 
        </div>
    )
}

export default TeaString;    