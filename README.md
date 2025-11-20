# React + Vite

folder structure :
src/
└── Library/
    └── builder/
        ├── pages/
        │   └── BuilderPage.jsx

        ├── config/
        │   ├── fieldTypes.js
        │   └── (optional later: previewTypes.js, drawerTypes.js)

        ├── store/
        │   └── builderStore.js

        ├── fieldbar/
        │   ├── Fields.jsx
        │   ├── FieldItem.jsx
        │   └── index.js   (optional re-export)

        ├── dropzone/
        │   ├── DropArea.jsx
        │   ├── DropItem.jsx
        │   ├── DroppableCard.jsx
        │   ├── FieldActions.jsx
        │   └── index.js   (optional re-export)

        ├── fieldCard/
        │   ├── EditableFieldCard.jsx
        │   ├── Widget.jsx           ← switch-case renderer
        │   └── index.js

        ├── fields/
        │   ├── text/
        │   │   ├── Text.jsx
        │   │   └── edit/EditTextField.jsx
        │   │
        │   ├── number/
        │   │   ├── Number.jsx
        │   │   └── edit/EditNumberField.jsx
        │   │
        │   ├── date/
        │   │   ├── DateField.jsx
        │   │   └── edit/EditDateField.jsx
        │   │
        │   ├── header/
        │   │   ├── Header.jsx
        │   │   └── edit/EditHeaderField.jsx
        │   │
        │   ├── textarea/
        │   │   ├── TextArea.jsx
        │   │   └── edit/EditTextAreaField.jsx
        │   │
        │   ├── checkboxGroup/
        │   │   ├── CheckboxGroup.jsx
        │   │   └── edit/EditCheckboxGroup.jsx
        │   │
        │   ├── radioGroup/
        │   │   ├── RadioGroup.jsx
        │   │   └── edit/EditRadioGroup.jsx
        │   │
        │   ├── photo/
        │   │   ├── Photo.jsx
        │   │   └── edit/EditPhotoField.jsx
        │   │
        │   ├── signature/
        │   │   ├── Signature.jsx
        │   │   └── edit/EditSignatureField.jsx
        │   │
        │   ├── checkpoints/
        │   │   ├── CheckPoints.jsx
        │   │   └── edit/EditCheckPoints.jsx
        │   │
        │   ├── star/
        │   │   ├── Star.jsx
        │   │   └── edit/EditStarField.jsx
        │   │
        │   └── index.js   (optional)

        ├── drawer/
        │   ├── FieldDrawer.jsx
        │   └── tabs/
        │       ├── GeneralTab.jsx
        │       ├── ConditionalTab.jsx
        │       ├── VisibilityTab.jsx
        │       ├── DeviationTab.jsx
        │       └── MultiLingualTab.jsx

        ├── preview/
        │   ├── MobilePreview.jsx
        │   ├── Preview.jsx
        │   └── index.js

        └── common/
            ├── Required.jsx
            └── (more common components)


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
