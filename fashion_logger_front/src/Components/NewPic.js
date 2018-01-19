import React from "react";

const NewPic = props => {
  return (
    <div>
      <form onSubmit={props.newPicSubmitHandler} id={props.topicId}>
        <label>Title: </label>
        <input
          type="text"
          value={props.newPicTitle}
          placeholder="title"
          name="title"
          onChange={props.newPicChangeHandler}
        />
        <label>Tag: </label>
        <input
          type="text"
          value={props.newPicTag}
          placeholder="tag"
          name="tag"
          onChange={props.newPicChangeHandler}
        />
        <label>Url: </label>
        <input
          type="text"
          value={props.newPicUrl}
          placeholder="url"
          name="url"
          onChange={props.newPicChangeHandler}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
export default NewPic;
