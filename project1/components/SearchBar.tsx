"use client";
import React, { use } from "react";
import { useState } from "react";
import { SearchManufacturer } from "./";
import { useRouter } from "next/navigation";
import Image from "next/image";
const SearchButton = ({ otherClass }: { otherClass: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClass}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass "
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const router=useRouter()
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model === "")
      return alert("Please fill in the search bar");
      // console.log(model.toLowerCase(),manufacturer.toLowerCase())
      updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase())
  };

  const updateSearchParams=(model:string, manufacturer:string)=>{
      const searchParams=new URLSearchParams(window.location.search);
      if(model){
        searchParams.set('model',model)
      }
      else{
        searchParams.delete('model')
      }

      if(manufacturer){
        searchParams.set('manufacturer',manufacturer)
      }
      else{
        searchParams.delete('manufacturer')
      }

      const newPathname=`${window.location.pathname}?${searchParams.toString}`
      
      router.push(newPathname)
  }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={24}
          height={25}
          className="absolute w-[20px] h-[20px]"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tigaun"
          className="searchbar__input"
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <SearchButton otherClass="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
