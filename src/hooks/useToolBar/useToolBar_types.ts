import type { UseMenuToggle } from "../useMenuToggle/useMenuToggle_types"
import type { UseConfigContent } from "./resources/useConfigContent/useConfigContent_types"
import type { UseConfigShow } from "./resources/useConfigShow/useConfigShot_types"

export interface UseToolBar
  extends UseMenuToggle,
    UseConfigShow,
    UseConfigContent {}
