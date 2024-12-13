import { useRouter } from "next/router";
import Projects from "../../../Components/Projects";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const validCategories = ["games", "technologies", "film"];

  if (!category) {
    return <h1 className="text-center text-2xl font-bold mt-20">Loading...</h1>;
  }

  if (!validCategories.includes(category)) {
    return (
      <h1 className="text-center text-2xl font-bold mt-20">
        404 - Category Not Found
      </h1>
    );
  }

  const categoryDetails = {
    games: {
      title: "Discover games fundraisers on FundItUp",
      description:
        "Help others by donating to their fundraiser, or start one for someone you care about.",
      image: "/icons/flaticon/games.svg",
    },
    technologies: {
      title: "Discover technologies fundraisers on FundItUp",
      description:
        "Support tech enthusiasts to bring their ideas to life or fund new innovations.",
      image: "/icons/flaticon/technologies.svg",
    },
    film: {
      title: "Discover film fundraisers on FundItUp",
      description:
        "Help aspiring filmmakers to create their vision, or support an ongoing project.",
      image: "/icons/flaticon/film.svg",
    },
  };

  const { title, description, image } = categoryDetails[category] || {};

  return (
    <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <section className="mb-10">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-2xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h2 className="mb-6 font-sans font-bold tracking-tight md:mb-12 text-5xl sm:leading-none">
              Discover {category} fundraisers on FundItUp
            </h2>
            <p className="max-w-xl mb-4 text-base md:text-lg">{description}</p>
            <button className="px-6 py-3 mt-4 font-semibold text-white rounded bg-indigo-500 hover:bg-indigo-700">
              Start a Fundraiser
            </button>
          </div>

          <div className="w-full max-w-sm xl:w-5/12">
            <div className="p-6 bg-stone-300 rounded-lg shadow-lg">
              <img
                src={image}
                alt={`${category} icon`}
                className="w-32 h-56 mx-auto mb-4"
              />
              <p className="text-center text-lg font-medium text-gray-700">
                Explore fundraisers for {category}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-300 my-">
        <div className="flex flex-col items-center justify-between xl:flex-row mt-5">
          <div className="w-full max-w-2xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h3 className="font-medium mb-6 font-sans md:mb-12 text-5xl md:text-3xl sm:leading-none">
              Explore <span className="text-indigo-500">9283749</span> projects
            </h3>
          </div>
        </div>
        <Projects category={category} />
      </section>
    </div>
  );
};

export default CategoryPage;
