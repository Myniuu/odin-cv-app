import { Button } from "./Button";

export function Form({ children, id }) {
  return (
    <form
      id={id}
      className="w-full space-y-2 rounded-lg border border-white bg-sky-950 p-8 text-center"
    >
      {children}
      <div className="flex justify-center">
        <Button />
      </div>
    </form>
  );
}