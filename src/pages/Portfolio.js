import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import Image1 from "../assets/website.png";
import Image2 from "../assets/portfolio.png";
import Image3 from "../assets/day-scheduler.png";
import Image4 from "../assets/bind.png";
import Image5 from "../assets/clonello.png";
import Image6 from "../assets/jober.png";


function Portfolio() {
  return (
    <section className="about">
     <h1 style={{textAlign: "center"}} >Portfolio</h1>
     <Container>
       <CardGroup>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Image1} alt="website" />
          <Card.Body>
            <Card.Title>Website</Card.Title>
              <Card.Text>
                HTML|CSS
              </Card.Text>
                <Card.Link className="link" href="https://mainmaster84.github.io/">Github</Card.Link>  
          </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Image2} alt="portfolio" />
          <Card.Body>
            <Card.Title>Portfolio</Card.Title>
              <Card.Text>
                HTML|CSS
              </Card.Text>
                <Card.Link className="link" href="https://mainmaster84.github.io/professional-portfolio/">Github</Card.Link>  </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Image3} alt="scheduler" />
          <Card.Body>
            <Card.Title>Scheduler</Card.Title>
              <Card.Text>
                HTML|CSS|JavaScript
              </Card.Text>
                <Card.Link className="link" href="https://mainmaster84.github.io/scheduler/">Github</Card.Link>  </Card.Body>
      </Card>
      </CardGroup>
      <CardGroup>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Image4} alt="bind" />
          <Card.Body>
            <Card.Title>Bind</Card.Title>
              <Card.Text>
                HTML|CSS|JavaScript
              </Card.Text>
                <Card.Link className="link" href="https://sonyarang.github.io/Bind/">Github</Card.Link>  </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Image5} alt="clonello" />
          <Card.Body>
            <Card.Title>Clonello</Card.Title>
              <Card.Text>
                HTML|CSS|JavaScript|MySQL
              </Card.Text>
                <Card.Link className="link" href="https://powerful-falls-76508.herokuapp.com/">Heroku</Card.Link>  </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Image6} alt="myJober" />
          <Card.Body>
            <Card.Title>myJober</Card.Title>
              <Card.Text>
                MERN Stack
              </Card.Text>
                <Card.Link className="link" href="https://shielded-chamber-45932.herokuapp.com/">Heroku</Card.Link>  </Card.Body>
      </Card>
      </CardGroup>
      </Container>
    </section>
  );
}

export default Portfolio;