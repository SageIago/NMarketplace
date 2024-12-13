import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/rankings')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /rankings!'
}
