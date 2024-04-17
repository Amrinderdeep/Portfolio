import { Container , Row, Col} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImage from '../assets/img/header-img.svg'
import { useState, useEffect } from "react"
import 'animate.css'
import TrackVisibility from "react-on-screen"

export const Banner = ()=>{
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setisDeleting] = useState(false)
    const toRotate = ['Web Developer', 'Game Developer', 'Tech Enthusiast', 'Back-End Developer']
    const [text, setText] = useState('')
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random()*100)

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = ()=>{
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)
        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText){
            setisDeleting(true)
            setDelta(period);
        }
        else if(isDeleting && updatedText === ''){
            setisDeleting(false)
            setLoopNum(loopNum+1)
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm Amrinderdeep`}  <span className="txt-rotate" dataPeriod="1000" data-rotate="['Web Developer', 'Game Developer', 'Tech Enthusiast', 'Back-End Developer']"><span className="wrap">{text}</span></span></h1>

                        <p>Passionate and motivated B.Tech Engineering student studying Information Technology at Guru Nanak Dev Engineering College. I am dedicated to honing my skills and expanding my knowledge in this exciting and ever-evolving field.

                            In addition to my technical expertise, I have a deep passion for music. I am skilled in playing the guitar and piano, which has enhanced my creativity and ability to compose original music for video games. This combination of technical proficiency and musical aptitude allows me to bring a unique perspective to my game development projects.
                        </p>
                        <button onClick={()=> console.log("Connected")}><a className="simple-anchor" href="#contact">Connect <ArrowRightCircle size={25} /> </a></button>
                        </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImage} alt="Header" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}