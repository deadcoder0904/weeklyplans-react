import React from "react";

const PageTwo = ({ title, btn }) => (
  <div>
    <h2 className="flex justify-center items-center f2 f1-m f-headline-l measure-narrow lh-title mv0">
      <span className="navy bg-white shadow-4">{title}</span>
    </h2>
    {btn && (
      <a
        href="http://play.google.com/store/?pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-0"
      >
        <img
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
        />
      </a>
    )}
  </div>
);

export default PageTwo;
