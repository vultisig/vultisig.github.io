import Image from "next/image";

import content from "@/components/pages/docs/index.json";

export default function Component() {
  return (
    <main className="docs-page">
      <section className="introduction">
        <div className="container">
          <div className="heading-wraper">
            <h3 className="heading">{content.sectionOne.heading}</h3>
            <Image
              src="images/back-logo.svg"
              alt="Vultisig Logo"
              className="back-logo"
              height={70}
              width={70}
            />
          </div>
          <p className="text">{content.sectionOne.text}</p>
          <a href={content.sectionOne.link} className="btn">
            {content.sectionOne.btn}
          </a>
          <div className="media">
            <Image
              src={content.sectionOne.image}
              alt={content.sectionOne.heading}
              className="image"
              height={300}
              width={300}
            />
            <span className="gradient-shadow" />
          </div>
        </div>

        <span className="gradient-shadow gradient-shadow-lt" />
        <span className="gradient-shadow gradient-shadow-rt" />
      </section>
      <section className="integrate-vultisig">
        <div className="container">
          <h3 className="heading">{content.sectionTwo.heading}</h3>
          <p className="text">{content.sectionTwo.text}</p>
          <a href={content.sectionTwo.link} className="btn">
            {content.sectionTwo.btn}
          </a>
          <div className="media">
            <Image
              src={content.sectionTwo.image}
              alt={content.sectionTwo.heading}
              className="image"
              height={300}
              width={300}
            />
            <span className="gradient-shadow" />
          </div>
        </div>
      </section>
    </main>
  );
}
