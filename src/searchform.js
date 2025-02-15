import React, { useState} from "react";

const Searchform = ({ searchText }) => {
  const [text, setText] = useState("");
  const [showValidTextModal, setShowValidTextModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "" || !text.trim()) {
      setShowValidTextModal(true);
      return;
    }
    searchText(text);
  };

  const onChangevalue = (e) => {
    e.preventDefault();
    setText(e.target.value)
    searchText(e.target.value);
    if(e.target.value === ""){
      setText("Ruskin Bond")
      searchText("Ruskin Bond");
    }
  }

  return (
    <div>
      <br />
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search Chetan Bhagat, Vikram Seth etc.."
          onChange={onChangevalue}
        />
        <button
          style={{
            marginLeft: "1rem",
            transition: "all 0.3s ease 0s",
            padding: "0.6rem",
            borderRadius: "0.2rem",
            cursor: "pointer",
          }}
          type="submit"
        >
          Search
        </button>
      </form>
      <div
        id="popup1"
        class={showValidTextModal ? "overlay modal-active" : "overlay"}
      >
        <div class="popup">
          <div class="close" onClick={() => setShowValidTextModal(false)}>
            &times;
          </div>
          <h3 class="content">Please Enter the valid text</h3>
        </div>
      </div>
    </div>
  );
};

export default Searchform;
