"use client";
import { NextUIProvider } from "@nextui-org/react";
import ReduxProvider from "../redux/provider";

const Providers = ({ children }) => {
  return (
    <ReduxProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </ReduxProvider>
  );
};

export default Providers;
