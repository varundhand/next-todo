import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={`bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center justify-center mx-64 ${inter.className}`}>
      <div className="container mx-auto p-4">
        <header className="text-4xl  font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">TODO APP</header>
        <main className="flex-grow">{children}</main>
        <footer className="text-center mt-8 text-sm">
          © {new Date().getFullYear()} Todo App
        </footer>
      </div>
    </body>
  </html>
  )
}
