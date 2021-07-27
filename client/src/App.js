import './App.css';
import { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import 'antd/dist/antd.css';
import { GithubOutlined, SolutionOutlined, LinkedinOutlined } from '@ant-design/icons';
import Projects from './components/projects/Projects.jsx';
import AboutMe from './components/aboutMe/AboutMe.jsx';
import Contact from './components/contact/Contact.jsx';

function App() {
  const { Header, Content, Footer } = Layout;
  const [current, setCurrent] = useState({
    current: 'home'
  });
  
  const handleClick = e => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };

  return (
    <div className="App">
      <Layout className='layout'>
        <Header className='header' id='header'>
          <Menu
            className='menu'
            theme='dark'
            mode='horizontal'
            onClick={handleClick} selectedKeys={[current]}
            >
            <Menu.Item
              key='home'
              id='logo'
            ><a href='/'>Nathan Wood</a></Menu.Item>
            <Menu.Item
              key='about'
              className='nav-link'
            ><a href='#about-me'>About Me</a></Menu.Item>
            <Menu.Item
              key='projects'
              className='nav-link'
            ><a href='#projects'>Projects</a></Menu.Item>
            <Menu.Item
              key='contact'
              className='nav-link'
            ><a href='#contact'>Contact</a></Menu.Item>
          </Menu>
        </Header>
        <Content className='site-layout-content'>
          <AboutMe id='about-me'/>
          <Projects id='projects'/>
          <Contact id='contact'/>
        </Content>
        <Footer>
          <Button
            className='footer-link'
            type='text'
            href='https://drive.google.com/file/d/1-VGk3PUd42v7HOMTnrlYY1rwjwlHTlrh/view?usp=sharing'
            icon={<SolutionOutlined />}
          >CV
          </Button>
          <Button
            className='footer-link'
            type='text'
            href='https://github.com/nathanwould'
            icon={<GithubOutlined />}
            >GitHub
          </Button>
          <Button
            className='footer-link'
            type='text'
            href='https://www.linkedin.com/in/nathan-wood-dev/'
            icon={<LinkedinOutlined />}
          >LinkedIn
          </Button>
          <h4 className='footer-copyright'>Nathan Wood ©2021</h4>
          </Footer>
      </Layout>
    </div>
  );
}

export default App;
