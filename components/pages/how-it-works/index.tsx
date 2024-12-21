import Image from "next/image";

import content from "@/components/pages/how-it-works/index.json";

export default function Component() {
  return (
    <main className="how-it-works-page">
      <section className="trusted-devices">
        <div className="container">
          <h3
            dangerouslySetInnerHTML={{ __html: content.sectionOne.heading }}
            className="heading"
          />
          <div className="media">
            <Image
              src={content.sectionOne.image}
              alt="Trusted Devices"
              className="image"
              height={966}
              width={494}
            />
          </div>
        </div>

        <span className="gradient-shadow gradient-shadow-lt" />
        <span className="gradient-shadow gradient-shadow-rt" />
      </section>

      <section className="traditional-wallets">
        <div className="container">
          <h3
            dangerouslySetInnerHTML={{ __html: content.sectionTwo.heading }}
            className="heading"
          />
          <ul className="list">
            {content.sectionTwo.items.map((item, index) => (
              <li key={index}>
                <h4 className="title">{item.title}</h4>
                <p
                  className="desc"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </li>
            ))}
          </ul>
          <div className="media">
            <Image
              src={content.sectionTwo.image}
              alt="Traditional Wallets"
              className="image"
              height={400}
              width={400}
            />
          </div>
        </div>

        <span className="gradient-shadow gradient-shadow-lt" />
      </section>

      <section className="private-keys">
        <div className="container">
          <h3 className="heading">{content.sectionThree.heading}</h3>
          <span className="text">{content.sectionThree.text}</span>
          <ul className="list">
            {content.sectionThree.items.map((item, index) => (
              <li key={index}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="image"
                  height={130}
                  width={202}
                />
                <h4 className="title">{item.title}</h4>
                <p className="desc">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="solutions">
        <div className="container">
          <ul className="list">
            <li>
              <h4
                className="title"
                dangerouslySetInnerHTML={{
                  __html: content.sectionFour.itemOne.title,
                }}
              />
              {content.sectionFour.itemOne.description.map((item, index) => (
                <p
                  className="desc"
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </li>
          </ul>

          <div className="media">
            <Image
              src={content.sectionFour.itemOne.image}
              alt={content.sectionFour.itemOne.title}
              className="image"
              height={580}
              width={544}
            />
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <div className="container">
          <div className="wrapper">
          <Image
              src="/images/home/icon-vultisig-logo.png"
              width={244}
              height={56}
              alt="vultisig"
            />
            <h3
              className="heading"
              dangerouslySetInnerHTML={{ __html: content.sectionFive.heading }}
            />
            <p className="text">{content.sectionFive.text}</p>
            <a href={content.sectionFive.link} className="btn">
              {content.sectionFive.btn}
            </a>
            <Image
              src={content.sectionFive.image}
              alt={content.sectionFive.heading}
              className="image"
              height={414}
              width={362}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
