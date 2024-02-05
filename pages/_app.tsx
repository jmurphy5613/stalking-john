import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ConvexProvider, ConvexReactClient } from "convex/react";

const client = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConvexProvider client={client}>
      <Component {...pageProps} />
    </ConvexProvider>
  )
}
