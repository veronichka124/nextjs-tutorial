import Image from "next/image";
import Link from "next/link";

const DrinkList = ({ drinks }) => {
  //   console.log(drinks);
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link href={`/drinks/${drink.idDrink}`}>
            <div className="relative h-48 mb-4">
              <Image
                src={drink.strDrinkThumb}
                fill
                sizes="(max-width:768px 100vw, (max-width:1200px) 50vw"
                className="rounded-md object-cover"
                alt={drink.strDrink}
              />
            </div>

            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinkList;
