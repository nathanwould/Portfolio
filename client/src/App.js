import './App.css';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import NavBar from './components/NavBar/NavBar';
import Routes from './components/Routes/Routes';
import Footer from './components/Footer/Footer';

function App() {
  const { Content } = Layout;

  return (
    <div className="App">
      <Layout className='layout'>
        <NavBar />
        <Content className='site-layout-content'>
          <Routes />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
