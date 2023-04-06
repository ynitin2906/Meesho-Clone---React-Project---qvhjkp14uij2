export const validateForm = (formObject) => {
  const errors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formObject.email) {
    errors.email = "* Email is required";
  } else if (!emailRegex.test(formObject.email)) {
    errors.email = "* Invalid email format";
  }

  if (!formObject.password) {
    errors.password = "* Password is required";
  } else {
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
    if (formObject.password.length < 8) {
      errors.password = "Password must have at least 8 characters";
    } else if (!passwordRegex.test(formObject.password)) {
      errors.password =
        "* Must contain uppercase, lowercase, symbol and a number";
    }
  }

  return errors;
};
