import { Accordion, Center } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { CountryFlag } from '@/components/CountryFlag';
import { User } from '@/api/api';

export function UserViewItem({ user }: { user: User }) {
  const full = `${user.name.title} ${user.name.first} ${user.name.last}`;
  return (
    <Accordion.Item value={full}>
      <Accordion.Control icon={<CountryFlag code={user.nat} />}>{full}</Accordion.Control>
      <Accordion.Panel>
        <Center>
          <Image src={user.picture.large} width={500} height={500} alt={`Picture of ${full}`} />
        </Center>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
