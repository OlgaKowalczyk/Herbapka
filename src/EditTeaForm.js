import React, { Component } from 'react';
import { TEA_ROUTE} from './apiConstants';


let currentDate = new Date();
let theDate = currentDate.toISOString().substr(0,10);

class EditTeaForm extends Component {
 
    state = {
        name: '',
        country: '',
        info: '',
        brewing: '',
        smell: '',
        taste: '',
        type: '',
        comment: '',
        date: theDate,
    }
           
    componentDidMount(){
        console.log(this.props.match.params.id);
        const id = this.props.match.params.id;

        fetch(`${TEA_ROUTE}/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('EditTeaForm-data: ', data);
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
                console.log('EditTeaForm-error', error);
            });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('EditTeaForm-state:', this.state);
        // validation: nazwa

        const data = {...this.state};
        const id = this.props.match.params.id;
        fetch(`${TEA_ROUTE}/${id}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('EditTeaForm-patched:', data);
            })
            .catch(error => {
                console.log('EditTeaForm-error:', error);
            });
            this.props.history.push("/teaList");
    }
    render(){ 
     
        const {name, country, info, brewing, smell, taste, type, comment} = this.state;
    
        return (    

            <div className='container'>
                <div className='form_box'>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type='text'    
                            name='name' 
                            value={name} 
                            onChange={this.handleChange}
                            placeholder='Nazwa:'
                        />
                        <select 
                            name='country' 
                            value={country} 
                            onChange={this.handleChange}>
                                <option>Kraj pochodzenia:</option>
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
                        <select 
                            type='text' 
                            name='type' 
                            value={type} 
                            onChange={this.handleChange}>
                                <option>Typ:</option>
                                <option value='czarna'>Czarna</option>
                                <option value='zielona'>Zielona</option>
                                <option value='biała'>Biała</option>
                                <option value='pu-erh shu'>Shu</option>
                                <option value='pu-erh sheng'>Sheng</option>
                                <option value='oolong'>Oolong</option>
                                <option value='żółta'>Żółta</option>
                                <option value='inna'>Inna</option>
                        </select>
                        <input 
                            type='date'    
                            name='date' 
                            className='form_date'
                            defaultValue={theDate}
                            onChange={this.handleChange}
                        />
                        <textarea 
                            type='text' 
                            name='info' 
                            value={info} 
                            onChange={this.handleChange}
                            placeholder='Dodatkowe informacje:'
                        />   
                        <br/>  
                        <textarea 
                            type='text' 
                            name='brewing' 
                            value={brewing} 
                            onChange={this.handleChange}
                            placeholder='Sposób parzenia:'
                        />
                        <br/>
                        <textarea 
                            type='text' 
                            name='smell' 
                            value={smell} 
                            onChange={this.handleChange} 
                            placeholder='Zapach:'
                        />
                        <textarea 
                            type='text' 
                            name='taste' 
                            value={taste} 
                            onChange={this.handleChange}
                            placeholder='Smak:'
                        />
                        <textarea 
                            type='text' 
                            name='comment' 
                            value={comment} 
                            onChange={this.handleChange}
                            placeholder='Uwagi:'
                        />
                        <br/>
                        <button className='form_btn addPhoto-btn'>
                            Dodaj zdjęcia
                        </button>
                        <br/>
                        <button type='submit' className='form_btn save-btn'>
                            Zapisz
                        </button>
                </form> 
            </div>
        </div>    
        )
    }
}
export default EditTeaForm;