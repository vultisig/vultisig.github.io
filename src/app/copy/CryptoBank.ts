import { link } from "fs";
import { text } from "stream/consumers";

export const CryptoBankCopy = {
  header: {
    mainTitle: "CRYPTO BANK",
    subTitle: " <span class='gradient-text '>ONBOARD WITH PEACE OF MIND</span>",
    items: [
      {
        description:
          "Fully compliant Swiss bank account licensed by Swiss Financial</br> Market Supervisory Authority (FINMA)",
      },
      {
        description:
          "Enjoy seamless and swift transfers between global bank accounts",
      },
      {
        description: "Register and get up to 25 ARB in rewards",
      },
    ],
    boxs: [
      {
        img: "./img/cryptobank-header-box-img-1.svg",
        desc: "Competitive crypto on &</br> off-ramp rates",
      },
      {
        img: "./img/cryptobank-header-box-img-2.svg",
        desc: "Free Swiss bank</br> account</br>(CHF, EUR, USD)",
      },
      {
        img: "./img/cryptobank-header-box-img-3.svg",
        desc: "Free Virtual MasterCard</br> Google Pay & Apple</br> PaySupported",
      },
      {
        img: "./img/cryptobank-header-box-img-4.svg",
        desc: "Register and get</br> rewards",
      },
    ],
  },
  segment1: {
    mainTitle:
      "<span class='gradient-text '>EARN UP TO 25 ARB CARD REWARDS</span></br><span class='gradient-text '> AS A NEWUSER!</span>",
    subTitle:
      "Download the Vultisig app and complete the following steps to claim your rewards:",
    items: [
      {
        title: "Complete KYC",
        btn: "KYC",
        list: [
          {
            text: `As soon as you complete the KYC you’ll be able to claim</br> this reward.`,
          },
          { text: "REWARD 10 ARB" },
        ],
        link: "Get Started",
      },
      {
        title: "1st Card Top Up",
        btn: "1st Topup",
        list: [
          {
            text: "Top up your card with at least 50 EUR of crypto to</br> claim this reward.",
          },
          { text: "REWARD 15 ARB" },
        ],
        link: "Get Started",
      },
    ],
  },
  segment2: {
    mainTitle:
      "<span class='gradient-text '>UNLOCK VULTISIG HIGHER TIERS</span> ",
    items: [
      {
        title: "STANDARD",
        list: [
          {
            text: "Free Swiss Bank Account (CHF, EUR, USD)",
          },
          {
            text: "Free EUR MasterCard Debit Card",
          },
          {
            text: "1% Crypto Topup & FX fee",
          },
          {
            text: "Monthly limit: $100,000",
          },
          {
            text: "Card limit: $10,000/month",
          },
        ],
        img: "./img/blue-card.svg",
        btn: "Free.Get it now!",
      },
      {
        title: "SILVER",
        list: [
          {
            text: "Free Swiss Bank Account (CHF, EUR, USD)",
          },
          {
            text: "Free EUR MasterCard Debit Card",
          },
          {
            text: "0.5% Crypto Topup & FX fee",
          },
          {
            text: "Monthly limit: $500,000",
          },
          {
            text: "Card limit: $20,000/month",
          },
        ],
        img: "./img/gray-card.svg",
        btn: "1 ETH",
      },
      {
        title: "GOLD",
        list: [
          {
            text: "Free Swiss Bank Account (CHF, EUR, USD)",
          },
          {
            text: "Free EUR MasterCard Debit Card",
          },
          {
            text: "0.25% Crypto Topup & FX fee",
          },
          {
            text: "Monthly limit: $1,000,000",
          },
          {
            text: "Card limit: personalised",
          },
        ],
        img: "./img/yellow-card.svg",
        btn: "10 ETH",
      },
    ],
  },
  segment3: {
    mainTitle: "LOWEST FEES",
    items: [
      {
        text: "Zero fees for account setup and management, as well as bank transfers",
      },
      {
        text: "The most competitive crypto top-up fees, with rates as low as 0.25%",
      },
      {
        text: "Transactions are made on the Arbitrum network, which has affordable gas fees",
      },
    ],
    Priviledges: [
      {
        q: "Top-up Fee Rate: 0.25% - 1%",
        a: "",
      },
      {
        q: "Referral Commission: 20%",
        a: "",
      },
    ],
  },
  segment4: {
    mainTitle: "SPEND CRYPTO CONVENIENTLY",
    items: [
      {
        description:
          "Link your account with virtual Visa debit cards, accepted at over 40M merchants, including all Visa debit card-supported platforms.",
      },
      {
        description:
          "Top up your account with USDC and Fiat for convenient usage.",
      },
      {
        description:
          "Spend crypto via popular and established payment platforms like PayPal, Apple Pay, Google Pay, Samsung Pay, and more.",
      },
    ],
  },
  FandQ: {
    "main-title": "FAQ",
    items: [
      {
        q: "Do I need to do KYC?",
        a: "Yes, the bank and card service requires KYC with Fiat24",
      },
      {
        q: "What’s the base currency of the card?",
        a: "The card is Euro denominated and will debit your Euro account within the app. ",
      },
      {
        q: "With which crypto can I top-up the bank account or debit card?",
        a: "The bank account can be topped up with USDC (Arbitrum) or via direct bank transfer. You can swap to USDC (Arbitrum) within the app. The card per-se does not need to be topped up, it directly debits the Euro account.",
      },
      {
        q: "Is the bank account and VISA card Free?",
        a: "The bank account and VISA card are for free. For the crypto-top up and fx swap there is a 1% fee by Fiat24, as well as an affiliate fee for Thorwallet. ",
      },
      {
        q: "What are the fees for bank wires top up?",
        a: "Top-up with bank wire transfers are free of charge.",
      },
      {
        q: "Who is Fiat24 and what license does they have?",
        a: "Fiat24 is our collaboration partner for the bank account and VISA card. Fiat24 is regulated in Switzerland and holds a FINMA Fintech license as financial institution. ",
      },
      {
        q: "What countries can I open a bank account?",
        a: "The bank account is available in around 100 countries.<br/><br/>To use the Services, your domicile cannot be in any of the following countries: Afghanistan, Albania, Barbados, Belarus, Bosnia and Herzegovina, Burkina Faso, Burundi, Cambodia, Cameroon, Cayman Islands, Central African Republic, Chad, Congo (Democratic Republic of the), Cote d'Ivoire (Ivory Coast), Cuba, Egypt, Equatorial Guinea, Eritrea, Guinea-Bissau (Republic of), Haiti, Iran (Islamic Republic of), Iraq, Israel, Jamaica, Jordan, Kenya, Korea (Democratic People's Republic of), Lebanon, Liberia, Libya, Mali (Republic of), Malta, Moldova, Montenegro, Morocco, Mozambique, Myanmar (Burma), Nicaragua, Niger, Nigeria, Pakistan, Palestine State, Panama, Philippines, Russian Federation, Saudi Arabia, Senegal, Serbia, Somalia, South Sudan, Sri Lanka, Sudan, Syria (Syrian Arab Republic), Trinidad and Tobago, Tunisia, Turkey, Ukraine, Uganda, United Arab Emirates, United States of America, Vanuatu, Venezuela (Bolivarian Republic of), Yemen, Zimbabwe.",
      },
      {
        q: "What countries can I request the VISA card?",
        a: "Individual clients living in the following countries: Austria, Belgium, Bulgaria, Croatia, Republic of Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden and Switzerland.Individuals living outside those countries and business clients are currently not eligible to order the card.",
      },
    ],
  },
  store: {
    mainTitle: "UPGRADE<span class='gradient-text'> TODAY </span>",
    subTitle:
      "Join thousands of users who trust VULTISIG with their digital assets. There is no registration required. ",
  },
};
