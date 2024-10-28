import { homeCopy } from "@/app/copy/Home";
import styles from "./../../(pages)/home/page.module.scss";
import { Flex } from "antd";
export function SegmentTotal() {
  return (
    <>
       <div className="vult-total">
        <div className="section-totals">
          <p
            className="title monserrat-bold title text-uppercase"
            dangerouslySetInnerHTML={{ __html: homeCopy.vult_total.title }}
          ></p>
          <ul className="totals">
            <Flex wrap justify={"center"} align={"center"} gap={40}>
              {homeCopy.vult_total.totals.map((item, index) => {
                return (
                  <li className="totals-li" key={index}>
                    <div className="item">
                      <span className="number gradient-text monserrat">
                        {item.number}
                      </span>
                      <span className="totals-title monserrat text-uppercase">
                        {item.title}
                      </span>
                    </div>
                  </li>
                );
              })}
            </Flex>
          </ul>
        </div>
        <div className="section-trusted">
          <p className="trusted-title text-uppercase">
            {homeCopy.vult_total.trusted_title}
          </p>
          <ul className="trusted">
            <Flex wrap gap={20} justify={"center"} align={"center"}>
              {homeCopy.vult_total.trusted.map((item, index) => {
                return (
                  <li className="trusted-li" key={index}>
                    <div key={index} className="item ">
                      <img src={item.img} alt="trusted" />
                      <span
                        className="trusted-by-title monserrat"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      ></span>
                    </div>
                  </li>
                );
              })}
            </Flex>
          </ul>
        </div>
      </div>
    </>
  );
}
