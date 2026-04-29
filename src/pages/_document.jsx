import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full antialiased dark" lang="en">
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          defer
          data-domain="peterlloyd.digital"
          src="https://plausible.io/js/script.js"
        ></script>
      </Head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-[#010B14]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
