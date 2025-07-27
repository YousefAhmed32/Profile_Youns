import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, siteUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div style={{ marginTop: "10px" }}>
            <Button variant="light" size="sm" href={siteUrl} target="_blank">
              Visit Site
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};
