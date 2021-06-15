import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

export function useDatePicker() {
  return useFormContext();
}

export default function DatePickerProvider(props) {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      {/* Hier komt de rest van de app */}
      {props.children}
    </FormProvider>
  );
}
