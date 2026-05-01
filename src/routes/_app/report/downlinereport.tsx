import { createFileRoute } from '@tanstack/react-router'
import DownlineReport from '@/report/DownlineReport'

export const Route = createFileRoute('/_app/report/downlinereport')({
  component: DownlineReport,
})