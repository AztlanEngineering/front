export const validateRequired = (value) => {
  let error
  if (!value) {
    error = 'Required'
  }
  return error
}

export const validateEmail = (value) => {
  let error
  if (!value) {
    error = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address'
  }
  return error
}

export const validateURL = (value) => {
  let error
  if (!value) {
    error = 'Required'
  } else if (
    !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/i.test(value)
  ) {
    error = 'Invalid URL'
  }
  return error
}

export const validatePhoneNumber = (value) => {
  let error
  if (!value) {
    error = 'Required'
    // Regex for international phone number format
  } else if (!/^(\+|00)[1-9]{1}[0-9]{7,14}$/i.test(value)) {
    error = 'Invalid phone number'
  }
  return error
}
