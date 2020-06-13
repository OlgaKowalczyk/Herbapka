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
        // date: '',
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
        }

    render(){
        
        const {name, country, info, brewing, smell, taste, type, comment} = this.state;

        return(
            <div className='container'>
                
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
                                {country}oooooooooooooo
                                oooooooooooooo















                                oooooooooooooooooo
                                oooooooooooooo




                                oooooooooooooo




                                oooooooooooooo
                                oooooooooooooo 
                                oooooooooooooooooo
                                oooooooooooooo
                                oooooooooooooo
                                ooooooooooooo
                                oooooooooooooo 
                                oooooooooooooooooo
                                oooooooooooooo
                                oooooooooooooo
                                ooooooooooooo
                                oooooooooooooo 
                                oooooooooooooooooo
                                oooooooooooooo
                                oooooooooooooo
                                ooooooooooooo
                                oooooooooooooo 
                                oooooooooooooooooo
                                oooooooooooooo
                                oooooooooooooo
                                ooooooooooooo
                                oooooooooooooo 
                                oooooooooooooooooo
                                oooooooooooooo
                                oooooooooooooo
                                ooooooooooooo
                                oooooooooooooo 
                                oooooooooooooooooo
                                oooooooooooooo
                                oooooooooooooo
                                ooooooooooooo
                                oooooooooooooo 
                                oooooooooooooooooo
                                oooooooooooooo
                                oooooooooooooo
                                ooooooooooooo
                                oooooooooooooo 
                                oooooooooooooooooo
                                oooooooooooooo
                                oooooooooooooo\
                                ooooooooooooo
                                oooooooooooooo 
                                oooooooooooooooooo
                                oooooooooooooo
                                oooooooooooooo
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
                    </tbody>
                    </div>
                </table>

{/* 
                <div className='tea_box'>
                    <div>    
                        <span className='tea_name'>{name}</span>
                    </div>
                    <div>
                        <span className='tea_info-label'>Kraj pochodzenia:</span> <span className='tea_info-text'>{country}</span>
                    </div>
                    <div>
                        <span className='tea_info-label'>Dodatkowe informacje:</span> <span className='tea_info-text'>{info}</span>
                    </div>
                    <div>
                        <span className='tea_info-label'>Sposób parzenia:</span> <span className='tea_info-text'>{brewing}</span>
                    </div>
                    <div>
                        <span className='tea_info-label'>Wrażenia zapachowe:</span> <span className='tea_info-text'>{smell}</span><br/>
                        <span className='tea_info-label'>Wrażenia smakowe:</span> <span className='tea_info-text'>{taste}</span><br/>
                        <span className='tea_info-label'>Typ:</span> <span className='tea_info-text'>{type}</span><br/>
                    </div>
                    <div>
                        <span className='tea_info-text'>{comment}</span>
                    </div>
                    <div>FOTO</div>
                    <Link to='/teaList'>
                        <button className='form_btn save-btn'>Wróć do listy</button>
                    </Link>
                </div>     */}
            </div>    
        )
    }
}

export default Tea;