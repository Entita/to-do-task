import React from 'react'
import { ToDoFooterWrapperStyled, ToDoStatesWrapperStyled, ToDoStateWrapperStyled } from './ToDoFooter.style'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks'
import { TaskFilters, TaskState } from '@/types/task'
import { getAllIncompletedTasks } from '../Tasks/Tasks'
import { changeFilter, deleteTask } from '@/lib/slices/taskSlice'
import agent from '@/utils/agent'

const getItemsLeftText = (tasks: TaskState[]) => {
  // create how many items are left based of the amount
  const itemLabel = tasks.length === 1 ? 'item' : 'items'
  const itemsLeft = getAllIncompletedTasks(tasks)
  return `${itemsLeft.length} ${itemLabel} left!`
}

export default function ToDoFooter() {
  // the routes were used as a filter, so the user won't lose the selected state upon refreshing the page
  const tasks = useAppSelector(state => state.tasks)
  const taskText = React.useMemo(() => getItemsLeftText(tasks.value), [tasks])

  const dispatch = useAppDispatch()
  const changeTaskFilter = (newFilter: TaskFilters) => dispatch(changeFilter(newFilter))

  const removeCompletedTasks = async() => {
    const deletePromises = tasks.value.map(async(task) => {
      if (task.completed) {
        await agent.Tasks.delete(task.id)
          .then(() => dispatch(deleteTask(task.id)))
          .catch(error => console.error(`Error deleting task with id ${task.id}:`, error))
      }
    })

    // Spustíme všechny požadavky souběžně a zpracujeme je podle výsledků
    await Promise.allSettled(deletePromises)
  }

  return (
    <ToDoFooterWrapperStyled>
      <span>{taskText}</span>
      <ToDoStatesWrapperStyled>
        <ToDoStateWrapperStyled onClick={() => changeTaskFilter('All')} $selected={tasks.filter === 'All'}>All</ToDoStateWrapperStyled>
        <ToDoStateWrapperStyled onClick={() => changeTaskFilter('Active')} $selected={tasks.filter === 'Active'}>Active</ToDoStateWrapperStyled>
        <ToDoStateWrapperStyled onClick={() => changeTaskFilter('Completed')} $selected={tasks.filter === 'Completed'}>Completed</ToDoStateWrapperStyled>
      </ToDoStatesWrapperStyled>
      <button onClick={removeCompletedTasks}>Clear completed</button>
    </ToDoFooterWrapperStyled>
  )
}
