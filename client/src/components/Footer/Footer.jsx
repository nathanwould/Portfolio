import { Layout, BackTop, Typography } from "antd";
import { GithubOutlined, SolutionOutlined, LinkedinOutlined } from '@ant-design/icons';

export default function Footer() {
  const { Footer } = Layout;
  const { Link } = Typography;
  return (
    <Footer className="footer">
      <Link
        className="footer-link"
        href="https://drive.google.com/file/d/1U52trwO-KmX7DaAy_06knd4d4rLDna9e/view?usp=sharing"
        target="_blank"
      >
        <SolutionOutlined /> CV
      </Link>
      <Link
        className="footer-link"
        href="https://github.com/nathanwould"
        target="_blank"
      >
        <GithubOutlined /> GitHub
      </Link>
      <Link
        className="footer-link"
        href="https://www.linkedin.com/in/nathan-wood-dev/"
        target="_blank"
      >
        <LinkedinOutlined /> LinkedIn
      </Link>
      {/* <a
        className="footer-link"
        type="text"
        rel="noreferrer"
        target="_blank"
        href='https://drive.google.com/file/d/1U52trwO-KmX7DaAy_06knd4d4rLDna9e/view?usp=sharing'
      >
        <SolutionOutlined />
        CV
      </a>
      <a
        className="footer-link"
        type="text"
        rel="noreferrer"
        target="_blank"
        href='https://github.com/nathanwould'
      >
        <GithubOutlined />
        GitHub
      </a>
      <a
        className="footer-link"
        type="text"
        rel="noreferrer"
        target="_blank"
        href='https://www.linkedin.com/in/nathan-wood-dev/'
      >
        <LinkedinOutlined />
        LinkedIn
      </a> */}
      <h4 className='footer-copyright'>Nathan Wood ©2021</h4>
      <BackTop />
    </Footer>
  )
}