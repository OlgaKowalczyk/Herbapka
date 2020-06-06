import React, { Component } from 'react';
import { TEA_ROUTE, COUNTRY_ROUTE } from './apiConstants';
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';


const teaId = 2;
// this.props.match.params; ??

class EditTeaForm extends Component {
    
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
        const {name} = this.state;
        

        fetch(`${TEA_ROUTE}/${teaId}`, {
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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            // date: new Date().getDate
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('state:', this.state);
        // validation: nazwa
        const data = {...this.state};

        fetch(`${TEA_ROUTE}/${teaId}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
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
                </select>
                <input type='text' name='country' value={this.state.country} onChange={this.handleChange}></input>
                <label>Dodatkowe informacje:</label>
                <textarea type='text' name='info' value={this.state.info} onChange={this.handleChange}/>
                <label>Sposób parzenia:</label>
                <textarea type='text' name='brewing' value={this.state.brewing} onChange={this.handleChange}/>
                <label>Zapach:</label>
                <textarea type='text' name='smell' value={this.state.smell} onChange={this.handleChange}/>
                <label>Smak:</label>
                <textarea type='text' name='taste' value={this.state.taste} onChange={this.handleChange}/>
                <label>Aromat:</label>
                <textarea type='text' name='aroma' value={this.state.aroma} onChange={this.handleChange}/>
                <button>Dodaj zdjęcie</button>
                <label>Uwagi:</label>
                <textarea type='text' name='comment' value={this.state.comment} onChange={this.handleChange}/>
                {/* <Date /> */}
                <button type='submit'>Zapisz</button>
            </form> 
        )
    }
}
export default EditTeaForm;