export default function HowItWorks() {
  return (
    <div className="how-it-works flex flex-col justify-center items-center m-48 gap-5">
      <h1 className=" font-bold text-[48px]">How it works?</h1>
      <hr className="w-[58px] border-[#1F64FF] border-2 rounded-full" />
      <div className="flex justify-between items-center gap-56 pt-[100px] text-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <img src="public/img/calendar.svg" alt="" />
          <h1 className="font-semibold text-lg">Click Google integration</h1>
          <span>
            Simply log into your google account, then seamlessly integrate and
            mirror your planned meetings.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <img src="public/img/custom.svg" alt="" />
          <h1 className="font-semibold text-lg">Customization</h1>
          <span>
            Whatever the goals of your team or organization, create a survey to
            better help you understand the minds of those involved.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <img src="public/img/email.svg" alt="" />
          <h1 className="font-semibold text-lg">Automation</h1>
          <span>
            Automatically triggered emails obtain survey feedback. Wait for
            meeting data to be cleanly organized in your dashboard.
          </span>
        </div>
      </div>
    </div>
  );
}
