import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/Project-4 (1).png";
import projImg5 from "../assets/img/E-commerce-ClientSide.png";
import projImg6 from "../assets/img/E-commerce-AdminSide.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Website",
      description: "Built with HTML & CSS (early project)",
      imgUrl: projImg1,
      siteUrl: "https://yousefahmed32.github.io/first-1/",
    },
    {
      title: "Watch Store",
      description: "Developed using HTML, CSS, CSS3 animations",
      imgUrl: projImg2,
      siteUrl: "https://yousefahmed32.github.io/Watches/",
    },
    {
      title: "Car Dealership",
      description: "Responsive Bootstrap website",
      imgUrl: projImg3,
      siteUrl: "https://yousefahmed32.github.io/Cars/",
    },
    {
      title: "JavaScript E-commerce",
      description: "Dynamic shop using Vanilla JS",
      imgUrl: projImg4,
      siteUrl: "https://yousefahmed32.github.io/Landing-Page-E-commrce/",
    },
    {
      title: "Full-Stack E-commerce (Client)",
      description: "MERN stack + Tailwind + Shadcn + Lucide ",
      imgUrl: projImg5,
      siteUrl:
        "https://jam.dev/c/d487f6bf-a490-478b-8739-fc8eae19b2d6?startFrom=0.00",
    },
    {
      title: "Full-Stack E-commerce (Admin)",
      description: "MERN stack admin dashboard",
      imgUrl: projImg6,
      siteUrl:
        "https://jam.dev/c/9cbdb054-1d67-441d-ab23-76b65f1bb530",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Some of my work showcasing different technologies and stacks.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tasks Front</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tasks Backend</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <p>Websites built with HTML, CSS, and Bootstrap.</p>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <p>
                          Full-stack projects using MERN, Tailwind, Shadcn, and
                          Lucide.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background decoration"
      />
    </section>
  );
};
