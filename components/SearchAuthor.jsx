"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setAuthor, setError, setQuotes } from "@/redox/reducer/author.reducer";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export function SearchAuthor() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      author: "",
    },
  });

  function editAuthorName(str) {
    const array = str.split(" ");
    return array.join("-");
  }

  const onSubmit = async (value) => {
    try {
      const editedName = editAuthorName(value.author);
      const res = await fetch(
        `https://get-quotes-api.p.rapidapi.com/author/${editedName}`,
        {
          headers: {
            "x-rapidapi-key": process.env.NEXT_PUBLIC_QUOTE_KEY,
          },
        }
      );
      const data = await res.json();
      dispatch(setAuthor(value.author));
      if (data.quotes) dispatch(setQuotes(data.quotes));
      else dispatch(setError(data.message));
    } catch (error) {
      console.error("Error fetching quotes:", error);
      dispatch(setError(data.message));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-sm items-center gap-2"
    >
      <Input
        type="text"
        name="author"
        {...register("author", { required: true })}
        className="bg-rose-200 text-zinc-950"
        placeholder="Search by author"
      />
      <Button type="submit" variant="default" size={"lg"}>
        Subscribe
      </Button>
    </form>
  );
}
