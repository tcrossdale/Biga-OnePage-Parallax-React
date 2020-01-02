import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";

const renderTextHTML = content => {
  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
};
const FrontPage = props => {
  const [frontPageContent, setFrontPageContent] = useState(props.appData);
  return (
    <React.Fragment>
      <main className="main-content">
        {frontPageContent &&
          frontPageContent.sections &&
          frontPageContent.sections.map((block, index) => (
            <section key={index} className={"page-block " + block.className}>
              <article className="container">
                {block.blockHeader ? (
                  <div className="block-header-wrap">
                    <header className="block-header">
                      <h3>{block.blockHeader}</h3>
                      <span className="divider"></span>
                    </header>
                    {block.blockHeaderBlurb ? (
                      <div className="block-header-blurb">
                        {block.blockHeaderBlurb}
                      </div>
                    ) : null}
                  </div>
                ) : null}
                <div className="block-content-wrap">
                  <div className="block-content">
                    {block.blockContent
                      ? renderTextHTML(block.blockContent)
                      : null}
                    {block.blockImageCarousel ? (
                      <ImageCarousel
                        items={1}
                        loop={true}
                        margin={0}
                        slides={block.blockImageCarousel.items}
                        className={block.blockImageCarousel.className}
                        nav={block.blockImageCarousel.nav}
                        dots={block.blockImageCarousel.dots}
                      />
                    ) : null}
                  </div>
                </div>
              </article>
            </section>
          ))}
      </main>
    </React.Fragment>
  );
};
const ImageCarousel = props => {
  return (
    <OwlCarousel
      items={props.items}
      className={props.className ? "owl-theme " + props.className : "owl-theme"}
      loop={props.loop}
      margin={props.margin}
      nav={props.nav}
      dots={props.dots}
    >
      {props.slides &&
        props.slides.map((item, index) => (
          <div
            key={index}
            className="item"
            style={
              item.image
                ? {
                    backgroundImage: "url(" + item.image + ")"
                  }
                : null
            }
          >
            {item.title ? <h3 className="title">{item.title}</h3> : null}
            {item.blurb ? <p className="blurb">{item.blurb}</p> : null}
            {item.html ? renderTextHTML(item.html) : null}
          </div>
        ))}
    </OwlCarousel>
  );
};

export default FrontPage;
