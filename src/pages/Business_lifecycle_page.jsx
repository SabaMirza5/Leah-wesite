import React from "react";
import Commen_header_sec from "../components/Commen_header_sec";
import lifecyclebg from "../assets/lifecyclebg.png";

function Business_lifecycle_page() {
  return (
    <>
      <Commen_header_sec
        title="Business Lifecycle"
        background={{ background: `url(${lifecyclebg})` }}
      />
      <div className="flex  flex-col p-[5%]">
        <h1 className="lg:text-4xl md:text-4xl text-xl font-serif font-bold">
          Business lifecycle
        </h1>
        <p className="lg:text-lg md:text-lg text-sm font-serif font-normal py-2">
          No matter what stage your construction business is in the business
          lifecycle, we can tailor our services to meet your specific needs.
        </p>

        <h2 className="font-bold font-serif capitalize text-base  mt-5">
          Startup – You need the basic income tax information
        </h2>
        <ul className="mx-4 space-y-1 list-disc list-inside  lg:text-lg md:text-lg text-xs  font-serif font-normal text-black pt-4 ">
          <li>Year-End Corporate & Personal Income Tax Preparation.</li>
          <li>
            Annual Tax Estimate Calculations so you Know Where you stand before
            the year is over and it’s too late.
          </li>
          <li>
            Working with your internal or outside Bookkeeper to make sure your
            annual income tax filings are compliant.
          </li>
        </ul>
        <h2 className="font-bold font-serif capitalize text-base  mt-5">
        Growth – You need solid information to make good decisions
        </h2>
        <ul className="mx-4 space-y-1 list-disc list-inside  lg:text-lg md:text-lg text-xs  font-serif font-normal text-black pt-4 ">
          <li>Everything you’d expect during the Startup Cycle, but also including:</li>
          <li>
          ERISA 401k plan audit for your retirement plans.
          </li>
          <li>
          Semi-Annual or Quarterly Tax Calculations & Management of your Assets.
          </li>
          <li>
          Quarterly Compilation of your operating entities, with industry benchmarking results & feedback.
          </li>
          <li>
          Advanced tax credit preparation and consulting, R&D, ERC, Cost Segregation.
          </li>
          <li>
          Working with your Controller / CFO to make sure your annual income tax filings are compliant.
          </li>

          <li>
          Working with your Controller / CFO to help them inform you of how your business is doing.
          </li>
          <li>
          Working with your Controller to help them maintain your books and records & keep us informed where you’re headed.
          </li>
        </ul>
        <h2 className="font-bold font-serif capitalize text-base mt-5">
        Maturity – You need a strategic long-term plan
        </h2>
        <ul className="mx-4 space-y-1 list-disc list-inside  lg:text-lg md:text-lg text-xs  font-serif font-normal text-black pt-4 ">
          <li>1-5 year goal tracking and monitoring. Helping you make a plan and follow the short term through.</li>
          <li>
          Structuring / restructuring your business activities to be tax & financially efficient.
          </li>
          <li>
          10+ year succession/transition plan development and refinement. Helping you make a plan and actually follow it through.
          </li>
        </ul>
      </div>
    </>
  );
}

export default Business_lifecycle_page;
