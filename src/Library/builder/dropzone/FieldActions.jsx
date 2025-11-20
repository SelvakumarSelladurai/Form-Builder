import { MdDelete, MdEdit, MdContentCopy, MdArrowUpward, MdArrowDownward } from "react-icons/md";
import { useBuilderStore } from "../store/builderStore";

export default function FieldActions({ index }) {
  const { deleteField, duplicateField, moveUp, moveDown } = useBuilderStore();

  return (
    <div className="absolute right-2 top-2 flex gap-2 z-10">
      <button onClick={() => deleteField(index)} title="Delete">
        <MdDelete size={18} />
      </button>

      <button onClick={() => duplicateField(index)} title="Duplicate">
        <MdContentCopy size={18} />
      </button>

      <button onClick={() => moveUp(index)} title="Move Up">
        <MdArrowUpward size={18} />
      </button>

      <button onClick={() => moveDown(index)} title="Move Down">
        <MdArrowDownward size={18} />
      </button>
    </div>
  );
}
