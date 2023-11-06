import { TextInput } from "@mantine/core";

export function SearchInput({ onChange }: { onChange: (v: string) => void  }) {
  return <TextInput label="name" description="Type firstname or lastname" onChange={(e) => onChange(e.target.value)}/>;
}