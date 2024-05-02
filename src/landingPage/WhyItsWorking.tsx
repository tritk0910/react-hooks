import { Button } from "antd";

export default function WhyItsWorking() {
  return (
    <div className="why-its-important flex flex-col justify-center items-center mx-96 mb-[150px] gap-5 font-main">
      <h1 className="font-bold text-[48px]">Why it's important?</h1>
      <hr className="w-[58px] border-[#1F64FF] border-2 rounded-full" />
      <div className=" flex flex-col justify-center items-center">
        <span className="opacity-35">
          How many hours are you and your team wasting in meetings that aren't
          adding to your productivity?
        </span>
        <div>
          <span className="opacity-35">
            In a 2017 survey of office workers by the
          </span>
          <span className="opacity-75 italic"> Harvard Business Review</span>
          <span className="opacity-35">
            , key findings brought to light how useless meetings can actually
            be.
          </span>
        </div>
      </div>
      <div className="image flex relative w-full h-[369px] justify-center items-center">
        <img
          src="/img/image1.svg"
          alt=""
          className="absolute -z-1 left-0"
        />
        <img
          src="/img/image3.svg"
          alt=""
          className="absolute -z-1 right-0"
        />
        <img src="/img/image2.svg" alt="" className="absolute z-1" />
      </div>
      <div className="flex gap-2">
        <hr className="w-[58px] border-[#F0F0F0] border-2 rounded-full" />
        <hr className="w-[58px] border-[#1F64FF] border-2 rounded-full" />
        <hr className="w-[58px] border-[#F0F0F0] border-2 rounded-full" />
        <hr className="w-[58px] border-[#F0F0F0] border-2 rounded-full" />
        <hr className="w-[58px] border-[#F0F0F0] border-2 rounded-full" />
      </div>
      <div className="flex flex-col text-center">
        <span className="opacity-35">
          Feeling like there aren't enough hours in the day is a common problem
          faced by many leaders in this world.
        </span>
        <span className="opacity-75 font-semibold">
          Try post meeting surveys now and avoid wasting time.
        </span>
      </div>

      <Button size="large" type="primary" className="w-[200px] h-[52px]">
        Sign up today
      </Button>
    </div>
  );
}
