import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "./assets/img/color-sharp.png";
import python from "./assets/img/python2.png";
import react from "./assets/img/react.png";
import github from "./assets/img/github.png";
import sql from "./assets/img/sql.png";
import javascript from "./assets/img/javascript.png";
import django from "./assets/img/django.png";
import docker from "./assets/img/docker2.png";
import html from "./assets/img/html.png";
import css from "./assets/img/css.png";
import fastapi from "./assets/img/fastapi-1.svg";




function Skills() {

    const responsive = {
        desktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


      return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Always adding more skills to the stack!</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={github} alt="Image" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={sql} alt="Image" />
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={fastapi} alt="Image" />
                                    <h5>FastAPI</h5>
                                </div>
                                <div className="item">
                                    <img src={django} alt="Image" />
                                    <h5>Django</h5>
                                </div>
                                <div className="item">
                                    <img src={docker} alt="Image" />
                                    <h5>Docker</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="Image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
      )
    }

export default Skills;
