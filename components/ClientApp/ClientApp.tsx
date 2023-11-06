'use client'

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { UsersList } from "@/components/UsersList/UsersList";

const queryClient = new QueryClient()

export function ClientApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersList />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}