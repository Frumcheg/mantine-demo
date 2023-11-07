import { Code } from '@/components/NatSelector';
import Image from 'next/image';
import React from 'react';

const IMAGE_BASE = 'https://em-content.zobj.net/source/twitter/376';

const src: Record<Code, string> = {
  AU: `${IMAGE_BASE}/flag-australia_1f1e6-1f1fa.png`,
  CA: `${IMAGE_BASE}/flag-canada_1f1e8-1f1e6.png`,
  CH: `${IMAGE_BASE}/flag-switzerland_1f1e8-1f1ed.png`,
  DE: `${IMAGE_BASE}/flag-germany_1f1e9-1f1ea.png`,
  DK: `${IMAGE_BASE}/flag-denmark_1f1e9-1f1f0.png`,
  ES: `${IMAGE_BASE}/flag-spain_1f1ea-1f1f8.png`,
  FI: `${IMAGE_BASE}/flag-finland_1f1eb-1f1ee.png`,
  FR: `${IMAGE_BASE}/flag-france_1f1eb-1f1f7.png`,
  GB: `${IMAGE_BASE}/flag-united-kingdom_1f1ec-1f1e7.png`,
  IE: `${IMAGE_BASE}/flag-ireland_1f1ee-1f1ea.png`,
  IN: `${IMAGE_BASE}/flag-india_1f1ee-1f1f3.png`,
  IR: `${IMAGE_BASE}/flag-iran_1f1ee-1f1f7.png`,
  MX: `${IMAGE_BASE}/flag-mexico_1f1f2-1f1fd.png`,
  NL: `${IMAGE_BASE}/flag-netherlands_1f1f3-1f1f1.png`,
  NO: `${IMAGE_BASE}/flag-norway_1f1f3-1f1f4.png`,
  NZ: `${IMAGE_BASE}/flag-new-zealand_1f1f3-1f1ff.png`,
  RS: `${IMAGE_BASE}/flag-serbia_1f1f7-1f1f8.png`,
  TR: `${IMAGE_BASE}/flag-turkey_1f1f9-1f1f7.png`,
  UA: `${IMAGE_BASE}/flag-ukraine_1f1fa-1f1e6.png`,
  US: `${IMAGE_BASE}/flag-united-states_1f1fa-1f1f8.png`,
  BR: `${IMAGE_BASE}/flag-brazil_1f1e7-1f1f7.png`,
};

export function CountryFlag({ code }: { code: Code }) {
  return <Image title={code} alt={code} src={src[code]} height={32} width={32} />;
}
