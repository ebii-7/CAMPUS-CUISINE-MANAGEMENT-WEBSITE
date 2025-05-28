
import { useState, useEffect } from "react";

// Define the toast types we'll be using
const TOAST_TYPES = {
  default: "default",
  success: "success",
  error: "error",
  warning: "warning",
  info: "info",
};

// Create a unique ID for each toast
let toastCount = 0;

export function useToast() {
  const [toasts, setToasts] = useState([]);

  // Clean up toasts that have been displayed for a certain amount of time
  useEffect(() => {
    const timers = toasts.map((toast) => {
      if (toast.duration !== Infinity) {
        return setTimeout(() => {
          setToasts((prevToasts) =>
            prevToasts.filter((t) => t.id !== toast.id)
          );
        }, toast.duration);
      }
      return null;
    });

    return () => {
      timers.forEach((timer) => {
        if (timer) clearTimeout(timer);
      });
    };
  }, [toasts]);

  function create(props) {
    const id = props.id ?? `toast-${++toastCount}`;
    const toast = {
      id,
      title: props.title,
      description: props.description,
      action: props.action,
      type: props.type ?? TOAST_TYPES.default,
      duration: props.duration ?? 5000,
      ...props,
    };

    setToasts((prevToasts) => [...prevToasts, toast]);
    return toast;
  }

  function dismiss(toastId) {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== toastId));
  }

  return {
    toasts,
    create,
    dismiss,
  };
}

// Convenience method for using toast outside of React components
export const toast = {
  create: (props) => {
    const id = props.id ?? `toast-${++toastCount}`;
    // Create a custom event to broadcast the toast creation
    const event = new CustomEvent("toast-create", {
      detail: {
        id,
        title: props.title,
        description: props.description,
        action: props.action,
        type: props.type ?? TOAST_TYPES.default,
        duration: props.duration ?? 5000,
        ...props,
      },
    });
    document.dispatchEvent(event);
    return id;
  },
  dismiss: (toastId) => {
    const event = new CustomEvent("toast-dismiss", {
      detail: { id: toastId },
    });
    document.dispatchEvent(event);
  },
};
