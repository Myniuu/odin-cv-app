import { Input } from "./Input";

export function Aside() {
  return (
    <aside className="flex flex-col items-center justify-center gap-4 text-white">
      <form className="w-full space-y-2 rounded-lg border border-white bg-sky-950 p-8 text-center">
        <h2 className="mb-6 text-3xl font-bold">Personal</h2>
        <div className="flex flex-col items-center space-y-4">
          <label htmlFor="fullName" className="text-xl font-semibold">
            Full Name
          </label>
          <Input type="text" id="fullName" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <label htmlFor="email" className="text-xl font-semibold">
            Email
          </label>
          <Input type="email" id="email" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <label htmlFor="phone" className="text-xl font-semibold">
            Phone Number
          </label>
          <Input type="tel" id="phone" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <label htmlFor="address" className="text-xl font-semibold">
            Address
          </label>
          <Input type="text" id="address" />
        </div>
        <div className="flex justify-center">
          <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            Submit
          </button>
        </div>
      </form>
      <form className="w-full space-y-2 rounded-lg border border-white bg-sky-950 p-8 text-center">
        <h2 className="mb-6 text-3xl font-bold">Education</h2>
        <div className="flex flex-col items-center space-y-4">
          <label htmlFor="school" className="text-xl font-semibold">
            School
          </label>
          <Input type="text" id="school" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <label htmlFor="degree" className="text-xl font-semibold">
            Degree
          </label>
          <Input type="text" id="degree" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <label htmlFor="startDate" className="text-xl font-semibold">
            Start Date
          </label>
          <Input type="text" id="startDate" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <label htmlFor="endDate" className="text-xl font-semibold">
            End Date
          </label>
          <Input type="text" id="endDate" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <label htmlFor="location" className="text-xl font-semibold">
            Location
          </label>
          <Input type="text" id="location" />
        </div>
        <div className="flex justify-center">
          <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            Submit
          </button>
        </div>
      </form>
      <form className="w-full space-y-2 rounded-lg border border-white bg-sky-950 p-8 text-center">
        <h2 className="mb-6 text-3xl font-bold">Experience</h2>
        <div className="flex flex-col items-center space-y-4">
          <label htmlFor="position" className="text-xl font-semibold">
            Position
          </label>
          <Input type="text" id="position" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <label htmlFor="companyName" className="text-xl font-semibold">
            Company Name
          </label>
          <Input type="text" id="company" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <label htmlFor="startDate" className="text-xl font-semibold">
            Start Date
          </label>
          <Input type="text" id="startDate" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <label htmlFor="endDate" className="text-xl font-semibold">
            End Date
          </label>
          <Input type="text" id="endDate" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <label htmlFor="description" className="text-xl font-semibold">
            Descripton
          </label>
          <Input type="text" id="description" />
        </div>
        <div className="flex justify-center">
          <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            Submit
          </button>
        </div>
      </form>
    </aside>
  );
}
