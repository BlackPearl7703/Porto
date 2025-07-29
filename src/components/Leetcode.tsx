import React from "react";

const BadgeCard = ({
  src,
  title,
  date,
}: {
  src: string;
  title: string;
  date: string;
}) => (
  <div className="group flex flex-col items-center transition duration-200 hover:scale-105 hover:bg-gray-100 dark:hover:bg-[#57534e] rounded-lg p-2">
    <img
      alt="badge"
      className="m-auto h-[60px] cursor-pointer transition-transform duration-200 group-hover:scale-110"
      src={src}
    />
    <div className="mt-4 max-w-[96px] truncate text-center cursor-pointer text-sm font-medium text-gray-800 dark:text-gray-200">
      {title}
    </div>
    <div className="mt-0.5 text-center text-xs flex items-center justify-center gap-1 text-gray-600 dark:text-gray-400">
      {date}
    </div>
  </div>
);

const badgeSections = [
  {
    title: "Submission Days",
    badges: [
      {
        src: "https://assets.leetcode.com/static_assets/marketing/lg500.png",
        title: "500 Days Badge",
        date: "2024-12-02",
      },
      {
        src: "https://assets.leetcode.com/static_assets/marketing/lg365.png",
        title: "365 Days Badge",
        date: "2024-12-02",
      },
    ],
  },
  {
    title: "Annual Medals",
    badges: [
      {
        src: "https://assets.leetcode.com/static_assets/others/lg2550.png",
        title: "50 Days Badge 2025",
        date: "2025-04-17",
      },
      {
        src: "https://assets.leetcode.com/static_assets/marketing/2024-lg.png",
        title: "Annual Badge 2024",
        date: "2024-12-22",
      },
      {
        src: "https://assets.leetcode.com/static_assets/marketing/2024-200-lg.png",
        title: "200 Days Badge 2024",
        date: "2024-08-08",
      },
      {
        src: "https://assets.leetcode.com/static_assets/marketing/2024-100-lg.png",
        title: "100 Days Badge 2024",
        date: "2024-04-12",
      },
      {
        src: "https://assets.leetcode.com/static_assets/marketing/2024-50-lg.png",
        title: "50 Days Badge 2024",
        date: "2024-02-22",
      },
      {
        src: "https://assets.leetcode.com/static_assets/marketing/lg50.png",
        title: "50 Days Badge 2023",
        date: "2023-12-15",
      },
      {
        src: "https://assets.leetcode.com/static_assets/marketing/lg100.png",
        title: "100 Days Badge 2023",
        date: "2023-12-15",
      },
    ],
  },
  {
    title: "Daily Medals",
    badges: [
      {
        src: "https://leetcode.com/static/images/badges/dcc-2024-7.png",
        title: "Jul Badge",
        date: "2024-07-31",
      },
      {
        src: "https://leetcode.com/static/images/badges/dcc-2024-6.png",
        title: "Jun Badge",
        date: "2024-06-30",
      },
      {
        src: "https://leetcode.com/static/images/badges/dcc-2024-3.png",
        title: "Mar Badge",
        date: "2024-03-31",
      },
      {
        src: "https://leetcode.com/static/images/badges/dcc-2024-1.png",
        title: "Jan Badge",
        date: "2024-01-31",
      },
    ],
  },
  {
    title: "Study Plan Medals",
    badges: [
      {
        src: "https://assets.leetcode.com/static_assets/others/Top_SQL_50.png",
        title: "Top SQL 50",
        date: "2024-08-31",
      },
      {
        src: "https://assets.leetcode.com/static_assets/others/LeetCode_75.png",
        title: "LeetCode 75",
        date: "2024-07-15",
       
      },
      {
        src: "https://assets.leetcode.com/static_assets/others/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE_%E5%85%A5%E9%97%A8.png",
        title: "Binary Search I",
        date: "2023-04-07",
      },
    ],
  },
];

const Leetcode = () => {
  return (
    <div className=" mx-auto w-full  rounded-xl bg-overlay-3  text-left  transition-all dark:bg-dark-overlay-3 dark:shadow-dark-level4">
      <div className="max-h-[60vh] overflow-y-auto">
        {badgeSections.map(({ title, badges }) => (
          <section className="p-4 rounded-xl bg-white dark:bg-[#44403c] shadow-md mb-6">
            <h2 className="text-lg font-semibold text-label-2 dark:text-dark-label-2 mb-3">
              {title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {badges.map((badge, idx) => (
                <BadgeCard key={idx} {...badge} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Leetcode;
