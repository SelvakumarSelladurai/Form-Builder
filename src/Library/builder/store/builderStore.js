import { create } from "zustand";

export const useBuilderStore = create((set) => ({
  fields: [],

  addField: (field) =>
    set((state) => ({
      fields: [
        ...state.fields,
        { 
          ...field
        }
      ]
    })),
}));
