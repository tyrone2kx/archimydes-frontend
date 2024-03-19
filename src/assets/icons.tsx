export const ChevronIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <title />
    <path
      d="M20 25a1 1 0 0 1-.71-.29l-8-8a1 1 0 0 1 0-1.42l8-8a1 1 0 1 1 1.42 1.42L13.41 16l7.3 7.29a1 1 0 0 1 0 1.42A1 1 0 0 1 20 25Z"
      data-name="Layer 2"
    />
    <path
      d="M0 0h32v32H0z"
      style={{
        fill: "none",
      }}
    />
  </svg>
);

export const PlusIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={16} height={16} {...props}>
    <defs>
      <style>
        {
          `.cls-1{fill:none;stroke:#FFF;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}`
        }
      </style>
    </defs>
    <title />
    <g id="plus">
      <path d="M16 7v18M7 16h18" className="cls-1" />
    </g>
  </svg>
);

export const LeftArrowIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z" />
  </svg>
);


export const LoadingIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M413 99a221.83 221.83 0 0 0-313-.76V49H70v105h105v-30h-58.4A191.8 191.8 0 0 1 256 63.92c105.91 0 192.08 86.17 192.08 192.08S361.91 448.08 256 448.08 63.92 361.91 63.92 256H34a222 222 0 0 0 379 157 222 222 0 0 0 0-314Z" />
  </svg>
)

export const DeleteIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#666"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 7v0a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v0M9 7h6M9 7H6m9 0h3m2 0h-2M4 7h2m0 0v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"
    />
  </svg>
)