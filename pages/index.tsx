import { Marcellus } from "next/font/google";

import { Massages } from "@/features/sections/Massages";
import { Welcome } from "@/features/sections/Welcome";



type ValuePiece = Date | null;

export default function Home() {
  return (
    <main>
      <Welcome />
      <Massages />
    </main>
  );
}
