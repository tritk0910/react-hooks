import { Button, Space } from "antd";

export default function Landing() {
  return (
    <div className="flex mx-72 justify-between items-center">
      <div className="flex flex-col font-main gap-3">
        <h1 className="text-[48px]">
          Stop wasting time <h1 className="font-bold">in meetings</h1>
        </h1>
        <span className="text-[15px] w-[279px]">
          Boost efficiency, save time & money with post meeting surveys.
        </span>
        <Space>
          <Button type="primary" size="large" className="w-[200px] h-[52px]">
            Get Started
          </Button>
          <Button
            type="primary"
            ghost
            size="large"
            className="w-[200px] h-[52px]"
          >
            Sign up with Google
          </Button>
        </Space>
      </div>
      <img src="/img/CARTOON.png" alt="" />
    </div>
  );
}
