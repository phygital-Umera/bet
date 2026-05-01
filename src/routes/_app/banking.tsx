import { createFileRoute } from '@tanstack/react-router'
import Banking from '../../components/banking/Banking'

export const Route = createFileRoute('/_app/banking')({
  component: Banking
})