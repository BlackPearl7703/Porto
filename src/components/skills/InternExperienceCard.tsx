import type { InternInterface } from "../../models/intern-interface";
import "./InternExperience.css";
export const InternExperienceCard = ({
  internInfo,
}: {
  internInfo: InternInterface;
}) => {
  return (
    //   <div
    //     className={` max-w-4/12 px-3 py-2 min-h-6/12
    //     text-white
    //  bg-[url('${internInfo.bgImage}')] bg-cover bg-center
    //   border border-white/20 rounded-xl
    //    grayscale-75

    //   hover:grayscale-0 hover:shadow-2xl hover:transition-shadow hover:duration-300 hover:ease-in-out
    // `}
    //   >
    //     <div className="flex justify-between items-center ">
    //       <p className="text-2xl font-bold">{internInfo.company}</p>
    //       <img
    //         src={internInfo.logo}
    //         alt={`${internInfo.company} Logo`}
    //         className="h-20"
    //       />
    //     </div>
    //     <div className="flex justify-between ">
    //       <span className="text-lg font-bold">{internInfo.position}</span>
    //       <span className="italic ">{internInfo.dates}</span>
    //     </div>
    //     <p className="mt-2">{internInfo.description}</p>
    //   </div>

    <div className="max-w-sm  border border-gray-200 rounded-lg shadow-sm bg-black">
      <a href="#">
        <img
          className="rounded-t-lg bg-cover bg-center text-white  w-full"
          src={internInfo.bgImage}
          alt="internship background image"
        />
      </a>
      <div className="p-5">
       
          <p className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {internInfo.company}
          </p>

        <p className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          {internInfo.position}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {internInfo.description}
        </p>
        <a
          href={internInfo.githubUrl}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
