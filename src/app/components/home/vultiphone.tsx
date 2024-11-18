import { homeCopy } from "@/app/copy/Home";
import Image from "next/image";
export function VultiPhone() {
  return (
    <>
      <div className="vultiphone" id="vultiphone">
      <section className="hero-section">
        <div className="vultiphone-container">
          <div className="hero-content">
            <strong>{homeCopy.vultiphone.site_name}</strong>
            <p>{homeCopy.vultiphone.site_description}</p>
            <div className="order-btn">
              <a href={homeCopy.vultiphone.btn_order_url} target="blank" className="align-items-center btn btn-color btn-primary d-flex justify-content-center">
                {homeCopy.vultiphone.btn_order}
              </a>
              <span>{homeCopy.vultiphone.shipping}</span>
            </div>
          </div>
          <Image
            width={376}
            height={485}
            src="/img/vulti-phone.png"
            alt="Hero Image"
            className="image"
          />
        </div>
      </section>
      </div>
    </>
  );
}
