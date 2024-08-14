import { Persons } from "@/components/Persons";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Rick and Morty</h1>
      <Suspense fallback={<div className="bg-green-500">CARREGANDO...</div>}>
        <Persons />
      </Suspense>
    </main>
  );
}
