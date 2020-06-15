import React, { Component } from 'react';
import { TEA_ROUTE } from './apiConstants';
import { Link } from 'react-router-dom';

class Tea extends Component {

    state = {
        name: '',
        country: '',
        info: '',
        brewing: '',
        smell: '',
        taste: '',
        type: '',
        comment: '',
        date: '',
        id: this.props.match.params.id
    }
    
    componentDidMount(){
        
        const id = this.props.match.params.id;

        fetch(`${TEA_ROUTE}/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Tea-data: ', data);
                this.setState({
                    name: data.name,
                    country: data.country,
                    info: data.info,
                    brewing: data.brewing,
                    smell: data.smell,
                    taste: data.taste,
                    aroma: data.aroma,
                    comment: data.comment,
                })
            })
            .catch(error => {
                console.log('Tea-error', error);
            });
        };
      

    render(){
        
        const {name, country, info, brewing, smell, taste, type, comment, id} = this.state;
        const handleDelete = (e) => {
                    const id = this.props.match.params.id;
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

        return(
            <div className='container-tea'>
                <div className='table-box'>
                    <table>
                        <thead>
                            <tr>
                                <th className='tea_name' colSpan='2'>{name}</th>
                            </tr>
                        </thead>
                        <div className='tableScroll'>
                            <tbody>
                                <tr>
                                    <th>
                                        Kraj pochodzenia:
                                    </th>
                                    <td>
                                        {country}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Typ:
                                    </th>
                                    <td>
                                        {type}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Dodatkowe informacje:
                                    </th>
                                    <td>
                                        {info}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Sposób parzenia:
                                    </th>
                                    <td>
                                        {brewing}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Wrażenia zapachowe:
                                    </th>
                                    <td>
                                        {smell}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Wrażenia smakowe:
                                    </th>
                                    <td>
                                        {taste}
                                    </td>
                                </tr>    
                                <tr>
                                    <th>
                                        Uwagi:
                                    </th>
                                    <td>
                                        {comment}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Zdjęcia:
                                    </th>
                                    <td>
                                        foto foto foto
                                    </td>
                                </tr>                 
                            </tbody>
                        </div>
                    </table>
                </div>
                <div className='tea_btns'>
                    <Link to={`/editTea/${id}`}>
                        <button className='tea_btn tea_btn-edit btn-edit'></button>
                    </Link>
                        <button className='tea_btn tea_btn-delete btn-delete' onClick={handleDelete}></button>
                    <Link to='/teaList'>
                        <button className='tea_btn tea_btn-goBack'></button>
                    </Link>
                </div>
            </div>    
        )
    }
}

export default Tea;