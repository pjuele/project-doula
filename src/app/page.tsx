import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Project Doula",
}

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="bg-white p-5 shadow rounded-lg">
        <div>
          <h1>Project Doula</h1>
          <small>Fast and reliable work estimations for freelancers.</small>
        </div>
        <div>
          <Link href="/projects">
            <button>Projects</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
