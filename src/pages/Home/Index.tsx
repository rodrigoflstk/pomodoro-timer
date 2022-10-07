import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            id="task"
          />

          <datalist id="task-suggestions">
            <option value="projeto1"></option>
            <option value="projeto2"></option>
            <option value="projeto3"></option>
            <option value="projeto4"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            placeholder="00"
            id="minutesAmount"
            type="number"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}

export { Home }
