export default function AboutUs() {
  return (
    <>
      <div className="py-[100px] px-72 flex flex-col gap-5">
        <h1 className="font-bold text-[48px] font-main">About us</h1>
        <hr className="w-[58px] border-[rgb(31,100,255)] border-2 rounded-full" />
        <div className="flex justify-between items-center">
          <div className="pt-[70px] font-main flex flex-col gap-10">
            <div className="w-[657px]">
              Picture this….you're in your weekly meeting and you ask a
              question. No one responds. Whether they're zoned out or are
              responding to emails or chatting on slack, it can feel defeating.
            </div>
            <div className="flex flex-col gap-4">
              <div>In order to have an epic meeting, you need five parts:</div>
              <ul className="list-image-ellipse pl-10">
                <li>Set a cadence for your team meetings</li>
                <li>Have a clear meeting objective and agenda</li>
                <li>Start on time and end on time</li>
                <li>Have the right attendees in the room</li>
                <li>
                  Have clear action items [who, what, when] at the end of the
                  meeting
                </li>
              </ul>
            </div>
            <div className="w-[1067px]">
              <div>
                Rate It was created to help leaders and managers have epic
                meetings that aren't wasting anyone's time.
              </div>
              <div>
                With timely feedback on how meetings can be productive, you will
                soon be holding world-class and super effective meetings.
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <img src="/img/logo.svg" alt="" />
            <h1 className="font-main font-semibold text-6xl">Rate it</h1>
          </div>
        </div>
      </div>
    </>
  );
}
