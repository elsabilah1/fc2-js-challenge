import { isErrorMessage } from './functions.js'

const getSplitName = (personName) => {
  isErrorMessage(true, '.resultSplitName')

  if (personName === '') return 'ERROR: missing parameter'

  if (!isNaN(personName)) return 'ERROR: invalid data type'

  const personNameArray = personName.split(' ')

  if (personNameArray.length > 3)
    return 'ERROR: name consist more than three word'

  isErrorMessage(false, '.resultSplitName')

  // nama terdiri dari satu kata
  const person = {
    firstName: personNameArray[0],
    middleName: null,
    lastName: null,
  }

  // nama terdiri dari dua kata
  if (personNameArray.length == 2) {
    person.lastName = personNameArray[1]
  }

  // nama terdiri dari tiga kata
  if (personNameArray.length == 3) {
    person.middleName = personNameArray[1]
    person.lastName = personNameArray[2]
  }

  return person
}

export default getSplitName
