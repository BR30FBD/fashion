import React from "react";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  

  const allCategories = [
    {
      name: "women",
      subCategories: [
        { name: "Coat", link: "#" },
        { name: "Jackets", link: "#" },
        { name: "Dresses", link: "#" },
        { name: "Shirts", link: "#" },
        { name: "T-shirts", link: "#" },
        { name: "Jeans", link: "#" },
      ],
    },
    {
      name: "Men",
      subCategories: [
        { name: "Coat", link: "#" },
        { name: "Jackets", link: "#" },
        { name: "Dresses", link: "#" },
        { name: "Shirts", link: "#" },
        { name: "T-shirts", link: "#" },
        { name: "Jeans", link: "#" },
      ],
    },
    {
      name: "Kids",
      subCategories: [
        { name: "Coat", link: "#" },
        { name: "Jackets", link: "#" },
        { name: "Dresses", link: "#" },
        { name: "Shirts", link: "#" },
        { name: "T-shirts", link: "#" },
        { name: "Jeans", link: "#" },
      ],
    },
    {
      name: "Accessories",
      subCategories: [
        { name: "Coat", link: "#" },
        { name: "Jackets", link: "#" },
        { name: "Dresses", link: "#" },
        { name: "Shirts", link: "#" },
        { name: "T-shirts", link: "#" },
        { name: "Jeans", link: "#" },
      ],
    },
    {
      name: "Cosmetic",
      subCategories: [
        { name: "Coat", link: "#" },
        { name: "Jackets", link: "#" },
        { name: "Dresses", link: "#" },
        { name: "Shirts", link: "#" },
        { name: "T-shirts", link: "#" },
        { name: "Jeans", link: "#" },
      ],
    },
  ];
  return (
    <div className="sidebar__categories">
      <div className="section-title">
        <h4>Categoriessh</h4>
      </div>
      <div className="categories__accordion">
        <div className="accordion" id="accordionExample">
          {allCategories.map((category, index) => (
            <CategoryItem key={index} category={category}/>
          ))}
         
            
          
        </div>
      </div>
    </div>
  );
};

export default Categories;