// pages/category/index.jsx
import React from "react";
import { useRouter } from "next/router";

const categories = [
  { name: "Games", icon: "/icons/flaticon/games.svg", path: "games" },
  {
    name: "Technologies",
    icon: "/icons/flaticon/technologies.svg",
    path: "technologies",
  },
  { name: "Film", icon: "/icons/flaticon/film.svg", path: "film" },
];

const CategorySelection = () => {
  const router = useRouter();

  return (
    <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between xl:flex-row">
        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight md:mb-12 sm:text-5xl sm:leading-none">
            Browse Fundraisers by Category
          </h2>
          <p className="max-w-xl mb-4 text-base md:text-lg">
            Explore campaigns around the world and contribute to causes you care
            about.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => router.push(`/category/${category.path}`)}
          >
            <div className="w-32 h-32 p-4 bg-stone-200 rounded-lg flex items-center justify-center hover:border hover:border-black transition">
              <img
                src={category.icon}
                alt={`${category.name} icon`}
                className="w-12 h-12"
              />
            </div>
            <h2 className="mt-2 text-sm font-medium text-gray-800">
              {category.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;
