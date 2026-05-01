import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/downline/masterdownline')({
  component: () => <div>Hello /_app/downline/masterdownline!</div>
})