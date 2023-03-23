import Image from "next/image"
import Link from "next/link"
import './globals.css'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const header = <header>
    <div className="text-center border-slate-300 bg-slate-800 p-8 my-6 rounded-sm">
      <Image src='/logo.png' width={48} height={40} className="mx-auto"/>
      <Link href={`/`}><h1 className="text-2xl text-white font-bold mt-4">Jack's Blog</h1></Link>
      <p className="text-slate-300">🤟 Welcome to my tech blog. 💻</p>
    </div>
  </header>

  const footer = <footer>
    <div className="border-t text-slate-400 mt-12 py-6 text-center">
      <h3>Designed by Hamza Ashraf</h3>
    </div>
  </footer>

  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
