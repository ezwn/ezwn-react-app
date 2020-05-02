import React from "react";
import { useAppContext } from "./App-ctx";

export const External = ({ children, feature }) => {
  const { hasModule } = useAppContext();

  if (!hasModule(feature)) {
    return null;
  }

  return <>{children}</>;
};
