export default function SecretRoom({ message, reply, setReply }) {
  return (
    <div className="bg-slate-800 p-6 text-white max-w-md mx-auto font-normal rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">SecretRoom</h2>

      {/* 1. แสดง message ที่ส่งมาจากชั้นนอกสุด */}
      <p className="mb-3 text-sm">
        Message from the outside :{" "}
        <span className="text-green-400">✅ {message}</span>
      </p>

      {/* 2. ช่องพิมพ์ข้อความ (ใช้ setReply อัปเดตค่าเมื่อพิมพ์) */}
      <textarea
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        className="w-full p-2 text-black rounded mb-3 font-mono"
        rows={2}
      />

      {/* 3. แสดงผล reply ที่อัปเดตแบบ Real-time */}
      <p className="text-sm">
        Reply to the outside: <span className="text-green-400">✅ {reply}</span>
      </p>
    </div>
  );
}
