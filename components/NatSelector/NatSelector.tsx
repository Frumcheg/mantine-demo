import { MultiSelect } from '@mantine/core';

const readonlyValues = [
  'AU',
  'BR',
  'CA',
  'CH',
  'DE',
  'DK',
  'ES',
  'FI',
  'FR',
  'GB',
  'IE',
  'IN',
  'IR',
  'MX',
  'NL',
  'NO',
  'NZ',
  'RS',
  'TR',
  'UA',
  'US',
] as const;
const valueToLabel = {
  AU: 'Australia',
  BR: 'Brazil',
  CA: 'Canada',
  CH: 'Switzerland',
  DE: 'Germany',
  DK: 'Denmark',
  ES: 'Spain',
  FI: 'Finland',
  FR: 'France',
  GB: 'United Kingdom',
  IE: 'Ireland',
  IN: 'India',
  IR: 'Iran',
  MX: 'Mexico',
  NL: 'Netherlands',
  NO: 'Norway',
  NZ: 'New Zealand',
  RS: 'Serbia',
  TR: 'Turkey',
  UA: 'Ukraine',
  US: 'United States',
};
const data = readonlyValues.map((v) => ({ value: v, label: valueToLabel[v] }));
export function NatSelector({ onChange }: { onChange: (v: string[]) => void }) {
  return <MultiSelect placeholder="Pick a country" data={data} onChange={onChange} clearable />;
}

export type Code = (typeof readonlyValues)[number];
