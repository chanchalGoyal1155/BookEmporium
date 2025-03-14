import React from "react";

function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer border-[2px] rounded-2xl hover:bg-violet-400 hover:text-white px-2 py-1 duration-200">
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
