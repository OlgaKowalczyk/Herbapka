import React, { Component } from 'react';
import { TEA_ROUTE } from './apiConstants';
import ImageUpload from './ImageUpload';
// import { Redirect } from 'react-router-dom';
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
// import 'react-datepicker/dist/react-datepicker.css';
// import DatePicker from 'react-date-picker'

let currentDate = new Date();
let theDate = currentDate.toISOString().substr(0,10);

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
        date: theDate,
        // image: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
  
    
    // addPhoto = (e) => {
    //     if (e.target.files[0]) {
    //         const image = e.target.files[0];
    //         this.setState(() => ({image}));
    //     }
    // }

    // handleUpload = () => {
    //     const { image } = this.state;
    //     console.log('upload!');
    // }    

    handleSubmit = (e) => {
        e.preventDefault();
   
            fetch(TEA_ROUTE, {
              method: "POST",
              body: JSON.stringify(this.state),
              headers: {
                  "Content-Type": "application/json"
              }
              })
              .then(response => response.json())
              .then(data => {
                  console.log('TeaForm-posted:', data);
              })
              .catch(error => {
                  console.log('TeaForm-post-error', error);
              })
          this.props.history.push("/teaList");
        }  

    render(){ 
     
        const {name, country, info, brewing, smell, taste, type, comment, date, image} = this.state;

        return (    
            <>
            <div className='container'>
                <div className='form_box'>
                    <form onSubmit={this.handleSubmit}>
                        {/* <label className='form_label'>
                            Nazwa:
                        </label> */}
                        <input 
                            type='text'    
                            name='name' 
                            value={name} 
                            onChange={this.handleChange}
                            placeholder='Nazwa:'
                            required
                            
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
                                <option>Typ herbaty:</option>
                                <option value='czarna'>Czarna</option>
                                <option value='zielona'>Zielona</option>
                                <option value='biała'>Biała</option>
                                <option value='pu-erh shu'>Shu</option>
                                <option value='pu-erh sheng'>Sheng</option>
                                <option value='oolong'>Oolong</option>
                                <option value='żółta'>Żółta</option>
                                <option value='inna'>Inna</option>
                        </select>
                         {/* <label>
                            Data:
                        </label> */} 

                        <input 
                            type='date'    
                            name='date' 
                            className='form_date'
                            defaultValue={theDate}
                            onChange={this.handleChange}
                        />
                      
                        <br/>
                        {/* <label>
                            Kraj pochodzenia:
                        </label> */}
                        <br/>  
                        {/* <label>
                            Dodatkowe informacje:
                        </label> */}
                        <textarea 
                            type='text' 
                            name='info' 
                            value={info} 
                            onChange={this.handleChange}
                            placeholder='Dodatkowe informacje:'
                        />   
                        <br/>  
                        {/* <label>
                            Sposób parzenia:
                        </label> */}
                        <textarea 
                            type='text' 
                            name='brewing' 
                            value={brewing} 
                            onChange={this.handleChange}
                            placeholder='Sposób parzenia:'
                        />
                        <br/>
                    
                        {/* <label>
                            Zapach:
                        </label> */}
                        <textarea 
                            type='text' 
                            name='smell' 
                            value={smell} 
                            onChange={this.handleChange} 
                            placeholder='Zapach:'
                        />
                        {/* <label>
                            Smak:
                        </label> */}
                        <textarea 
                            type='text' 
                            name='taste' 
                            value={taste} 
                            onChange={this.handleChange}
                            placeholder='Smak:'
                        />
                        {/* <label>
                            Typ:
                        </label> */}
                        {/* <label>
                            Uwagi:
                        </label> */}
                        <textarea 
                            type='text' 
                            name='comment' 
                            value={comment} 
                            onChange={this.handleChange}
                            placeholder='Uwagi:'
                        />
                        <br/>
                        {/* <ImageUpload /> */}
                        <br/>
                        <button type='submit' className='form_btn save-btn' onClick={this.handleUpload}>
                            Zapisz
                        </button>
                    </form> 
                </div>
            </div>   
            </> 
        )
    }
}
export default TeaForm;