import { createFileRoute } from '@tanstack/react-router'
import MarketAnalysis from '../../components/market/MarketAnalysis'

export const Route = createFileRoute('/_app/marketanalysis')({
  component: MarketAnalysis
})
