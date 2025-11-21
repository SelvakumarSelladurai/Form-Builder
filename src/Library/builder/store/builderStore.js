import { create } from "zustand";

export const useBuilderStore = create((set, get) => ({
  fields: [],
  editingIndex: null,

  addField: (widget) =>
  set((state) => ({
    fields: [
      ...state.fields,
      {
        id: Date.now(),
        type: widget.type,
        label: widget.label || "Untitled",
        placeholder: widget.placeholder || "",
        required: false,
        options: widget.options || [],

        value: widget.type === "star5" || widget.type === "star10" ? 0 : "",

        max:
          widget.type === "star10"
            ? 10
            : widget.type === "star5"
            ? 5
            : undefined,
      },
    ],
  })),

  deleteField: (index) =>
    set((state) => ({
      fields: state.fields.filter((filder, i) => i !== index),
    })),

  duplicateField: (index) =>
    set((state) => {
      const copy = { ...state.fields[index], id: Date.now() };
      return {
        fields: [
          ...state.fields.slice(0, index + 1),
          copy,
          ...state.fields.slice(index + 1),
        ],
      };
    }),

  moveUp: (index) =>
    set((state) => {
      if (index === 0) return {};
      const fields = [...state.fields];
      [fields[index - 1], fields[index]] = [fields[index], fields[index - 1]];
      return { fields };
    }),

  moveDown: (index) =>
    set((state) => {
      if (index === state.fields.length - 1) return {};
      const fields = [...state.fields];
      [fields[index], fields[index + 1]] = [fields[index + 1], fields[index]];
      return { fields };
    }),

  moveField: (from, to) =>
    set((state) => {
      const fields = [...state.fields];
      const [moved] = fields.splice(from, 1);
      fields.splice(to, 0, moved);
      return { fields };
    }),

  updateField: (index, updatedField) =>
    set((state) => {
      const fields = [...state.fields];
      fields[index] = updatedField;
      return { fields };
    }),

  openDrawer: (index) => set({ editingIndex: index }),
  closeDrawer: () => set({ editingIndex: null }),
}));
