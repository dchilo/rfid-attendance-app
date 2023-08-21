
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="
      bg-white text-gray-800
      dark:bg-black dark:text-gray-100
      flex flex-col min-h-screen">
      <section>
        <Navbar />
      </section>
      <div className="container mx-auto flex-grow">
        <h1 className="text-center text-4xl font-bold p-14">Registro de Asistencia con RFID</h1>
        <h3 className="text-center py-10 font-bold text-2xl">David Chilo</h3>
      </div>
      <Footer />
    </main>
  )
}
