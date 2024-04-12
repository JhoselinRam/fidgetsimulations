export interface DeleteControlProps {
  className?: string
  onDelete?: () => void
  actionOnPress?: () => void
  placement?: "top" | "bottom" | "left" | "right"
  offset?: number
  disabled?: boolean
}
