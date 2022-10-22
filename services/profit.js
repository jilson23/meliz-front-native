import { API_URL } from './variable'

export const addProfit = (id, form) => {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form)
  }

  return fetch(`${API_URL}/api/profits/add/${id}`, payload)
}