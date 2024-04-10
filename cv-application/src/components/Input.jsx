export function Input({ text, id }) {
  return (
    <input
      type={text}
      id={id}
      className="rounded-md border border-gray-900 bg-gray-800 px-7 text-xl focus:outline-none focus:ring-2 focus:ring-white"
    />
  );
}
