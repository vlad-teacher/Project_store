import classNames from "classnames";

export const CartIcon = ({ className }) => (
  <svg
    width="48"
    height="48"
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26 0C20.4961 0 16.0565 4.37372 16.0565 9.79592V11.7551H8.19492L8.10169 12.6122L4.12429 46.898L4 48H48L47.8757 46.898L43.8983 12.6122L43.8051 11.7551H35.9435V9.79592C35.9435 4.37372 31.5039 0 26 0ZM26 1.95918C30.4396 1.95918 33.9548 5.42219 33.9548 9.79592V11.7551H18.0452V9.79592C18.0452 5.42219 21.5604 1.95918 26 1.95918ZM9.99717 13.7143H16.0565V15.949C15.4622 16.2895 15.0621 16.9094 15.0621 17.6327C15.0621 18.7156 15.9516 19.5918 17.0508 19.5918C18.1501 19.5918 19.0395 18.7156 19.0395 17.6327C19.0395 16.9094 18.6395 16.2895 18.0452 15.949V13.7143H33.9548V15.949C33.3605 16.2895 32.9605 16.9094 32.9605 17.6327C32.9605 18.7156 33.8499 19.5918 34.9492 19.5918C36.0484 19.5918 36.9379 18.7156 36.9379 17.6327C36.9379 16.9094 36.5378 16.2895 35.9435 15.949V13.7143H42.0028L45.7627 46.0408H6.23729L9.99717 13.7143Z"
      fill="#424436"
    />
  </svg>
);

export const HeartIcon = ({ className }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_10472_5577)">
      <path
        d="M39.4 32.2222C42.678 29.14 46 25.4456 46 20.6111C46 17.5317 44.7252 14.5783 42.456 12.4008C40.1868 10.2233 37.1091 9 33.9 9C30.028 9 27.3 10.0556 24 13.2222C20.7 10.0556 17.972 9 14.1 9C10.8909 9 7.8132 10.2233 5.54401 12.4008C3.27482 14.5783 2 17.5317 2 20.6111C2 25.4667 5.3 29.1611 8.6 32.2222L24 47L39.4 32.2222Z"
        stroke="#424436"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_10472_5577">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const LogoIcon = ({ className }) => (
  <svg
    width="70"
    height="73"
    className={className}
    viewBox="0 0 70 73"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="35" cy="35" r="35" fill="#92A234" />
    <g clip-path="url(#clip0_10472_5587)">
      <mask
        id="mask0_10472_5587"
        // style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="19"
        y="55"
        width="33"
        height="26"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M46.9315 60.2366C45.7201 57.6671 43.1064 55.8889 40.0774 55.8889C38.8873 55.8889 37.7613 56.1634 36.7593 56.6525C36.1944 56.176 35.4647 55.8889 34.6678 55.8889C33.2497 55.8889 32.0439 56.7984 31.6021 58.0659C30.4976 58.1468 29.4954 58.5962 28.718 59.2917C28.375 59.1895 28.0116 59.1346 27.6354 59.1346C26.1051 59.1346 24.7868 60.0424 24.1896 61.3488C21.5525 61.71 19.5209 63.9718 19.5209 66.7081C19.5209 69.6958 21.9428 72.1177 24.9305 72.1177C25.3177 72.1177 25.6954 72.0771 26.0595 71.9997C26.5435 76.925 30.6972 80.7731 35.7497 80.7731C40.4014 80.7731 44.2913 77.5113 45.2569 73.1501C45.5093 73.1828 45.7668 73.1997 46.0281 73.1997C49.3145 73.1997 51.9787 70.5355 51.9787 67.2491C51.9787 65.3421 51.0817 63.6446 49.6866 62.5556C49.3267 61.3163 48.2479 60.3828 46.9315 60.2366Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_10472_5587)">
        <circle cx="35" cy="35" r="35" fill="#FFFFF1" />
      </g>
    </g>
    <path
      d="M39.4892 36.2492C38.6984 37.0039 37.8645 38.0255 37.1066 39.3956C36.3577 36.6995 35.4138 34.723 34.4596 33.276C38.8379 18.6893 17.5 18.1667 17.5 18.1667C17.5 18.1667 18.1229 36.3975 29.2667 35.9789C29.244 34.7581 29.0545 33.5238 28.789 32.3664C28.6154 31.6118 28.4089 30.8922 28.1956 30.2281C27.4831 28.0254 26.6787 26.4618 26.6787 26.4618C27.491 27.5502 28.2104 28.5888 28.8457 29.5651C31.0321 32.9196 32.2256 35.5286 32.7804 36.9066C34.1499 39.8402 35.3797 44.6655 35.3797 52.5511C35.3797 53.4437 36.107 54.1667 36.9988 54.1667C37.8928 54.1667 38.6189 53.4437 38.6189 52.5511C38.6189 49.9953 38.4953 47.7213 38.2718 45.6927C38.788 43.2173 39.5674 41.4603 40.3741 40.2158C40.904 39.2078 41.8808 37.4813 43.1969 35.7186C44.369 34.1506 45.8144 32.5531 47.4493 31.4127C47.4493 31.4127 44.0967 35.1134 43.88 38.736C53.1403 39.2179 53.5 24.6901 53.5 24.6901C53.5 24.6901 36.5529 25.2671 39.4892 36.2492Z"
      fill="#FFFFF1"
    />
    <defs>
      <clipPath id="clip0_10472_5587">
        <rect
          width="35.8333"
          height="16.6667"
          fill="white"
          transform="translate(17.5 55.8333)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const MoonIcon = ({ className }) => (
  <svg
    width="20"
    height="20"
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.7592 11.5514C18.5575 11.3932 18.28 11.3733 18.0577 11.501C17.0038 12.1068 15.8898 12.4141 14.7467 12.4141C11.0738 12.4141 8.08577 9.42589 8.08577 5.75293C8.08577 4.6048 8.39341 3.49231 9.00022 2.44647C9.12909 2.22444 9.10997 1.94632 8.95192 1.74391C8.79395 1.5415 8.52874 1.45539 8.28206 1.52666C6.50775 2.03813 4.91078 3.12329 3.78537 4.58216C2.61737 6.09637 2 7.90984 2 9.8266C2 14.6089 5.89055 18.4997 10.6727 18.4997C12.5895 18.4997 14.4034 17.8825 15.9183 16.7149C17.3782 15.5897 18.4639 13.9937 18.9754 12.2206C19.0465 11.9743 18.9609 11.7096 18.7592 11.5514ZM10.6727 17.2419C6.58405 17.2419 3.25772 13.9154 3.25772 9.8266C3.25772 7.06817 4.83616 4.55793 7.23513 3.29635C6.96447 4.09165 6.82805 4.91328 6.82805 5.75293C6.82805 10.1194 10.3804 13.6718 14.7467 13.6718C15.5851 13.6718 16.4082 13.5348 17.2073 13.2632C15.9459 15.6627 13.4335 17.2419 10.6727 17.2419Z"
      fill="white"
    />
  </svg>
);

export const SunIcon = ({ className }) => (
  <svg
    width="20"
    className={className}
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_5447_25609)">
      <path
        d="M9.99882 16.7622C9.64236 16.7622 9.35352 17.051 9.35352 17.4075V19.3557C9.35352 19.7122 9.64236 20.0011 9.99882 20.0011C10.3553 20.0011 10.6441 19.7122 10.6441 19.3557V17.4075C10.6441 17.051 10.3553 16.7622 9.99882 16.7622Z"
        fill="#8B8B8B"
      />
      <path
        d="M9.99882 3.23981C10.3553 3.23981 10.6441 2.95097 10.6441 2.5945V0.646529C10.6441 0.290061 10.3553 0.0012207 9.99882 0.0012207C9.64236 0.0012207 9.35352 0.290061 9.35352 0.646529V2.59459C9.35352 2.95097 9.64236 3.23981 9.99882 3.23981Z"
        fill="#8B8B8B"
      />
      <path
        d="M4.30692 14.7817L2.92889 16.1591C2.67679 16.4111 2.6767 16.8196 2.92863 17.0716C3.05468 17.1978 3.21988 17.2607 3.38508 17.2607C3.55019 17.2607 3.7153 17.1978 3.84127 17.0719L5.2193 15.6945C5.4714 15.4425 5.47149 15.034 5.21956 14.782C4.96746 14.5298 4.55885 14.5297 4.30692 14.7817Z"
        fill="#8B8B8B"
      />
      <path
        d="M15.2362 5.40844C15.4013 5.40844 15.5665 5.34555 15.6924 5.21958L17.0704 3.84223C17.3225 3.59022 17.3226 3.1817 17.0706 2.92968C16.8185 2.67741 16.4099 2.6775 16.158 2.92942L14.78 4.30677C14.5279 4.55879 14.5278 4.96731 14.7797 5.21941C14.9058 5.34546 15.071 5.40844 15.2362 5.40844Z"
        fill="#8B8B8B"
      />
      <path
        d="M3.23902 10.0003C3.23902 9.64382 2.95018 9.35498 2.59371 9.35498H0.645308C0.28884 9.35498 0 9.64382 0 10.0003C0 10.3568 0.28884 10.6456 0.645308 10.6456H2.59371C2.95009 10.6456 3.23902 10.3567 3.23902 10.0003Z"
        fill="#8B8B8B"
      />
      <path
        d="M19.3546 9.35498H17.4056C17.0491 9.35498 16.7603 9.64382 16.7603 10.0003C16.7603 10.3568 17.0491 10.6456 17.4056 10.6456H19.3546C19.711 10.6456 19.9999 10.3568 19.9999 10.0003C19.9999 9.64382 19.711 9.35498 19.3546 9.35498Z"
        fill="#8B8B8B"
      />
      <path
        d="M4.30649 5.21934C4.43254 5.34539 4.59766 5.40838 4.76286 5.40838C4.92797 5.40838 5.09317 5.34539 5.21913 5.21943C5.47123 4.96742 5.47123 4.55881 5.21922 4.30688L3.84187 2.92953C3.58977 2.67743 3.18116 2.67752 2.92932 2.92945C2.67722 3.18146 2.67722 3.59007 2.92923 3.842L4.30649 5.21934Z"
        fill="#8B8B8B"
      />
      <path
        d="M15.6934 14.7818C15.4413 14.5298 15.0327 14.5297 14.7809 14.7817C14.5288 15.0338 14.5288 15.4424 14.7808 15.6944L16.1581 17.0717C16.2841 17.1978 16.4492 17.2608 16.6144 17.2608C16.7795 17.2608 16.9447 17.1978 17.0707 17.0718C17.3228 16.8198 17.3228 16.4112 17.0708 16.1592L15.6934 14.7818Z"
        fill="#8B8B8B"
      />
      <path
        d="M9.9997 4.19067C6.79621 4.19067 4.18994 6.79694 4.18994 10.0004C4.18994 13.2039 6.79621 15.8102 9.9997 15.8102C13.2032 15.8102 15.8094 13.2039 15.8094 10.0004C15.8094 6.79694 13.2032 4.19067 9.9997 4.19067ZM9.9997 14.5197C7.50777 14.5197 5.48056 12.4924 5.48056 10.0005C5.48056 7.50859 7.50777 5.48129 9.9997 5.48129C12.4915 5.48129 14.5187 7.50859 14.5187 10.0004C14.5187 12.4923 12.4915 14.5197 9.9997 14.5197Z"
        fill="#8B8B8B"
      />
    </g>
    <defs>
      <clipPath id="clip0_5447_25609">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const Instagram = ({ className }) => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.5 3H12.5C7.27546 3 3 7.27361 3 12.5V31.5C3 36.7245 7.27546 41 12.5 41H31.5C36.7245 41 41 36.7245 41 31.5V12.5C41 7.27361 36.7245 3 31.5 3ZM22 29.9164C17.6271 29.9164 14.0832 26.3709 14.0832 22C14.0832 17.6271 17.6271 14.0832 22 14.0832C26.3709 14.0832 29.9168 17.6271 29.9168 22C29.9168 26.3709 26.3709 29.9164 22 29.9164ZM32.2918 14.0832C30.9789 14.0832 29.9168 13.0196 29.9168 11.7082C29.9168 10.3967 30.9789 9.33318 32.2918 9.33318C33.6047 9.33318 34.6668 10.3967 34.6668 11.7082C34.6668 13.0196 33.6047 14.0832 32.2918 14.0832Z"
      fill="#424436"
    />
  </svg>
);

export const Whatsapp = ({ className }) => (
  <svg
    width="45"
    height="44"
    viewBox="0 0 45 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.2793 3C11.8027 3 3.2793 11.5228 3.2793 22C3.2793 25.6862 4.3363 29.24 6.34268 32.3263L3.38197 39.2348C3.17786 39.7098 3.28424 40.2628 3.65039 40.6289C3.89284 40.8714 4.21693 41 4.54596 41C4.71419 41 4.88428 40.9666 5.04508 40.8973L11.9536 37.936C15.0393 39.9436 18.5931 41 22.2793 41C32.7565 41 41.2793 32.4772 41.2793 22C41.2793 11.5228 32.7565 3 22.2793 3ZM32.0316 28.8009C32.0316 28.8009 30.452 30.8271 29.3103 31.3008C26.4083 32.502 22.3115 31.3008 17.6443 26.635C12.9785 21.9678 11.7767 17.871 12.9785 14.969C13.4522 13.826 15.4784 12.2477 15.4784 12.2477C16.0276 11.8197 16.8811 11.8729 17.3734 12.3652L19.6656 14.6573C20.1579 15.1496 20.1579 15.9561 19.6656 16.4484L18.227 17.8858C18.227 17.8858 17.6443 19.6349 21.1437 23.1355C24.6432 26.635 26.3935 26.0523 26.3935 26.0523L27.8309 24.6137C28.3232 24.1214 29.1297 24.1214 29.622 24.6137L31.9141 26.9059C32.4064 27.3982 32.4596 28.2505 32.0316 28.8009Z"
      fill="#424436"
    />
  </svg>
);

export const Four = ({ className }) => (
  <svg
    width="180"
    height="246"
    viewBox="0 0 180 246"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M98.8445 139.709V96.794H151.608V139.709H179.398V187.196H151.608V245.94H98.8445V187.196H0V145.337L87.5882 0.0600586H147.387L64.0203 139.709H98.8445Z"
      fill="#92A234"
    />
  </svg>
);
