"use client"

import React from 'react'
import { ToDoContentWrapperStyled, ToDoWrapperStyled } from './ToDo.style'
import ToDoHeader from './Header/ToDoHeader'
import ToDoMain from './ToDoMain'
import { TaskState } from '@/types/task'
import { useAppDispatch } from '@/lib/hooks/hooks'
import { setTasks } from '@/lib/slices/taskSlice'

export default function ToDo({ serverTasks }: { serverTasks: TaskState[] }) {
  const dispatch = useAppDispatch()
  const setTasksFromServer = () => {
    dispatch(setTasks(serverTasks))
  }

  React.useEffect(() => {
    if (serverTasks.length > 0) setTasksFromServer()
  }, [])

  return (
    <ToDoWrapperStyled>
      <h1>todos</h1>
      <ToDoContentWrapperStyled>
        <ToDoHeader />
        <ToDoMain />
      </ToDoContentWrapperStyled>
      <footer>
        <p>Double-click to edit a todo</p>
      </footer>
    </ToDoWrapperStyled>
  )
}
