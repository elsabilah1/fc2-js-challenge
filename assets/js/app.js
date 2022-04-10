import changeWord from './soal1.js'
import checkTypeNumber from './soal2.js'
import checkEmail from './soal3.js'
import isValidPassword from './soal4.js'
import getSplitName from './soal5.js'
import getAngkaTerbesarKedua from './soal6.js'
import hitungTotalPenjualan from './soal7.js'
import getInfoPenjualan from './soal8.js'
import { resetResult, getInputValue, setTextContent } from './functions.js'
import { dataPenjualanPakAldi, dataPenjualanNovel } from './data.js'

// SOAL 1
document.querySelector('.btnChangeWord').addEventListener('click', () => {
  const result = changeWord(
    getInputValue('.selectedText'),
    getInputValue('.changedText'),
    getInputValue('.text')
  )

  setTextContent('.resultText', result)
})

// SOAL 2
document.querySelector('.btnCheckTypeNumber').addEventListener('click', () => {
  const result = checkTypeNumber(getInputValue('.givenNumber'))
  setTextContent('.resultTypeNumber', result)
})

// SOAL 3
document.querySelector('.btnCheckEmail').addEventListener('click', () => {
  const result = checkEmail(getInputValue('.email'))
  setTextContent('.resultEmail', result)
})

// SOAL 4
document.querySelector('.btnCheckPassword').addEventListener('click', () => {
  const result = isValidPassword(getInputValue('.givenPassword'))
  setTextContent('.resultPassword', result)
})

// SOAL 5
document.querySelector('.btnCheckSplitName').addEventListener('click', () => {
  const result = getSplitName(getInputValue('.personName'))

  const printResult = `Firstname: ${result.firstName}, middleName: ${result.middleName}, lastName: ${result.lastName}`

  if (typeof result === 'object') {
    setTextContent('.resultSplitName', printResult)
    console.log(result)
  } else {
    setTextContent('.resultSplitName', result)
  }
})

// SOAL 6
document
  .querySelector('.btnCheckSecondBiggestNum')
  .addEventListener('click', () => {
    const result = getAngkaTerbesarKedua(getInputValue('.dataNumbers'))
    setTextContent('.resultSecondBiggestNum', result)
  })

// SOAL 7
document.querySelector('.showTotalPenjualan').addEventListener('click', () => {
  const result = hitungTotalPenjualan(dataPenjualanPakAldi)
  setTextContent('.totalPenjualan', result)
})

// SOAL 8
document.querySelector('.showInfoPenjualan').addEventListener('click', () => {
  const result = getInfoPenjualan(dataPenjualanNovel)
  console.log(result)

  const listInfo = document.querySelector('.listInfoPenjualan')
  for (const info in result) {
    const li = document.createElement('li')
    li.textContent = `${info}: ${result[info]}`
    listInfo.appendChild(li)
  }

  document.querySelector('.showInfoPenjualan').disabled = true
})

resetResult('.resetChangeWord', '.resultText')
resetResult('.resetCheckTypeNumber', '.resultTypeNumber')
resetResult('.resetCheckEmail', '.resultEmail')
resetResult('.resetCheckPassword', '.resultPassword')
resetResult('.resetCheckSplitName', '.resultSplitName')
resetResult('.resetCheckSecondBiggestNum', '.resultSecondBiggestNum')
