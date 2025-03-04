"use client";

import { useRouter } from "next/navigation";
import Organizations from "@/components/Organizations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center h-screen">
      <section>
        <Button className="mb-4" onClick={() => router.push("/create-org")}>
          Create Organization
        </Button>
        <Card className="w-[30rem] flex flex-col items-center pt-2 pb-4">
          <Organizations />
        </Card>
      </section>
    </div>
  );
}
