import axios from 'axios'
//const baseUrl = '/api/login'
const baseUrl = "http://localhost:8080/api/login"

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  console.log("RESPONSE: ", response)
  return response.data
}

export default { login }