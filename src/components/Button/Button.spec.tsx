import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from ".";

describe("Button", () => {
  it("should renders a children", () => {
    render(<Button>Button children</Button>);

    const children = screen.getByText(/button children/i);

    expect(children).toBeInTheDocument();
  });

  it("should call onClick function", async () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Button text</Button>);

    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(() => {
      expect(onClick).toHaveBeenCalled();
    });
  });
});
