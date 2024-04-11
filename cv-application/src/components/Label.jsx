export function Label({ htmlFor, text }) {
  return (
    <label htmlFor={htmlFor} className="text-xl font-semibold">
      {text}
    </label>
  );
}
