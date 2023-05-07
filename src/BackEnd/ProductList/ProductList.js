import React from "react";

function ProductList(products) {
  return (
    <div>
      <div>
        <div>
          <h1>{products.episode_id}</h1>
          <h1>{products.title}</h1>
          <h1>{products.opening_crawl}</h1>
        </div>
      </div>
    </div>
  );
}
export default ProductList;
