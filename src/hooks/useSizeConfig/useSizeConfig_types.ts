export interface UseSizeConfig {
  widthHooks: SizeHooks
  heightHooks: SizeHooks
  ratioHooks: RatioLookHooks
}

interface RatioLookHooks {
  isSelected: boolean
  onChange: (value: boolean) => void
}

interface SizeHooks {
  value: number
  onChange: (value: number) => void
}
