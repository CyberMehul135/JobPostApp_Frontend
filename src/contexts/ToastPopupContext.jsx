import { createContext, useContext, useState } from "react";

const ToastPopupContext = createContext();

const useToastPopupContext = () => useContext(ToastPopupContext);

export default useToastPopupContext;

export function ToastPopupProvider({ children }) {
  const [defaultPopupVisible, setDefaultPopupVisible] = useState(false);
  const [defaultPopupText, setDefaultPopupText] = useState("");

  function setPopupVisible(text) {
    setDefaultPopupText(text);
    setTimeout(() => {
      setDefaultPopupVisible(true);
    }, 500);
    setTimeout(() => {
      setDefaultPopupVisible(false);
    }, 3000);
  }

  return (
    <ToastPopupContext.Provider
      value={{ defaultPopupVisible, setPopupVisible, defaultPopupText }}
    >
      {children}
    </ToastPopupContext.Provider>
  );
}
