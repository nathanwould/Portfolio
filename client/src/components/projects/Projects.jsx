import "./Projects.css";
import { Space, Card, Typography } from "antd";

export default function Projects() {
  const { Link } = Typography;

  return (
    <Space className="projects-container" direction="vertical">
      <div className="project-card">
        <h1>PokeSynth</h1>
        <Card
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
        <h1>Fermently</h1>
        <Card
          className="project-container"
          id="fermently"
          cover={<img alt='Fermently' src='https://i.imgur.com/mBw9a8Tl.png'/>}
        >
          <p>Front-end fermentation project tracking React application using Airtable API integration.</p>
          <Link href='https://fermently.netlify.app/' target="_blank">Visit App</Link>
          <Link href='https://github.com/nathanwould/Fermently' target="_blank">View on GitHub</Link>
        </Card>
      </div>
      <div className="project-card">
        <h1>BlockBustler</h1>
        <Card
          className="project-container"
          id="blockbustler"
          cover={<img alt='BlockBustler' src='https://i.imgur.com/FfmS9ntl.png' />}
        >
          <p>Re-imaged POS system for the one remaining BlockBuster location to help them move away from their old DOS system and age gracefully into the 21st century. A full-stack application built on Ruby on Rails and React frameworks.</p>
          <Link href='https://pensive-mclean-a6bb9d.netlify.app/' target="_blank">Visit App</Link>
          <Link href='https://github.com/nathanwould/BlockBustler' target="_blank">View on GitHub</Link>
        </Card>
      </div>
    </Space>
  );
}
