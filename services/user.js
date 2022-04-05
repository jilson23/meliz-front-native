import {API_URL} from "@env"

// console.log(API_URL, 9)

export const loginRequest = (form) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  }

  return fetch(`${API_URL}/auth/local/login`, payload);
}

export const getAllDataUser = (id) => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return fetch(`${API_URL}/api/users/${id}`, payload)
}

export const updateUser = (id, form) => {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form)
  }

  return fetch(`${API_URL}/api/users/${id}`, payload)
}

// export const uploadImage = (id) => {
//   const payload = {
//     method: 'PATCH',
//     data: datos,
//     headers: {
//       'Content-Type': 'multipart/form-data',
     
//     },
//   }

//   return fetch(`${API_URL}/api/users/${id}`, payload)
// }

// export const getSingleCharacter = (name) => {
//   const payload = {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }

//   return fetch(`https://rickandmortyapi.com/api/character/?name=${name}`, payload)
// }
