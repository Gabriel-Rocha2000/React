        import { useState, useEffect } from 'react'
        import './ProjectsList.css'

        //ASSETS//
        import LikedFilled from '../../assets/like-filled.svg'
        import Liked from '../../assets/like.svg'

        //UTILLS//
        import { getApiData } from '../../services/apiServices'

        function ProjectsList() {
            const [projects, setProjects] = useState([])

            useEffect(() => {
                const fetchData = async () => {
                    try {const projectsResponse = await getApiData ('projects')
                        setProjects(projectsResponse)
                    }
                    catch{ 
                        setProjects([])
                    } 
                }
                fetchData()
            }, [])

        return (
            <div className='projects-section'>
                <div className='projects-hero'>
                    <h2>Follow Our Projects</h2>
                    <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
                    <div className='projects-grid'>   
                        {
                        projects.map((project) =>(
                            <div className='project-card d-flex jc-center al-center fd-column' key={project.id}>
                            <div className='thumb tertiary-background'
                            style={{ backgroundImage: `url(${project.thumb})`}}
                            >
                                
                            </div>
                            
                            <h3>João Silva</h3>
                            <p>BH, Brasil</p>
                            <img src={Liked} height='20px'/>  
                                
                            </div>
                        )) 
                        } 

                    
                    </div>
                </div>
            </div>
        )
        }

        export default ProjectsList