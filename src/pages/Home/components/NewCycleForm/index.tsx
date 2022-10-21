import { FormContainer, TaskInput, MinutesAmountInput } from '../styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

function NewCycleForm() {
  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Hey! describe your task.'),
    minutesAmount: zod.number().min(1).max(60),
  })

  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  }) // register -> Adiciona um input ao formulário

  return (
    <FormContainer>
      <label htmlFor="task">Working in</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Write your task name"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="projeto1"></option>
        <option value="projeto2"></option>
        <option value="projeto3"></option>
        <option value="projeto4"></option>
      </datalist>

      <label htmlFor="minutesAmount">for</label>
      <MinutesAmountInput
        placeholder="00"
        disabled={!!activeCycle}
        id="minutesAmount"
        type="number"
        step={5}
        min={1}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}

export { NewCycleForm }
