const API_URL = 'https://meliz2.herokuapp.com'

export const addGoal = (id, form) => {
    const payload = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    }
  
    return fetch(`${API_URL}/api/goals/add/${id}`, payload)
}