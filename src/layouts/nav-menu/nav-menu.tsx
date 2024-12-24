import { Reducer, useReducer, useRef } from "react";
import { NavMenuProvider, initialState } from "./nav-menu-context";
import { NavMenuTrigger } from "./nav-menu-trigger";
import { NavMenuItem, NavMenuItemWrapper } from "./nav-menu-item";
import { NavMenuContent } from "./nav-menu-content";
import type {
  NavMenuProps,
  InitialState,
  ContentUiProps,
  ItemRef,
} from "./nav-menu-types";
import { navMenuReducer } from "./nav-menu-utils";

export default function NavMenu(props: NavMenuProps) {
  const {
    className,
    menuClassName,
    menuContentClassName,
    fullscreen = false,
    dir = "ltr",
    children,
    floatingOffset = 10,
  } = props;
  const [state, set] = useReducer<Reducer<InitialState, any>>(
    navMenuReducer,
    initialState
  );
  const contentRefs = useRef<(HTMLElement | null)[]>([]);
  const contentUiPropsRefs = useRef<(ContentUiProps | null)[]>([]);
  const items = useRef<(ItemRef | null)[]>([]);

  function handleMouseEnter(index: number, el: HTMLElement) {
    set({
      hovering: index,
      popoverLeft: el.offsetLeft,
      hoveringWidth: el.offsetWidth,
      hoveringElRect: el.getBoundingClientRect(),
    });
    const contentElement = contentRefs.current[index];
    if (contentElement) {
      set({
        popoverHeight: contentElement.offsetHeight,
        popoverWidth: contentElement.offsetWidth,
      });
    }
  }

  const value = {
    ...state,
    set,
    contentRefs,
    contentUiPropsRefs,
    items,
    dir,
    handleMouseEnter,
  };

  return (
    <NavMenuProvider value={value}>
      <NavMenuItemWrapper
        fullscreen={fullscreen}
        className={className}
        menuClassName={menuClassName}
        menuContentClassName={menuContentClassName}
        floatingOffset={floatingOffset}
      >
        {children}
      </NavMenuItemWrapper>
    </NavMenuProvider>
  );
}

NavMenu.Item = NavMenuItem;
NavMenu.Trigger = NavMenuTrigger;
NavMenu.Content = NavMenuContent;
NavMenu.displayName = "NavMenu";
