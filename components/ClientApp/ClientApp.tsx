'use client'

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UsersList } from "@/components/UsersList/UsersList";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import { useState } from "react";

const queryClient = new QueryClient()

export function ClientApp() {
  const [filter, setFilter] = useState('')
  return (
    <QueryClientProvider client={queryClient}>
      <SearchInput onChange={(v) => setFilter(v)}/>
      <UsersList filter={filter} />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}