import About from "./components/About"
import Clients from "./components/Clients"
import Hero from "./components/Hero"

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
      <Clients />
    </main>
  )
}

export default App
