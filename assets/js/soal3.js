import { isErrorMessage } from './functions.js'

function checkEmail(email) {
  isErrorMessage(true, '.resultEmail')

  if (email === '') return 'ERROR: missing parameter'

  if (!isNaN(email)) return 'ERROR: invalid data type'

  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  // const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

  if (!email.match(pattern)) {
    return 'INVALID'
  } else {
    isErrorMessage(false, '.resultEmail')
    return 'VALID'
  }
}

export default checkEmail
