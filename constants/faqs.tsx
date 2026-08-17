import type { FAQItem } from "@/components/common/FaqAccordion";

export const FAQS: FAQItem[] = [
  {
    q: "Can I apply for credit online?",
    a: (
      <p>
        You can apply for online car financing at Carma Credit. Use one of our easy to fill credit
        applications. Apply now, chat with us or simply call us to get more details about online
        car loan services.
      </p>
    ),
  },
  {
    q: "How much can I borrow for a car loan?",
    a: (
      <p>
        The amount a bank will finance is dependent on the book value. Banks in Canada use Canadian
        Black Book to determine the car&apos;s value.
      </p>
    ),
  },
  {
    q: "Can I pay off a car loan early?",
    a: (
      <p>
        Yes, in Canada most car loans are open-ended. This means that you can pay off your loan
        early without any penalties.
      </p>
    ),
  },
  {
    q: "How are auto finance decisions made?",
    a: (
      <>
        <p className="mb-3">
          Financial institutions typically take four major factors into account:
        </p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Down Payment</li>
          <li>Vehicle specifics (model, style, age, mileage, and cost)</li>
          <li>
            Application information such as income, time at current job, and time at residence
          </li>
          <li>Credit history</li>
        </ol>
      </>
    ),
  },
  {
    q: "Can I apply with bad credit?",
    a: (
      <p>
        Over 50% of our approvals are for Canadians with less than perfect credit. Get pre-approved
        for bad credit car loans in minutes!
      </p>
    ),
  },
  {
    q: "What is the interest rate on a car loan?",
    a: (
      <p>
        The interest rate is the amount of money a lender would charge you to lend money. Depending
        on your credit, interest rates in Canada can range anywhere from 0% to 29.99%. If a lender
        believes that the loan is a higher risk, they would charge a higher interest rate. It is
        important to maintain a strong credit profile to avoid this.
      </p>
    ),
  },
  {
    q: "What's your inventory?",
    a: (
      <p>
        We have access to all makes & models for both new and used vehicles in every province. Our
        approval centres will first secure you the lowest rate and best approval. From there we can
        help you select a vehicle that matches your approval.
      </p>
    ),
  },
  {
    q: "What finance companies does Carma work with?",
    a: (
      <>
        <p className="mb-3">
          Carma Credit works with a large network of lenders who are ready to get you financed.
        </p>
        <p className="mb-2 font-semibold text-zinc-800">
          Our Clients Have Received Financing From Companies Like:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>TD Canada Trust</li>
          <li>Bank of Montreal</li>
          <li>RBC Royal Bank</li>
          <li>Scotia Bank</li>
          <li>Scotia Dealer Advantage</li>
          <li>Trend Financial</li>
          <li>Carfinco</li>
          <li>Ford Credit</li>
          <li>VFC</li>
          <li>WS Leasing</li>
          <li>Dominion Leasing</li>
        </ul>
      </>
    ),
  },
];
