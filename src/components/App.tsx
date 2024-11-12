import agent from '@/utils/agent'
import ToDo from './ToDo/ToDo'
import React from 'react'
import { AxiosError } from 'axios'

const getTasksFromServer = async() => {
  return await agent.Tasks.get()
    .then((data) => data)
    .catch((error: unknown) => {
      if (error instanceof AxiosError) console.error('Axios error:', error.message)
      else console.error('Unknown error:', error)
      return []
    })
}

export default async function App() {
  const serverTasks = await getTasksFromServer()

  return <ToDo serverTasks={serverTasks} />
}
