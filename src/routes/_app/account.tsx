import { createFileRoute } from '@tanstack/react-router'
import MyAccount from '../../components/account/MyAccount'

export const Route = createFileRoute('/_app/account')({
  component: () => <MyAccount />
})