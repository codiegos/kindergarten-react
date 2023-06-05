// Create generic interface for icons
interface IconProps {
  className?: string
  onClick?: () => void
}

export function FacebookIcon ({ className }: IconProps) {
  return (
    <svg
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      className={className}
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <path
          fill='#1877F2'
          d='M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z'
        ></path>
        <path
          fill='#ffffff'
          d='M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z'
        ></path>
      </g>
    </svg>
  )
}

export function InstagramIcon ({ className }: IconProps) {
  return (
    <svg
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <circle cx='24' cy='24' r='20' fill='#C13584'></circle>
        <path
          d='M24 14.1622C27.2041 14.1622 27.5837 14.1744 28.849 14.2321C30.019 14.2855 30.6544 14.481 31.0773 14.6453C31.6374 14.863 32.0371 15.123 32.457 15.5429C32.877 15.9629 33.137 16.3626 33.3547 16.9227C33.519 17.3456 33.7145 17.981 33.7679 19.1509C33.8256 20.4163 33.8378 20.7958 33.8378 23.9999C33.8378 27.2041 33.8256 27.5836 33.7679 28.849C33.7145 30.019 33.519 30.6543 33.3547 31.0772C33.137 31.6373 32.877 32.0371 32.4571 32.457C32.0371 32.8769 31.6374 33.1369 31.0773 33.3546C30.6544 33.519 30.019 33.7144 28.849 33.7678C27.5839 33.8255 27.2044 33.8378 24 33.8378C20.7956 33.8378 20.4162 33.8255 19.151 33.7678C17.981 33.7144 17.3456 33.519 16.9227 33.3546C16.3626 33.1369 15.9629 32.8769 15.543 32.457C15.1231 32.0371 14.863 31.6373 14.6453 31.0772C14.481 30.6543 14.2855 30.019 14.2321 28.849C14.1744 27.5836 14.1622 27.2041 14.1622 23.9999C14.1622 20.7958 14.1744 20.4163 14.2321 19.1509C14.2855 17.981 14.481 17.3456 14.6453 16.9227C14.863 16.3626 15.123 15.9629 15.543 15.543C15.9629 15.123 16.3626 14.863 16.9227 14.6453C17.3456 14.481 17.981 14.2855 19.151 14.2321C20.4163 14.1744 20.7959 14.1622 24 14.1622ZM24 12C20.741 12 20.3323 12.0138 19.0524 12.0722C17.7752 12.1305 16.9028 12.3333 16.1395 12.63C15.3504 12.9366 14.6812 13.3469 14.0141 14.0141C13.3469 14.6812 12.9366 15.3504 12.63 16.1395C12.3333 16.9028 12.1305 17.7751 12.0722 19.0524C12.0138 20.3323 12 20.741 12 23.9999C12 27.259 12.0138 27.6676 12.0722 28.9475C12.1305 30.2248 12.3333 31.0971 12.63 31.8604C12.9366 32.6495 13.3469 33.3187 14.0141 33.9859C14.6812 34.653 15.3504 35.0633 16.1395 35.3699C16.9028 35.6666 17.7752 35.8694 19.0524 35.9277C20.3323 35.9861 20.741 35.9999 24 35.9999C27.259 35.9999 27.6677 35.9861 28.9476 35.9277C30.2248 35.8694 31.0972 35.6666 31.8605 35.3699C32.6496 35.0633 33.3188 34.653 33.9859 33.9859C34.653 33.3187 35.0634 32.6495 35.37 31.8604C35.6667 31.0971 35.8695 30.2248 35.9278 28.9475C35.9862 27.6676 36 27.259 36 23.9999C36 20.741 35.9862 20.3323 35.9278 19.0524C35.8695 17.7751 35.6667 16.9028 35.37 16.1395C35.0634 15.3504 34.653 14.6812 33.9859 14.0141C33.3188 13.3469 32.6496 12.9366 31.8605 12.63C31.0972 12.3333 30.2248 12.1305 28.9476 12.0722C27.6677 12.0138 27.259 12 24 12Z'
          fill='white'
        ></path>
        <path
          d='M24.0059 17.8433C20.6026 17.8433 17.8438 20.6021 17.8438 24.0054C17.8438 27.4087 20.6026 30.1675 24.0059 30.1675C27.4092 30.1675 30.1681 27.4087 30.1681 24.0054C30.1681 20.6021 27.4092 17.8433 24.0059 17.8433ZM24.0059 28.0054C21.7968 28.0054 20.0059 26.2145 20.0059 24.0054C20.0059 21.7963 21.7968 20.0054 24.0059 20.0054C26.2151 20.0054 28.0059 21.7963 28.0059 24.0054C28.0059 26.2145 26.2151 28.0054 24.0059 28.0054Z'
          fill='white'
        ></path>
        <path
          d='M31.8507 17.5963C31.8507 18.3915 31.206 19.0363 30.4107 19.0363C29.6154 19.0363 28.9707 18.3915 28.9707 17.5963C28.9707 16.801 29.6154 16.1562 30.4107 16.1562C31.206 16.1562 31.8507 16.801 31.8507 17.5963Z'
          fill='white'
        ></path>
      </g>
    </svg>
  )
}
export function LeftArrowIcon ({ className, onClick }: IconProps) {
  return (
    <svg
      viewBox='-19.04 0 75.803 75.803'
      xmlns='http://www.w3.org/2000/svg'
      fill='#000000'
      className={className}
      onClick={onClick}
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <g
          id='Group_64'
          data-name='Group 64'
          transform='translate(-624.082 -383.588)'
        >
          <path
            id='Path_56'
            data-name='Path 56'
            d='M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z'
            fill='#ffffff'
          ></path>
        </g>
      </g>
    </svg>
  )
}
export function RightArrowIcon ({ className, onClick }: IconProps) {
  return (
    <svg
      viewBox='-19.04 0 75.803 75.803'
      xmlns='http://www.w3.org/2000/svg'
      fill='#000000'
      onClick={onClick}
      className={className}
      transform='matrix(-1, 0, 0, 1, 0, 0)'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <g
          id='Group_64'
          data-name='Group 64'
          transform='translate(-624.082 -383.588)'
        >
          <path
            id='Path_56'
            data-name='Path 56'
            d='M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z'
            fill='#ffffff'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export function RainbowIcon ({ className }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 120 120'
      className={className}
    >
      <g id='SVGRepo_iconCarrier'>
        <title>{'hs-huzzah-48'}</title>
        <g id='Layer_2' data-name='Layer 2'>
          <path
            d='M69.889 22.528a41.019 41.019 0 0 1 4.24.636c.82.19 1.64.411 2.466.589.123.026 1.119.457 1.393.5.85.138 1.558.654 2.385.785.335.053 1.325.73 1.695.684.121-.016 2.285.977 3.043 1.347a13.791 13.791 0 0 1 2.127 1.213c.665.486 1.287 1.036 1.974 1.481a18.79 18.79 0 0 1 2.503 2.005 37.978 37.978 0 0 1 5.242 5.655c.62.863 1.254 1.715 1.912 2.547a9.206 9.206 0 0 1 1.321 1.993 6.527 6.527 0 0 0 .85 1.595 8.838 8.838 0 0 1 .91 1.514c.405 1.205 1.127 2.26 1.547 3.469a17.086 17.086 0 0 0 .818 1.8 12.45 12.45 0 0 1 .708 2.052c.533 1.877 1.126 3.738 1.64 5.62a11.207 11.207 0 0 0 .18 1.36 6.722 6.722 0 0 1 .404 1.373 6.518 6.518 0 0 1 .287 3.178.364.364 0 0 1-.294.247c-.568.152-1.107.394-1.68.528-.466.109-.594.024-.7-.45a3.855 3.855 0 0 1-.155-.84.417.417 0 0 0-.285-.427c-.288-.112-.343-.297-.148-.546.061-.079.155-.24.099-.258-.687-.205-.063-.916-.511-1.25a8.809 8.809 0 0 1-1.052-1.075.776.776 0 0 1-.118-.264c-.23-1.148-.552-2.274-.81-3.416a13.384 13.384 0 0 0-.658-2.207.757.757 0 0 1-.036-.447.548.548 0 0 0-.276-.68.497.497 0 0 1-.24-.368 10.683 10.683 0 0 0-1.048-2.591 20.932 20.932 0 0 0-1.689-3.207 7.672 7.672 0 0 1-1.089-2.05.525.525 0 0 1 .2-.443c.45-.35.811-.803 1.285-1.126.106-.072.286-.1.276-.259-.012-.177-.194-.217-.331-.266a3.525 3.525 0 0 1-1.977-1.696c-.12-.224-.18-.469-.28-.699-.067-.15-.118-.349-.313-.358-.214-.01-.23.207-.3.353-.175.37-.255.806-.694.993-.106-.008-.236-.055-.252-.14-.066-.359-.37-.514-.586-.747a5.852 5.852 0 0 1-.611-.921 1.486 1.486 0 0 0-.478-.51c-.201-.12-.393-.381-.658-.049-.102.129-.288.046-.402-.07a.352.352 0 0 1-.024-.465c.16-.243-1.06-1.731-1.252-1.985a15.519 15.519 0 0 0-2.294-1.924 1.423 1.423 0 0 0-.747-.395c-.118-.016-.246-.048-.289-.172-.241-.696-.903-.92-1.467-1.13-.804-.298-1.537-.724-2.302-1.086a12.979 12.979 0 0 0-2.205-.955 22.49 22.49 0 0 0-4.073-1.063 8.205 8.205 0 0 1-1.022-.265 30.313 30.313 0 0 0-7.35-.566c-1.54.078-3.081.131-4.62.244a18.85 18.85 0 0 0-2.191.322c-1.433.276-2.892.432-4.31.76a17.808 17.808 0 0 0-3.877 1.35c-.367.181-2.72 1.366-3.437 1.827-.43.275-.974.383-1.243.885-.044.081-.133.09-.213.117a4.572 4.572 0 0 0-1.62.952c-.56.506-1.248.85-1.819 1.347a10.955 10.955 0 0 0-1.802 1.512 3.579 3.579 0 0 1-1.238 1.05c-.074.04-.165.077-.194.154a4.192 4.192 0 0 1-1.333 1.548 21.202 21.202 0 0 0-2.537 2.851 28.44 28.44 0 0 0-1.952 2.743c-.507.847-1.117 1.63-1.643 2.469a38.26 38.26 0 0 0-2.115 3.763c-.95 1.983-1.618 4.076-2.54 6.067a12.142 12.142 0 0 0-.779 1.652c-.14.48-.22.975-.406 1.442-.055.139-.05.311-.139.428-.66.869-.633 1.973-1.023 2.936-.565 1.394-.885 2.87-1.357 4.294-.258.779-.196 1.598-.491 2.353-.041.105-.016.236-.124.316a15.668 15.668 0 0 0-4.191 1.728 22.249 22.249 0 0 0-3.885 2.85.856.856 0 0 1-.217.102.736.736 0 0 1-.051-.273c.157-.703.335-1.402.49-2.107l.21-.96c.096-.472.488-2.04.544-2.368a9.08 9.08 0 0 1 .683-2.736c.488-.911.348-1.903.716-2.81.398-.983.56-2.064.976-3.038.479-1.118.712-2.31 1.198-3.422.5-1.146.811-2.38 1.38-3.486.713-1.382 1.237-2.847 2.007-4.206.516-.911.905-1.904 1.394-2.84a36.701 36.701 0 0 1 2.693-4.812c1.12-1.532 2.09-3.19 3.332-4.611a53.893 53.893 0 0 1 6.391-6.388 47.22 47.22 0 0 1 5.267-4.025 32.306 32.306 0 0 1 4.181-2.342 50.668 50.668 0 0 1 7.093-2.506 50.28 50.28 0 0 1 9.374-1.342c.482-.029 3.89-.03 4.609.06Z'
            fill='#f37676'
          />
          <path
            d='M37.001 97.047a12.42 12.42 0 0 1-2.66.19c-1.817.067-3.64.08-5.457.03a121.991 121.991 0 0 0-3.889-.027c-1.886.007-3.773-.07-5.66-.073-1.433-.002-6.54-.237-7.35-.032-.712.18-1.519-.173-2.197.329-.169-.218-.036-.415.046-.612a14.701 14.701 0 0 1 2.302-3.815 26.368 26.368 0 0 1 2.383-2.782 14.2 14.2 0 0 1 4.137-2.517 24.538 24.538 0 0 1 3.78-1.187 21.28 21.28 0 0 1 2.477-.403c.896-.106 1.794-.197 2.686-.32 1.096-.152 2.201-.204 3.296-.358.199-.028.396-.061.595-.09.212-.03.45-.08.528.222-.032.256-.257.328-.431.45-.237.167-.241.342.044.419a3.298 3.298 0 0 1 2.139 2.095c.046.104.092.236.231.235.125-.001.146-.126.165-.219a3.798 3.798 0 0 1 1.709-2.203c.437-.33.431-.346-.07-.595-.228-.113-.584-.144-.505-.552a10.518 10.518 0 0 1 1.785-.222c1.307-.194 2.628-.308 3.913-.621a19.862 19.862 0 0 0 4.598-1.72c.799-.422 1.576-.87 2.345-1.34.69-.421 1.304-.942 1.966-1.392a10.474 10.474 0 0 0 2.508-2.422 24.915 24.915 0 0 0 3.03-5.131c.401-.939.715-1.908 1.128-2.834.294-.66.495-1.346.764-2.01.24-.046.316.146.411.295.198.31.356.642.53.965.292.833.585 1.664.9 2.49a9.498 9.498 0 0 1 .39 2.358 12.488 12.488 0 0 1 .1 2.693 1.52 1.52 0 0 1-.092.438 3.802 3.802 0 0 0-.502 2.269 3.422 3.422 0 0 0 .177 1.332 3.298 3.298 0 0 0 2.19 1.702 11.442 11.442 0 0 0 8.147-.526c.328-.13.613-.35.95-.461.168-.056.332-.188.522-.057.195.307.405.606.579.924.073.135.605 1.326.695 1.624.287.946.507 1.912.736 2.874.075.314.248 1.83.37 2.114a15.427 15.427 0 0 1 .552 2.203 7.433 7.433 0 0 0 1.477 3.727 3.337 3.337 0 0 0 1.223.944 11.557 11.557 0 0 1 1.679.784 1.029 1.029 0 0 0 .38.19.309.309 0 0 1 .2.191c.03.148-.843.53-.967.541-1.142.101-2.283.248-3.427.277a19.709 19.709 0 0 1-2.34-.019 9.821 9.821 0 0 0-2.83.016c-.423.087-.711.19-1.058-.066.117-.359.452-.176.676-.269.146-.06.408-.012.41-.198 0-.17-.256-.194-.41-.224-.628-.12-1.272-.035-1.904-.12-1.098-.15-2.206-.043-3.306-.138-.522-.046-1.035.084-1.556.057-1.556-.08-3.113.075-4.667-.001-2.177-.106-4.354-.005-6.53-.006-1.62-.001-3.242-.036-4.865.016-1.653.053-3.315.042-4.973.05a15.584 15.584 0 0 0-3.347.167c-.306.069-.529.337-.856.35Z'
            fill='#bae2fe'
          />
          <path
            d='M96.919 44.564a23.63 23.63 0 0 0 1.876 3.216c.108.181 1.246 2.649 1.65 3.383a2.006 2.006 0 0 1 .13.313 34.954 34.954 0 0 1 1.388 4.485 22.33 22.33 0 0 0 .844 3.22 1.381 1.381 0 0 1-.031.439.591.591 0 0 1-.485-.052 6.38 6.38 0 0 0-2.497-.667c-.347-.041-.678-.163-1.027-.197-.404.084-.718-.265-1.111-.232a2.15 2.15 0 0 1-.377-1.079 24.52 24.52 0 0 0-1.15-3.69 24.153 24.153 0 0 0-1.83-3.668 21.278 21.278 0 0 0-2.156-3.126 23.186 23.186 0 0 1-1.623-2.424 15.111 15.111 0 0 0-2.137-2.59 21.26 21.26 0 0 0-2.61-2.646 43.475 43.475 0 0 0-4.655-3.075 14.454 14.454 0 0 0-3.776-1.436c-.898-.203-1.805-.359-2.7-.579a21.23 21.23 0 0 0-2.142-.273 20.956 20.956 0 0 0-3.704-.134 24.763 24.763 0 0 0-6.166 1.125 26.006 26.006 0 0 0-2.73.828 37.535 37.535 0 0 0-3.521 1.692 19.425 19.425 0 0 0-2.791 1.659c-1.17.93-2.546 1.558-3.651 2.572a.682.682 0 0 1-.395.205c-.047-.002-.093-.047-.129-.042-.069.01.033.061-.006.092a6.419 6.419 0 0 1-2.003 1.756.128.128 0 0 1-.091-.055c-.027.059.03.11.015.169a1.099 1.099 0 0 1-.401.57c-.887.641-1.479 1.576-2.3 2.288a7.093 7.093 0 0 0-.856 1.1 56.452 56.452 0 0 0-4.742 7.393 28.243 28.243 0 0 1-1.883 3.37 1.058 1.058 0 0 0-.155.258c-.486 1.377-1.229 2.638-1.76 4-.713 1.83-1.181 3.735-1.82 5.587a14.94 14.94 0 0 0-.616 2.64 2.561 2.561 0 0 1-.341 1.033c-.567.14-1.04-.212-1.548-.335a11.408 11.408 0 0 0-5.21.404c-.192-.48.175-.888.197-1.35.01-.21.22-1.043.239-1.144a34.772 34.772 0 0 1 .912-3.393 15.316 15.316 0 0 1 .885-2.35c.014-.029.058-.056.055-.08-.132-1.036.829-1.686.926-2.636.024-.233 1.17-3.182 1.61-4.092.558-1.151.846-2.427 1.38-3.564a35.047 35.047 0 0 1 3.048-5.352c1.19-1.685 2.288-3.43 3.586-5.047.944-1.177 2.047-2.174 3.057-3.271.366-.399.7-.814 1.102-1.194 1.365-1.292 2.886-2.377 4.328-3.563a11.129 11.129 0 0 1 1.11-.731c1.258-.808 2.586-1.508 3.891-2.241.146-.082.992-.5 1.24-.627a16.208 16.208 0 0 1 3.746-1.377 61.7 61.7 0 0 1 7.523-1.28 57.44 57.44 0 0 1 6.616-.257 26.69 26.69 0 0 1 5.675.788c1.147.265 2.271.597 3.41.87a21.846 21.846 0 0 1 4.243 1.765 6.678 6.678 0 0 1 2.52 1.342 12.273 12.273 0 0 0 2.4 1.785c.614.446.962 1.108 1.6 1.508.252.158 1.075 1.445 1.568 1.894a7.482 7.482 0 0 1 1.185 1.393c.289.427.648.806.976 1.206.078.247-.126.356-.25.498a7.333 7.333 0 0 1-1.602 1.106c-.069.046-.151.072-.22.119-.124.084-.28.161-.258.337.019.159.183.177.304.223a5.892 5.892 0 0 1 1.144.496A4.69 4.69 0 0 1 95.4 45.82c.053.103.074.222.124.328.05.106.103.227.244.216.118-.008.143-.125.177-.217.098-.267.181-.54.283-.803.131-.34.261-.698.69-.78Z'
            fill='#f3ba76'
          />
          <path
            d='M31.961 85.677c-.057-.28-.265-.211-.437-.174-1.07.233-2.172.209-3.246.386-1.02.169-2.05.245-3.072.397-.996.148-1.993.26-2.98.482a20.971 20.971 0 0 0-5.214 1.909c-2.743 1.442-4.427 3.871-6.069 6.353a8.482 8.482 0 0 0-1.155 2.434c-.12-.02-2.923-.382-3.507-.405a19.807 19.807 0 0 1-3.202-.155c-.447-.09-.924.24-1.418.06-.272-.099 2.375-3.111 3.738-4.537a2.256 2.256 0 0 1 .263-.206l-.002.002a1.888 1.888 0 0 1 .245-.482c1.716-1.798 3.21-3.785 4.82-5.673.413-.487.778-1.032 1.2-1.523a24.754 24.754 0 0 1 3.602-3.901c1.887-1.42 3.611-3.046 5.63-4.303a50.222 50.222 0 0 1 5.99-3.149c4.262-1.131 6.465 1.03 6.91.91a2.016 2.016 0 0 0 1.207-.665 19.51 19.51 0 0 1 1.963-1.834 55.959 55.959 0 0 1 6.445-5.14 19.603 19.603 0 0 1 5.683-2.764 3.872 3.872 0 0 1 2.851.274 22.408 22.408 0 0 1 2.312 1.353 2.472 2.472 0 0 0 1.72.41c.573.369.732 1.051 1.156 1.534a.205.205 0 0 1-.038.273 2.349 2.349 0 0 1-.339 1.382c-.41.85-.622 1.771-1.019 2.615a27.863 27.863 0 0 1-2.896 5.271 15.402 15.402 0 0 1-2.405 2.72 31.722 31.722 0 0 1-3.656 2.521 23.273 23.273 0 0 1-5.257 2.3 11.716 11.716 0 0 1-2.783.575 27.848 27.848 0 0 1-3.723.346c-.262.085-.408-.093-.545-.257a2.99 2.99 0 0 1-.487-.871c-.063-.167-.086-.407-.298-.425-.238-.021-.251.233-.312.392a2.846 2.846 0 0 1-1.22 1.418c-.137.085-.266.215-.455.147Z'
            fill='#d5ecfe'
          />
          <path
            d='M49.39 41.77c.757-.52 1.51-1.049 2.272-1.562.74-.497 1.524-.936 2.23-1.479.96-.738 2.09-1.174 3.088-1.83.549-.36 1.181-.498 1.736-.828a10.29 10.29 0 0 1 2.97-1.124 39.293 39.293 0 0 1 6.24-1.278 31.593 31.593 0 0 1 6.703.356 27.932 27.932 0 0 1 3.64.842 19.176 19.176 0 0 1 5.23 2.642 19.152 19.152 0 0 1 3.278 2.442 56.31 56.31 0 0 1 3.022 3.345c1.204 1.447 2.012 3.164 3.28 4.565a16.899 16.899 0 0 1 2.624 4.366 17.336 17.336 0 0 1 1.658 4.93c.059.444.195.877.295 1.315a17.45 17.45 0 0 0-2.785.616.869.869 0 0 1-.417-.593 15.714 15.714 0 0 0-1.067-2.679 1.848 1.848 0 0 1-.175-.67 1.327 1.327 0 0 1 .65-.792c.2-.149.184-.275-.033-.36a2.536 2.536 0 0 1-1.478-1.552c-.154-.406-.353-.109-.54-.052a.461.461 0 0 1-.41-.245 12.8 12.8 0 0 1-1.11-1.754 2.965 2.965 0 0 0-1.307-1.465 4.247 4.247 0 0 1-.934-.956 11.977 11.977 0 0 0-1.553-1.854.5.5 0 0 1-.174-.298c-.002-.254.178-.386.358-.508.222-.15.228-.287-.023-.387a2.586 2.586 0 0 1-1.47-1.556c-.037-.092-.08-.208-.194-.204-.114.005-.135.13-.18.217-.143.27-.202.622-.611.641a9.5 9.5 0 0 1-1.665-1.03 17.049 17.049 0 0 0-4.23-1.836 34.497 34.497 0 0 0-3.489-.96 22.173 22.173 0 0 0-6.4-.358 22.931 22.931 0 0 0-5.712 1.327 30.915 30.915 0 0 0-6.205 2.96 28.746 28.746 0 0 0-5.53 4.806 26.294 26.294 0 0 0-2.69 3.185 33.419 33.419 0 0 0-3.142 5.54c-.814 2.001-1.813 3.926-2.468 5.993-.093.294-.055.648-.34.87-.765.667-1.682 1.117-2.46 1.775-1.23 1.038-2.447 2.084-3.6 3.208a17.678 17.678 0 0 0-2.572 2.812.415.415 0 0 1-.74.047c-.147-.178-.348-.232-.506-.368a28.99 28.99 0 0 1 1.377-5.452c.34-.947.525-1.939.905-2.877.429-1.057.871-2.107 1.307-3.159.544-1.312 1.267-2.522 1.91-3.775.903-1.76 1.928-3.46 2.946-5.16.99-1.65 2.211-3.139 3.346-4.688.45-.614 1.164-.952 1.502-1.619.36-.71 1.303-.865 1.528-1.68a8.926 8.926 0 0 0 2.116-1.813Z'
            fill='#f3e576'
          />
          <path
            d='M93.283 55.043c.26.965.85 1.797 1.13 2.744a10.53 10.53 0 0 1 .458 1.301 28.159 28.159 0 0 0-3.168 1.324c-.439-.173-.467-.623-.61-.97a16.631 16.631 0 0 0-1.858-3.382c-.378-.526-.638-1.133-1.012-1.67a6.487 6.487 0 0 0-1.018-1.364c-.596-.492-1.1-1.084-1.72-1.538a11.287 11.287 0 0 1-.892-.947 26.624 26.624 0 0 0-3.043-2.222 11.845 11.845 0 0 0-3.752-1.362 19.063 19.063 0 0 0-4.924-.567 16.122 16.122 0 0 0-2.798.246 31.887 31.887 0 0 0-3.513.857c-.691.202-1.314.57-1.998.8-1.501.505-2.65 1.62-4.005 2.38-.059.032.02.012-.041.027a3.142 3.142 0 0 0-1.254.868 23.42 23.42 0 0 0-2.37 2.377 13.602 13.602 0 0 1-1.439 1.874 4.251 4.251 0 0 0-.434.731 14.676 14.676 0 0 0-2.224 3.83c-.09.33-.687 1.334-.698 1.56-.015.298-.098.48-.384.559-.725.18-1.378-.29-2.114-.198a18.979 18.979 0 0 0-5.088 1.218c-.737.31-1.455.665-2.182.999a28.435 28.435 0 0 1 1.951-5.2 37.465 37.465 0 0 1 2.505-5.12 27.089 27.089 0 0 1 3.633-4.877 38.033 38.033 0 0 1 4.778-4.453 23.659 23.659 0 0 1 4.226-2.478 33.075 33.075 0 0 1 5.642-2.13 25.892 25.892 0 0 1 5.106-.668 18.725 18.725 0 0 1 5.322.61 31.333 31.333 0 0 1 4.887 1.549 21.952 21.952 0 0 1 3.91 2.248c-.047.36-.338.518-.591.7-.19.136-.401.242-.597.37-.253.165-.244.29.053.393a2.79 2.79 0 0 1 1.638 1.531c.06.128.075.347.252.331.162-.014.178-.227.224-.363a2.82 2.82 0 0 1 .616-.966.517.517 0 0 1 .468-.238 17.991 17.991 0 0 1 1.507 1.834 9.696 9.696 0 0 0 1.938 1.86 6.437 6.437 0 0 1 .952 1.577 5.963 5.963 0 0 0 1.064 1.355c.174.266-.036.442-.164.62a4.327 4.327 0 0 1-1.305 1.074c-.11.068-.272.122-.256.276.018.162.197.152.316.2a2.984 2.984 0 0 1 1.56 1.548c.056.113.07.298.23.289.155-.01.163-.194.207-.312a2.333 2.333 0 0 1 .54-.892c.094-.09.177-.21.339-.143Z'
            fill='#7bc078'
          />
          <path
            d='M102.908 59.792c.394.422.805.829 1.174 1.27.142.171.439 1.023.536 1.145a2.911 2.911 0 0 1 .236 1.22c-.036.366.213.648.175 1.007-.024.237.222.206.38.158.71-.217 1.417-.445 2.125-.668a7.804 7.804 0 0 1 2.741.042 4.788 4.788 0 0 1 3.091 2.636 8.073 8.073 0 0 1 .802 1.762 26.878 26.878 0 0 0 1.24 3.35 7.648 7.648 0 0 0 2.486 3.342c.232.178.51.396.459.706-.05.303-.404.255-.637.292a31.89 31.89 0 0 1-3.748.047c.129-.352.485-.217.723-.338.121-.062.353-.031.324-.22-.02-.128-.23-.103-.359-.104-1.105-.006-2.21-.058-3.314-.076-2.38-.038-4.754-.291-7.138-.204-2.592.096-5.188-.006-7.779.162a12.977 12.977 0 0 0-1.655-.001c-.647.123-.66.123-.437.688l-12.193.107c-.279-.017-.2-.228-.176-.37a10.724 10.724 0 0 1 .66-2.78 8.59 8.59 0 0 1 2.095-2.79 13.524 13.524 0 0 1 2.144-1.576 12.888 12.888 0 0 1 6.263-1.79 2.002 2.002 0 0 0 .934-.302 11.387 11.387 0 0 0 2.867-2.911 15.69 15.69 0 0 1 2.711-2.748 11.4 11.4 0 0 1 2.888-1.135.44.44 0 0 1 .382.08Z'
            fill='#bae2fe'
          />
          <path
            d='M51.716 62.499a15.881 15.881 0 0 0 .988-2.278 11.047 11.047 0 0 1 1.158-2.324c.99-1.387 2.015-2.75 3.008-4.134.13-.18 1.932-1.924 2.527-2.537.57-.587 1.322-.647 1.899-1.106a10.273 10.273 0 0 1 2.088-1.451 25.352 25.352 0 0 1 6.334-2.105 36.437 36.437 0 0 1 3.672-.359 17.337 17.337 0 0 1 2.498.239 22.424 22.424 0 0 1 4.224 1.005 12.188 12.188 0 0 1 3.006 1.777c1.319.85 2.236 2.136 3.456 3.069a12.52 12.52 0 0 1 2.52 3.197 29.751 29.751 0 0 1 2.609 4.92 8.702 8.702 0 0 0-3.016 2.825 4.42 4.42 0 0 1-.832-1.562 10.054 10.054 0 0 0-1.165-2.333 9.965 9.965 0 0 0-1.512-2.182 35.572 35.572 0 0 0-3.014-3.036c-.25-.18-.481-.442-.853-.254-.154.078-.253-.043-.325-.161a1.161 1.161 0 0 0-.772-.525 16.76 16.76 0 0 0-2.668-.717c-.033-.002-.078 0-.097-.02-.375-.413-.85-.182-1.282-.192a16.81 16.81 0 0 0-6.358.754 12.462 12.462 0 0 0-5.404 3.528c-.82.974-1.648 1.932-2.398 2.963a11.558 11.558 0 0 0-1.342 2.627c-.584 1.482-1.212 2.946-1.695 4.466-.168.527-.305 1.064-.491 1.585-.078.216-.095.466-.32.607-.343-.365-.41-.91-.803-1.242-.325-.504-.644-1.013-.98-1.51-.064-.096-.154-.168-.139-.297.178-.004.283-.093.145-.242a9.546 9.546 0 0 0-2.126-1.735c-.383-.226-.62-.592-1.045-.795a7.507 7.507 0 0 0-1.495-.465Z'
            fill='#7694cb'
          />
          <path
            d='M58.16 68.785c.353-1.128.653-2.275 1.073-3.377a48.158 48.158 0 0 1 1.936-4.71 15.66 15.66 0 0 1 2.972-4.035c.532-.528 1.048-1.072 1.58-1.602a12.05 12.05 0 0 1 3.156-1.805 12.512 12.512 0 0 1 4.965-1.13c.83-.073 1.695.119 2.501-.036a2.397 2.397 0 0 1 1.165.198 21.69 21.69 0 0 1 3.352 1.04c.143.056.642.239.733.29a9.494 9.494 0 0 1 2.657 2.368 16.093 16.093 0 0 1 1.672 1.874 16.417 16.417 0 0 1 2.141 4.108 6.73 6.73 0 0 0 .624 1.269 8.736 8.736 0 0 1-.861 1.266c-.401.418-.971.143-1.432.085a7.253 7.253 0 0 0-1.376-.007c-.897.056-1.077-.077-1.277-.965a10.122 10.122 0 0 0-2.08-4.009 7.704 7.704 0 0 0-2.904-2.43 6.22 6.22 0 0 0-3.638-.41c-.438.076-.855.222-1.28.291a5.632 5.632 0 0 0-3.282 2.011 23.432 23.432 0 0 0-3.626 5.596 17.318 17.318 0 0 0-.85 2.45 26.62 26.62 0 0 0-1.062 3.904c-.032.22-.433 2.397-.513 3.207a18.81 18.81 0 0 0-.308 2.292c-.046.261-.254.168-.4.167a7.772 7.772 0 0 0-3.86.745.385.385 0 0 1-.472-.007c-.193-.186-.103-.4-.01-.604a21.098 21.098 0 0 0-.207-4.353c-.128-1.323-.948-2.393-1.09-3.681Z'
            fill='#d58de3'
          />
          <path
            d='M102.908 59.792c-.424-.04-.765.221-1.152.32a7.108 7.108 0 0 0-3.652 2.356c-.778.884-1.452 1.857-2.303 2.682-.34.328-.594.721-.984 1.035a4.263 4.263 0 0 1-2.54.84 11.974 11.974 0 0 0-5.78 1.971 9.59 9.59 0 0 0-3.723 4.02 7.13 7.13 0 0 0-.634 3.099c-1.171-.017-2.347.024-3.51-.076a3.778 3.778 0 0 1-1.755-.252c-.122-.073-.341-.035-.357-.226-.015-.189.143-.28.305-.353a2.662 2.662 0 0 0 1.338-1.217c.303-.56.367-1.177.686-1.722a27.424 27.424 0 0 1 1.729-3.262c.425-.55.768-1.19 1.26-1.716a6.316 6.316 0 0 1 5.128-1.303 4.302 4.302 0 0 0 1.938.119c.462-.039.666-.248.787-.82a5.959 5.959 0 0 1 1.13-1.92 9.869 9.869 0 0 1 5.476-3.786c.793-.24 1.63-.333 2.445-.508.13-.028.335-.015.353-.2.005-.045-.211-.112-.326-.17a7.68 7.68 0 0 1 4.01.917ZM59.455 76.819c-.039.578.074.665.649.368a6.958 6.958 0 0 1 3.919-.617.513.513 0 0 0 .175-.052 10.678 10.678 0 0 1 2.994 1.08 9.92 9.92 0 0 1 3.017 2.384c.257.359.668.619.85 1.056a14.783 14.783 0 0 1-6.506 1.726 9.399 9.399 0 0 1-4.104-.94c-1.408-.636-1.668-1.908-1.505-3.506a2.233 2.233 0 0 1 .511-1.5Z'
            fill='#d5ecfe'
          />
          <path
            d='M37.001 97.047a2.005 2.005 0 0 1 .956-.543 21.865 21.865 0 0 1 3.105-.131c1.867-.079 3.747.075 5.608-.054 1.427-.099 2.842.079 4.269-.04 1.325-.11 2.67.034 4.006.04a27.762 27.762 0 0 1 2.91-.022c1.17.13 2.324-.135 3.493.03a18.605 18.605 0 0 0 2.107-.062c1.797.042 3.594.113 5.39.196a3.02 3.02 0 0 1 .84.24c.077.027.124.138.186.211-.087.071-.164.184-.261.206-.424.096-.854.165-1.281.244l-5.762.097c-1.683.03-3.37.134-5.049.068-1.647-.065-3.29.024-4.935-.024-2.36-.069-4.72-.004-7.081-.098-.78-.032-1.58.047-2.371.01-1.488-.068-2.98.009-4.467-.141-.559-.057-1.142.107-1.663-.227ZM94.333 76.008c-.111-.206-.575-.13-.458-.47.095-.278.386-.34.706-.342 1.738-.014 3.476-.066 5.214-.094 2.166-.036 4.333-.107 6.498-.077 1.846.026 3.692.26 5.536.236 1.068-.014 2.131.065 3.196.043.19-.004.415.037.458.212.057.228-.225.216-.351.262-.377.137-.775.22-1.164.323-2.086.134-4.172.014-6.258.004-1.688-.007-3.376-.092-5.064-.077-2.064.018-4.127.123-6.192.149-.706.009-1.414-.11-2.12-.17Z'
            fill='#2b3c59'
          />
          <path
            d='M96.919 44.564c-.566.408-.612 1.086-.863 1.658-.059.135.053.367-.216.374-.239.006-.342-.147-.428-.352-.146-.352-.31-.698-.491-1.033a3.458 3.458 0 0 0-2.164-1.724c-.229-.067-.607-.05-.605-.34 0-.263.313-.407.566-.552a5.186 5.186 0 0 0 2.006-1.532 2.763 2.763 0 0 0 .597-1.134c.043-.179.103-.357.338-.373.235-.015.322.144.38.327a3.834 3.834 0 0 0 1.865 2.366c.26.138.548.178.81.345.39.25.194.319-.044.446a5.866 5.866 0 0 0-1.751 1.524Z'
            fill='#fefcfc'
          />
          <path
            d='M31.961 85.677a2.967 2.967 0 0 0 1.637-1.917.327.327 0 0 1 .319-.277c.214.005.3.172.366.356a2.113 2.113 0 0 0 .995 1.434c.214.372.652.368.967.574.262.172.285.273.002.456a3.6 3.6 0 0 0-1.988 2.553c-.013.105-.065.204-.184.203-.22-.002-.313-.168-.388-.341a3.434 3.434 0 0 0-1.323-1.773c-.228-.132-.485-.212-.725-.324-.17-.079-.463-.045-.455-.308.007-.228.22-.351.433-.436a2.524 2.524 0 0 0 .344-.2ZM46.172 95.219c-.2-.045-.248-.243-.313-.406a3.12 3.12 0 0 0-2.276-2.106c-.338-.076-.356-.29-.078-.477.318-.214.673-.373.99-.59a2.9 2.9 0 0 0 1.285-1.61c.048-.173.098-.384.323-.4.237-.015.3.208.351.37a2.911 2.911 0 0 0 1.953 1.995.391.391 0 0 1 .23.227c.032.136-.127.17-.223.233a3.74 3.74 0 0 0-1.964 2.524c-.03.193-.126.254-.278.24Z'
            fill='#fcfdfc'
          />
          <path d='m15.03 97.259-.04-.025.044.021Z' fill='#fefefe' />
          <path
            d='m49.391 41.77-.039-.022.038.022ZM47.275 43.582l-.04-.022.04.023Z'
            fill='#f3e576'
          />
          <path
            d='M46.04 75.558a2.441 2.441 0 0 1-.267.19 9.027 9.027 0 0 0-2.66 2.376 4.501 4.501 0 0 0-.572 1.581c-.051.16.062.388-.222.428a.46.46 0 0 1-.549-.323 8.575 8.575 0 0 0-1-1.89 4.063 4.063 0 0 0-2.427-1.604c-.267-.067-.62-.14-.594-.428.023-.252.298-.448.58-.598 1.448-.77 2.878-1.571 3.276-3.374.033-.147.102-.378.345-.369a.5.5 0 0 1 .478.293 7.236 7.236 0 0 0 1.329 2.252 11.612 11.612 0 0 0 2.05 1.203c.1.063.213.092.233.263Z'
            fill='#fdfefd'
          />
          <path d='m5.66 92.223.04.021-.038-.023Z' fill='#fefefe' />
          <path
            d='M93.283 55.043a2.315 2.315 0 0 0-.862 1.357c-.04.117.007.291-.202.28-.167-.007-.215-.144-.261-.268a2.69 2.69 0 0 0-1.937-1.85c-.083-.02-.216-.117-.211-.168.015-.178.165-.265.317-.346a3.494 3.494 0 0 0 1.632-1.427 1.052 1.052 0 0 0 .057-.238c.136-.124.084-.445.368-.4.21.033.24.265.299.429a2.244 2.244 0 0 0 1.448 1.471c.134.045.312.143.347.255.06.188-.184.186-.288.278-.237.207-.472.418-.707.627ZM86.355 45.757a2.716 2.716 0 0 0-1.088 1.573c-.034.117.013.293-.196.288-.169-.004-.22-.14-.265-.265a2.685 2.685 0 0 0-1.941-1.855c-.083-.02-.148-.113-.221-.172a1.405 1.405 0 0 1 .29-.32A3.947 3.947 0 0 0 84.293 44c.143-.242.298-.478.424-.728.073-.144.07-.36.285-.357.205.004.244.213.296.363a2.306 2.306 0 0 0 1.505 1.555.527.527 0 0 1 .324.272c.04.147-.175.16-.274.24-.169.134-.332.275-.498.413Z'
            fill='#fcfdfc'
          />
          <path
            d='M79.04 72.64c-.029.013-.055.037-.08.035-.023 0-.046-.027-.07-.042.026-.012.05-.036.075-.035.024 0 .048.025.074.041Z'
            fill='#fefefe'
          />
        </g>
      </g>
    </svg>
  )
}