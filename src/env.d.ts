/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MENU_TOGGLE_QUERY: string
  readonly VITE_TOOL_TOGGLE_QUERY: string
  readonly VITE_CONFIG_INTERSECT_QUERY: string
  readonly VITE_THROTTLE_TIME: number
  readonly VITE_INFO_HOVER_ENTER_TIME: number
  readonly VITE_INFO_HOVER_LEAVE_TIME: number
  readonly VITE_ROUNDED_DECIMALS: number
  readonly VITE_ELLIPSE_RESOLUTION: number
  readonly VITE_DEFAULT_MARKER_SIZE: number
  readonly VITE_SAFE_RADIUS: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
