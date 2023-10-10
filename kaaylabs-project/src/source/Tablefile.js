import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBeers, fetchBeersDate } from "../action/beerActions";
import BeerTable from "../componets/BeerTable";
import Pagination from "../componets/Pagination";
import Filter from "../componets/Filter";

function Tablefile() {
  const dispatch = useDispatch();
  // const { beers } = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchBeers(currentPage, dispatch));
  }, [currentPage, dispatch]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilter = (brewedBefore, brewedAfter) => {
    const formattedBrewedBefore = brewedBefore;
    const formattedBrewedAfter = brewedAfter;
    dispatch(
      fetchBeersDate(formattedBrewedBefore, formattedBrewedAfter, dispatch)
    );
  };

  return (
    <div className="App">
      <h4>Demo Inteview Task</h4>
      <div
        style={{ display: "flex", justifyContent: "end", marginBottom: "2rem" }}
      >
        <Filter onFilter={handleFilter} />
      </div>
      <BeerTable />
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Pagination
          currentPage={10}
          totalPages={50}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Tablefile;
