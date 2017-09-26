import React from "react";

const PageTwo = ({ btn }) => (
  <div>
    {btn && (
      <a
        href="http://play.google.com/store/?pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-0 bottom-0"
      >
        <img
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
          width="400"
          height="200"
        />
      </a>
    )}
  </div>
);

export default PageTwo;
