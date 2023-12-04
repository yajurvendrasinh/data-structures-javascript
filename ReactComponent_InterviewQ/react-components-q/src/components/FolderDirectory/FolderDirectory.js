import React, { useState } from "react";
import FolderData from "./FolderData";
import Folder from "./Folder";

export default function FolderDirectory() {
  const [folderData, setFolderData] = useState(FolderData);

  return (
    <div className="folder-wrapper">
      {/* {JSON.stringify(folderData)} */}

      {folderData.map((folder) => {
        return (
          <>
            <Folder folderData={folder} />
            {folder.children && (
              <FolderDirectory folderData={folder.children} />
            )}
          </>
        );
      })}
    </div>
  );
}
