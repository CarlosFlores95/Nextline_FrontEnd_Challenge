import React, { Component } from 'react';


class NewTarea extends Component {
    state = {  }

    //Crear las referencias a los inputs
    task_name = React.createRef();
    start_date = React.createRef();
    has_fdate = React.createRef();
    finish_date = React.createRef();
    task_type = React.createRef();
    task_desc = React.createRef();

    addTask = (e) => {
        e.preventDefault();
        const task  = {
            task_name: this.task_name.current.value,
            start_date: this.start_date.current.value,
            has_fdate: this.has_fdate.current.value,
            finish_date: this.finish_date.current.value,
            task_type:this.task_type.current.value,
            task_desc: this.task_desc.current.value
        }
        console.log(task)

        this.props.newTask(task)
    }


    render() { 
        return ( 
        <form onSubmit= { this.addTask}>
             <div className="container">
            <div className="row">
                <div className="col s12">
                    <h1>Add New Task:</h1>
                    <div className="input-field col s6">
                        <label>Task:</label>
                        <input  type="text" className="task_name" ref={this.task_name} id="task_name" placeholder="Task Name"></input>
                    </div>
                    <div className="input-field col s6">
                        <label>Start Date:</label>
                        <input  type="date" className="start_date" ref={this.start_date} id="start_date" placeholder="Start Date"></input>
                    </div>
                    <div className="input-field col s6">
                        <label>Finished:</label>
                        <input  type="text" className="has_fdate" ref={this.has_fdate} id="has_fdate" placeholder="Final"></input>
                    </div>  
                    <div className="input-field col s6">
                        <label>Finish Date:</label>
                        <input  type="date" className="finish_date" ref={this.finish_date} id="finish_date" placeholder="Final Date"></input>
                    </div> 
                    <div className="input-field col s6">
                        <label>Task Type:</label>
                        <input  type="number" className="task_type" ref={this.task_type} id="task_type" placeholder="Task Type"></input>
                    </div>
                    <div className="input-field col s10">
                        <label>Description:</label>
                        <input  type="number" className="task_desc" ref={this.task_desc} id="task_desc" placeholder="Description"></input>
                    </div>
                    <div className="input-field col s3">
                        <button type="submit" className="waves-effect waves-light btn">Add Task</button>
                    </div>

                </div>
            </div> 
        </div>
        </form>
        );
    }
}
 
export default NewTarea;