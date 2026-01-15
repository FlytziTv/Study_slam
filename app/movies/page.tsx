import Header from "@/components/navbar/Header";

export default function Movie() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans ">
      <Header />
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-white">Page Films</h2>
      </main>
    </div>
  );
}
