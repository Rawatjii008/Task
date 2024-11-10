"use client";
import Image from "next/image";
import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("About Nagar Palika");
  const Nagar_Palika = "/Yogi-Adityanath-Pic-HD-welcome-Hand.png";

  return (
    <div className="container mx-auto p-4 shadow-lg">
      <h2 className="text-primary font-bold uppercase border-b-2 pb-3 text-2xl text-center mb-4">
        About Nagar Palika
      </h2>
      <div className="flex flex-wrap bg-cyan-950 p-5 rounded-lg mb-4">
        {["About Nagar Palika", "Gallery", "Projects",].map(
          (tab, index) => (
            <button
              key={index}
              className={`py-1 px-4 mx-2 my-1 rounded ${
                activeTab === tab
                  ? "bg-activetabs text-white"
                  : "bg-white text-black hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          )
        )}
      </div>
      <div>
        {activeTab === "About Nagar Palika" && (
          <AboutContent imageSrc={Nagar_Palika} />
        )}
        {activeTab === "Gallery" && <ServicesContent />}
        {activeTab === "Projects" && <ProjectsContent />}
      </div>
    </div>
  );
};

const AboutContent = ({ imageSrc }) => (
  <div className="flex flex-wrap -mx-4">
    <div className="w-full lg:w-2/3 px-4 mb-4 sm:mb-10 lg:mb-0">
      <h1 className="text-2xl text-center font-bold mb-4">हमारे बारे में</h1>
      <div className="overflow-auto h-80">
        <p>
          नगरपालिका परिषद नूरपुर जनपद-बिजनौर की एक महत्वपूर्ण शहरी निकाय है जो
          मुरादाबाद-बिजनौर रोड पर स्थित है। कस्बा नूरपुर से कई महत्वपूर्ण सड़क
          मार्ग गुजरते हैं जैसे — हरिद्वार-नूरपुर-अमरोहा,
          बिजनौर-नूरपुर-मुरादाबाद, नूरपुर-स्वाहारा-काशीपुर,
          नूरपुर-चांदपुर-गजरौला आदि, जिसके कारण से कस्बा सड़क मार्गों के बेहतर
          सम्पर्क से जुड़ा है। इसका क्षेत्रफल लगभग 1.55 वर्ग कि॰मी॰ है। वर्ष
          2011 की जनगणना के अनुसार कस्बे की कुल जनसंख्या — 38,801 है जिसमें
          20,120 पुरुष 18,190 महिलाएं व 01 अन्य सामिलित हैं। क्षेत्र की
          महत्वपूर्ण भौगोलिक स्थिति व बढ़ते हुए औद्योगिक केन्द्र को दृष्टिगत
          रखते हुए सरकार के द्वारा 29 सितम्बर 1977 को नगर पंचायत के रूप में
          मान्यता दी गई जिसे बाद में 01 अगस्त 1983 को नगरपालिका परिषद के रूप में
          उच्चीकृत किया गया। वर्तमान में निकाय तृतीय श्रेणी की नगरपालिका है
          जिसमें कुल 25 वार्ड हैं।
          <br />
          <br />
          कस्बे में अनब्लॉक जेकट निर्माण का कार्य बड़े पैमाने पर किया जाता है।
          कस्बे में स्थित शहीद स्मारक स्थल (मौ० शहीदनगर वार्ड सं०-21) भारत छोड़ो
          आन्दोलन से सम्बंधित एक प्रमुख ऐतिहासिक स्थल है जहां भारत छोड़ो आन्दोलन
          के दौरान थाना नूरपुर पर क्रांतिकारियों द्वारा ध्वजारोहण के दौरान पुलिस
          मुठभेड़ हुई जिसमें 02 क्रांतिकारी— शहीद परवीन सिंह व शहीद रिखी सिंह
          शहीद हो गये। क्रांतिकारियों की याद में यहां प्रतिवर्ष 16 अगस्त को
          उत्सव मनाया जाता है तथा इन क्रांतिकारी वीरों की शहादत को श्रद्धांजलि
          दी जाती है।
          <br />
          <br />
          कस्बा नूरपुर अपनी समृद्ध सांस्कृतिक विरासत व धार्मिक सद्भाव के रूप में
          जाना जाता है। यहां हिन्दू मुस्लिम, सिक्ख, ईसाई सभी सम्प्रदायों व
          धर्मों के लोग मिल-जुल कर सद्भावपूर्वक रहते हैं। मोहर्रम का जुलूस,
          रामडोल शौभायात्रा, नगर कीर्तन, श्री रामजी की बारात व श्री रविदास व डा०
          भीमराव अम्बेडकर जी की जयन्ती पर निकाली जाने वाली शौभा यात्राओं में इसे
          आसानी से देखा जा सकता है।
          <br />
          <br />
          निकाय द्वारा अपने नागरिकों को जन-स्वास्थ्य सेवाऐं जैसे- कचरा निस्तारण,
          सार्वजनिक व सामुदायिक शौचालय की व्यवस्था, मृत पशुओं का निस्तारण,
          संक्रामक रोगों से बचाव, जन्म-मृत्यु पंजीकरण आदि के साथ-साथ सड़क, नाली,
          नालियों जैसे सार्वजनिक निर्माण, पथ-प्रकाश व्यवस्था, जलापूर्ति, कर
          आरोपण व्यवस्था, सम्पत्ति नामान्तरण, भवन मानचित्र की स्वीकृति, अनापत्ति
          प्रमाण-पत्र व शहरी नियोजन हेतु आवश्यक कार्यों को सम्पादित किया जा रहा
          है। निकाय अपने नागरिकों को बेहतर सुविधा देने हेतु सदैव प्रतिबद्ध है।
        </p>
      </div>
    </div>
    <div className="w-full lg:w-1/3 px-4 mt-5 sm:mt-10 md:mt-8 lg:mt-0">
      <div className="relative w-full h-96">
        <Image
          src={imageSrc}
          alt="About Nagar Palika"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
);

const ServicesContent = () => (
  <div className="p-10">
    <p>Projects content goes here.</p>
  </div>
  // <div className="p-10">
  //   1. Sanitation and Waste Management: Collection, transportation, and disposal
  //   of solid waste, including garbage collection and maintaining cleanliness in
  //   public areas.
  //   <br />
  //   <br />
  //   2. Roads and Infrastructure Maintenance: Repair and maintenance of roads,
  //   streets, bridges, and other public infrastructure.
  //   <br />
  //   <br />
  //   3. Water Supply and Sewage: Provision of clean drinking water and management
  //   of sewage systems.
  //   <br />
  //   <br />
  //   4. Street Lighting: Installation and maintenance of street lights to ensure
  //   public safety and visibility during the night.
  //   <br />
  //   <br />
  //   5. Parks and Recreation Facilities: Maintenance of public parks, gardens,
  //   and recreational areas for the community's use.
  //   <br />
  //   <br />
  //   6. Urban Planning and Development: Regulation of land use, issuing building
  //   permits, and ensuring adherence to zoning regulations.
  //   <br />
  //   <br />
  //   7. Property Tax Collection: Assessment and collection of property taxes to
  //   fund municipal services and infrastructure projects.
  //   <br />
  //   <br />
  //   8. Public Health Services: Providing basic healthcare facilities,
  //   vaccination programs, and disease control measures.
  //   <br />
  //   <br />
  //   9. Disaster Management: Preparedness and response to natural disasters and
  //   emergencies within the municipality.
  //   <br />
  //   <br />
  //   10. Birth and Death Registration: Maintaining records of births and deaths
  //   within the jurisdiction for legal and administrative purposes.
  //   <br />
  //   <br />
  //   11. Issuing Licenses and Permits: Granting licenses for businesses, trades,
  //   and various activities, ensuring compliance with regulations.
  //   <br />
  //   <br />
  //   12. Community Development Programs: Initiatives aimed at improving the
  //   overall quality of life for residents, such as education programs, skill
  //   development, and poverty alleviation measures.
  // </div>
);

const ProjectsContent = () => (
  <div className="p-10">
    <p>Projects content goes here.</p>
  </div>
);



export default Tabs;
