"use client";

import { BoardColors } from "@/shared/types";
import {
  createContext,
  useState,
  useMemo,
  useContext,
  useCallback,
} from "react";

export interface FormData {
  title: string;
  description?: string;
  selectedColor?: BoardColors;
}

type FormContextType = {
  formData: FormData;
  updateField: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
  resetForm: () => void;
  setFormData: (data: FormData) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

const initialFormData: FormData = {
  title: "",
  description: "",
  selectedColor: "blue",
};

interface FormProviderProps {
  children: React.ReactNode;
}

const FormProvider = ({ children }: FormProviderProps) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateField = useCallback(
    <K extends keyof FormData>(field: K, value: FormData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
  }, []);

  const value = useMemo(
    () => ({ formData, updateField, resetForm, setFormData }),
    [formData, updateField, resetForm, setFormData]
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export { FormProvider, useFormContext };
