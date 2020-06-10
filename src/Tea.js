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
                <div>
                {name}
                </div>
                <div>
                    Kraj pochodzenia: {country}
                </div>
                <div>
                    Dodatkowe informacje: {info}
                </div>
                <div>
                    Sposób parzenia: {brewing}
                </div>
                <div>
                    Wrażenia zapachowe: {smell}<br/>
                    Wrażenia smakowe: {taste}<br/>
                    Typ: {type}<br/>
                </div>
                <div>
                    {comment}
                </div>
                <div>FOTO</div>
                <Link to='/teaList'>
                    <button>Wróć do listy</button>
                </Link>
            </div>    
        )
    }
}

export default Tea;