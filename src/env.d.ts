/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MENU_TOGGLE_QUERY: string
  readonly VITE_TOOL_TOGGLE_QUERY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
