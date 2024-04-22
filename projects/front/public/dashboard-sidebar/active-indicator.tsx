interface IndicatorIconType {
  fill?: string;
}

export const IndicatorIcon = ({ fill = '#00DF16' }: IndicatorIconType) => {
  return (
    <svg
      width="20"
      height="54"
      viewBox="0 0 20 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_820_271"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="-25"
        width="20"
        height="101"
      >
        <rect y="-25" width="19.708" height="101" fill={fill} />
      </mask>
      <g mask="url(#mask0_820_271)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-0.00135422 -13.1946C-0.00135422 -15.3715 -1.76607 -17.1362 -3.94296 -17.1362C-6.11985 -17.1362 -7.88457 -15.3715 -7.88457 -13.1946V8.18933C-7.88457 14.1704 -11.8262 19.8876 -11.8262 25.8687C-11.8262 31.8498 -7.88457 37.567 -7.88457 43.5481V68.6181C-7.88457 70.795 -6.11985 72.5597 -3.94296 72.5597C-1.76607 72.5597 -0.00135422 70.795 -0.00135422 68.6181V54.7434C-0.00135422 44.9038 11.8235 35.7084 11.8235 25.8687C11.8235 25.1882 11.7577 24.522 11.6319 23.8754C9.94631 15.2161 -0.00135422 7.65886 -0.00135422 -1.16293V-13.1946Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};
