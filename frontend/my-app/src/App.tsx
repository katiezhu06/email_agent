import { useEffect } from 'react'
import { site } from './site'

function App() {
  useEffect(() => {
    document.title = site.name
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center px-6 py-16">
      <main className="max-w-lg w-full text-center space-y-8">
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            {site.name}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">{site.school}</p>
        </div>
        <div>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-emerald-950/40 transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            Resume
          </a>
        </div>
      </main>
    </div>
  )
}

export default App
