import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Input from ".";

describe("Input", () => {
  it("should call onChange function", async () => {
    const onChange = jest.fn();
    render(<Input aria-label="name" onChange={onChange} />);

    const input = screen.getByRole("textbox");
    userEvent.type(input, "rodrigo");

    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });
});
