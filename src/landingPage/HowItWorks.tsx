export default function HowItWorks() {
  return (
    <div className="how-it-works flex flex-col justify-center items-center gap-10 my-[150px]">
      <h1 className=" font-bold text-[48px]">How it works?</h1>
      <hr className="w-[58px] border-[#1F64FF] border-2 rounded-full" />
      <div className="grid grid-cols-3 gap-28">
        <div className="flex flex-col items-center text-center gap-1">
          <div>
            <img src="/img/calendar.svg" alt="" />
          </div>
          <h1 className="font-semibold text-lg">Click Google integration</h1>
          <span className="w-96">
            Simply log into your google account, then seamlessly integrate and
            mirror your planned meetings.
          </span>
        </div>
        <div className="flex flex-col items-center text-center gap-1">
          <div>
            <img src="/img/custom.svg" alt="" />
          </div>
          <h1 className="font-semibold text-lg">Customization</h1>
          <span className="w-96">
            Whatever the goals of your team or organization, create a survey to
            better help you understand the minds of those involved.
          </span>
        </div>
        <div className="flex flex-col items-center text-center gap-1">
          <div>
            <img src="/img/email.svg" alt="" />
          </div>
          <h1 className="font-semibold text-lg">Automation</h1>
          <span className="w-96">
            Automatically triggered emails obtain survey feedback. Wait for
            meeting data to be cleanly organized in your dashboard.
          </span>
        </div>
      </div>
    </div>
  );
}
