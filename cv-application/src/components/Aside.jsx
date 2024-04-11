import { useState } from "react";
import { H2 } from "./H2";
import { Form } from "./Form";
import { Input } from "./Input";
import { Wrapper } from "./Wrapper";
import { Label } from "./Label";
import { Button } from "./Button";

export function Aside() {
  const [formPersonal, setFormPersonal] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleButtonClick = (e) => {
    e.preventDefault();
    setFormPersonal({
      ...formPersonal,
      fullName: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <aside className="flex flex-col items-center justify-center gap-4 text-white">
      <Form id="personal-form">
        <H2 text="Personal" />
        <Wrapper>
          <Label htmlFor="fullName" text="Full Name" />
          <Input
            value={formPersonal.fullName}
            onChange={(e) =>
              setFormPersonal({ ...formPersonal, fullName: e.target.value })
            }
            type="text"
            id="fullName"
          />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="email" text="Email" />
          <Input
            value={formPersonal.email}
            onChange={(e) =>
              setFormPersonal({ ...formPersonal, email: e.target.value })
            }
            type="email"
            id="email"
          />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="phone" text="Phone Number" />
          <Input
            value={formPersonal.phone}
            onChange={(e) =>
              setFormPersonal({ ...formPersonal, phone: e.target.value })
            }
            type="tel"
            id="phone"
          />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="address" text="Address" />
          <Input
            value={formPersonal.address}
            onChange={(e) =>
              setFormPersonal({ ...formPersonal, address: e.target.value })
            }
            type="text"
            id="address"
          />
        </Wrapper>
        <div className="flex justify-center">
          <Button onClick={handleButtonClick} />
        </div>
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
        <div className="flex justify-center">
          <Button />
        </div>
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
        <div className="flex justify-center">
          <Button />
        </div>
      </Form>
    </aside>
  );
}
