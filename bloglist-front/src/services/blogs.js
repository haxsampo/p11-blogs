import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
  const resp = await axios.get(baseUrl)
  return resp.data
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async (id, newObject) => {
  //console.log("newobject in service", newObject, "   url:", `${baseUrl}/${id}`)
  //const request = axios.put(`${baseUrl} /${id}`, newObject)
  const resp = await axios.put(`${baseUrl}/${id}`, newObject)
  return resp
}

const deleteBlog = async (id) => {
  //const user = window.localStorage.getItem('loggedBlogAppUser')
  //console.log("blogs id:", id, "  blogs user:", userid)
  const config = {
    headers: { Authorization: token },
  }
  //console.log(config)
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response
}

export default { getAll, create, setToken, update, deleteBlog }