import { GRID, N } from '../../typings'

function checkCompleteNumber(grid: GRID, number: N): boolean {
  return grid.flat().filter((num: N) => num === number).length === 9
}

export default checkCompleteNumber