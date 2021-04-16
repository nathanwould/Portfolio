import { Form, Input, Button } from 'antd';
import './Contact.css'

export default function Contact() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // })

  return (
    <Form
      name="basic"
      layout='vertical'
      className='form'
    >
      <Form.Item
        name='name'
        label='Name'
        // value={name}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='email'
        label='Email'
        // value={email}
        rules={[{ type: 'email', required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='message'
        label='Message'
        // value={message}
        rules={[{ required: true }]}
      >
        <Input.TextArea
          size='large'
          autoSize='true'
        />
      </Form.Item>
      <Form.Item>
      <Button type='primary' htmlType='submit'>
        Submit
        </Button>
      </Form.Item>
    </Form>
  )
}