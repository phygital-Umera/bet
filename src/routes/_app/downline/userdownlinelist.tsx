import { createFileRoute } from '@tanstack/react-router'
import UserDownlineList from '../../../components/downline/UserDownlineList'

export const Route = createFileRoute('/_app/downline/userdownlinelist')({
  component: () => <UserDownlineList />
})
