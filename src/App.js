import "./App.css";
import Form from "./Form";
import { useState } from "react";

import Modal from "@mui/material/Modal";

function App() {
  const [open, setOpen] = useState(false);
  // console.log(open);
  const openForm = () => {
    setOpen(true);
  };
  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button className="form-button" onClick={() => openForm()}>
        Open Form
      </button>
      <Modal
        className="modal-container"
        // className="modal"
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="modal"
          // className="modal-content"
        >
          <div className="modal-content"></div>
          <Form open={open} setOpen={setOpen} />
        </div>
      </Modal>
    </div>
  );
}

export default App;
