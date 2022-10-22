import { API_URL } from './variable'

export const addActivity = (id, form) => {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form)
  }

  return fetch(`${API_URL}/api/activities/add/${id}`, payload)
}