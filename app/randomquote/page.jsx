"use client"
import { SearchAuthor } from "@/components/SearchAuthor"
import { Circle } from "lucide-react"
import dynamic from "next/dynamic"
import { Suspense } from "react"

const LazyQuoteBox = dynamic(() => import("@/components/QuoteBox"), {
  loading: () => {
    return (
      <>
        <Circle className="animate-spin mx-auto text-white" />
        <Suspense fallback={<p className="text-white">Loading...</p>}></Suspense>
      </>
    )
  },
  ssr: false,
})

export default function randomQuote() {

  

  return (
    <div className="flex min-h-screen  flex-col items-center gap-7 pt-20 text-white w-full bg-blue-700">
      <h1 className="text-3xl font-bold">Quotes</h1>
      <SearchAuthor />
      <LazyQuoteBox />
    </div>
  )
}