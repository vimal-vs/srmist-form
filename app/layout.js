import './globals.css'

export const metadata = {
  title: 'Form',
  description: 'form-data',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
