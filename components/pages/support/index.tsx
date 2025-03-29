import { Collapse, CollapseProps } from "antd";

import content from "@/components/pages/support/index.json";
import * as Icons from "@/icons";

export default function Component() {
  return (
    <main className="support-page">
      <section className="introduction">
        <div className="container">
          <h2 className="heading">{content.introduction.heading}</h2>
          <p className="description">{content.introduction.description}</p>
          <ul className="list">
            {content.introduction.items.map((item, index) => {
              const Icon = Icons[item.icon as keyof typeof Icons];

              return (
                <li key={index}>
                  {Icon && <Icon className="icon" />}
                  <h4 className="title">{item.title}</h4>
                  <p className="desc">{item.description}</p>
                  <a href={item.href?item.href:'#'} target={item.target?item.target:'_blank'} className="link">
                    {item.link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
