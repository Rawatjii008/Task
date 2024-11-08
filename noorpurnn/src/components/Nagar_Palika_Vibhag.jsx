import React from "react";

const Nagar_Palika_Vibhag = () => {
  const data = [
    {
      क्रोसं०: 1,
      विभाग_का_नाम: "लेखा, वेतन, पैंशन व आडिट विभाग",
      कर्मचारी_प्रभारी_का_नाम: "श्री वीर सिंह",
      मोबाईल_नम्बर: 9719457179,
    },
    {
      क्रोसं०: 2,
      विभाग_का_नाम: "निर्माण विभाग",
      कर्मचारी_प्रभारी_का_नाम: "श्री वीर सिंह",
      मोबाईल_नम्बर: 9719457179,
    },
    {
      क्रोसं०: 3,
      विभाग_का_नाम: "जलकल विभाग",
      कर्मचारी_प्रभारी_का_नाम: "श्री राजवीर सिंह",
      मोबाईल_नम्बर: 7451924951,
    },
    {
      क्रोसं०: 4,
      विभाग_का_नाम: "स्वास्थ्य विभाग",
      कर्मचारी_प्रभारी_का_नाम: "श्री वीर सिंह",
      मोबाईल_नम्बर: 9719457179,
    },
    {
      क्रोसं०: 5,
      विभाग_का_नाम: "सम्पत्ति/कर आरोपण/नामन्तरण विभाग",
      कर्मचारी_प्रभारी_का_नाम: "श्री जगवीर सिंह",
      मोबाईल_नम्बर: 8445299865,
    },
    {
      क्रोसं०: 6,
      विभाग_का_नाम: "जन्म-मृत्यु",
      कर्मचारी_प्रभारी_का_नाम: "श्री जगवीर सिंह",
      मोबाईल_नम्बर: 8445299865,
    },
    {
      क्रोसं०: 7,
      विभाग_का_नाम: "पथ प्रकाश विभाग",
      कर्मचारी_प्रभारी_का_नाम: "श्री जगवीर सिंह",
      मोबाईल_नम्बर: 8445299865,
    },
  ];

  return (
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4 text-center underline">
        कार्यालय नगरपालिका परिषद नूरपुर (बिजनौर)
      </h2>
      <p class="text-2xl font-medium text-center underline mb-2">नगरपालिका के विभाग</p>
      <div class="overflow-x-auto">
        <table class="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th class="px-4 py-2 border border-gray-300 text-center font-bold">
                क्र०सं०
              </th>
              <th class="px-4 py-2 border border-gray-300 text-center font-bold">
                विभाग का नाम
              </th>
              <th class="px-4 py-2 border border-gray-300 text-center font-bold">
                कर्मचारी / प्रभारी का नाम
              </th>
              <th class="px-4 py-2 border border-gray-300 text-center font-bold">
                मोबाईल नम्बर
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.क्रोसं०}>
                <td class="px-4 py-2 border border-gray-300 text-center">
                  {item.क्रोसं०}
                </td>
                <td class="px-4 py-2 border border-gray-300 text-center">
                  {item.विभाग_का_नाम}
                </td>
                <td class="px-4 py-2 border border-gray-300 text-center">
                  {item.कर्मचारी_प्रभारी_का_नाम}
                </td>
                <td class="px-4 py-2 border border-gray-300 text-center">
                  {item.मोबाईल_नम्बर}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Nagar_Palika_Vibhag;
