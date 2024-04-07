import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Personal from "./Personal";
import { Gender, PersonalDataItem, Salutation } from "../../models/common";

describe("<Personal />", () => {
  test("it should mount", () => {
    const data: PersonalDataItem = {
      salutation: Salutation.Mr,
      profilePicture: '',
      name: "foo",
      surname: "bar",
      gender: Gender.Male,
      dateofbirth: "2017-05-15",
      placeofbirth: "birthcity",
    };

    render(<Personal data={data} />);

    const personal = screen.getByTestId("Personal");

    expect(personal).toBeInTheDocument();
    expect(personal).toHaveTextContent("mr");
    expect(personal).toHaveTextContent("foo");
    expect(personal).toHaveTextContent("May 15, 2017");
    expect(personal).toHaveTextContent("birthcity");
  });
});
