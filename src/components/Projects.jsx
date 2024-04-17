import { Container, Row, Col , Tab, Nav} from 'react-bootstrap';
import projImg1 from '../assets/img/project-img1.png'
import snippets from '../assets/img/Snippets.png'
import palloc from '../assets/img/Palloc.png'
import declassified from '../assets/img/declassified.png'
import sod from '../assets/img/sod2.png'
import resnoblast from '../assets/img/resnoblast2.png'
import freekart from '../assets/img/freekart.png'

import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen';

export const Projects = () =>{
    const projects1 = [
        {
            title: 'Snippets',
            description: 'Social Media website',
            imgUrl: snippets
        },
        
        
        
    ];
    const projects2 = [
        {
        title: 'Palloc',
        description: 'Parking allocation system',
        imgUrl: palloc
        },
        {
            title: 'Freekart',
            description: 'E-commerce website with a twist',
            imgUrl: freekart
        },
    ]
    const projects3 = [
        {
            title: 'Resnoblast',
            description: '2-D Arcade shooter',
            imgUrl: resnoblast
        },
        {
            title: 'Slayer of Dungeons',
            description: '2-D Castlevania like',
            imgUrl: sod
        },
        {
            title: 'Declassified',
            description: 'First-Person-Shooter Tech Demo',
            imgUrl: declassified
        },
    ]
    
    
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                <Col size={12}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}> 
                        <h2>Projects</h2>
                        <p>Project showcase of various skills</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Nodejs</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Flask</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Unity</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}> 
                            <Tab.Pane eventKey="first">
                            <Row>
                                {
                                projects1.map((project, index) => {
                                    return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                                {
                                projects2.map((project, index) => {
                                    return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Row>
                                {
                                projects3.map((project, index) => {
                                    return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                                }
                            </Row>
                            </Tab.Pane>
                         </Tab.Content> 
                        </Tab.Container>
                     </div>} 
                     </TrackVisibility> 
                </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}