'use client';

import React, { useState } from 'react';
import { AppShell, Container, Space } from '@mantine/core';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FilterInput } from '@/components/FilterInput';
import { NatSelector } from '@/components/NatSelector';
import { DataLoader } from '@/components/DataLoader';

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
            <DataLoader nationalities={nationalities} filter={filter} />
          </Container>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </AppShell.Main>
    </AppShell>
  );
}
