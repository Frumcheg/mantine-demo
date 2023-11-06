import { MultiSelect } from "@mantine/core";

export function NatSelector({ onChange }: { onChange: (v: string[]) => void }) {
  return (
    <MultiSelect
      label="Nationality"
      placeholder="Pick a country"
      data={["AU", "BR", "CA", "CH", "DE", "DK", "ES", "FI", "FR", "GB", "IE", "IN", "IR", "MX", "NL", "NO", "NZ", "RS", "TR", "UA", "US"]}
      onChange={onChange}
    />
  );
}