

function Schedule() {
  return (
    <div className="h-[150px] bg-white rounded-xl shadow-md px-5 py-[30px] flex items-center gap-10 border w-fit">
      <a href="/webinars/schedule-webinar">
        <button className="flex flex-col items-center w-fit h-fit" type="button">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="60" height="60" rx="9" fill="#40E0D0"></rect>
            <path d="M18.3171 43.586C17.5593 43.586 16.918 43.3235 ..." fill="#002B5B"></path>
          </svg>
          <p className="text-sm font-semibold text-center mt-2">Schedule a Webinar</p>
        </button>
      </a>

      <a href="/joining-webinar">
        <button className="flex flex-col items-center" type="button">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="60" height="60" rx="9" fill="#40E0D0"></rect>
            <mask id="mask0_439_4978" maskUnits="userSpaceOnUse" x="12" y="12" width="36" height="36" style={{ maskType: 'alpha' }}>
              <rect x="12" y="12" width="36" height="36" fill="#D9D9D9"></rect>
            </mask>
            <g mask="url(#mask0_439_4978)">
              <path d="M28.875 31.125H21.375C21.0562 31.125 20.7891 31.0171 ..." fill="#002B5B"></path>
            </g>
          </svg>
          <p className="text-sm font-semibold text-center mt-2">Join a Webinar</p>
        </button>
      </a>
    </div>
  );
}

export default Schedule;
