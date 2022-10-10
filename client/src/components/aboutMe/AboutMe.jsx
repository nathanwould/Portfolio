import { Typography, Space, Row, Col } from 'antd';
import {GithubOutlined, SolutionOutlined, LinkedinOutlined} from '@ant-design/icons'
import './AboutMe.css';

export default function AboutMe() {
  const { Title, Paragraph, Link } = Typography;
  return (
    <Space direction="vertical" id="about-me" style={{marginBottom: '5rem'}}>
      <div style={{marginBottom: '5rem'}}></div>
      <Row className='about-me'>
        <Col span={16}>
        <Typography>
          <Space direction="vertical" className='about-me-text'>
            <Title>Hi! I'm Nathan.</Title>
            <Title level={2} className="spiel">I'm a trombonist turned full-stack web developer whose goal is to take my unique experience working in the arts, food industry, and as a nonprofit administrator to solve real-world problems for users with code. </Title>
            <Paragraph className='paragraph'>Whether building a full-stack application, performing on stage, or trying to make capers out of quince blossoms, I always bring my curiosity, creativity and perspective to every project to foster an open, collaborative environment. </Paragraph>
            <Paragraph className='paragraph'>If I'm not behind my computer coding, you can find me planting seed starts in my garden, reading about fermentation or listening to <Link
                className='fonk'
                href='https://open.spotify.com/track/0ivhQEsgDPmAkLKlwWcR9l?si=1izCVg2_RcO7BmwLc-IDkg'
                >funky, funky music.</Link>
            </Paragraph>
          </Space>
        </Typography>
        </Col>
        <Col span={8}>
          <Space
            id='more-info'
            direction="vertical"
            style={{
              marginLeft: "4rem"
            }}
          >
            <img
              id='my-face'
              alt='me'
              src='https://i.imgur.com/DDCdVFPm.jpg'
            />
            <Title level={3}>More About Me</Title>
            <Space
              className="about-me-links"
              direction="vertical"
              size="small"
            >
            <Link href="https://drive.google.com/file/d/1r8KaoGh_IjznHU-biARq5wDDGtxblFyu/view?usp=sharing">
                <SolutionOutlined /> CV
            </Link>
            <Link href="https://github.com/nathanwould">
                <GithubOutlined /> GitHub
              </Link>
            <Link href="https://www.linkedin.com/in/nathan-wood-dev/">
              <LinkedinOutlined /> LinkedIn
              </Link>
            </Space>
          </Space>
        </Col>
      </Row>
    </Space>
  )
}