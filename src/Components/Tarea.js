import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Tarea extends Component {
    state = {  }
    render() { 
        const  { task_name, start_date, has_fdate, finish_date, task_type, task_desc } = this.props.showTarea
        return ( 
            <div className="container">
                <tr>
                    <td>{ task_name }</td>
                    <td>{ start_date }</td>
                    <td>{ has_fdate }</td>
                    <td>{ finish_date }</td>
                    <td>{ task_type }</td>
                    <td>{ task_desc }</td>
                 </tr>
            </div>
            
         );
    }
}
 
export default Tarea;