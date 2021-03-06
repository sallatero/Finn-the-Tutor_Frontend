import axios from 'axios'
//const baseUrl = `${BACKEND_URL}/api/blogs`
const baseUrl = '/api/questions'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

/*
const update = async (id, newVersion, token) => {
  try {
    const config = {
      headers: { Authorization: `bearer ${token}` },
    }
    const response = await axios.put(`${baseUrl}/${id}`, newVersion, config)
    console.log('response after update: ', response)
    return response.data
  }catch (error) {
    console.log('error: ', error)
    if (error.response) {
      //errorTitle: "expired token", statusCode: 401
      if (error.response.status === 401) {
        return error.response.status
      }
    }
  }
}
*/

/*
const remove = async (id, token) => {
  try {
    const config = {
      headers: { Authorization: `bearer ${token}` },
    }
    const response = await axios.delete(`${baseUrl}/${id}`, config)
    console.log('delete response: ', response)
    return response
  }catch (error) {
    console.log('error: ', error)
    if (error.response) {
      if (error.response.status === 401) {
        return error.response.status
      }
      return { errorTitle: error.response.data.error, statusCode: error.response.status }
    }
  }
}
*/

/*
const create = async (newObj, token) => {
  try {
    console.log('create kutsuttu. newobj: ', newObj)
    const config = {
      headers: { Authorization: `bearer ${token}` },
    }
    //response.data on haluamamme blogiolio, jolla user-kentässä user-olio
    const response = await axios.post(baseUrl, newObj, config)
    console.log('blogService response: ', response)
    return response.data
  }catch (error) {
    if (error.response) {
      return { errorTitle: error.response.data.error, statusCode: error.response.status }
    }
  }
}
*/

export default { getAll }
