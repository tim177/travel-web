import { Footer } from "@/components/footer";
import Header from "@/components/tour-header";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-16 pt-8 leaf-pattern">
        <div className="container max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Dashboard</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}
