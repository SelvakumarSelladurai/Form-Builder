import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Fields from "../fieldbar/Fields";

export default function BuilderPage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex w-full h-screen bg-gray-100 p-4 gap-4">

        {/* LEFT: FieldBar (Widgets) */}
        <div className="w-60">
          <Fields />
        </div>

        {/* CENTER: Drop Area (Coming Soon) */}
        <div className="flex-1 bg-white shadow rounded p-4 overflow-auto">
          <h2 className="text-xl font-bold mb-3">Form Area</h2>
          <p className="text-gray-500">
            DropArea will be implemented later.
          </p>
        </div>

        {/* RIGHT: Mobile Preview (Coming Soon) */}
        <div className="w-80 bg-white shadow rounded p-4">
          <h2 className="text-lg font-bold mb-3">Preview</h2>
          <p className="text-gray-500">
            MobilePreview will be implemented later.
          </p>
        </div>

      </div>
    </DndProvider>
  );
}
