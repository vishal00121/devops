function Webiner() {
    return (
      <div className="w-full xl:w-3/4 h-[428px] bg-white sm:p-6 p-3 border rounded-xl shadow-md mb-10 xl:mb-0">
        {/* Date and Navigation */}
        <div className="bg-[#002B5B]/5 p-2 flex items-center justify-between gap-2 mb-6">
          {/* Date Button */}
          <div className="flex items-center gap-2">
            <button
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors 
              focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none 
              disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[280px] 
              justify-start text-left font-medium"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              February 16th, 2025
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down text-headerText/60"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
  
          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-left text-headerText"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right text-headerText"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
  
        {/* Schedule Table */}
        <div className="px-6">
          <div className="border rounded-lg overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 justify-start items-center gap-6 py-3 px-4 bg-gray-50 border-b">
              <div className="text-base font-semibold text-gray-600">Time</div>
              <div className="text-base font-semibold text-gray-600">Event</div>
              <div className="text-base font-semibold text-gray-600">Status</div>
            </div>
  
            {/* Scrollable Content */}
            <div className="h-[250px] overflow-y-auto">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 h-[100px] justify-start items-center gap-6 py-4 px-4 
                  hover:bg-gray-50 transition-colors border-b last:border-b-0 cursor-pointer"
                >
                  {/* Time Column */}
                  <div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">02:00 PM</span>
                      <span className="text-xs text-gray-500">2/16/2025</span>
                    </div>
                  </div>
  
                  {/* Event Column */}
                  <div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">College Event</span>
                      <span className="text-xs text-gray-500">ID: cm77s371300014d126hbnen88</span>
                    </div>
                  </div>
  
                  {/* Status Column */}
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Scheduled
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Webiner;
  