import { Button, Form } from "antd";

export default function MessageForm() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 bg-[#1F64FF] flex justify-center items-center font-main text-5xl font-semibold text-white p-32">
        We all know that time is money... so stop wasting time, and save money
        with Rate It!
      </div>
      <div className="col-span-8">
        <div className="h-full px-[85px]">
          <Form layout="vertical" autoComplete="off" className="h-full">
            <div className="flex flex-col h-full justify-between py-12">
              <div className="flex justify-between gap-36">
                <Form.Item
                  name="firstName"
                  label="First Name"
                  className="w-full"
                >
                  <input
                    type="text"
                    className="border-b border-[#1F64FF] outline-none w-full"
                  />
                </Form.Item>
                <Form.Item label="Last Name" name="lastName" className="w-full">
                  <input
                    type="text"
                    className="border-b border-[#1F64FF] outline-none w-full"
                  />
                </Form.Item>
              </div>
              <div className="flex justify-between gap-36">
                <Form.Item label="Mail" name="mail" className="w-full">
                  <input
                    type="text"
                    className="border-b border-[#1F64FF] outline-none w-full"
                  />
                </Form.Item>
                <Form.Item label="Phone" name="phone" className="w-full">
                  <input
                    type="text"
                    className="border-b border-[#1F64FF] outline-none w-full"
                  />
                </Form.Item>
              </div>
              <Form.Item label="Message" name="message" className="w-full">
                <textarea
                  rows={4}
                  placeholder="Write your message"
                  className="border-b border-[#1F64FF] outline-none w-full resize-none"
                />
              </Form.Item>
              <Form.Item className="flex justify-end">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-[200px] h-[52px] font-semibold"
                >
                  Send Message
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
