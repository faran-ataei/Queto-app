"use client";
import { CarouselPlugin } from "@/components/CarouselPhotos";
import { Button } from "@/components/ui/button";
import store from "@/redox/store/store";
import Link from "next/link";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <div className="w-full py-20 bg-blue-700 flex flex-col items-center justify-center text-white">
          <CarouselPlugin />
          <div className="text-center max-w-2xl mt-10">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to the Greatest Minds
            </h1>
            <p className="text-lg">
              Walk with us through the path of wisdom, and hear the voices of
              history’s greatest minds echo through time.
            </p>
            <Button variant="default" size={"lg"} className="mt-4">
              <Link href="/randomquote">Get Started</Link>
            </Button>
          </div>
        </div>
      </Provider>
    </>
  );
}
