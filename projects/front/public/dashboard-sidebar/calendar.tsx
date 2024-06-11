interface CalendarType {
  fill?: string;
}

export const CalendarIcon = ({ fill = '#000000' }: CalendarType) => {
  return (
    <svg
      width="24"
      height="27"
      viewBox="0 0 24 27"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.6C12.2373 21.6 12.4693 21.5296 12.6667 21.3978C12.864 21.2659 13.0178 21.0785 13.1087 20.8592C13.1995 20.6399 13.2232 20.3987 13.1769 20.1659C13.1306 19.9331 13.0164 19.7193 12.8485 19.5515C12.6807 19.3836 12.4669 19.2694 12.2341 19.2231C12.0013 19.1768 11.7601 19.2005 11.5408 19.2913C11.3215 19.3822 11.1341 19.536 11.0022 19.7333C10.8704 19.9307 10.8 20.1627 10.8 20.4C10.8 20.7183 10.9264 21.0235 11.1515 21.2485C11.3765 21.4736 11.6817 21.6 12 21.6ZM18 21.6C18.2373 21.6 18.4693 21.5296 18.6667 21.3978C18.864 21.2659 19.0178 21.0785 19.1087 20.8592C19.1995 20.6399 19.2232 20.3987 19.1769 20.1659C19.1306 19.9331 19.0164 19.7193 18.8485 19.5515C18.6807 19.3836 18.4669 19.2694 18.2341 19.2231C18.0013 19.1768 17.7601 19.2005 17.5408 19.2913C17.3215 19.3822 17.1341 19.536 17.0022 19.7333C16.8704 19.9307 16.8 20.1627 16.8 20.4C16.8 20.7183 16.9264 21.0235 17.1515 21.2485C17.3765 21.4736 17.6817 21.6 18 21.6ZM18 16.8C18.2373 16.8 18.4693 16.7296 18.6667 16.5978C18.864 16.4659 19.0178 16.2785 19.1087 16.0592C19.1995 15.8399 19.2232 15.5987 19.1769 15.3659C19.1306 15.1331 19.0164 14.9193 18.8485 14.7515C18.6807 14.5836 18.4669 14.4694 18.2341 14.4231C18.0013 14.3768 17.7601 14.4005 17.5408 14.4913C17.3215 14.5822 17.1341 14.736 17.0022 14.9333C16.8704 15.1307 16.8 15.3627 16.8 15.6C16.8 15.9183 16.9264 16.2235 17.1515 16.4485C17.3765 16.6736 17.6817 16.8 18 16.8ZM12 16.8C12.2373 16.8 12.4693 16.7296 12.6667 16.5978C12.864 16.4659 13.0178 16.2785 13.1087 16.0592C13.1995 15.8399 13.2232 15.5987 13.1769 15.3659C13.1306 15.1331 13.0164 14.9193 12.8485 14.7515C12.6807 14.5836 12.4669 14.4694 12.2341 14.4231C12.0013 14.3768 11.7601 14.4005 11.5408 14.4913C11.3215 14.5822 11.1341 14.736 11.0022 14.9333C10.8704 15.1307 10.8 15.3627 10.8 15.6C10.8 15.9183 10.9264 16.2235 11.1515 16.4485C11.3765 16.6736 11.6817 16.8 12 16.8ZM20.4 2.4H19.2V1.2C19.2 0.88174 19.0736 0.576515 18.8485 0.351472C18.6235 0.126428 18.3183 0 18 0C17.6817 0 17.3765 0.126428 17.1515 0.351472C16.9264 0.576515 16.8 0.88174 16.8 1.2V2.4H7.2V1.2C7.2 0.88174 7.07357 0.576515 6.84853 0.351472C6.62348 0.126428 6.31826 0 6 0C5.68174 0 5.37652 0.126428 5.15147 0.351472C4.92643 0.576515 4.8 0.88174 4.8 1.2V2.4H3.6C2.64522 2.4 1.72955 2.77928 1.05442 3.45442C0.379285 4.12955 0 5.04522 0 6V22.8C0 23.7548 0.379285 24.6705 1.05442 25.3456C1.72955 26.0207 2.64522 26.4 3.6 26.4H20.4C21.3548 26.4 22.2705 26.0207 22.9456 25.3456C23.6207 24.6705 24 23.7548 24 22.8V6C24 5.04522 23.6207 4.12955 22.9456 3.45442C22.2705 2.77928 21.3548 2.4 20.4 2.4ZM21.6 22.8C21.6 23.1183 21.4736 23.4235 21.2485 23.6485C21.0235 23.8736 20.7183 24 20.4 24H3.6C3.28174 24 2.97652 23.8736 2.75147 23.6485C2.52643 23.4235 2.4 23.1183 2.4 22.8V12H21.6V22.8ZM21.6 9.6H2.4V6C2.4 5.68174 2.52643 5.37652 2.75147 5.15147C2.97652 4.92643 3.28174 4.8 3.6 4.8H4.8V6C4.8 6.31826 4.92643 6.62348 5.15147 6.84853C5.37652 7.07357 5.68174 7.2 6 7.2C6.31826 7.2 6.62348 7.07357 6.84853 6.84853C7.07357 6.62348 7.2 6.31826 7.2 6V4.8H16.8V6C16.8 6.31826 16.9264 6.62348 17.1515 6.84853C17.3765 7.07357 17.6817 7.2 18 7.2C18.3183 7.2 18.6235 7.07357 18.8485 6.84853C19.0736 6.62348 19.2 6.31826 19.2 6V4.8H20.4C20.7183 4.8 21.0235 4.92643 21.2485 5.15147C21.4736 5.37652 21.6 5.68174 21.6 6V9.6ZM6 16.8C6.23734 16.8 6.46935 16.7296 6.66668 16.5978C6.86402 16.4659 7.01783 16.2785 7.10866 16.0592C7.19948 15.8399 7.22325 15.5987 7.17694 15.3659C7.13064 15.1331 7.01635 14.9193 6.84853 14.7515C6.68071 14.5836 6.46689 14.4694 6.23411 14.4231C6.00133 14.3768 5.76005 14.4005 5.54078 14.4913C5.32151 14.5822 5.13409 14.736 5.00224 14.9333C4.87038 15.1307 4.8 15.3627 4.8 15.6C4.8 15.9183 4.92643 16.2235 5.15147 16.4485C5.37652 16.6736 5.68174 16.8 6 16.8ZM6 21.6C6.23734 21.6 6.46935 21.5296 6.66668 21.3978C6.86402 21.2659 7.01783 21.0785 7.10866 20.8592C7.19948 20.6399 7.22325 20.3987 7.17694 20.1659C7.13064 19.9331 7.01635 19.7193 6.84853 19.5515C6.68071 19.3836 6.46689 19.2694 6.23411 19.2231C6.00133 19.1768 5.76005 19.2005 5.54078 19.2913C5.32151 19.3822 5.13409 19.536 5.00224 19.7333C4.87038 19.9307 4.8 20.1627 4.8 20.4C4.8 20.7183 4.92643 21.0235 5.15147 21.2485C5.37652 21.4736 5.68174 21.6 6 21.6Z"
        fill={fill}
      />
    </svg>
  );
};
