import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Axios from 'axios';

//Components
import Header from './Components/Header';
import Inicio from './Components/Inicio';
import Tabla from './Components/Tabla';
import NewTarea from './Components/NewTarea';

class Router extends Component {
    state = { 
        tareas : []
     }

     componentDidMount() {
         this.getTasks()
     }
    getTasks() {
        Axios.get(`https://53lsdx4cm6.execute-api.us-east-1.amazonaws.com/dev/task-type`)
        .then (res => {
            console.log(res.data);
            this.setState({
                tareas: res.data
            })
        })
    }

    newTask = (task) => {
        Axios.post(`https://53lsdx4cm6.execute-api.us-east-1.amazonaws.com/dev/task-type`,{task}).then(
            res => {
                console.log(res.data)
            }
        )
    }

    render() { 
        return ( 
            <BrowserRouter>
                <Header />
                    <Switch>
                        <Route exact path='/' render = {() => { //<Route/> sirve para agregar las distintas rutas de navrgación
                            return(
                                <Inicio/>
                             );
                        }}>    
                        </Route>
                        <Route exact path ='/new' render={() => {
                            return(
                                <NewTarea 
                                    newTask ={ this.newTask }
                                />
                            )
                        }}>

                        </Route>
                        <Route exact path='/tareas' render={() => {
                            return(
                                <Tabla 
                                tareas = {this.state.tareas}
                                />
                            )
                        }}>

                        </Route>
                    </Switch>
            </BrowserRouter>
         );
    }
}
 
export default Router;