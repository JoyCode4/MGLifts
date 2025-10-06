import React from "react";

const GridComponent = ({ children, columns = 3 }) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return <div className={`grid ${gridCols[columns]} gap-6`}>{children}</div>;
};

export default GridComponent;
