import { useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";

const ExtensionList = () => {
  const [extensions, setExtensions] = useState([]);
  const [active, setActive] = useState(0);
  const buttons = ["All", "Active", "Inactive"];

  const filteredExtensions = extensions.filter((ext) => {
    if (active === 0) return true;
    if (active === 1) return ext.isActive === true;
    if (active === 2) return ext.isActive === false;
  });

  const handleToggleChange = (id, isActive) => {
    setExtensions((prev) =>
      prev.map((ext) => (ext.id === id ? { ...ext, isActive: isActive } : ext))
    );
  };

  const handleRemove = (id) => {
    setExtensions((prevData) =>
      prevData.filter((extensions) => extensions.id !== id)
    );
  };

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch the extensions");
        return response.json();
      })
      .then((data) => setExtensions(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <article>
        <div className="flex gap-5 flex-col md:flex-row md:justify-between items-center my-8 justify-center">
          <h1 className="text-3xl font-bold dark:text-Neutral0">
            Extensions List
          </h1>
          <div className="flex gap-4">
            {buttons.map((label, index) => (
              <Button
                key={index}
                onClick={() => setActive(index)}
                className={`px-4 py-2
            ${
              active === index
                ? "bg-Red700 text-white dark:text-inherit dark:bg-Red400"
                : "bg-Neutral0 shadow-sm text-inherit dark:bg-Neutral700 dark:text-Neutral0 dark:border-[0.2px] border-Neutral600 dark:hover:bg-Neutral600 hover:text-Neutral600 dark:hover:text-Neutral0"
            }`}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      </article>

      {/* Extensions */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {extensions.length > 0 ? (
          filteredExtensions.map((item) => (
            <Card
              id={item.id}
              image={item.logo}
              title={item.name}
              desc={item.description}
              key={item.id}
              toggle={item.isActive}
              onToggleChange={handleToggleChange}
              onRemove={handleRemove}
            />
          ))
        ) : (
          <p className="text-3xl font-extrabold text-Red700 col-span-full text-center dark:text-amber-300">
            No extensions found!
          </p>
        )}
      </section>
    </main>
  );
};

export default ExtensionList;
