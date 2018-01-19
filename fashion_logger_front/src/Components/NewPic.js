import React from "react";

const NewPic = () => {
  return (
    <div>
      <form>
        <label>Title: </label>
        <input type="text" value="" placeholder="title" />
        <label>Tag: </label>
        <input type="text" value="" placeholder="tag" />
        <label>Url: </label>
        <input type="text" value="" placeholder="url" />
        <input type="submit" />
      </form>
    </div>
  );
};
export default NewPic;
