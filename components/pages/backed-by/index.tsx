import Image from "next/image";

import content from "@/components/pages/backed-by/index.json";

export default function Component() {
  return (
    <main className="backed-by-page">
      <section className="introduction">
        <div className="container">
          <h2
            className="heading"
            dangerouslySetInnerHTML={{
              __html: content.heading,
            }}
          />
        </div>
        <span className="gradient-shadow gradient-shadow-lt" />
      </section>

      <section className="funds">
        <div className="container">
          <div className="wraper">
            <h3
              className="heading"
              dangerouslySetInnerHTML={{
                __html: content.funds.heading,
              }}
            />
            <ul className="list">
              {content.funds.items.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      className="image"
                      height={100}
                      width={100}
                    />
                    <span
                      className="title"
                      dangerouslySetInnerHTML={{
                        __html: item.title,
                      }}
                    />
                    <span className="contact">
                      <Image
                        src="/images/backed-by/twitter.png"
                        alt={item.title}
                        className="icon"
                        height={25}
                        width={25}
                      />
                      {item.twitter}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="funders">
        <div className="container">
          <div className="wraper">
            <h3
              className="heading"
              dangerouslySetInnerHTML={{
                __html: content.founders.heading,
              }}
            />
            <ul className="list">
              {content.founders.items.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>
                    <Image
                      src={item.src}
                      alt={item.name}
                      className="image"
                      height={100}
                      width={100}
                    />
                    <span
                      className="title"
                      dangerouslySetInnerHTML={{
                        __html: item.name,
                      }}
                    />
                    <span
                      className="organ"
                      dangerouslySetInnerHTML={{
                        __html: item.organ,
                      }}
                    />
                    <span className="contact">
                      <Image
                        src="/images/backed-by/twitter.png"
                        alt={item.twitter}
                        className="icon"
                        height={25}
                        width={25}
                      />
                      {item.twitter}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="kols">
        <div className="container">
          <div className="wraper">
            <h3
              className="heading"
              dangerouslySetInnerHTML={{
                __html: content.kols.heading,
              }}
            />
            <ul className="list">
              {content.kols.items.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      className="image"
                      height={100}
                      width={100}
                    />
                    <span
                      className="title"
                      dangerouslySetInnerHTML={{
                        __html: item.title,
                      }}
                    />
                    <span className="contact">
                      <Image
                        src="/images/backed-by/twitter.png"
                        alt={item.title}
                        className="icon"
                        height={25}
                        width={25}
                      />
                      {item.twitter}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
