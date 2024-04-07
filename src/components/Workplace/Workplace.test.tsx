import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Workplace from "./Workplace";
import { Degree, EmploymentType, StepType, Technologies, WorkplaceDataItem } from "../../models/common";

describe("<Workplace />", () => {
  test("it should mount", () => {
    const myData: WorkplaceDataItem = {
      type: StepType.Job,
      from: "2017-05-15",
      to: "2018-05-15",
      company: "ACME",
      title: "Master of Everything",
      website: "http://www.acme.com",
      degree: Degree.BachelorScience,
      employmentType: EmploymentType.FullTime,
      place: "Silicon Valley",
      duties: ["cleaning", "programming"],
      technologies: [Technologies.Java, Technologies.Javascript],
    };
    render(<Workplace data={myData} />);

    const workplace = screen.getByTestId("Workplace");

    expect(workplace).toBeInTheDocument();
    expect(workplace).toHaveTextContent("May 15, 2017");
    expect(workplace).toHaveTextContent("May 15, 2018");
    expect(workplace).toHaveTextContent("ACME");
    expect(workplace).toHaveTextContent("Master of Everything");
    expect(workplace).toHaveTextContent("fulltime");
    expect(workplace).toHaveTextContent("Silicon Valley");
    expect(workplace).toHaveTextContent("http://www.acme.com");
    expect(workplace).toHaveTextContent("bachelorofscience");
    expect(workplace).toHaveTextContent("cleaning");
    expect(workplace).toHaveTextContent("programming");
    expect(workplace).toHaveTextContent("Java");
    expect(workplace).toHaveTextContent("JavaScript");
  });
});
