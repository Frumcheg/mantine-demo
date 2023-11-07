import { Code } from '@/components/NatSelector/NatSelector';
import Image from 'next/image';
import React from 'react';

const src: Record<Code, string> = {
  AU: 'https://em-content.zobj.net/source/twitter/376/flag-australia_1f1e6-1f1fa.png',
  CA: 'https://em-content.zobj.net/source/twitter/376/flag-canada_1f1e8-1f1e6.png',
  CH: 'https://em-content.zobj.net/source/twitter/376/flag-switzerland_1f1e8-1f1ed.png',
  DE: 'https://em-content.zobj.net/source/twitter/376/flag-germany_1f1e9-1f1ea.png',
  DK: 'https://em-content.zobj.net/source/twitter/376/flag-denmark_1f1e9-1f1f0.png',
  ES: 'https://em-content.zobj.net/source/twitter/376/flag-spain_1f1ea-1f1f8.png',
  FI: 'https://em-content.zobj.net/source/twitter/376/flag-finland_1f1eb-1f1ee.png',
  FR: 'https://em-content.zobj.net/source/twitter/376/flag-france_1f1eb-1f1f7.png',
  GB: 'https://em-content.zobj.net/source/twitter/376/flag-united-kingdom_1f1ec-1f1e7.png',
  IE: 'https://em-content.zobj.net/source/twitter/376/flag-ireland_1f1ee-1f1ea.png',
  IN: 'https://em-content.zobj.net/source/twitter/376/flag-india_1f1ee-1f1f3.png',
  IR: 'https://em-content.zobj.net/source/twitter/376/flag-iran_1f1ee-1f1f7.png',
  MX: 'https://em-content.zobj.net/source/twitter/376/flag-mexico_1f1f2-1f1fd.png',
  NL: 'https://em-content.zobj.net/source/twitter/376/flag-netherlands_1f1f3-1f1f1.png',
  NO: 'https://em-content.zobj.net/source/twitter/376/flag-norway_1f1f3-1f1f4.png',
  NZ: 'https://em-content.zobj.net/source/twitter/376/flag-new-zealand_1f1f3-1f1ff.png',
  RS: 'https://em-content.zobj.net/source/twitter/376/flag-serbia_1f1f7-1f1f8.png',
  TR: 'https://em-content.zobj.net/source/twitter/376/flag-turkey_1f1f9-1f1f7.png',
  UA: 'https://em-content.zobj.net/source/twitter/376/flag-ukraine_1f1fa-1f1e6.png',
  US: 'https://em-content.zobj.net/source/twitter/376/flag-united-states_1f1fa-1f1f8.png',
  BR: 'https://em-content.zobj.net/source/twitter/376/flag-brazil_1f1e7-1f1f7.png',
};

export function CountryFlag({ code }: { code: Code }) {
  return <Image alt="BR" src={src[code]} height={32} width={32} />;
}
