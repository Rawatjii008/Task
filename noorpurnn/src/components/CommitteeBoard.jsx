import React from "react";

const CommitteeBoard = () => {
  const data = [
    {
      id: 1,
      ward: "",
      name: "श्री डा० महेन्द्र प्रताप सिंह",
      father: "श्री तारा सिंह",
      position: "अध्यक्ष",
      mobile: "9719268111",
    },
    {
      id: 2,
      ward: "1",
      name: "श्री सशेन्द्र कुमार",
      father: "श्री राम सिंह",
      position: "सदस्य",
      mobile: "9142669878",
    },
    {
      id: 3,
      ward: "2",
      name: "श्री कैलाश",
      father: "श्री चन्द्रपाल सिंह",
      position: "सदस्य",
      mobile: "9719090464",
    },
    {
      id: 4,
      ward: "3",
      name: "श्रीमती नीतू",
      father: "श्री रवि",
      position: "सदस्य",
      mobile: "9759418821",
    },
    {
      id: 5,
      ward: "4",
      name: "श्री निपेन्द्र कुमार",
      father: "श्री ध्यान सिंह",
      position: "सदस्य",
      mobile: "9719703958",
    },
    {
      id: 6,
      ward: "5",
      name: "श्री दिनेश कुमार",
      father: "श्री रमेशचन्द",
      position: "सदस्य",
      mobile: "8218315993",
    },
    {
      id: 7,
      ward: "6",
      name: "श्री सिराजुद्दीन",
      father: "श्री शफीक अहमद",
      position: "सदस्य",
      mobile: "9837280048",
    },
    {
      id: 8,
      ward: "7",
      name: "श्री आसिफ",
      father: "श्री अहमद हसन",
      position: "सदस्य",
      mobile: "6398444878",
    },
    {
      id: 9,
      ward: "8",
      name: "श्रीमती पूनम देवी",
      father: "श्री करन सिंह",
      position: "सदस्य",
      mobile: "7830660842",
    },
    {
      id: 10,
      ward: "9",
      name: "श्री राजेन्द्र सिंह",
      father: "श्री चन्दन सिंह",
      position: "सदस्य",
      mobile: "9719714339",
    },
    {
      id: 11,
      ward: "10",
      name: "श्री ऋषभ देव",
      father: "श्री अनिल कुमार",
      position: "सदस्य",
      mobile: "9719261261",
    },
    {
      id: 12,
      ward: "11",
      name: "श्रीमती फरीदा खातून",
      father: "श्री शकील अहमद",
      position: "सदस्य",
      mobile: "8445778926",
    },
    {
      id: 13,
      ward: "12",
      name: "श्रीमती मुर्सरत",
      father: "श्री जियाउद्दीन",
      position: "सदस्य",
      mobile: "9719445010",
    },
    {
      id: 14,
      ward: "13",
      name: "श्री आफताब",
      father: "श्री इकरामुद्दीन",
      position: "सदस्य",
      mobile: "7900945033",
    },
    {
      id: 15,
      ward: "14",
      name: "श्री फुरकान अहमद",
      father: "श्री जमील अहमद",
      position: "सदस्य",
      mobile: "9457357658",
    },
    {
      id: 16,
      ward: "15",
      name: "श्री गुरमीत सिंह",
      father: "श्री जीवन सिंह",
      position: "सदस्य",
      mobile: "9720976039",
    },
    {
      id: 17,
      ward: "16",
      name: "श्री अरविन्द कुमार",
      father: "श्री बलकरन सिंह",
      position: "सदस्य",
      mobile: "9720423612",
    },
    {
      id: 18,
      ward: "17",
      name: "श्री वसीम",
      father: "श्री अजीज अहमद",
      position: "सदस्य",
      mobile: "7895782777",
    },
    {
      id: 19,
      ward: "18",
      name: "श्रीमती फैमीदा खातून",
      father: "श्री मौ० असलम",
      position: "सदस्य",
      mobile: "9720684630",
    },
    {
      id: 20,
      ward: "19",
      name: "श्री इन्द्रजीत सिंह",
      father: "श्री कृपाल सिंह",
      position: "सदस्य",
      mobile: "6361365290",
    },
    {
      id: 21,
      ward: "20",
      name: "श्री नसीम अहमद",
      father: "श्री खलील अहमद",
      position: "सदस्य",
      mobile: "8218440781",
    },
    {
      id: 22,
      ward: "21",
      name: "श्रीमती नाजिया परवीन",
      father: "श्री सरफुद्दीन",
      position: "सदस्य",
      mobile: "9758204131",
    },
    {
      id: 23,
      ward: "22",
      name: "श्रीमती फरजाना खातून",
      father: "श्री नफीस अहमद",
      position: "सदस्य",
      mobile: "7017985316",
    },
    {
      id: 24,
      ward: "23",
      name: "श्रीमती फैमिदा",
      father: "श्री शाहबुद्दीन",
      position: "सदस्य",
      mobile: "7505218591",
    },
    {
      id: 25,
      ward: "24",
      name: "श्रीमती शाहजहां",
      father: "श्री युसुफ",
      position: "सदस्य",
      mobile: "7017600394",
    },
    {
      id: 26,
      ward: "25",
      name: "श्रीमती फरहाना खातून",
      father: "श्री मौ० मोहसिन",
      position: "सदस्य",
      mobile: "9717430480",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center underline">
        कार्यालय नगरपालिका परिषद नूरपुर (बिजनौर)
      </h2>
      <h1 className="text-2xl font-medium text-center underline mb-4">
        निर्वाचित निकाय बोर्ड
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-300 text-center font-bold">
                क्र० सं०
              </th>
              <th className="px-4 py-2 border border-gray-300 text-center font-bold">
                वार्ड सं०
              </th>
              <th className="px-4 py-2 border border-gray-300 text-center font-bold">
                निर्वाचित अध्यक्ष / सदस्य का नाम
              </th>
              <th className="px-4 py-2 border border-gray-300 text-center font-bold">
                पिता/पति का नाम
              </th>
              <th className="px-4 py-2 border border-gray-300 text-center font-bold">
                पद नाम
              </th>
              <th className="px-4 py-2 border border-gray-300 text-center font-bold">
                मो०ना०
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {item.id}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {item.ward}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {item.name}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {item.father}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {item.position}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {item.mobile}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommitteeBoard;
