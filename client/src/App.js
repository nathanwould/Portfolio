import './App.css';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
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
        <Header className='header'>
          <Menu
            className='menu'
            theme='dark'
            mode='horizontal'
            onClick={handleClick} selectedKeys={[current]}
            >
            <Menu.Item
              key='home'
              className='logo'
            ><a href='/'>Nathan Wood</a></Menu.Item>
            <Menu.Item
              key='projects'
              className='nav-link'
            ><a href='/projects'>Projects</a></Menu.Item>
            <Menu.Item
              key='about'
              className='nav-link'
            ><a href='/about'>About Me</a></Menu.Item>
            <Menu.Item
              key='contact'
              className='nav-link'
            ><a href='/contact'>Contact</a></Menu.Item>
          </Menu>
        </Header>
        <Content className='site-layout-content'>
          <Route exact path='/'></Route>
          <Route path='/about'><AboutMe /></Route>
          <Route path='/projects'><Projects /></Route>
          <Route path='/contact'><Contact /></Route>
        </Content>
        <Footer>Nathan Wood ©2021</Footer>
      </Layout>
    </div>
  );
}

export default App;
