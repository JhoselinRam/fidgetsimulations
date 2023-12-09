import type { HamburgerIconProps } from "./HamburgerIcon_types"

function HamburgerIcon({ color = "none" }: HamburgerIconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      fillRule="evenodd"
      stroke={color}
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      transform="scale(-1 1)"
      viewBox="0 0 64 64"
    >
      <g transform="translate(-1088 -192)">
        <path fill="none" d="M0 0H1280V800H0z"></path>
        <g>
          <g>
            <path
              fillRule="nonzero"
              d="M103.288 8.535H174.506V42.668000000000006H103.288z"
              transform="matrix(1.50868 0 0 1.01217 70.647 191.772) matrix(.1492 0 0 .17344 664.206 42.142)"
            ></path>
            <path
              fillRule="nonzero"
              d="M103.288 8.535H244.654V42.668000000000006H103.288z"
              transform="matrix(1.50868 0 0 1.01217 70.647 191.772) matrix(.1492 0 0 .17344 664.345 27.4)"
            ></path>
            <path
              fillRule="nonzero"
              d="M103.288 8.535H315.735V42.668000000000006H103.288z"
              transform="matrix(1.50868 0 0 1.01217 70.647 191.772) matrix(.1492 0 0 .17344 664.345 12.658)"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default HamburgerIcon
