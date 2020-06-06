import React, { Component } from 'react';
import { TEA_ROUTE, COUNTRY_ROUTE } from './apiConstants';
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';


class TeaForm extends Component {
    
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
        fetch(COUNTRY_ROUTE)
        .then(response => response.json())
        .then(data => {
            this.setState({country: data})
            console.log.apply('country:', this.state.country)
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            // date: new Date().getDate
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('state:', this.state);
        // validation: chociaż nazwa
    
        fetch(TEA_ROUTE, {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
            })
            .then(response => response.json())
            .then(data => {
                console.log('data: ', data);
            })
            .catch(error => {
                console.log('error', error);
            });
    }
    render(){ 
     
        const {name, country, info, brewing, smell, taste, aroma, comment} = this.state;

        return (    

            <form onSubmit={this.handleSubmit}>
                <label>Nazwa:</label>
                <input type='text' name='name' value={name} onChange={this.handleChange}></input>
                <label>Kraj pochodzenia:</label>
                <select name='country' value={country} onChange={this.handleChange}>
                    <option value="China">Chiny</option>
                    <option value="Japan">Japonia</option>
                    <option value="India">Indie</option>
                    <option value="Other">Inny</option>            
            // próbowałam ściągnąć listę krajów z db.json (z country w State ustawionym na pustą tablicę)- wyświatlało ją, ale nie dało się wybrać opcji z listy, po kliknięciu w jakąś opcję leciał komunikat: country.map is not a function
                    {/* {country.map(country => {
                        return( 
                        <option key={country.id} value={country.name}>{country.name}</option>
                        )
                    })} */}
                </select>      
                <label>Dodatkowe informacje:</label>
                <textarea type='text' name='info' value={info} onChange={this.handleChange}/>
                <label>Sposób parzenia:</label>
                <textarea type='text' name='brewing' value={brewing} onChange={this.handleChange}/>
                <label>Zapach:</label>
                <textarea type='text' name='smell' value={smell} onChange={this.handleChange}/>
                <label>Smak:</label>
                <textarea type='text' name='taste' value={taste} onChange={this.handleChange}/>
                <label>Aromat:</label>
                <textarea type='text' name='aroma' value={aroma} onChange={this.handleChange}/>
                <button>Dodaj zdjęcie</button>
                <label>Uwagi:</label>
                <textarea type='text' name='comment' value={comment} onChange={this.handleChange}/>
                {/* <Date /> */}
                <button type='submit'>Zapisz</button>
            </form> 
        )
    }
}
export default TeaForm;