import DrinkList from "@/components/DrinkList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  //Added Promise to see loading component
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to load data! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();

  return (
    <div>
      <DrinkList drinks={data.drinks} />
    </div>
  );
};

export default DrinksPage;
