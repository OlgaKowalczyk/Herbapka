import React, { Component } from 'react';
import { TEA_ROUTE } from './apiConstants';
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
// import 'react-datepicker/dist/react-datepicker.css';
// import DatePicker from 'react-date-picker'


class TeaForm extends Component {
    
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
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        // validation: nazwa
    
        fetch(TEA_ROUTE, {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
            })
            .then(response => response.json())
            .then(data => {
                console.log('TeaForm-posted: ', data);
            })
            .catch(error => {
                console.log('TeaForm-post-error', error);
            });
    }
    render(){ 
     
        const {name, country, info, brewing, smell, taste, type, comment, date} = this.state;

        return (    
            <div className='container'>
                `<form onSubmit={this.handleSubmit}>
                    <label>
                        Nazwa:
                    </label>
                    <input 
                        type='text'    
                        name='name' 
                        value={name} 
                        onChange={this.handleChange}
                    />
                    <label>
                        Data:
                    </label>
                    <input 
                        type='date'    
                        name='date' 
                        value={date} 
                        onChange={this.handleChange}
                    />
                        {/* <DatePicker
                            name = 'date'
                            value={date}
                            onChange={this.handleChange}
                        /> */}
                    <label>
                        Kraj pochodzenia:
                    </label>
                    <select 
                        name='country' 
                        value={country} 
                        onChange={this.handleChange}>
                            <option>Wybierz</option>
                            <option value="Chiny">Chiny</option>
                            <option value="Japonia">Japonia</option>
                            <option value="Indie">Indie</option>
                            <option value="Nepal">Nepal</option> 
                            <option value="Taiwan">Tajwan</option> 
                            <option value="Sri Lanka">Sri Lanka</option> 
                            <option value="Korea">Korea</option> 
                            <option value="Malawi">Malawi</option> 
                            <option value="Kenia">Kenia</option>  
                            <option value="Gruzja">Gruzja</option> 
                            <option value="Inny">Inny</option>           
                    </select>      
                    <label>
                        Dodatkowe informacje:
                    </label>
                    <textarea 
                        type='text' 
                        name='info' 
                        value={info} 
                        onChange={this.handleChange}
                    />
                    <label>
                        Sposób parzenia:
                    </label>
                    <textarea 
                        type='text' 
                        name='brewing' 
                        value={brewing} 
                        onChange={this.handleChange}
                    />
                    <label>
                        Zapach:
                    </label>
                    <textarea 
                        type='text' 
                        name='smell' 
                        value={smell} 
                        onChange={this.handleChange} 
                    />
                    <label>
                        Smak:
                    </label>
                    <textarea 
                        type='text' 
                        name='taste' 
                        value={taste} 
                        onChange={this.handleChange}
                    />
                    <label>
                        Typ:
                    </label>
                    <select 
                        type='text' 
                        name='type' 
                        value={type} 
                        onChange={this.handleChange}>
                            <option>Wybierz</option>
                            <option value='czarna'>Czarna</option>
                            <option value='zielona'>Zielona</option>
                            <option value='biała'>Biała</option>
                            <option value='pu-erh shu'>Shu</option>
                            <option value='pu-erh sheng'>Sheng</option>
                            <option value='oolong'>Oolong</option>
                            <option value='żółta'>Żółta</option>
                            <option value='inna'>Inna</option>
                    </select>
                    <button>
                        Dodaj zdjęcie
                    </button>
                    <label>
                        Uwagi:
                    </label>
                    <textarea 
                        type='text' 
                        name='comment' 
                        value={comment} 
                        onChange={this.handleChange}
                    />
                    <button type='submit'>
                        Zapisz
                    </button>
                </form> 
            </div>    
        )
    }
}
export default TeaForm;