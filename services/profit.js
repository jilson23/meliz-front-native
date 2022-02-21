const API_URL = 'https://meliz2.herokuapp.com'

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