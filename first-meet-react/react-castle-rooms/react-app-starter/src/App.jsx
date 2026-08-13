import React, { useState } from "react"; // 1. เพิ่ม import useState ตรงนี้

// 2. เพิ่ม Box Component (รับ children มาเรนเดอร์ด้านใน)
function Box({ name, bg, children }) {
  return (
    <div className={`${bg} p-6 text-white text-center font-bold`}>
      <h1>TEST01</h1>
      <h2 className="text-2xl mb-2">{name}</h2>
      {children}
    </div>
  );
}

// 3. เพิ่ม SecretRoom Component
function SecretRoom({ message, reply, setReply }) {
  return (
    <div className="bg-slate-800 p-6 text-white max-w-md mx-auto font-normal rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">SecretRoom</h2>

      <p className="mb-3 text-sm">
        Message from the outside :{" "}
        <span className="text-green-400">✅ {message}</span>
      </p>

      <textarea
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        className="w-full p-2 text-black rounded mb-3 font-mono"
        rows={2}
      />

      <p className="text-sm">
        Reply to the outside: <span className="text-green-400">✅ {reply}</span>
      </p>
    </div>
  );
}

// 4. App Component ของคุณ (ถูกต้องแล้ว)
export default function App() {
  const LAYERS_DATA = [
    { title: "Castle", bg: "bg-red-600" },
    { title: "Tower", bg: "bg-orange-500" },
    { title: "Chamber", bg: "bg-amber-400" },
    { title: "Room", bg: "bg-emerald-500" },
    { title: "Hall", bg: "bg-emerald-600" },
    { title: "Corridor", bg: "bg-blue-500" },
    { title: "Gallery", bg: "bg-indigo-500" },
    { title: "Nook", bg: "bg-purple-600" },
  ];

  const [message] = useState("hello?");
  const [reply, setReply] = useState("hey help me!");

  return (
    <div>
      {LAYERS_DATA.reduceRight(
        (children, item) => (
          <Box key={item.title} name={item.title} bg={item.bg}>
            {children}
          </Box>
        ),
        <SecretRoom message={message} reply={reply} setReply={setReply} />,
      )}
    </div>
  );
}
