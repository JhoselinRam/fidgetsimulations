/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MENU_TOGGLE_QUERY: string
  readonly VITE_TOOL_TOGGLE_QUERY: string
  readonly VITE_CONFIG_INTERSECT_QUERY: string
  readonly VITE_THROTTLE_TIME: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
