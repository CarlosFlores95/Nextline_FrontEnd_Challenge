import React from 'react';
import { Link} from 'react-router-dom';

const Header = () => {
    return (  
        <div className="container-fluid">
            <nav>
                <div className="nav-wrapper teal lighten-1">
                <ul id="nav-mobile">
                    <li><Link to='/'>Start</Link></li>
                    <li><Link to='/new'>Add Task</Link></li>
                    <li><Link to='/tareas'>Tasks</Link></li> 
                </ul>
                </div>
            </nav>            
        </div>
    );
}
 
export default Header;
