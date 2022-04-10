import { isErrorMessage } from './functions.js'

const getAngkaTerbesarKedua = (dataNumbers) => {
  isErrorMessage(true, '.resultSecondBiggestNum')

  if (dataNumbers == '') return 'ERROR: missing parameter'

  const dataNumbersArray = dataNumbers.split(',')

  let isNotValid = true

  if (dataNumbersArray.length == 1) {
    isNotValid = true
  } else {
    isNotValid = false

    dataNumbersArray.forEach((data) => {
      if (isNaN(data)) isNotValid = true
    })
  }

  if (isNotValid) return 'ERROR: invalid data type'

  isErrorMessage(false, '.resultSecondBiggestNum')

  const orderedNumbers = dataNumbersArray.sort((a, b) => b - a)

  console.log('orderedNum', orderedNumbers)

  let secondBiggestNum

  for (const num of orderedNumbers) {
    if (num !== orderedNumbers[0]) {
      secondBiggestNum = num
      break
    }
  }

  return secondBiggestNum
}

export default getAngkaTerbesarKedua
