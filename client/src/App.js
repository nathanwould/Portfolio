import './App.css';
import { useState } from 'react';
import { Layout, Menu, BackTop } from 'antd';
import 'antd/dist/antd.css';
import { GithubOutlined, SolutionOutlined, LinkedinOutlined } from '@ant-design/icons';
import Projects from './components/projects/Projects.jsx';
import AboutMe from './components/aboutMe/AboutMe.jsx';
// import Contact from './components/contact/Contact.jsx';

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
        <Header
          className='header'
          id='header'
          style={{
            position: "fixed",
            width: "100%",
            zIndex: "2"
          }}
        >
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
            {/* <Menu.Item
              key='contact'
              className='nav-link'
            ><a href='#contact'>Contact</a></Menu.Item> */}
          </Menu>
        </Header>
        <Content
          className='site-layout-content'
          // style={{
          //   width: "100%",
          // }}
        >
          <AboutMe id='about-me'/>
          <Projects id='projects'/>
        </Content>
        <Footer>
          <a
            className='footer-link'
            type='text'
            href='https://drive.google.com/file/d/1-VGk3PUd42v7HOMTnrlYY1rwjwlHTlrh/view?usp=sharing'
          ><SolutionOutlined /> CV
          </a>
          <a
            className='footer-link'
            type='text'
            href='https://github.com/nathanwould'
            ><GithubOutlined /> GitHub
          </a>
          <a
            className='footer-link'
            type='text'
            href='https://www.linkedin.com/in/nathan-wood-dev/'
          ><LinkedinOutlined /> LinkedIn
          </a>
          <h4 className='footer-copyright'>Nathan Wood ©2021</h4>
          <BackTop />
          </Footer>
      </Layout>
    </div>
  );
}

export default App;
