import Image from "next/image";
import { Hero, SearchBar, CustomFilter,CarCard } from "@/components";
import { fetchCars } from "../utils";
// import  from "@/components";
export default async function Home() {
  const allcars = await fetchCars();
  // console.log(allcars)

  const isDataEmpty = !Array.isArray(allcars) || allcars.length < 1 || !allcars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="hone__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalog </h1>
          <p>Explore the cars you may like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-conatiner">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {
                allcars?.map((car)=>(
                  <CarCard car={car}/>
                ))
              }
            </div>
          </section>
        ) : (
          <div className="home_error-container">
            <h2 className="text-black text-xl">Oops, no results</h2>
            <p>{allcars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
