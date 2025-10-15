"use client";

import { createPortal } from "react-dom";
import {
  useState,
  createContext,
  cloneElement,
  useContext,
  useEffect,
  ReactElement,
  ReactNode,
} from "react";

interface ModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

interface OverlayProps {
  hideOnLargerScreens?: boolean;
  children: ReactNode;
}

function Overlay({ hideOnLargerScreens = true, children }: OverlayProps) {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Overlay must be used within a Modal component");
  }
  const { isOpen } = context;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !isOpen) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[99999] backdrop-blur-sm backdrop-brightness-70 ${
        hideOnLargerScreens ? "md:hidden" : ""
      }`}
    >
      {children}
    </div>,
    typeof window !== "undefined" ? document.body : null!
  );
}

interface HeadingProps {
  children: ReactNode;
}

function Heading({ children }: HeadingProps) {
  return <h2 className="text-xl font-bold mb-4">{children}</h2>;
}

interface WrapperProps {
  hideOnLargerScreens?: boolean;
  children: ReactNode;
}

function Wrapper({ hideOnLargerScreens = true, children }: WrapperProps) {
  return (
    <div
      className={`absolute left-1/2 top-1/2 w-[90%] max-w-[420px] min-h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-black/50 p-5 border-t-4 border-red-600 ${
        hideOnLargerScreens ? "md:hidden" : ""
      }`}
    >
      {children}
    </div>
  );
}

interface ToggleOpenProps {
  children: ReactElement<{ onClick?: () => void }>;
}

function ToggleOpen({ children }: ToggleOpenProps) {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("ToggleOpen must be used within a Modal component");
  }
  return cloneElement(children, { onClick: context.open });
}

interface ToggleCloseProps {
  children: ReactElement<{ onClick?: () => void }>;
}

function ToggleClose({ children }: ToggleCloseProps) {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("ToggleClose must be used within a Modal component");
  }
  return cloneElement(children, { onClick: context.close });
}

Modal.Heading = Heading;
Modal.ToggleOpen = ToggleOpen;
Modal.Wrapper = Wrapper;
Modal.Overlay = Overlay;
Modal.ToggleClose = ToggleClose;

export default Modal;
