import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Fields from "../fieldbar/Fields";
import DropArea from "../dropzone/DropArea";
import MobilePreview from "../preview/MobilePreview";

export default function BuilderPage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex w-full h-screen bg-gray-100 p-4 gap-4">

        <div className="w-60">
          <Fields />
        </div>

        <div className="flex-1">
          <DropArea />
        </div>


            <div>
              <MobilePreview />
            </div>

      </div>
    </DndProvider>
  );
}
