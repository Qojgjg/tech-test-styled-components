import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import {
  DRAWER_WIDTH,
  OVERLAY_OPACITY,
  TRANSITION_DURATION,
} from "../../lib/constants";
import CloseIcon from "../icons/close-icon";
import {
  DrawerCloseButton,
  DrawerContainer,
  DrawerContent,
  DrawerOverlay,
} from "./drawer.styled";

interface IDrawerProps {
  children: JSX.Element | string;
}

interface IDrawerContext {
  isOpen: boolean;
  showDrawer: () => void;
  hideDrawer: () => void;
}

export const DrawerContext = createContext<IDrawerContext>({
  isOpen: false,
  showDrawer: () => {},
  hideDrawer: () => {},
});

export const useDrawerContext = () => useContext(DrawerContext);

export default function Drawer({ children }: IDrawerProps) {
  const initialStyle = useMemo(() => {
    return {
      overlay: {
        opacity: 0,
      },
      drawer: {
        width: 0,
      },
    };
  }, []);

  const topTabTrap = useRef<HTMLDivElement>(null);
  const bottomTabTrap = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  const trapFocus = (event: Event) => {
    if (event.target === topTabTrap.current) {
      closeButton?.current?.focus();
    } else if (event.target === bottomTabTrap.current) {
      closeButton?.current?.focus();
    }
  };

  useEffect(() => {
    document.addEventListener("focusin", trapFocus);
    return () => document.removeEventListener("focusin", trapFocus);
  }, []);

  const { isOpen, hideDrawer } = useDrawerContext();
  const [transitionStyle, setTransitionStyle] = useState(initialStyle);

  const handleClose = useCallback(() => {
    setTransitionStyle(initialStyle);
    setTimeout(() => {
      hideDrawer();
    }, TRANSITION_DURATION);
  }, [initialStyle, hideDrawer]);

  useEffect(() => {
    if (isOpen) {
      setTransitionStyle({
        drawer: {
          width: DRAWER_WIDTH,
        },
        overlay: {
          opacity: OVERLAY_OPACITY,
        },
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [handleClose]);

  return isOpen
    ? createPortal(
        <>
          <DrawerOverlay
            aria-label="overlay"
            onClick={handleClose}
            style={{
              opacity: transitionStyle.overlay.opacity,
              transitionDuration: `${TRANSITION_DURATION / 1000}s`,
            }}
          />
          <DrawerContainer
            role="dialog"
            style={{
              width: transitionStyle.drawer.width,
              transitionDuration: `${TRANSITION_DURATION / 1000}s`,
            }}
          >
            <span ref={topTabTrap} tabIndex={0} />
            <DrawerContent style={{ minWidth: DRAWER_WIDTH }}>
              <DrawerCloseButton
                ref={closeButton}
                name="Close"
                onClick={handleClose}
                autoFocus
              >
                <CloseIcon />
              </DrawerCloseButton>
              <aside>{children}</aside>
            </DrawerContent>
            <span ref={bottomTabTrap} tabIndex={0} />
          </DrawerContainer>
        </>,
        document.getElementById("modal") as HTMLElement
      )
    : null;
}

export function DrawerProvider({ children }: IDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const showDrawer = () => {
    setIsOpen(true);
  };

  const hideDrawer = () => {
    setIsOpen(false);
  };

  return (
    <DrawerContext.Provider value={{ isOpen, showDrawer, hideDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}
