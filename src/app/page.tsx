import Posts from "@/components/Posts";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-2">
      <section>
        <Posts />
      </section>
    </main>
  );
}
