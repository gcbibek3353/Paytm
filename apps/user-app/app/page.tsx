import { PrismaClient } from "@repo/db/client";
const client = new PrismaClient();
import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div>

      <div className="bg-red-500">Hello first</div>
      <Button />
    </div>
  );
}
