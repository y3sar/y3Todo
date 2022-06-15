import React from 'react';
import "./ProjectName.css"

function ProjectName(props) {
    return (
        <div>
           <input autoFocus className="project-name" placeholder='Name your project...'></input> 
        </div>
    );
}

export default ProjectName;