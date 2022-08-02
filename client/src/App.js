import './App.css';
import { useState } from 'react';
import { Layout, Menu, BackTop } from 'antd';
import 'antd/dist/antd.css';
import { GithubOutlined, SolutionOutlined, LinkedinOutlined } from '@ant-design/icons';
import AboutMe from './components/aboutMe/AboutMe.jsx';
import Projects from './components/projects/Projects.jsx';
import CodeWars from './components/codewars/CodeWars';
import { Link } from 'react-scroll';

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
            zIndex: "1",
          }}
        >
          <Menu
            className='menu'
            theme='dark'
            mode='horizontal'
            onClick={handleClick}
            selectedKeys={[current]}
            >
            <Menu.Item
              key='home'
              id='logo'
            >
              <Link
                to='home'
                spy={true}
                smooth={true}
                duration={500}
              >Nathan Wood
              </Link>
            </Menu.Item>
            <Menu.Item
              key='about'
              className='nav-link'
            >
              <Link
                to='about-me'
                spy={true}
                smooth={true}
                duration={500}
              >
                About Me
              </Link>
            </Menu.Item>
            <Menu.Item
              key='projects'
              className='nav-link'
            >
              <Link
                to='projects'
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </Menu.Item>
            <Menu.Item
              key='codewars'
              className='nav-link'
            >
              <Link
                to='codewars'
                spy={true}
                smooth={true}
                duration={500}
              >
                CodeWars
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className='site-layout-content'>
          <AboutMe />
          <Projects />
          <CodeWars />
        </Content>
        <Footer>
          <a
            className='footer-link'
            type='text'
            href='https://docs.google.com/document/d/1AiRJgoBLqOfWqg_gfZkf_BiGfkv7dwVcWYsyIEiLR5o/edit?usp=sharing'
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
