export default function Home() {
  return (
    <div>
      <div className="w-[450px] pb-4  bg-[#040404] mx-auto mt-20 rounded-xl">
        <img
          src="/images/memberships/gold.gif"
          alt="Silver Plan"
          className="w-[270px] h-[200] mx-auto"
        />
        <div className="px-6">
          <p className="text-white font-bold mb-2">Silver Membership</p>
          <p className="text-white">
            Initial purchase includes a lifetime membership for the Stackshift
            Boat club.
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="text-white flex-none text-sm font-semibold leading-6">
              What’s included
            </h4>
            <div className="text-white h-px flex-auto bg-gray-100"></div>
          </div>
          <ul
            role="list"
            className=" mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            <li className="text-white flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-indigo-600"
                viewBox="0 0 20 20"
                fill="#fff"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Private forum access
            </li>

            <li className="text-white flex gap-x-3">
              <svg
                className="text-white h-6 w-5 flex-none text-indigo-600"
                viewBox="0 0 20 20"
                fill="#fff"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Member resources
            </li>

            <li className="text-white flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-indigo-600"
                viewBox="0 0 20 20"
                fill="#fff"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Annual conference
            </li>

            <li className="text-white flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none text-indigo-600"
                viewBox="0 0 20 20"
                fill="#fff"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Official member t-shirt
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}