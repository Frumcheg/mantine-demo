'use client';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UsersList } from '@/components/UsersList';
import { FilterInput } from '@/components/FilterInput';
import React, { useState } from 'react';
import { NatSelector } from '@/components/NatSelector';
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
            <FilterInput onChange={setFilter} />
            <Space h="md" />
            <UsersList key={filter} filter={filter} nationalities={nationalities} />
          </Container>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </AppShell.Main>
    </AppShell>
  );
}
