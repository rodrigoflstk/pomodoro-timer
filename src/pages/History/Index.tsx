import { HistoryContainer, HistoryList, Status } from './styles'

function History() {
  return (
    <HistoryContainer>
      <h1>My History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="red">Stopped</Status>
              </td>
            </tr>

            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Done</Status>
              </td>
            </tr>

            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="yellow">Paused</Status>
              </td>
            </tr>

            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="yellow">Paused</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}

export { History }
