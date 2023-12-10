import React, { useState } from "react";
import FolderData from "./FolderData";
import Folder from "./Folder";

function FolderDirectory({ folder }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="folder-wrapper">
      <h3
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {folder.children ? (
          <span className={expanded ? "open-folder" : "folder"}></span>
        ) : (
          <span className="file"></span>
        )}
        {folder.name}
      </h3>
      {folder.children && (
        <div style={{ display: expanded ? "block" : "none" }}>
          {folder.children.map((child) => {
            return (
              <div key={child.id} className="children-data">
                <FolderDir folder={child} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default FolderDirectory;

// version 2: https://youtu.be/ixgxx_um8r8?si=ajiDxA0LZOLYBlTe
import { fetchData } from "./asset/FolderData";

export default function App() {
  const [folderData, setFolderData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData();
      setFolderData(response);
    };
    getData();
  }, []);

  return (
    <div className="App">
      {folderData.map((folder) => {
        return <FolderDir key={folder.id} folder={folder} />;
      })}
    </div>
  );
}

//
// .children-data {
//   padding-left: 20px;
// }
// /* // Arrow characters to use: ▼ ▶ • */

// .folder::before {
//   padding: 5px;
//   content: "▶";
// }
// .open-folder::before {
//   padding: 5px;
//   content: "▼";
// }

// .file::before {
//   padding: 5px;
//   content: "•";
// }
