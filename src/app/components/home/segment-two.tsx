import { homeCopy } from "@/app/copy/Home";
import Image from "next/image";
export function SegmentTwo() {
  return (
    <>
      <div className="solutions  mt-5  text-center">
        <h2
          className="monserrat-bold mainTitle"
          dangerouslySetInnerHTML={{ __html: homeCopy.segment2.mainTitle }}
        ></h2>
        <span className="color-neutral monserrat-regular p-text px-3">
          <small
            dangerouslySetInnerHTML={{ __html: homeCopy.segment2.subTitle }}
          ></small>
        </span>
        <div className="mt-5">
  <div className="row gap-4 justify-content-center">
    {homeCopy.segment2.items.map((item, index) => (
      <div
        key={index}
        className="col-12 col-sm-6 col-md-4 col-lg-3 blue-section p-3 item"
      >
        <Image
          height={130}
          width={200}
          data-attribute="alt"
          src={item.img}
          className="mx-auto"
          alt="Vultisig is the next evolution in crypto vaults"
        />
        <h5 className="menlo mt-5 monserrat-bold mb-4 text-start title">
          {item.title}
        </h5>
        <p className="monserrat-regular text-start">
          <small
            className="desc"
            dangerouslySetInnerHTML={{ __html: item.description }}
          ></small>
        </p>
      </div>
    ))}
  </div>
</div>

      </div>
    </>
  );
}
