import { homeCopy } from "@/app/copy/Home";
import styles from "./../../(pages)/home/page.module.scss";
import { Col, Row } from "antd";
export function SegmentTotal() {
  return (
    <>
      <div className="vult-total">
        <div className="section-totals">
          <p
            className="title monserrat-bold title text-uppercase"
            dangerouslySetInnerHTML={{ __html: homeCopy.vult_total.title }}
          ></p>
          <Row justify="center" className="totals" gutter={16}>
            {homeCopy.vult_total.totals.map((item, index) => {
              return (
                <Col
                  className="totals-col"
                  xs={{
                    flex: "100%",
                  }}
                  sm={{
                    span: 12,
                  }}
                  md={{
                    span: 12,
                  }}
                  lg={{
                    span: 8,
                  }}
                  xl={{
                    span: 8,
                  }}
                  key={index}
                >
                  <div className="item">
                    <span className="number gradient-text monserrat">
                      {item.number}
                    </span>
                    <span className="totals-title monserrat text-uppercase">{item.title}</span>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="section-trusted">
          <p className="trusted-title text-uppercase">
            {homeCopy.vult_total.trusted_title}
          </p>
          <Row justify="center" className="trusted" gutter={[50, 50]}>
            {homeCopy.vult_total.trusted.map((item, index) => {
              return (
                <Col className="trusted-col" key={index}>
                  <div key={index} className="item ">
                    <img src={item.img} alt="trusted" />
                    <span
                      className="trusted-by-title monserrat"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></span>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
}
