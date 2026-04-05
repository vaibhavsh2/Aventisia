const icons = {
  bot: (
    <>
      <rect x="5" y="7" width="10" height="8" rx="2" />
      <path d="M8 5h4M10 3v2M8 11h.01M12 11h.01" />
    </>
  ),
  cpu: (
    <>
      <rect x="5" y="5" width="10" height="10" rx="2" />
      <path d="M9 1v4M15 1v4M9 19v4M15 19v-4M1 9h4M1 15h4M19 9h4M19 15h-4" />
    </>
  ),
  library: (
    <>
      <path d="M5 4h5v16H5zM10 4h4v16h-4zM14 4h5v16h-5z" />
    </>
  ),
  folder: <path d="M3 7h5l2 2h11v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />,
  monitor: (
    <>
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M9 19h6M12 16v3" />
    </>
  ),
  stack: <path d="M4 8 12 4l8 4-8 4-8-4Zm0 5 8 4 8-4M4 18l8 4 8-4" />,
  bolt: <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" />,
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 12h18" />
    </>
  ),
  play: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="m10 9 5 3-5 3V9Z" />
    </>
  ),
  shield: <path d="M12 3 6 5v5c0 5 2.5 8 6 10 3.5-2 6-5 6-10V5l-6-2Z" />,
  book: (
    <>
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v15H6.5A2.5 2.5 0 0 0 4 21.5v-15Z" />
      <path d="M8 7h8M8 11h8M8 15h5" />
    </>
  ),
  bars: <path d="M6 4v16M12 4v16M18 4v16" />,
  grid: (
    <>
      <rect x="5" y="5" width="5" height="5" rx="1" />
      <rect x="14" y="5" width="5" height="5" rx="1" />
      <rect x="5" y="14" width="5" height="5" rx="1" />
      <rect x="14" y="14" width="5" height="5" rx="1" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4a13 13 0 0 1 0 16M12 4a13 13 0 0 0 0 16" />
    </>
  ),
  gear: (
    <>
      <path d="m12 3 1.3 2.6 2.9.4-2.1 2 0.5 2.9L12 9.8 9.4 10.9l.5-2.9-2.1-2 2.9-.4L12 3Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  bell: (
    <>
      <path d="M8 17h8l-1-2v-4a3 3 0 1 0-6 0v4l-1 2Z" />
      <path d="M10.5 18a1.5 1.5 0 0 0 3 0" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="5" />
      <path d="m16 16 4 4" />
    </>
  ),
  dots: (
    <>
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="19" r="1" />
    </>
  ),
  chevronDown: <path d="m7 10 5 5 5-5" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  arrowLeft: <path d="m14 7-5 5 5 5" />,
  arrowRight: <path d="m10 7 5 5-5 5" />,
  arrowLeftEnd: (
    <>
      <path d="m14 7-5 5 5 5" />
      <path d="M6 7v10" />
    </>
  ),
  arrowRightEnd: (
    <>
      <path d="m10 7 5 5-5 5" />
      <path d="M18 7v10" />
    </>
  ),
  file: (
    <>
      <path d="M8 3h6l5 5v13a1 1 0 0 1-1 1H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v5h5" />
    </>
  ),
};

export function Icon({ name, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}
