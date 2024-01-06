import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";

import { Button } from ".";

const buttonContent = "Action";

describe("Button", () => {
  it("renders correctly with the default variant", () => {
    const { container } = render(<Button>{buttonContent}</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly with the outline variant", () => {
    const { container } = render(
      <Button variant="outline">{buttonContent}</Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly with the ghost variant", () => {
    const { container } = render(
      <Button variant="ghost">{buttonContent}</Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders without accessibility violations for the default variant", async () => {
    const { container } = render(<Button>{buttonContent}</Button>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it("renders without accessibility violations for the outline variant", async () => {
    const { container } = render(
      <Button variant="outline">{buttonContent}</Button>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it("renders without accessibility violations for the ghost variant", async () => {
    const { container } = render(
      <Button variant="ghost">{buttonContent}</Button>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it("triggers the expected events on button click", async () => {
    const handleOnClick = vi.fn();
    const handleOnMouseDown = vi.fn();
    const handleOnMouseUp = vi.fn();

    render(
      <Button
        onClick={handleOnClick}
        onMouseDown={handleOnMouseDown}
        onMouseUp={handleOnMouseUp}
      >
        {buttonContent}
      </Button>
    );
    const user = userEvent.setup();

    const button = screen.getByRole("button", { name: buttonContent });

    await user.click(button);

    expect(handleOnClick).toHaveBeenCalledTimes(1);
    expect(handleOnMouseDown).toHaveBeenCalledTimes(1);
    expect(handleOnMouseUp).toHaveBeenCalledTimes(1);
  });
});
