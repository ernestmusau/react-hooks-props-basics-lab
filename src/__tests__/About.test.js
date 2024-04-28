import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import user from "../data/user";
import About from "../components/About.js";

test("renders a <p> element with the bio from props", () => {
  render(<About bio="I made this" links={user.links} />);
  // eslint-disable-next-line testing-library/prefer-presence-queries
  expect(screen.queryByText("I made this")).toBeInTheDocument();
});

test("does not render a <p> element if the bio is not included in props", () => {
  const { container } = render(<About links={user.links} />);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector("p")).toBeNull();
});

test("does not render a <p> element if the bio is an empty string", () => {
  const { container } = render(<About bio="" links={user.links} />);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector("p")).toBeNull();
});
