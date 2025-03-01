import Image from "next/image";

import content from "@/components/pages/home/index.json";
import Link from "next/link";

export default function Component() {
  return (
    <main className="home-page">
      <section className="introduction">
        <div className="container">
          <p
            dangerouslySetInnerHTML={{ __html: content.hero_section.slogan }}
            className="slogan"
          />
          <span className="title gradient-text">
            {content.hero_section.title}
          </span>
          <p className="text">{content.hero_section.desc}</p>
          <Link className="btn" href={content.hero_section.link}>
            {content.hero_section.btn}
          </Link>
          <div className="media">
            <Image
              src="/images/home/introduction-image.png"
              alt="Vultisig Wallet"
              className="image"
              height={754}
              width={1328}
            />
            <span className="gradient-shadow " />
          </div>
        </div>

        <span className="gradient-shadow gradient-shadow-lt" />
        <span className="gradient-shadow gradient-shadow-rb" />
      </section>

      <section className="airdrop">
        <div className="container">
          <Image
            width={698}
            height={494}
            src="/images/home/airdrop.jpg"
            alt="Airdrop"
            className="image"
          />
          <div className="airdrop-info">
            <p
              className="heading"
              dangerouslySetInnerHTML={{ __html: content.airdrop.heading }}
            />
            <p
              className="airdrop-description"
              dangerouslySetInnerHTML={{ __html: content.airdrop.description }}
            />
            <a className="btn" href={content.airdrop.link}>
              {content.airdrop.btn}
            </a>
          </div>
        </div>
      </section>

      <section className="information">
        <div className="container">
          <div className="stats">
            <h3 className="heading">{content.Vultisig_tested.stats.heading}</h3>
          </div>
          <div className="trusted">
            <h3 className="heading">
              {content.Vultisig_tested.trusted.heading}
            </h3>
            <ul className="list">
              {content.Vultisig_tested.trusted.items.map((item, index) => (
                <li key={index}>
                  <Image
                    src={item.image}
                    alt={item.symbol}
                    className="image"
                    height={80}
                    width={80}
                  />
                  <span className="symbol">{item.symbol}</span>
                  <span className="text">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <span className="gradient-shadow gradient-shadow-lb" />
      </section>

      <section className="description">
        <div className="container">
          <h3
            className="heading"
            dangerouslySetInnerHTML={{ __html: content.wrong_things.heading }}
          />
          <ul className="list">
            {content.wrong_things.items.map((item, index) => (
              <li key={index}>
                <h4 className="title">{item.title}</h4>
                <p
                  className="desc"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                <span className="point">{item.point}</span>
              </li>
            ))}
          </ul>
          <div className="media">
            <Image
              src="/images/home/what-is-wrong.png"
              alt="Wallet Intrusion"
              className="image"
              height={669}
              width={751}
            />
          </div>
        </div>
      </section>

      <section className="solution">
        <div className="container">
          <h3
            className="heading"
            dangerouslySetInnerHTML={{ __html: content.Solution.heading }}
          />
          <span className="text">{content.Solution.text}</span>
          <ul className="list">
            {content.Solution.items.map((item, index) => (
              <li key={index}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="image"
                  height={130}
                  width={153}
                />
                <h4
                  className="title"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h4>
                <p
                  className="desc"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="experience">
        <div className="container">
          <h3
            className="heading"
            dangerouslySetInnerHTML={{
              __html: content.Seamless_security.heading,
            }}
          />
          <ul className="list">
            {content.Seamless_security.items.map((item, index) => (
              <li key={index}>
                <h4 className="title">{item.title}</h4>
                <span className="label">{item.label}</span>
                <span className="value">{item.value}</span>
                <p className="desc">{item.description}</p>
              </li>
            ))}
          </ul>
          <div className="media">
            <Image
              src="/images/home/security.png"
              alt="Seamless Security"
              className="image"
              height={500}
              width={500}
            />
          </div>
        </div>
      </section>

      <section className="best-features">
        <div className="container">
          <h3
            className="heading"
            dangerouslySetInnerHTML={{ __html: content.bestFeatures.heading }}
          />

          <div className="item-list">
            {content.bestFeatures.items.map((item, index) => (
              <div className="asset-management" key={index}>
                <p
                  className="title"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p className="desc">{item.description}</p>
                <div className="media">
                  <Image
                    className="image"
                    alt={item.title}
                    src={item.image}
                    width={657}
                    height={1071}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="other-features">
        <div className="container">
          <h3
            className="heading"
            dangerouslySetInnerHTML={{ __html: content.other_features.heading }}
          />
          <ul className="list">
            {content.other_features.items.map((item, index) => (
              <li key={index}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="image"
                  height={56}
                  width={56}
                />
                <h4 className="title">{item.title}</h4>
                <p
                  className="desc"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></p>
              </li>
            ))}
          </ul>
        </div>

        <span className="gradient-shadow gradient-shadow-rb" />
      </section>

      <section className="benefits">
        <div className="container">
          <h3
            className="heading"
            dangerouslySetInnerHTML={{ __html: content.for_everyone.heading }}
          />
          <ul className="list">
            {content.for_everyone.items.map((item, index) => (
              <li key={index}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="image"
                  height={56}
                  width={56}
                />
                <h4 className="title">{item.title}</h4>
                <p className="desc">{item.description}</p>
              </li>
            ))}
          </ul>
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
            <h3 className="heading">{content.call_to_action.heading}</h3>
            <a className="btn" href={content.call_to_action.link}>
              {content.call_to_action.btn}
            </a>
            <div className="img-wrapper">
              <Image
                src={content.call_to_action.image}
                alt={content.call_to_action.heading}
                className="image"
                height={414}
                width={362}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
