import Posts from "@/components/Posts";
import Sidebar from "@/components/Sidebar";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      <section className="hidden md:inline-grid md:col-span-1 ">
        <Sidebar />
      </section>
    </main>
  );
}
