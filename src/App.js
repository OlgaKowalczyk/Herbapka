import React from 'react';
import './App.css';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

import Navigation from './Navigation';
import TeaList from './TeaList';
import TeaForm from './TeaForm';
import EditTeaForm from './EditTeaForm';
import LearnAboutTea from './LearnAboutTea';
import Tea from './Tea';
import Hello from './Hello';
import ImageUpload from './ImageUpload';
import GreenTea from './GreenTea';

const App = () => {
  
  return(
      <HashRouter>
        <>
        <Navigation />
        <Switch>
            <Route exact path='/' component={Hello} />
            <Route path='/teaList' component={TeaList} />
            <Route path='/addNewTea' component={TeaForm} />
            <Route path='/editTea/:id' component={EditTeaForm} />          
            <Route path='/learn' component={LearnAboutTea} />
            <Route path='/tea/:id' component={Tea} />  
            <Route path='/photo' component={ImageUpload} />  
            <Route path='/green' component={GreenTea} />  
        </Switch>
        </>
     </HashRouter>
  )
}
export default App;

