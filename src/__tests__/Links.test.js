import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Links from "../components/Link.js";

test("renders the h3 with the text 'Links'", () => {
  render(<Links />);
  // eslint-disable-next-line testing-library/prefer-presence-queries
  expect(screen.queryByText("Links")).toBeInTheDocument();
});

test("displays the URL of a Github link passed down as a prop", () => {
  render(<Links github={"https://github.com/liza"} />);
  // eslint-disable-next-line testing-library/prefer-presence-queries
  expect(screen.queryByText("https://github.com/liza")).toBeInTheDocument();
});

test("displays the URL of a Linkedin link passed down as a prop", () => {
  render(<Links linkedin={"https://www.linkedin.com/in/liza/"} />);
  expect(
    // eslint-disable-next-line testing-library/prefer-presence-queries
    screen.queryByText("https://www.linkedin.com/in/liza/")
  ).toBeInTheDocument();
});