import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Therapy Alliance',
  description: 'TD Therapy Alliance is a home health Houston-based staffing company that connects therapists to patients.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="image" content="https://tdtherapyalliance.com/favicon.ico" />
        <meta name="theme-color" content="#00a99d" />
        <meta name="keywords" content="therapy, alliance, home health, Houston, staffing, company, therapists, patients" />
        <meta name="author" content="John Nam" />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tdtherapyalliance.com/" />
        <meta property="og:image" content="https://tdtherapyalliance.com/favicon.ico" />
        <meta property="og:image:alt" content="Logo" />
        <meta property="og:site_name" content="TD Therapy Alliance" />
        <meta property="og:locale" content="en_US" />

        <meta property="article:publisher" content="https://tdtherapyalliance.com" />
        <meta property="article:section" content="Therapist Staffing Company" />
        <meta property="article:tag" content="Therapist Staffing Company" />
        <meta property="article:published_time" content="06/05/2023" />
        <meta property="article:modified_time" content="06/05/2023" />
        <meta property="article:author" content="John" />

        <meta name="twitter:card" content="TD Therapy Alliance is a home health Houston-based staffing company that connects therapists to patients." />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://tdtherapyalliance.com/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
