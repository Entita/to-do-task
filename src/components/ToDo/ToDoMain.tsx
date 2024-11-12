import { useAppSelector } from '@/lib/hooks/hooks';
import React from 'react';
import Tasks from './Tasks/Tasks';
import ToDoFooter from './Footer/ToDoFooter';

export default function ToDoMain() {
  const tasks = useAppSelector(state => state.tasks.value);

  if (tasks.length === 0) return <></>
  return (
    <>
      <Tasks />
      <ToDoFooter />
    </>
  );
}
