import React, { Component } from 'react';
import { TEA_ROUTE, COUNTRY_ROUTE } from './apiConstants';

//przesłać id w propsach albo routerem? i wrzucić do tea-route
class Tea extends Component {

    state = {
        name: '',
        country: '',
        info: '',
        brewing: '',
        smell: '',
        taste: '',
        aroma: '',
        comment: '',
        // date: '',
    }
    componentDidMount(){
        fetch(`${TEA_ROUTE}/1`, {
            method: "GET",
            body: JSON.stringify(),
            headers: {
                "Content-Type": "application/json"
            }
            })
            .then(response => response.json())
            .then(data => {
                console.log('data: ', data);
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
                console.log('error', error);
            });
        }

    render(){
        
        const {name, country, info, brewing, smell, taste, aroma, comment} = this.state;

        return(
            <div>
                <table>
                    <thead>
                        <tr> {name}</tr>
                    </thead>
                    <tbody>
                        <tr>
                            Kraj pochodzenia: {country}
                        </tr>
                        <tr>

                        </tr>
                      

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tea;