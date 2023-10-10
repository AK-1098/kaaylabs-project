import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "../Store";

const BeerTable = () => {
  const overallState = useSelector((state) => state);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    setBeers(overallState.beerReducer.beers);
  }, [overallState.beerReducer.beers]);

  //This method Old store subscribe method just show only for you
  store.subscribe(() => {
    console.log("store.subscribe=======>", store.getState().beerReducer.beers);
  });

  return (
    <div>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Tagline</th>
            <th>First Brewed</th>
            <th style={{ width: "40%" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {beers?.map((beer) => (
            <tr key={beer.id}>
              <td>{beer.name}</td>
              <td>{beer.tagline}</td>
              <td>{beer.first_brewed}</td>
              <td>{beer.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BeerTable;
