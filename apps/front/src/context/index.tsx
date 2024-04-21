import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { ServiceType } from "shared-types";

type AppProviderProps = {
  children: ReactNode;
};

type AppContextType = {
  selectedService: ServiceType | null;
  setSelectedService: Dispatch<SetStateAction<ServiceType | null>>;
};

const initialValue: AppContextType = {
  selectedService: null,
  setSelectedService: () => {},
};

export const AppContext = createContext<AppContextType>(initialValue);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [selectedService, setSelectedService] = useState(
    initialValue.selectedService,
  );

  return (
    <AppContext.Provider value={{ selectedService, setSelectedService }}>
      {children}
    </AppContext.Provider>
  );
};
