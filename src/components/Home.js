import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deletData, readData } from "../redux/action/api.action";

import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

function Home(props) {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readData());
  }, []);

  const handleEdit = (id) => {
    dispatch(deletData(id))
  };
  const handleDelet = (id) => {
    dispatch(deletData(id))
  };
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
                <th scope="col">Manage</th>
              </tr>
            </thead>
            <tbody>
              {books.data !== null ?
                 books.data.map((b, i) => {
                  console.log(b.id);
                    return (
                      <tr key={i}>
                        <th scope="row">{b.id}</th>
                        <td>{b.title}</td>
                        <td>{b.author}</td>
                        <td>{b.price}</td>
                        <td>{b.publisher}</td>
                        <td>
                          <button
                            className="oper_btn"
                            onClick={() => handleEdit(b.id)}
                          >
                            <i className="bi bi-pencil-fill"></i>
                          </button>
                          <button className="oper_btn" onClick={() => handleDelet(b.id)}>
                            <i className="bi bi-trash3-fill"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
