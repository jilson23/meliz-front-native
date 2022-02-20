// import { API_URL } from "@env"


export const loginRequest = (form) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  }

  return fetch('http://localhost:8080/auth/local/login', payload);
}

export const getAllData = (id) => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return fetch(`http://localhost:8080/api/users/${id}`, payload)
}

// export const getSingleCharacter = (name) => {
//   const payload = {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }

//   return fetch(`https://rickandmortyapi.com/api/character/?name=${name}`, payload)
// }
