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

    return(
        <div className='teaString'>
               <Link className='teaString_link' to={`/tea/${id}`}>
                    <div className='teaString_link-div'>
                        <p className='teaString_p1'>{name}</p> 
                        <p className='teaString_p2'>{country}</p>
                        <p className ='teaString_p3'>{date}</p>
                    </div>
                </Link>     
            <div>
                <Link to={`/editTea/${id}`}>
                <button className='teaString_btn btn-edit' alt='Edytuj'></button>
                </Link>   
                <button className='teaString_btn btn-delete' onClick={handleDelete}></button> 
            </div>
        </div>
    )
}

export default TeaString;    