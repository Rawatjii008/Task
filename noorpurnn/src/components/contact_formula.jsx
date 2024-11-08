import { useState } from "react";

const Contact_formula = () => {
    const data  = [
//   const [data, setData] = useState([
    {
      क्र०सं०: 1,
      अधिकारी: "डा० महेन्द्र प्रताप सिंह",
      पद_नाम: "अध्यक्ष",
      मोबाईल_नम्बर: 9719268111,
    },
    {
      क्र०सं०: 2,
      अधिकारी: "श्री सन्तोष कुमार मिश्र",
      पद_नाम: "अधिशासी अधिकारी",
      मोबाईल_नम्बर: 8189078125,
    },
    {
      क्र०सं०: 3,
      अधिकारी: "श्री वीर सिंह",
      पद_नाम: "लिपिक",
      मोबाईल_नम्बर: 9719457179,
    },
    {
      क्र०सं०: 4,
      अधिकारी: "श्री जगवीर सिंह",
      पद_नाम: "लिपिक",
      मोबाईल_नम्बर: 8445299865,
    },
    {
      क्र०सं०: 5,
      अधिकारी: "श्री रवि",
      पद_नाम: "कार्यवाहक सफाई नायक",
      मोबाईल_नम्बर: 9759418821,
    },
    {
      क्र०सं०: 6,
      अधिकारी: "श्री उमेश",
      पद_नाम: "कार्यवाहक सफाई नायक",
      मोबाईल_नम्बर: 7500829776,
    },
    {
      क्र०सं०: 7,
      अधिकारी: "श्री ओमकार",
      पद_नाम: "कार्यवाहक सफाई नायक",
      मोबाईल_नम्बर: 9290512901,
    },
    {
      क्र०सं०: 8,
      अधिकारी: "श्री उमेश II",
      पद_नाम: "कार्यवाहक सफाई नायक",
      मोबाईल_नम्बर: 9756330436,
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-4 text-center underline">
        कार्यालय नगरपालिका परिषद नूरपुर (बिजनौर)
      </h2>
      <p className="text-2xl font-medium text-center underline mb-2">(सम्पर्क सूत्र)</p>
      <div className="overflow-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-center font-bold">
                क्र०सं०
              </th>
              <th className="px-4 py-2 border border-gray-300 text-center font-bold">
                अधिकारी/कर्मचाारी का नाम
              </th>
              <th className="px-4 py-2 border border-gray-300 text-center font-bold">
                पद नाम
              </th>
              <th className="px-4 py-2 border border-gray-300 text-center font-bold">
                मोबाईल नम्बर
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.क्र०सं०}>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {row.क्र०सं०}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {row.अधिकारी}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {row.पद_नाम}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {row.मोबाईल_नम्बर}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact_formula;
