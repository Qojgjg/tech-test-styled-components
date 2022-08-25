import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Drawer, { DrawerContext } from ".";
import { wrapComponent } from "../../utils/wrapComponent";

const requiredProps = {
  isOpen: true,
  showDrawer: jest.fn(),
  hideDrawer: jest.fn(),
};

describe("Drawer", () => {
  it("should render the dialog and the overlay", () => {
    const component = wrapComponent(
      <DrawerContext.Provider value={{ ...requiredProps }}>
        <Drawer>
          <h1>Some content</h1>
        </Drawer>
      </DrawerContext.Provider>
    );
    render(component);

    expect(screen.getByRole("dialog")).toBeVisible();
    expect(screen.getByLabelText("overlay")).toBeVisible();
  });

  it("should render the children", () => {
    const component = wrapComponent(
      <DrawerContext.Provider value={{ ...requiredProps }}>
        <Drawer>
          <h1>Some content</h1>
        </Drawer>
      </DrawerContext.Provider>
    );
    render(component);

    expect(
      screen.getByRole("heading", { level: 1, name: "Some content" })
    ).toBeVisible();
  });

  it("should not render if not open", async () => {
    const component = wrapComponent(
      <DrawerContext.Provider value={{ ...requiredProps, isOpen: false }}>
        <Drawer>
          <h1>Some content</h1>
        </Drawer>
      </DrawerContext.Provider>
    );
    const { container } = render(component);

    expect(container.childElementCount).toEqual(0);
  });

  it("should call hideDrawer when the close button is clicked", async () => {
    const hideDrawerMock = jest.fn();
    const component = wrapComponent(
      <DrawerContext.Provider
        value={{ ...requiredProps, hideDrawer: hideDrawerMock }}
      >
        <Drawer>
          <h1>Some content</h1>
        </Drawer>
      </DrawerContext.Provider>
    );
    render(component);

    expect(hideDrawerMock).not.toHaveBeenCalled();
    userEvent.click(screen.getByRole("button", { name: "close" }));
    await waitFor(() => expect(hideDrawerMock).toHaveBeenCalled());
  });

  it("should trap focus", async () => {
    const component = wrapComponent(
      <DrawerContext.Provider value={{ ...requiredProps }}>
        <button>don't focus me</button>
        <Drawer>
          <div>
            <button>button 1</button>
            <button>button 2</button>
          </div>
        </Drawer>
      </DrawerContext.Provider>
    );
    render(component);

    expect(screen.getByRole("button", { name: "close" })).toHaveFocus();
    expect(
      screen.getByRole("button", { name: "don't focus me" })
    ).not.toHaveFocus();

    userEvent.tab();
    await waitFor(() =>
      expect(screen.getByRole("button", { name: "button 1" })).toHaveFocus()
    );
    expect(
      screen.getByRole("button", { name: "don't focus me" })
    ).not.toHaveFocus();

    userEvent.tab();
    await waitFor(() =>
      expect(screen.getByRole("button", { name: "button 2" })).toHaveFocus()
    );
    expect(
      screen.getByRole("button", { name: "don't focus me" })
    ).not.toHaveFocus();

    userEvent.tab();
    await waitFor(() =>
      expect(screen.getByRole("button", { name: "close" })).toHaveFocus()
    );
    expect(
      screen.getByRole("button", { name: "don't focus me" })
    ).not.toHaveFocus();
  });

  it("should close with the Escape key", async () => {
    const hideDrawerMock = jest.fn();
    const component = wrapComponent(
      <DrawerContext.Provider
        value={{ ...requiredProps, hideDrawer: hideDrawerMock }}
      >
        <Drawer>
          <h1>Some content</h1>
        </Drawer>
      </DrawerContext.Provider>
    );
    render(component);

    expect(hideDrawerMock).not.toHaveBeenCalled();
    userEvent.keyboard("{Escape}");
    await waitFor(() => expect(hideDrawerMock).toHaveBeenCalled());
  });
});
