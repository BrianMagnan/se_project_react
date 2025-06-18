import { useState, useCallback } from "react";

export function useFormAndValidation(formType) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    let error = "";
    if (name === "name" && value && value.length < 3) {
      error = "Name must be at least 3 characters";
    } else if (name === "avatar" && value && !value.startsWith("http")) {
      error = "Please enter a valid URL starting with http://";
    } else if (name === "imageUrl" && value && !value.startsWith("http")) {
      error = "Please enter a valid URL starting with http://";
    } else if (name === "email" && value && !value.includes("@")) {
      error = "Invalid email format";
    } else if (name === "password" && value && value.length < 8) {
      error = "Password must be at least 8 characters";
    }

    setErrors({ ...errors, [name]: error });

    const newValues = { ...values, [name]: value };
    const newErrors = { ...errors, [name]: error };

    const requiredFields = {
      register: ["name", "avatar", "email", "password"],
      login: ["email", "password"],
      editProfile: ["name", "avatar"],
      addItem: ["name", "imageUrl", "weather"],
    };

    const allFieldsFilled = requiredFields[formType].every(
      (field) => newValues[field] && newValues[field].trim() !== ""
    );
    const hasErrors = Object.values(newErrors).some((error) => error);

    setIsValid(allFieldsFilled && !hasErrors);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const getInputClassName = (fieldName) => {
    return errors[fieldName]
      ? "modal__input modal__input_error"
      : "modal__input";
  };

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    getInputClassName,
  };
}
