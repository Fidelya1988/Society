'use client';
import Organizations from "./Organizations";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <section>
        <Button className="mt-4" onClick={()=> router.push('/create-org')}>Create Organization</Button>

        <Organizations />
      </section>
    </div>
  );
}
