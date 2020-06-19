import React from 'react';
import { TEA_ROUTE }  from './apiConstants';
import { Link } from 'react-router-dom';


const TeaString = ({name, country, date, id, renderValue}) => {

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
            renderValue();
        } else {
            return null;
        }
    }

    return(
        <div className='teaString'>
            <div className='teaString_link-div'>
                    <div className='teaString_link-innerDiv'>
                        <Link className='teaString_link' to={`/tea/${id}`}>
                            <p className='teaString_name'>{name}</p> 
                            <div className="teaString_info">
                                <p className='teaString_country'>{country}</p>
                                <p className ='teaString_date'>{date}</p>
                            </div>
                        </Link>     
                    </div>   
            </div> 
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