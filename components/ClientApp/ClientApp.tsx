'use client';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UsersList } from '@/components/UsersList/UsersList';
import { FilterInput } from '@/components/FilterInput/FilterInput';
import React, { useState } from 'react';
import { NatSelector } from '@/components/NatSelector/NatSelector';
import { AppShell, Container, Space } from '@mantine/core';

export const queryClient = new QueryClient();

export function ClientApp() {
  const [filter, setFilter] = useState('');
  const [nationalities, setNationalities] = useState<string[]>([]);
  return (
    <AppShell padding="md">
      <AppShell.Main>
        <QueryClientProvider client={queryClient}>
          <Container>
            <NatSelector onChange={setNationalities} />
            <Space h="md" />
            <FilterInput onChange={(v) => setFilter(v)} />
            <Space h="md" />
            <UsersList filter={filter} nationalities={nationalities} />
          </Container>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </AppShell.Main>
    </AppShell>
  );
}
