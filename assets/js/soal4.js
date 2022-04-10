import { isErrorMessage } from './functions.js'

const isValidPassword = (givenPassword) => {
  isErrorMessage(true, '.resultPassword')

  if (givenPassword === '') return 'ERROR: missing parameter'

  if (!isNaN(givenPassword)) return 'ERROR: invalid data type'

  let isvalid = true
  let message = `Karena ${givenPassword}`

  // min length = 8
  if (givenPassword.length < 8) {
    message = message.concat(
      `, hanya terdiri dari ${givenPassword.length} karakter`
    )
    isvalid = false
  }

  // min 1 number
  if (!givenPassword.match(/\d/)) {
    message = message.concat(', tidak ada angka')
    isvalid = false
  }

  // min 1 lowercase
  if (!givenPassword.match(/[a-z]/)) {
    message = message.concat(', tidak ada huruf kecil')
    isvalid = false
  }

  // min 1 uppercase
  if (!givenPassword.match(/[A-Z]/)) {
    message = message.concat(', tidak ada huruf besar')
    isvalid = false
  }

  if (isvalid) {
    isErrorMessage(false, '.resultPassword')

    message = `Karena memenuhi requirement, ${givenPassword} terdiri dari ${givenPassword.length} karakter, ada huruf besar, ada huruf kecil, dan ada angka`
  }

  console.log(message)

  return isvalid
}

export default isValidPassword
