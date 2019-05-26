import React, { Component }  from 'react';
import Tarea from './Tarea';


class Tabla extends Component {

    mostrarTabla() {
        const tarea = this.props.tareas

        if( tarea.length === 0) return null;

        return(
            <React.Fragment>
                { Object.keys(tarea).map( tarea => (
                    <Tarea
                        key = { tarea } //index de la tarea
                        showTarea = {this.props.tareas[tarea]}

                    />
                ))}
            </React.Fragment>
        )
    }

    render() { 
        return ( 
        <div>
            <h1>Tasks</h1>
            <table className="striped">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Task</th>
                            <th>Start Date</th>
                            <th>Finished</th>
                            <th>Final Date</th>
                            <th>Task Type</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                            { this.mostrarTabla() }
                        </tbody>
                </table>
        </div> 
        );
    }
}
 
export default Tabla;