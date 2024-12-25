import Link from "next/link";

//this is a server-side function cause it's not using `use client`
async function getPets() {
  const petsPromise = fetch(
    "https://learnwebcode.github.io/bootcamp-pet-data/pets.json"
  );
  const pets = await (await petsPromise).json();
  return pets;
}
export default async function Page() {
  const pets = await getPets();

  return (
    <div>
      <h3>List of pets</h3>
      <ul>
        {pets.map((pet, index) => {
          return (
            <li key={index}>
              <Link href={"/pet/" + pet.name.toLowerCase()}>{pet.name}</Link>
            </li>
          );
        })}
      </ul>
      <p>This is great!</p>
    </div>
  );
}
