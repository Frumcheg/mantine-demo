import { Button, Space, Stack, Text } from '@mantine/core';
import React from 'react';

export function Error({ refetch }: { refetch: () => void }) {
  return (
    <Stack>
      <Space h="md" />
      <Text size="xl">Something went wrong! Please, try again.</Text>
      <Space h="xs" />
      <Button onClick={refetch}>Click me</Button>
    </Stack>
  );
}
