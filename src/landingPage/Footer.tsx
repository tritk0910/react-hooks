import { LinkedinFilled, TwitterSquareFilled } from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="h-[536px] bg-[#090949] text-white flex flex-col justify-between p-[89px]">
      <div className="grid grid-cols-6 font-main">
        <div className="col-span-1">
          <div className="text-3xl font-bold flex flex-col gap-10">
            <h1>Need help with anything?</h1>
            <div>
              <TwitterSquareFilled /> <LinkedinFilled />
            </div>
          </div>
        </div>
        <div className="col-start-3 flex flex-col gap-8">
          <span className="font-semibold">Home</span>
          <ul className="flex flex-col gap-8 opacity-65">
            <li>What is it</li>
            <li>How its works</li>
            <li>Why it's important</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-8">
          <span className="font-semibold">Company</span>
          <ul className="flex flex-col gap-8 opacity-65">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-8">
          <span className="font-semibold">Legal</span>
          <ul className="flex flex-col gap-8 opacity-65">
            <li>Terms & Conditions</li>
            <li>Privacy & Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-8">
          <span className="font-semibold">Help</span>
          <ul className="flex flex-col gap-8 opacity-65">
            <li>FAQs</li>
          </ul>
        </div>
      </div>
      <div className="flex h-8 font-main font-semibold gap-2 text-3xl">
        <img src="/img/logo.svg" alt="" className="h-full" />
        <span>Rate it</span>
      </div>
    </div>
  );
}
