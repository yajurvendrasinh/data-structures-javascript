import React, { useState } from "react";
import "../Directory/style.css";

export default function Directory({ explorerData }) {
  const [explorer, setExplorer] = useState(explorerData);
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="container">
      <h3
        className="directory"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {explorer.isFolder ? <span>&#128194;</span> : <span>&#128196;</span>}

        {explorer.name}
      </h3>
      <div className={expanded ? "show content" : "hide content"}>
        {explorer.items.map((folder) => {
          return <Directory key={folder.id} explorerData={folder} />;
        })}
      </div>
    </div>
  );
}
