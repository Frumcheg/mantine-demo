import { TextInput } from '@mantine/core';

export function FilterInput({ onChange }: { onChange: (v: string) => void }) {
  return (
    <TextInput
      label="Filter by name"
      description="Type firstname or lastname"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
