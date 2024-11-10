// this section is made by Prashant
import Link from "next/link";
import React from "react";

const MarqueeTag = () => {
  const data = [
    {
      info: "Scheduled maintenance work will disrupt water supply in certain areas.",
      new: true,
    },
    {
      info: "Road closure due to construction. Alternative routes advised.",
      new: true,
    },
    {
      info: "Revised garbage collection timings. New schedule available soon.",
      new: true,
    },
    {
      info: "Renovation work in progress. Park temporarily closed to the public during this period.",
      new: true,
    },
    {
      info: "Free COVID-19 vaccination for residents aged 18 and above. Walk-ins welcome.",
      new: true,
    },
  ];
  return (
    <div className="bg-secondary h-16 w-full flex justify-between items-center font-bold px-6">
      {/* <Link
        href="https://wa.me/+916204435048"
        target="_blank"
        className="bg-white text-center w-1/6 text-sm py-2 rounded "
      >
        Chat to Whatsapp
      </Link> */}
      <marquee className="space-x-10 w-full text-base text-white uppercase">
        {data.map((d, i) => (
          <span key={i}>
            {d.new ? (
              <sup className="bg-red-600 text-white text-xs px-2">new</sup>
            ) : (
              <></>
            )}
            &nbsp;
            {d.info}
          </span>
        ))}
      </marquee>
      {/* <Link
        href="tel:+1234567890"
        target="_blank"
        className="bg-white text-center w-1/6 text-sm py-2 rounded "
      >
        Call on Number
      </Link> */}
    </div>
  );
};

export default MarqueeTag;
