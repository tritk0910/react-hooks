import { Button } from "antd";

export default function Customize() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="font-bold text-[48px]">
        Customizable plans for every company
      </h1>
      <hr className="w-[58px] border-[#1F64FF] border-2 rounded-full" />
      <div className="flex flex-col text-center">
        <span className="opacity-35">
          With our scalable packages, you can pay for what you need and leave
          out what you don't. We will grow with you.
        </span>
        <span className="opacity-75 font-semibold">
          Figure out what package is best for you
        </span>
      </div>
      <div className="flex relative w-[880px] h-[569px] justify-center items-center p-20">
        <div className="absolute -left-7 flex flex-col justify-between items-center border border-[#1F64FF] p-7  rounded-lg w-[320px] h-[450px]">
          <h2 className="font-main font-bold text-3xl">Free</h2>
          <h1 className="before:content-['$'] before:align-[200%] before:pr-1 before:opacity-35 before:font-normal after:font-normal after:content-['/m'] text-7xl before:text-sm font-main font-bold after:opacity-35 after:text-sm">
            0
          </h1>
          <ul className="h-36 list-image-checkmark">
            <li>
              1 user 1 connected calendar
            </li>
            <li>
              Up to 12 responses
            </li>
            <li>
              Up to 3 survey results archived
            </li>
            <li>
              Knowledge base
            </li>
          </ul>
          <img src="/img/dash 1.svg" alt="" />
          <Button
            size="large"
            type="primary"
            className="w-[200px] h-[52px] font-semibold"
          >
            Get Free
          </Button>
        </div>
        <div className="absolute -right-7 flex flex-col justify-between items-center border border-[#1F64FF] p-7 rounded-lg w-[320px] h-[450px]">
          <h2 className="font-main font-bold text-3xl">Team</h2>
          <h1 className="before:content-['$'] before:align-[200%] before:pr-1 before:opacity-35 before:font-normal after:font-normal after:content-['/m'] text-7xl before:text-sm font-main font-bold after:opacity-35 after:text-sm">
            10
          </h1>
          <ul className="h-28 list-image-checkmark">
            <li>
              Per user in company domain with single calender
              integrations
            </li>
            <li>
              Unlimited responses
            </li>
            <li>
              Unlimited survey results archived
            </li>
            <li>
              Priority email & chat
            </li>
          </ul>
          <img src="/img/dash 1.svg" alt="" />
          <Button
            size="large"
            type="primary"
            className="w-[200px] h-[52px] font-semibold"
          >
            Get Team
          </Button>
        </div>
        <div className="absolute flex flex-col justify-center items-center gap-5 bg-[#1F64FF] px-10 py-7 rounded-lg text-white w-[320px] h-[500px]">
          <h2 className="font-main font-bold text-3xl">Personal</h2>
          <h1 className="before:content-['$'] before:align-[200%] before:pr-1 before:opacity-35 before:font-normal after:font-normal after:content-['/m'] text-7xl before:text-sm font-main font-bold after:opacity-35 after:text-sm">
            5
          </h1>
          <div className="flex gap-1 rounded-[5px] bg-[#6293FF] p-1">
            <button className="w-24 h-7 bg-white text-[#1F64FF] rounded-[5px]">
              Monthly
            </button>
            <button className="w-24 h-7">Annually</button>
          </div>
          <ul className="list-image-checkmark text-black invert">
            <li>
              1 user up to 2 connected calendars
            </li>
            <li>
              Up to 50 responses
            </li>
            <li>
              Up to 10 survey results archived
            </li>
            <li>
              Standard email & chat
            </li>
          </ul>
          <img src="/img/dash 1.svg" alt="" className="invert" />
          <Button
            size="large"
            className="w-[200px] h-[52px] text-[#1F64FF] font-semibold"
          >
            Get Personal
          </Button>
        </div>
      </div>
    </div>
  );
}
