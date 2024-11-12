import React from 'react'
import { ToDoHeaderWrapperStyled } from './ToDoHeader.style'
import { useAppDispatch } from '@/lib/hooks/hooks'
import { addTask } from '@/lib/slices/taskSlice'
import agent from '@/utils/agent'

export default function ToDoHeader() {
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  const dispatch = useAppDispatch()
  const pressedEnter = async () => {
    // when pressed enter, add new task with text as value of input if the input is not empty
    const text = inputRef.current?.value
    if (!text) return


    await agent.Tasks.create(text)
      .then((newTask) => {
        dispatch(addTask(newTask))
        inputRef.current!.value = ''
      })
      .catch(error => console.error(`Error creating task:`, error))
  }

  const handleKeyDowns = (event: any) => (event.key === 'Enter') && pressedEnter()

  return (
    <ToDoHeaderWrapperStyled>
      <input ref={inputRef} onKeyDown={handleKeyDowns} placeholder='What needs to be done?' />
    </ToDoHeaderWrapperStyled>
  )
}
