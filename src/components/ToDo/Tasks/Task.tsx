import React from 'react'
import { TaskWrapperStyled } from './Task.style'
import { TaskState } from '@/types/task'
import TaskText from './TaskText'
import TaskInput from './TaskInput'

export default function Task({ task }: { task: TaskState }) {
  const [isTaskText, setIsTaskText] = React.useState<Boolean>(true)

  const toggleBetweenInputAndText = () => setIsTaskText(prev => !prev)

  return (
    <TaskWrapperStyled>
      {isTaskText
        ? <TaskText task={task} toggleBetweenInputAndText={toggleBetweenInputAndText} />
        : <TaskInput task={task} toggleBetweenInputAndText={toggleBetweenInputAndText} />}
    </TaskWrapperStyled>
  )
}
