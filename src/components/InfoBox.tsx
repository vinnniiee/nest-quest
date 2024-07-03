import React from "react";

const InfoBox = ({
  heading,
  backgroundColor = "bg-secondary-100",
  textColor = "text-white",
  buttonInfo,
  children,
}: {
  heading: string;
  backgroundColor?: string;
  textColor?: string;
  buttonInfo: {
    link: string;
    backgroundColor: string;
    text: string;
  };
  children: React.ReactNode;
}) => {
  return (
    <div className={`${backgroundColor} p-6 flex flex-col justify-center  items-start gap-2 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-5xl font-thin mb-4`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4 max-w-xl text-xl font-thin`}>{children}</p>
      <a
        href={buttonInfo.link}
        className={`inline-block ${buttonInfo.backgroundColor} text-white rounded-sm px-4 py-2 hover:opacity-80`}
      >
        {buttonInfo.text}
      </a>
    </div>
  );
};
export default InfoBox;
