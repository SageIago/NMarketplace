import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/marketplace')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /marketplace!'
}