import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Fields from "../fieldbar/Fields";        // LEFT PANEL — Widgets
import DropArea from "../dropzone/DropArea";    // CENTER — Canvas
// import MobilePreview from "../preview/MobilePreview"; // RIGHT (later)

export default function BuilderPage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex w-full h-screen bg-gray-100 p-4 gap-4">

        {/* LEFT: FIELD BAR */}
        <div className="w-60">
          <Fields />
        </div>

        {/* CENTER: DROP AREA */}
        <div className="flex-1">
          <DropArea />
        </div>

        {/* RIGHT: PREVIEW (optional for now) */}
        <div className="w-80 bg-white border rounded-xl p-4">
          <h2 className="text-lg font-semibold">Preview</h2>
          <p className="text-gray-500 mt-3">Preview will be added soon.</p>
        </div>

      </div>
    </DndProvider>
  );
}
