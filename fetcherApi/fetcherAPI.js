export async function getData(url, apiKey) {
  try {
    const response = await fetch(url, {
      headers: {
        "x-rapidapi-key": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return data.quote;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
