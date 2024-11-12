import axios, { AxiosError, AxiosResponse } from 'axios';

axios.defaults.baseURL = `http://localhost:8080`

const responseBody = (response: AxiosResponse) => response.data

axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const { status } = error.response! || {}
    let errorMessage = ''

    switch (status) {
      case 400:
        errorMessage = 'ID of task was not found'
        break
      case 422:
        errorMessage = 'Bad request response'
        break
      case 500:
        errorMessage = 'Server error'
        break
      case 0:
        errorMessage = 'Server not responding'
        break
      default:
        errorMessage = 'Unknown error'
        break
    }

    error.message = errorMessage
    return Promise.reject(error)
  },
)

const requests = {
  get: (url: string, params?: URLSearchParams) => axios.get(url, { params }).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
}

const Tasks = {
  get: () => requests.get('tasks'),
  create: (text: string) => requests.post('tasks', { text }),
  updateText: (id: string, newText: string) => requests.post(`/tasks/${id}`, { text: newText }),
  complete: (id: string) => requests.post(`/tasks/${id}/complete`, {}),
  incomplete: (id: string) => requests.post(`/tasks/${id}/incomplete`, {}),
  delete: (id: string) => requests.delete(`/tasks/${id}`),
}

const agent = { Tasks }

export default agent