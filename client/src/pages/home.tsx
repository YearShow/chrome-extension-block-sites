import { Inter } from "next/font/google";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { UiHeader } from "@/shared/ui/ui-header";

const inter = Inter({ subsets: ["latin"] });

export function HomePage() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <main className={`min-h-screen`}>
      <UiHeader right={<div>{data?.email}</div>} />
    </main>
  );
}
