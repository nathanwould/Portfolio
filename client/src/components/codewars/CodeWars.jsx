import { Space, Typography, Card } from "antd"

export default function CodeWars() {
  const { Title , Link } = Typography;
  return (
    <Space
      id="codewars"
      direction="vertical"
      style={{
        marginTop: "6rem",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div style={{marginBottom: '5rem'}}></div>
      <Title level={2}>Or get a feel for my problem-solving process:</Title>
      <Card
        title='Codewars'
        className="codewars-card"
        id="codewars"
        cover={<img alt='code wars' src='https://i.imgur.com/suX7xS6h.png' />}
        style={{maxWidth: "80vh"}}
      >
        <p>See what kinds of problems I'm tackling when no one is looking over my sholder.</p>
        <Link href='https://www.codewars.com/users/nathanwould' target="_blank">Take a Look at my Profile</Link>
        <Link href='https://github.com/nathanwould/codewars' target="_blank">View on GitHub</Link>
      </Card>
    </Space>
  )
}