import { Button, Space } from 'antd'

export default function NavBar() {
  return (
    <div className="navbar py-[56px] px-[90px]">
        <div className="flex gap-5 justify-between items-center">
          <div className="rate-it flex font-main font-bold gap-1">
            <div className="w-8">
              <img
                src="/img/logo.svg"
                alt=""
                className=""
              />
            </div>
            <span className="text-xl">Rate it</span>
          </div>
          <div className="nav flex gap-5 font-main font-semibold">
            <span>How it works</span>
            <span>Pricing</span>
            <span>Why it's important</span>
            <span>About us</span>
            <span>Contact</span>
          </div>
          <div className="auth">
            <Space>
              <Button type="primary" ghost size="large">
                Login
              </Button>
              <Button size="large" type="primary">
                Sign up
              </Button>
            </Space>
          </div>
        </div>
      </div>
  )
}
