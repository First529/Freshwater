import React from "react";

class NewRoomForm extends React.Component {
  render() {
    return (
      <div className="new-room-form">
        <label for="room">Create new room</label>

        <button type="submit"> + </button>
      </div>
    );
  }
}

export default NewRoomForm;
