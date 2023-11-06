import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";
import { Accordion } from "@mantine/core";
import Image from "next/image";

export function UsersList({ filter }: { filter: string }) {
  const userQuery = useQuery({ queryKey: ["users"], queryFn: api.getUsers });
  if (userQuery.isLoading) return <div>Loading...</div>;
  if (userQuery.isError) return <div>Error</div>;
  return (
    <Accordion>
      {userQuery.data?.results.filter(u => filter.length ? (u.name.first.toLowerCase().includes(filter.toLowerCase()) || u.name.last.toLowerCase().includes(filter.toLowerCase())) : true).map(user => (
        <Accordion.Item
          key={user.login.uuid}
          value={`${user.name.title} ${user.name.first} ${user.name.last}`}
        >
          <Accordion.Control icon={user.nat}>{`${user.name.title} ${user.name.first} ${user.name.last}`}</Accordion.Control>
          <Accordion.Panel>
            <Image
              src={user.picture.large}
              width={500}
              height={500}
              alt={`Picture of ${user.name.title} ${user.name.first} ${user.name.last}`}
            />
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}