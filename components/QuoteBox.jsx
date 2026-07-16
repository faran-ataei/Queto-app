"use client";
import { getData } from "@/fetcherApi/fetcherAPI";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { setQuotes } from "@/redox/reducer/author.reducer";

export default function QuoteBox() {
  const dispatch = useDispatch();
  const [quote, setQuote] = useState(null);
  const { quotes, error } = useSelector((state) => state.quote);
  
  useEffect(() => {
    if (!quotes.length > 0) 
      getData(
        process.env.NEXT_PUBLIC_QUOTE_API,
        process.env.NEXT_PUBLIC_QUOTE_KEY
      ).then((data) => setQuote(data));

  }, [ quotes ,dispatch]);
  
  function handleAnotherQuote() {
    dispatch(setQuotes([]));
    
  }
  

  // loading state
  if (!quote && !quotes.length > 0) return <p className="text-white">Loading quote...</p>;

  // no quotes found state
  else if (!quotes.length > 0 && !error) {
      return (
    <div className="text-center">
      <p className="text-xl font-bold">"{quote.quote}"</p>
      <p className="text-lg font-bold italic mt-2">{quote.author}</p>
      <Button
        variant="default"
        onClick={() => window.location.reload()}
        size="lg"
        className="mt-4"
      >
        Get Another Quote
      </Button>
    </div>
  );
  }
  // error state
  else if (error && !quotes.length > 0) {
    return (
      <div className="text-center"> 
        <p className="text-red-500 text-xl font-bold">"{error}"</p>
        <Button
          variant="default"
          onClick={() => handleAnotherQuote()}
          size="lg"
          className="mt-4"
        >
          Try Again
        </Button>
      </div>
    )
  }
  // quotes found state
  else {
    return (
      <div className="text-center w-full flex flex-col items-center"> 
        {quotes.map((q, index) => (
          <div key={index} className="mb-6 border-solid border-black border-5 rounded-2xl p-3 w-1/2">
            <p className="text-xl font-bold">"{q.quote}"</p>
            <p className="text-lg font-bold italic mt-2">{q.author}</p>
          </div>
        ))}
        <Button
          variant="default"
          onClick={() => handleAnotherQuote()}
          size="lg"
          className="mt-4 mb-8"
        >
          Get Another Quote
        </Button>
      </div>
    )
  }
}
