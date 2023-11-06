'use client'

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UsersList } from "@/components/UsersList/UsersList";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import { useState } from "react";
import { NatSelector } from "@/components/NatSelector/NatSelector";

const queryClient = new QueryClient()

export function ClientApp() {
  const [filter, setFilter] = useState('')
  const [nationalities, setNationalities] = useState<string[]>([])
  return (
    <QueryClientProvider client={queryClient}>
      <SearchInput onChange={(v) => setFilter(v)}/>
      <NatSelector onChange={setNationalities}/>
      <UsersList filter={filter} nationalities={nationalities}/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}