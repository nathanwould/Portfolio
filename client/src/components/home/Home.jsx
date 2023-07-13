import { Typography, Space, Row, Col } from 'antd';
import {GithubOutlined, SolutionOutlined, LinkedinOutlined} from '@ant-design/icons'
import './Home.css';

export default function AboutMe() {
  const { Title, Paragraph, Link } = Typography;
  return (
    <Space direction="vertical" id="about-me">
      <Row className='about-me'>
        <Col span={16}>
        <Typography>
          <Space direction="vertical" className='about-me-text'>
            
            <Title>Hi! I'm Nathan.</Title>
            
            <Title level={3} className="spiel">
              I'm a trombonist turned full-stack developer and I've taken my unique experience working in the arts, food, nonprofit, and medical industries to solve real-world problems for users and businesses with code.
            </Title>

            <Paragraph className='paragraph'>
              Whether building a full-stack application, performing on stage, or trying to make capers out of garlic chive blossoms, I always bring my curiosity, creativity and perspective to every project to foster an open, collaborative environment.
            </Paragraph>

            <Paragraph className='paragraph'>
              If I'm at my computer coding, you can find me planting seed starts in my garden, playing music with friends, or listening to<span> </span>
              <Link
                className='fonk'
                target='_blank'
                href='https://open.spotify.com/track/56nRvG4Te0dtmgxnhJBVm7?si=3b21f2406d9240c4'
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
              <Link href="https://drive.google.com/file/d/1U52trwO-KmX7DaAy_06knd4d4rLDna9e/view?usp=sharing" target="_blank">
                  <SolutionOutlined /> CV
              </Link>
              <Link href="https://github.com/nathanwould" target="_blank">
                  <GithubOutlined /> GitHub
              </Link>
              <Link href="https://www.linkedin.com/in/nathan-wood-dev/" target="_blank">
                <LinkedinOutlined /> LinkedIn
              </Link>
            </Space>
          </Space>
        </Col>
      </Row>
    </Space>
  )
}