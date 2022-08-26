import React, { useEffect } from "react";
import { BASE_URL } from "../shared/APIkey";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { readData } from "../redux/action/api.action";

function Home(props) {
  const books = useSelector((state) => state.books.data);

  const dispatch = useDispatch();

  let fetchData = () => {
    try {
      axios.get(BASE_URL + "posts").then((response) => {
        dispatch(readData(response.data));
        
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
      <div className="container">
        <div className="row">
          <table className="table table-dark table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Book name</th>
                <th scope="col">Author</th>
                <th scope="col">Price</th>
                <th scope="col">Publisher</th>
              </tr>
            </thead>
            <tbody>
              {
                books.map((b, i) => {
                    return (
                    <tr key={i}>
                        <th scope="row">{b.id}</th>
                        <td>{b.title}</td>
                        <td>{b.author}</td>
                        <td>{b.price}</td>
                        <td>{b.Publisher}</td>
                    </tr>
                    );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
