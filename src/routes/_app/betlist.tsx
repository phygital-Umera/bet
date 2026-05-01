import BetList from '@/pages/BetList'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/betlist')({
  component: () => <BetList />
})
