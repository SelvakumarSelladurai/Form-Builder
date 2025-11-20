import { create } from "zustand";

export const useBuilderStore = create((set) => ({
  fields: [],

  addField: (widget) =>
    set((state) => ({
      fields: [
        ...state.fields,
        {
          id: Date.now(),
          type: widget.type,
          label: widget.label,
          required: false,
          options: widget.options || [],
        }
      ],
    })),
}));
