import { TaskState } from '@/types/task'
import React from 'react'
import { TaskTextButtonStyled, TaskTextInputStyled, TaskTextLabelStyled } from './TaskText.style';
import { useAppDispatch } from '@/lib/hooks/hooks';
import { deleteTask, updateTask } from '@/lib/slices/taskSlice';
import agent from '@/utils/agent';

export default function TaskText({ task, toggleBetweenInputAndText }: { task: TaskState; toggleBetweenInputAndText: Function }) {
  const dispatch = useAppDispatch()
  const handleDoubleClick = () => toggleBetweenInputAndText()
  const toggleTaskCompletion = async() => {
    var updatedTaskPromise
    if (task.completed) updatedTaskPromise = agent.Tasks.incomplete(task.id)
    else updatedTaskPromise = agent.Tasks.complete(task.id)

    await updatedTaskPromise
      .then((updatedTask) => dispatch(updateTask(updatedTask)))
      .catch(error => console.error(`Error ${task.completed ? 'incompleting' : 'completing'} task with id ${task.id}:`, error))
  }

  const removeTask = async() => {
    await agent.Tasks.delete(task.id)
      .then(() => dispatch(deleteTask(task.id)))
      .catch(error => console.error(`Error deleting task with id ${task.id}:`, error))
  }

  return (
    <>
      <TaskTextInputStyled type='checkbox' onChange={toggleTaskCompletion} checked={task.completed} readOnly />
      <TaskTextLabelStyled onDoubleClick={handleDoubleClick} $completed={task.completed}>{task.text}</TaskTextLabelStyled>
      <TaskTextButtonStyled onClick={removeTask} />
    </>
  )
}
