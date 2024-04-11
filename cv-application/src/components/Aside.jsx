import { H2 } from "./H2";
import { Form } from "./Form";
import { Input } from "./Input";
import { Wrapper } from "./Wrapper";
import { Label } from "./Label";

export function Aside() {
  return (
    <aside className="flex flex-col items-center justify-center gap-4 text-white">
      <Form id="contact-form">
        <H2 text="Contact" />
        <Wrapper>
          <Label htmlFor="fullName" text="Full Name" />
          <Input type="text" id="fullName" />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="email" text="Email" />
          <Input type="email" id="email" />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="phone" text="Phone Number" />
          <Input type="tel" id="phone" />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="address" text="Address" />
          <Input type="text" id="address" />
        </Wrapper>
      </Form>
      <Form id="education-form">
        <H2 text="Education" />
        <Wrapper>
          <Label htmlFor="school" text="School" />
          <Input type="text" id="school" />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="degree" text="Degree" />
          <Input type="text" id="degree" />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="startDate" text="Start Date" />
          <Input type="text" id="startDate" />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="endDate" text="End Date" />
          <Input type="text" id="endDate" />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="location" text="Location" />
          <Input type="text" id="location" />
        </Wrapper>
      </Form>
      <Form id="experience-form">
        <H2 text="Experience" />
        <Wrapper>
          <Label htmlFor="position" text="Position" />
          <Input type="text" id="position" />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="company" text="Company" />
          <Input type="text" id="company" />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="startDate" text="Start Date" />
          <Input type="text" id="startDate" />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="endDate" text="End Date" />
          <Input type="text" id="endDate" />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="description" text="Description" />
          <Input type="text" id="description" />
        </Wrapper>
      </Form>
    </aside>
  );
}
