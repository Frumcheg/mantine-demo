import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import React from "react";
import { ClientApp } from "../components/ClientApp/ClientApp";

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <ClientApp/>
    </>
  );
}
