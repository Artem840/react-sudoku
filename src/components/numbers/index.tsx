import { FC } from 'react'

import { GRID, NUMBERS } from 'typings'

import Button from './button'
import { Container } from './styles'
import { useSelector } from 'react-redux'
import { IReducer } from '../../reducers'
import checkCompleteNumber from '../../utils/check-complete-number'

interface IState {
  workingGrid?: GRID
}

const Numbers: FC = () => {
  const state = useSelector<IReducer, IState>(({ workingGrid }) => ({
    workingGrid,
  }))

  return (
    <Container>
      {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map((value) => {
        const isComplete = state.workingGrid && checkCompleteNumber(state.workingGrid, value)
        return (
          <Button key={value} value={value} disabled={isComplete} />
        )
      })}
    </Container>
  )
}

export default Numbers