import { reactive, watchEffect } from 'vue'
import { useISBNStore } from '../stores/isbn'

export const useButtons = () => {
  const store = useISBNStore()
  const ableButtons = reactive({
    sum: true,
    substract: true,
    modulus: true
  })

  watchEffect(() => {
    if (store.isValid && store.showResult.multiply) {
      ableButtons.sum = false
    }

    if (store.isValid && store.showResult.sum) {
      ableButtons.modulus = false
    }

    if (store.isValid && store.showResult.modulus) {
      ableButtons.substract = false
    }

    if (!store.isValid) {
      ableButtons.sum = true
      ableButtons.substract = true
      ableButtons.modulus = true
    }
  })

  return {
    ableButtons
  }
}
