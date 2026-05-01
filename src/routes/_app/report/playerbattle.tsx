import PlayerBattle from '@/games/PlayerBattle'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/report/playerbattle')({
  component: () => <PlayerBattle/>,
})