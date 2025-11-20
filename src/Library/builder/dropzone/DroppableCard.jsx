import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useBuilderStore } from "../store/builderStore";

export default function DroppableCard({ id, index, children }) {
  const ref = useRef();
  const { moveField } = useBuilderStore();

  const [, drag] = useDrag({
    type: "FIELD_CARD",
    item: { id, index },
  });

  const [dropping, drop] = useDrop({
    accept: "FIELD_CARD",
    hover(item, monitor) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverRect.bottom - hoverRect.top) / 2;
      const mouseY = monitor.getClientOffset().y - hoverRect.top;

      if (dragIndex < hoverIndex && mouseY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && mouseY > hoverMiddleY) return;

      moveField(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return <div ref={ref}>{children}</div>;
}
