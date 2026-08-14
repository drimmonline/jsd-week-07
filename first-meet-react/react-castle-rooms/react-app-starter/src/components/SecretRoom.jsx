function SecretRoom(props) {
  return (
    <div className="bg-white p-6 text-gray-800 max-w-md mx-auto font-normal rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">SecretRoom</h2>

      <p className="mb-3 text-sm">
        Message for the Secret Room :{props.question}
        <span className="text-green-400">✅ {props.message}</span>
      </p>
      <p className="mb-3 text-sm">
        Message form Secret Room :{props.question}
        <span className="text-green-400">✅ {props.reply}</span>
      </p>

      <textarea
        value={props.reply}
        onChange={(e) => props.setReply(e.target.value)}
        className="w-full p-2 text-black rounded mb-3 font-mono bg-amber-200"
        rows={2}
      />

      <p className="text-sm">
        Reply to the outside:{props.answer}
        <span className="text-green-400">✅ {props.reply}</span>
      </p>
    </div>
  );
}
export default SecretRoom;
