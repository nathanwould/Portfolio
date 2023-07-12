import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [current, setCurrent] = useState({
    current: 'home'
  });

  const { Header } = Layout;
  
  const handleClick = e => {
    setCurrent({ current: e.key });
  };
  return (
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
                to='/'
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
                to='/about'
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
                to='/projects'
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </Menu.Item>
            <Menu.Item
              key='/codewars'
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
  )
};