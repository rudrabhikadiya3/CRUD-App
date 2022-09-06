
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "semantic-ui-react";
import { postData } from "../redux/action/api.action";

function Create(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [publisher, setPublisher] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    let id = Math.floor(Math.random() * 100)
    let data = {
      id,
      title,
      author,
      price,
      publisher,
    };
    dispatch(postData(data));
  };

  return (
    <div className="container">
      <Form className="create-form">
        <Form.Field>
          <label>Book Name</label>
          <input
            placeholder="Book Name"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Author Name</label>
          <input
            placeholder="Author Name"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>price</label>
          <input
            placeholder="selling price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Publisher</label>
          <input
            placeholder="Publisher"
            onChange={(e) => setPublisher(e.target.value)}
          />
        </Form.Field>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </Form>
    </div>
  );
}

export default Create;
