import Image from "next/image";
import React from "react";

const Events = () => {
  const carouselItems = [
    {
      title: "Independence Day ",
      content:
        "Join us to celebrate India's Independence Day with a flag-hoisting ceremony and cultural programs.",
      image: "/IndependenceDay.jpg",
    },
    {
      title: "Republic Day ",
      content:
        "Celebrate Republic Day with a grand parade showcasing the cultural diversity of India.",
      image: "/RepublicDay.jpg",
    },
    {
      title: "Teachers Day",
      content:
        "Celebrate Teacher's Day by honoring our educators and participating in various cultural events.",
      image: "/TeachersDay.jpg",
    },
    {
      title: "Gandhi Jayanti",
      content:
        "Join us in celebrating Gandhi Jayanti with a prayer meeting and discussions on Mahatma Gandhi's principles.",
      image: "/GandhiJayanti.jpg",
    },
    {
      title: "Childrens Day",
      content:
        "Celebrate Children's Day with fun activities and events designed for kids of all ages.",
      image: "/ChildrensDay.jpg",
    },
    {
      title: "Yoga Day",
      content:
        "Participate in Yoga Day with a morning yoga session and wellness workshops.",
      image: "/YogaDay.jpg",
    },
    {
      title: "Environment Day",
      content:
        "Join us in celebrating Environment Day with a tree plantation drive and eco-friendly activities.",
      image: "/EnvironmentDay.jpg",
    },
    {
      title: "Literacy Day",
      content:
        "Celebrate Literacy Day with reading sessions, book fairs, and educational activities.",
      image: "/LiteracyDay.jpg",
    },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold text-primary uppercase mx-auto p-3 border-b-2 w-1/2 text-center">
        Events
      </h2>
      <div className="w-11/12 mx-auto  bg-gray-100">
        <div className="overflow-hidden p-5">
          <div className=" rounded-lg overflow-auto flex gap-5 shadow-lg">
            {carouselItems.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col w-96 justify-center items-center h-full p-4 space-x-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={100}
                    className="w-full h-56  object-cover hover:scale-105 mb-2  rounded-md transition-transform"
                  />
                  <div className="text-center pb-2 h-28">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-500">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
