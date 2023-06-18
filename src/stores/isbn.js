import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import ISBN from '../lib/services/isbn'

export const useISBNStore = defineStore('isbn', () => {
  const isbn = ref('')
  const isbnUpdate = ref('')
  const isValid = ref(false)
  const isError = ref(false)

  function reset() {
    isbn.value = ''
    isValid.value = false
    isbnUpdate.value = ''
  }

  function updateValidity() {
    isValid.value = new ISBN(isbn.value).isValid()
  }

  function updateErrorCheck() {
    if (!isValid.value) {
      isError.value = true
    } else {
      isError.value = false
    }
  }

  function setISBN(value) {
    isbn.value = value
  }

  function updateISBN() {
    const finalNumber = new ISBN(isbn.value).updateISBN()
    isbnUpdate.value = finalNumber
  }

  function update() {
    updateValidity()
    updateISBN()
    updateErrorCheck()
  }

  watch(isbn, update)

  return {
    isbn,
    isValid,
    setISBN,
    reset,
    isError,
    isbnUpdate,
    updateISBN
  }
})
