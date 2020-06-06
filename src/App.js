import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import Navigation from './Navigation';
import TeaList from './TeaList';
import TeaForm from './TeaForm';
import EditTeaForm from './EditTeaForm';
import LearnAboutTea from './LearnAboutTea';
import Tea from './Tea';
import TeaString from './TeaString';

const App = () => {
  

  return(
    <>
      <Navigation />
      <TeaForm />
      <TeaList />
      <EditTeaForm />
      <Tea />
      {/* <HashRouter>
        <>
        <Navigation />
        <TeaList />
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/teaList' component={TeaList} />
            <Route path='/addNewTea' component={TeaForm} />
            <Route path='/editTea/:id' component={EditTeaForm} />          
            <Route path='/learn' component={LearnAboutTea} />
            <Route path='/tea/:id' component={Tea} /> 
        </Switch>
        </>
     </HashRouter> */}
    </> 
  )
}
export default App;
