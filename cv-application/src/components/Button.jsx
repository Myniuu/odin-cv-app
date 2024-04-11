export function Button({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    >
      Submit
    </button>
  );
}
