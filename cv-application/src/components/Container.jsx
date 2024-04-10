export function Container() {
  return (
    <div className="min-h-[1200px] w-1/2 bg-gray-100 p-8">
      <header className="mb-8 text-blue-600">
        <div>
          <h2 className="text-3xl font-bold">John Kowalski</h2>
        </div>
        <div>
          <h3 className="text-base">john.kowal@mail.co.uk</h3>
          <h3 className="text-base">+44 1234 5678 9000</h3>
          <h3 className="text-base">London, UK</h3>
        </div>
      </header>
      <div className="mb-8">
        <h3 className="mb-4 text-xl font-bold">Education</h3>
        <div className="flex">
          <div className="w-1/3">
            <p>08/2020 - present</p>
            <p>New York City, US</p>
          </div>
          <div className="w-2/3">
            <h4 className="text-base font-bold">London Ciry University</h4>
            <p>Bachelor in Economics</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xl font-bold">Experiance</h3>
        <div className="flex">
          <div className="w-1/3">
            <p>08/2020 - present</p>
            <p>Berlin, Germany</p>
          </div>
          <div className="w-2/3">
            <h4 className="text-base font-bold">Black Mesa Labs</h4>
            <p>
              UX Research Assistant Supported senior researchers on
              accessibility standards for the open web. Created and usability
              tested wireframes and prototypes. Produced interactive
              documentation for quick onboarding of new researchers.UX Research
              Assistant Supported senior researchers on accessibility standards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
