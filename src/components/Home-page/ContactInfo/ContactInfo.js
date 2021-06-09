import React from "react";

const ContactInfo = () => {
  return (
    <section className="bg-gray-200 py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-5 md:px-3 lg:px-0">
        <div className="grid sm:grid-cols-1 md:grid-cols-4">
          <div className="flex items-center space-x-4 text-gray-600 py-4">
            <div className="border-r-2 border-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold">Call now</p>
              <p className="font-normal">02 780 402 230</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-gray-600 py-4">
            <div className="border-r-2 border-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold">Contact us</p>
              <p className="font-normal">info@pizzahouse.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-gray-600 py-4">
            <div className="border-r-2 border-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p className="font-normal">123, Sylhet, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-gray-600 py-4">
            <div className="border-r-2 border-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold">Schedules</p>
              <p className="font-normal">Sat-Thu 10am-7pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
