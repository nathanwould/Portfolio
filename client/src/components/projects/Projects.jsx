import "./Projects.css";
import { Space, Card, Typography } from "antd";

export default function Projects() {
  const { Link, Title } = Typography;

  return (
    <Space direction="vertical" id='projects'>
      <div style={{marginBottom: '5rem'}}></div>
      <Title level={2} style={{marginBottom: '-2rem'}}>Check out a few things I've been working on:</Title>
      <Space className="projects-container" direction="vertical">
        <div className="project-card">
          <Card
            title='Brass Mart'
            className="project-container"
            id="brass-mart"
            cover={<img alt='Brass Mart' src='https://i.imgur.com/5VJdWGul.png' />}
          >
            <p>Full-stack webstore featuring a Keystone 6 GraphQL database with Admin UI and React/Next front-end using and Stripe to process credit card transactions.</p>
            <Link href='https://main.d2oyt77ho14qrt.amplifyapp.com/' target="_blank">Visit App</Link>
            <Link href='https://github.com/nathanwould/Brass-Mart-2' target="_blank">View on GitHub</Link>
          </Card>
        </div>
        <div className="project-card">
          <Card
            title='PokeSynth'
            className="project-container"
            id="pokesynth"
            cover={<img alt='PokeSynth' src='https://i.imgur.com/LGHB23Ol.png' />}
          >
            <p>A digital synthesizer built in vanilla javascript. Choose a pokemon to dance along while you play!</p>
            <Link href='https://nathanwould.github.io/Funkemon/' target="_blank">Visit App</Link>
            <Link href='https://github.com/nathanwould/Funkemon' target="_blank">View on GitHub</Link>
          </Card>
        </div>
        <div className="project-card">
          <Card
            title='Fermently'
            className="project-container"
            id="fermently"
            cover={<img alt='Fermently' src='https://i.imgur.com/mBw9a8Tl.png'/>}
          >
            <p>Front-end fermentation project tracking React application using Airtable API integration.</p>
            <Link href='https://fermently.netlify.app/' target="_blank">Visit App</Link>
            <Link href='https://github.com/nathanwould/Fermently' target="_blank">View on GitHub</Link>
          </Card>
        </div>
      </Space>
    </Space>
  );
}
