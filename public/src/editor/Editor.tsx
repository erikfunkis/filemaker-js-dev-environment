import React, { useCallback, useRef, useState } from "react";

import { EDITOR_JS_TOOLS } from "./tools";
import { createReactEditorJS } from "react-editor-js";
import { OutputData } from "@editorjs/editorjs";

interface EditorCore {
  destroy(): Promise<void>;
  clear(): Promise<void>;
  save(): Promise<OutputData>;
  render(data: OutputData): Promise<void>;
}

const ReactEditorJs = createReactEditorJS();

const Editor: React.FC<{}> = () => {
  const [latestData, setLatestData] = useState<OutputData | null>(null);
  const editorCore = useRef<EditorCore>(null);

  const handleInitialize = React.useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  const handleSave = useCallback(async () => {
    const savedData = await editorCore.current.save();
    setLatestData(savedData);
  }, [setLatestData]);
  return (
    <div>
      <h1>Editor</h1>
      <ReactEditorJs
        onInitialize={handleInitialize}
        tools={EDITOR_JS_TOOLS}
        onChange={(changeEvent) => {
          console.log("changeEvent", changeEvent);
        }}
      />
      <button onClick={handleSave}>Save</button>
      <hr></hr>
      <h2>Latest Data</h2>
      <pre>{JSON.stringify(latestData, null, 2)}</pre>
    </div>
  );
};

export default Editor;
