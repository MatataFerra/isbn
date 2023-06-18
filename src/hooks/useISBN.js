import { useISBNStore } from '../stores'

export const useISBN = () => {
  const storeIsbn = useISBNStore()
  const onCalculate = (e) => {
    e.preventDefault()
    storeIsbn.updateISBN()
  }

  return {
    onCalculate
  }
}
