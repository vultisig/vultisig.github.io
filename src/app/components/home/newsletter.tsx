import { homeCopy } from "@/app/copy/Home";
export function Newsletter() {
  return (
    <>
      <section className="stay-tuned">
        <div className="container">
          <div className="info">
            <strong className="title">{homeCopy.stay_tuned.title}</strong>
            <p className="description">{homeCopy.stay_tuned.description}</p>
          </div>
          <div className="get-update">
            <a
              href={homeCopy.stay_tuned.submit_url}
              target="blank"
              className="align-items-center btn btn-color btn-primary d-flex justify-content-center"
            >
              {homeCopy.stay_tuned.btn_text}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
