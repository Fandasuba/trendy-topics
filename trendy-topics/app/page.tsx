import TrendsForm from "./components/TrendsForm"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <div className="max-w-4xl mx-auto p-6">
        {/* Masthead */}
        <div className="text-center mb-12 border-b-4 border-black pb-4">
          <h1 className="text-6xl font-serif font-bold text-black mb-2">THE TRENDS</h1>
          <p className="text-xl text-zinc-600 font-serif italic">All the trending topics leading the conversations of today!</p>
        </div>

        <TrendsForm />
        
        {/* Footer */}
        <div className="text-center mt-6 text-zinc-500 font-serif text-sm">
          Vol. 1 No. 1 • Est. 2025
        </div>
      </div>
    </div>
  )
}