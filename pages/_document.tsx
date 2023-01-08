import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="overflow-y-auto xs:text-[11px] sm:text-[15px] text-[7px]">
      <Head />
      <body className="bg-gradient-to-b from-[#d5d056] to-[#4fbe8f] h-full w-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
