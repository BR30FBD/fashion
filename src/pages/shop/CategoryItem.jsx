import React, { useState } from "react";

const CategoryItem = ({ category }) => {
  const [active, setActive] = useState(false);
  return (
   
    <div className="card">
      <div className="card-heading ">
        <p
          data-toggle={`collapse ${active && "active"} `}
          data-target={`#collapse${category.name}`}
          onClick={() => setActive(!active)}
        >
          {category.name}
          <i className={`arrow_carrot-${active?"up":"down"} float-right`} />
        </p>
      </div>
      <div
        id={`#collapse${category.name}`}
        className={`collapse  ${active && "show"}`}
        data-parent="#accordionExample"
      >
        <div className="card-body">
          <ul>
            {category.subCategories.map((subCategory, index) => (
              <li key={index}>
                <p href={subCategory.link}>{subCategory.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
   
  );
};

export default CategoryItem;