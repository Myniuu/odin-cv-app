export function Input({ text, id, value, onChange }) {
  return (
    <input
      onChange={onChange}
      value={value}
      type={text}
      id={id}
      className="rounded-md border border-gray-900 bg-gray-800 px-7 text-xl focus:outline-none focus:ring-2 focus:ring-white"
    />
  );
}
