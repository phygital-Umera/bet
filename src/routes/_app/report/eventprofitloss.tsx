import { createFileRoute } from '@tanstack/react-router'
import EventProfitLoss from '../../../report/EventProfitLoss'

export const Route = createFileRoute('/_app/report/eventprofitloss')({
  component: () => <EventProfitLoss/>,
})


// import { createFileRoute } from '@tanstack/react-router'
// import UserDownlineList from '../../../components/downline/UserDownlineList'

// export const Route = createFileRoute('/_app/report/eventprofitloss')({
//   component: () => <UserDownlineList />
// })
