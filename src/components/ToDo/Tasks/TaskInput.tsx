import React from 'react'
import { TaskState } from '@/types/task'
import { useAppDispatch } from '@/lib/hooks/hooks';
import { updateTask } from '@/lib/slices/taskSlice';
import { TaskInputStyled } from './TaskInput.style';
import agent from '@/utils/agent';

export default function TaskInput({ task, toggleBetweenInputAndText }: { task: TaskState; toggleBetweenInputAndText: Function }) {
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  const dispatch = useAppDispatch()
  const handleOnBlur = () => toggleBetweenInputAndText()
  const handleKeyDowns = (event: any) => (event.key === 'Enter') && pressedEnter()
  const pressedEnter = async() => {
    const updatedText = inputRef.current?.value
    if (!updatedText) return
    await agent.Tasks.updateText(task.id, updatedText)
      .then((updatedTask) => {
        dispatch(updateTask(updatedTask))
        toggleBetweenInputAndText()
      })
      .catch(error => console.error(`Error updating text of task with id ${task.id}:`, error))
  }

  React.useEffect(() => {
    // On default make the input focused
    const input = inputRef.current
    if (input) input.focus()
  }, [inputRef])

  return <TaskInputStyled ref={inputRef} onKeyDown={handleKeyDowns} onBlur={handleOnBlur} defaultValue={task.text} />
}
