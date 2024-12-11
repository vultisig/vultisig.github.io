
import { Collapse, CollapseProps } from "antd";
import content from "@/components/pages/faq/index.json";

const items: CollapseProps["items"] = content.items.map((item, index) => ({
  key: index + 1,
  label: item.q,
  children: <p dangerouslySetInnerHTML={{ __html: item.a }}></p>,
}));
export default function Component() {
  return (
    <main className="faq-page">
     <section className="faq">
          <div className="container">
            <h2  className="heading">{content.heading}</h2>
          
            <Collapse items={items} defaultActiveKey={[1]} />
          </div>
        </section>
    </main>
  );
}
