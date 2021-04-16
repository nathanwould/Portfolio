import { Typography } from 'antd';
import {LineOutlined} from '@ant-design/icons'
import './AboutMe.css';

export default function AboutMe() {
  
  const { Title, Paragraph, Link } = Typography;
  return (
    <Typography className='about-me'>
      <Title>Hi, I'm Nathan</Title>
      <Paragraph className='paragraph'>I'm a trombonist turned full-stack web developer whose goal is to take his unique experience gained from time working in the arts, food industry, and as a nonprofit administrator to solve real-world problems for users with code. </Paragraph>
      <LineOutlined />
      <Paragraph className='paragraph'>Whether building a full-stack application, performing on stage, or trying to make capers out of quince blossoms, I always bring my curiosity, creativity and perspective to every project to foster an open, collaborative environment. </Paragraph>
      <LineOutlined />
      <Paragraph className='paragraph'>If I'm not behind my computer coding, you can find me planting seed starts in my garden, reading fermentation or listening to <Link
          className='fonk'
          href='https://open.spotify.com/track/0ivhQEsgDPmAkLKlwWcR9l?si=1izCVg2_RcO7BmwLc-IDkg'
      >funky, funky music.</Link>
      </Paragraph>
    </Typography>
  )
}