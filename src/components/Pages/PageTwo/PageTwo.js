import React from "react";
const playStoreIcon = require("../../../assets/download-google.png");

const PageTwo = ({ btn }) => (
  <div>
    {btn && (
      <div>
        <a
          href="https://expo.io/@deadcoder0904/weekly-plans"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-1 bottom-2 no-underline"
        >
          <span className="expo bg-white">
            <svg
              fill="#056ECF"
              width="16"
              height="13.53"
              viewBox="0 0 26 22"
              className="pa2"
            >
              <path d="M15.5700074,1.56347365 C14.6419366,0.182701362 14.4304564,0.00269540175 12.550228,0.000117191381 L12.550228,0 C12.5431297,0 12.5365757,4.68765522e-05 12.5295248,4.68765522e-05 C12.5224738,4.68765522e-05 12.5159198,0 12.5088216,0 L12.5088216,0.000117191381 C10.6285695,0.00269540175 10.4170893,0.182701362 9.48904209,1.56347365 C8.62090399,2.85508673 0,18.3722568 0,18.8021617 C0,19.4336123 0.165365271,20.0253819 0.760363192,20.8682691 C1.36480177,21.7243756 2.40485918,22.1946412 3.16335317,21.4399521 C3.67525439,20.9306384 9.21064922,11.572016 11.8782851,8.02573451 C12.1986286,7.58788407 12.8603973,7.58788407 13.1807407,8.02573451 C15.8483767,11.572016 21.3837951,20.9306384 21.8956964,21.4399521 C22.6541667,22.1946412 23.6942478,21.7243756 24.2986627,20.8682691 C24.8936843,20.0253819 25.0590495,19.4336123 25.0590495,18.8021617 C25.0590495,18.3722568 16.4381219,2.85508673 15.5700074,1.56347365" />
            </svg>Open in Expo
          </span>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.deadcoder0904.weeklyplans"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-1 bottom-2"
        >
          <img
            alt="Get it on Google Play"
            src={playStoreIcon}
            width="175"
            height="60"
          />
        </a>
      </div>
    )}
  </div>
);

export default PageTwo;
