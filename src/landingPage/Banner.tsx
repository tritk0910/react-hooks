import { Button } from "antd";

export default function Banner() {
  return (
    <div className="h-[422px] flex justify-between bg-[#F5F6FA] mt-[100px]">
      <div className="font-main font-semibold flex flex-col justify-between h-full py-24 pl-32">
        <div className="text-5xl w-[680px]">
          <h1>Send out your first</h1>
          <h1>Rate It today!</h1>
        </div>
        <Button
          className="w-[200px] h-[52px] font-main font-semibold"
          type="primary"
        >
          Try for free
        </Button>
      </div>
    <img src="/img/BANNER.svg" alt="" />
    </div>
  );
}
