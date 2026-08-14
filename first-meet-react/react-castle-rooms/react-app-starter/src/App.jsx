import React, { useState } from "react"; // 1. เพิ่ม import useState ตรงนี้
import Box from "./components/Box";
import SecretRoom from "./components/SecretRoom";
import { Tower_Data } from "./data";
// 4. App Component ของคุณ (ถูกต้องแล้ว)
export default function App() {
  const [question, setQuestion] = useState("");
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("hey help me!");
  const [btn, setBtn] = useState(false);
  function handleQuestion(e) {
    setQuestion(e.target.value);
    setMessage(e.target.value);
  }

  console.log("Check ", btn);
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white pb-80 py-10 gap-y-4">
        <p>
          Message for Secret Room :
          <span>
            {question ? `❇️${question}` : `⌛️Waiting For a message...`}
          </span>
        </p>

        <button
          className="bg-red-300 text-white p-2 rounded-2xl"
          onClick={() => setBtn((prev) => !prev)}
        >
          Close Text
        </button>
        <textarea
          value={question}
          onChange={handleQuestion}
          placeholder="Text"
          className="bg-white text-black rounded px-2 py-1"
        ></textarea>
        {Tower_Data.reduceRight(
          (children, item) => (
            <Box
              key={item.title}
              name={item.title}
              bg={item.bg}
              reply={reply}
              btn={btn}
            >
              {children}
            </Box>
          ),
          <SecretRoom message={message} reply={reply} setReply={setReply} />,
        )}
      </div>
    </>
  );
}
