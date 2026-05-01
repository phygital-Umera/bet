import { createFileRoute } from '@tanstack/react-router'
import BetListLive from '../../pages/BetLiveList'

export const Route = createFileRoute('/_app/betlive')({
  component: () => <BetListLive />
})
