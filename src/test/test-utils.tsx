import type { ReactElement } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import type { MemoryRouterProps } from "react-router";

interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
  routerProps?: MemoryRouterProps;
}

export const renderWithRouter = (
  ui: ReactElement,
  { routerProps, ...renderOptions }: CustomRenderOptions = {},
) => {
  const { initialEntries = ["/"], ...restRouterProps } = routerProps || {};

  return render(
    <MemoryRouter initialEntries={initialEntries} {...restRouterProps}>
      {ui}
    </MemoryRouter>,
    renderOptions,
  );
};

export {
  act,
  screen,
  waitFor,
  within,
  fireEvent,
} from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { renderWithRouter as render };
