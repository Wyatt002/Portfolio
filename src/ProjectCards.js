import { Col } from "react-bootstrap";


function ProjectCard ({title, description, imgUrl, website}) {
    return (
        <Col size={12} sm={6} md={4}>
          <div className="proj-imgbx">
            <img src={imgUrl} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
              <a href={website} target="_blank" rel="noopener noreferrer" className="grey-link">Website-Repository</a>
            </div>
          </div>
        </Col>
      )
}

export default ProjectCard;
