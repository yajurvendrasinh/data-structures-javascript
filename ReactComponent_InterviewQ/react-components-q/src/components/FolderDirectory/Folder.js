import React from "react";

export default function Folder({ folderData }) {
  return (
    <div className="main-folder">
      <div key={folderData.id}>
        <h3>{folderData.name}</h3>
      </div>
    </div>
  );
}
