import { Typography, Space, Row, Col } from 'antd';
import {GithubOutlined, SolutionOutlined, LinkedinOutlined} from '@ant-design/icons'
import './AboutMe.css';

export default function AboutMe() {
  const { Title, Paragraph, Link } = Typography;
  return (
    <Space direction="vertical" id="about-me">
      <Row className='about-me'>
        <Col span={16}>
        <Typography>
          <Space direction="vertical" className='about-me-text'>
            <Title style={{marginBottom: '.5rem'}}>Nathan Wood</Title>
            <Title level={3} className="spiel">Full-stack Engineer</Title>
            <Paragraph className='paragraph'>Experienced software engineer specializing in React ecosystem frameworks, Typescript, software design patterns, Headless CMS, and integrating Application Programming Interfaces. </Paragraph>
            <Paragraph className='paragraph'>Strong engineering professional with a full-stack engineering certificate from accelerated education program at General Assembly.
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