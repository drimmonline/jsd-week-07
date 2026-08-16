import React from "react";
const Card = (props) => {
  return (
    <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs ">
      <a href="#">
        <img
          className="rounded-t-base"
          src={props.img}
          alt="views"
          className="w-full h-96"
        />
      </a>
      <div className="p-6 text-center">
        <span className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
          {props.title}
        </span>
        <a href="#">
          <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">
            {props.descript}
          </h5>
        </a>
        <a
          href="#"
          className="inline-flex items-center text-black bg-white border-2 outline-2 rounded-md hover:scale-110 transition-all
          box-border  border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
