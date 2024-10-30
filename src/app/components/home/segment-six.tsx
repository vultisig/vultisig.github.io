import { homeCopy } from "@/app/copy/Home";
import Image from "next/image";
import { Col, Row } from "antd";
export function SegmentSix() {
  return (
    <>
      <div className="whoisfor text-center">
        <h2
          className="monserrat-bold"
          dangerouslySetInnerHTML={{ __html: homeCopy.segment6.mainTitle }}
        ></h2>
        <div className="mt-5 p-3">
          <Row
            className="whoisfor-list"
            justify="center"
            gutter={[32, 32]}
          >
            {homeCopy.segment6.items.map((item, index) => (
              <Col
                xs={{
                  flex: "100%",
                }}
                sm={{
                  span: 12,
                }}
                md={{
                  span: 11,
                }}
                lg={{
                  span: 12,
                }}
                xl={{
                  span: 6,
                }}
                key={index}
              >
                <div className="blue-section p-3 item h-100">
                  <Image
                    height={56}
                    width={56}
                    data-attribute="alt"
                    src={item.image}
                    className="mx-auto "
                    alt="Vultisig is the next evolution in crypto vaults"
                  />
                  <h5 className="menlo mt-3 monserrat-bold mb-4 title">
                    {item.title}
                  </h5>
                  <p className="monserrat-regular">
                    <small
                      className="desc"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></small>
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}
