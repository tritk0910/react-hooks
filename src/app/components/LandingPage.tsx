import { Button, Space } from "antd";

export default function LandingPage() {
  return (
    <div className="navbar w-screen py-[56px] px-[90px]">
      <div className="flex gap-5 justify-between items-center">
        <div className="rate-it flex font-main font-bold gap-1">
          <div className="relative w-8">
            <img
              src="public/img/Star.svg"
              alt=""
              className="absolute top-1 left-2"
            />
            <img
              src="public/img/Vector.svg"
              alt=""
              className="absolute z-[-1]"
            />
            <img
              src="public/img/Vector-1.svg"
              alt=""
              className="absolute right-0 -bottom-[1px]"
            />
          </div>
          <span>Rate it</span>
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
            <Button type="primary" ghost>
              Login
            </Button>
            <Button type="primary">Sign up</Button>
          </Space>
        </div>
      </div>
    </div>
  );
}
