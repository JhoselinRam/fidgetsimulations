/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MENU_TOGGLE_QUERY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
