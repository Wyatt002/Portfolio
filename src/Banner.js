import { useState, useEffect } from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from './assets/img/header-img.svg';




function Banner() {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full Stack Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(500 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
          } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
          } else {
            setIndex(prevIndex => prevIndex + 1);
          }
        }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <div className="banner-content txt-rotate">
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{" Hi I'm Brian Johnson "}<span className="wrap">{text}</span></h1>
                            <p>I'm a full stack developer. I can provide clean code and pixel perfect design. I also make websites more interactive with web animations.</p>
                            <Nav.Link href="#connect">
                                <button onClick={() => console.log('connect')}>Contact Me<ArrowRightCircle size={25}/></button>
                            </Nav.Link>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );

}

export default Banner;