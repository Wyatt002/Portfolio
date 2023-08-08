import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import projImg1 from "./assets/img/NPS.avif";
import projImg2 from "./assets/img/dealership.webp";
import projImg3 from "./assets/img/conference.webp";
import colorSharp2 from "./assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


function Projects () {

    const projects = [
        {
          title: "Camp Scout",
          description: "Camp Scout is a full stack application that allows users to search for campgrounds in the United States.  Users can search by state and city, and view campgrounds in the area.  Users can also view the weather forecast for the area.  Users can create an account and save campgrounds to their profile.  Users can also leave reviews for campgrounds.",
          imgUrl: projImg1,
          website: "https://gariepct01.gitlab.io/module3-project-gamma/",
        },
        {
          title: "Auto Hub",
          description: "Auto Hub is a full stack application for a car dealership.  Users can view the inventory of cars, and filter by make, model, and year. Create and manage service appointments.  Track sales information by salesperson.  Create and manage customer information.",
          imgUrl: projImg2,
          website: "https://gitlab.com/Wyatt002/auto-hub",
        },
        {
          title: "Conference GO!",
          description: "Manage your upcoming conference with Conference GO!  Create a schedule for your conference, and allow users to view the schedule and add sessions to their personal schedule.  Users can also view speakers and their information.  Update presentation information.",
          imgUrl: projImg3,
          website: "https://gitlab.com/Wyatt002/fearless-frontend",
        },
      ];

      return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>Check out my latest projects.  Click on the image below to view deployed website or repository.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
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
                          <p>Upcoming projects</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>Upcoming projects</p>
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

export default Projects;
