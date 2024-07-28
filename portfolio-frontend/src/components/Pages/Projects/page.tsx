import { Projects } from '@/components/state/contstant';
import React from 'react'

type Props ={};
const ProjectWorkPage = (props:Props) => {
  return (
    <div>
        <p className='text-9xl pl-12 font-extrabold'>
            PROJECTS
        </p>
        {
            Projects.map((project) => (
                <div key={project.id}>
                    <p>hello</p>
                </div>
            ))
        }
    </div>
  )
}



export default ProjectWorkPage