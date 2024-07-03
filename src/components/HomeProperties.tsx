import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "../../properties";

const HomeProperties = () => {
  const recentProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return (
    <>
      <section className="sm:px-4 sm:my-32 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-6xl sm:text-8xl md:text-9xl text-left max-w-sm text-black drop-shadow-lg font-semibold mb-8 sm:mb-24 ">
            Recent Properties...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProperties.length === 0 ? (
              <p>No Properties Found</p>
            ) : (
              recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-white hover:text-black"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};
export default HomeProperties;
