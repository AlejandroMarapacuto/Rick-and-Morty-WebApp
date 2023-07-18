export const validation = (userData) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const errors = {
    email: "",
    password: "",
  };

  if (!userData.email) {
    errors.email = "Enter your email";
  }

  if (!regexEmail.test(userData.email)) {
    errors.email = "Must be an email";
  }

  if (userData.email.length > 35) {
    errors.email = "Cannot exceed 35 characters!!";
  }

  if (!userData.password) {
    errors.password = "Enter your password!";
  }

  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Password must be between 6 and 10 characters long!";
  }

  return errors;
};
