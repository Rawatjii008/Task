import Link from "next/link";
import React from "react";

const SocialAccountsProfileFrames = () => {
  return (
    <section className="flex justify-center items-center flex-col py-8 bg-gray-100">
      <article className="flex flex-col justify-center items-center">
        <p className="text-2xl font-bold text-primary uppercase mx-auto p-3 border-b-2 text-center">
          Get Connected With Us
        </p>
      </article>

      <article className="w-full sm:w-11/12 lg:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-6">
        <div className="border border-primary rounded-lg shadow-md overflow-hidden bg-white flex flex-col h-full">
          <div className="p-4 bg-white text-primary">
            <Link href="#" className="font-bold text-xl">
              Facebook
            </Link>
          </div>
          <div className="flex-grow  custumisescroll">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgovernmentofup&tabs=timeline&width=340&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="w-full"
            />
          </div>
          <div className="flex justify-center items-center p-4">
            <button className="border border-primary bg-primary text-white font-bold text-xl rounded-full py-2 px-6 transition duration-300 hover:bg-white hover:text-primary">
              Facebook
            </button>
          </div>
        </div>

        <div className="border border-primary rounded-lg shadow-md overflow-hidden bg-white flex flex-col h-full">
          <div className="p-4 bg-white text-primary">
            <Link href="#" className="font-bold text-xl">
              Twitter
            </Link>
          </div>
          <div className="flex-grow  custumisescroll">
            <Link
              className="twitter-timeline"
              href="https://twitter.com/UPGovt?ref_src=twsrc%5Etfw"
              data-height="400"
            >
              Tweets by UPGovt
            </Link>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            />
          </div>
          <div className="flex justify-center items-center p-4">
            <button className="border border-primary bg-primary text-white font-bold text-xl rounded-full py-2 px-6 transition duration-300 hover:bg-white hover:text-primary">
              Twitter
            </button>
          </div>
        </div>

        <div className="border border-primary rounded-lg shadow-md overflow-hidden bg-white flex flex-col h-full">
          <div className="p-4 bg-white text-primary">
            <Link href="#" className="font-bold text-xl">
              Instagram
            </Link>
          </div>
          <div className="flex-grow  custumisescroll">
            <iframe
              src="https://www.instagram.com/upgovt/embed/"
              width="100%"
              height="400"
              frameBorder="0"
              className="w-full"
            />
          </div>
          <div className="flex justify-center items-center p-4">
            <button className="border border-primary bg-primary text-white font-bold text-xl rounded-full py-2 px-6 transition duration-300 hover:bg-white hover:text-primary">
              Instagram
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SocialAccountsProfileFrames;
