import { useState } from "react";
import "./App.css";

function App() {
  const extensionArr = [
    {
      browser: "Chrome",
      minBrowser: 62,
      browserImg: "../images/logo-chrome.svg",
    },
    {
      browser: "Firefox",
      minBrowser: 55,
      browserImg: "../images/logo-firefox.svg",
    },
    {
      browser: "Opera",
      minBrowser: 46,
      browserImg: "../images/logo-opera.svg",
    },
  ];

  const qnaArr = [
    {
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, reiciendis. Excepturi nesciunt fuga neque porro, quibusdam necessitatibus! Deserunt, tempora voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, reiciendis. Excepturi nesciunt fuga neque porro, quibusdam necessitatibus! Deserunt, tempora voluptatum",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, reiciendis. Excepturi nesciunt fuga neque porro, quibusdam necessitatibus! Deserunt, tempora voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, reiciendis. Excepturi nesciunt fuga neque porro, quibusdam necessitatibus! Deserunt, tempora voluptatum",
    },
    {
      question: "is there a mobile app?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, reiciendis. Excepturi nesciunt fuga neque porro, quibusdam necessitatibus! Deserunt, tempora voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, reiciendis. Excepturi nesciunt fuga neque porro, quibusdam necessitatibus! Deserunt, tempora voluptatum",
    },
    {
      question: "what about the Chromium browsers?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, reiciendis. Excepturi nesciunt fuga neque porro, quibusdam necessitatibus! Deserunt, tempora voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, reiciendis. Excepturi nesciunt fuga neque porro, quibusdam necessitatibus! Deserunt, tempora voluptatum",
    },
  ];

  const featureArr = [
    {
      image: "../images/illustration-features-tab-1.svg",
      title: "Bookmark in one click",
      descrip: `Organize your bookmarks however you like. Our simple drag-and-drop interface 
  gives you complete control over how you manage your favourite sites.`,
    },
    {
      image: "../images/illustration-features-tab-2.svg",
      title: " Intelligent search",
      descrip: ` Our powerful search feature will help you find saved sites in no time at all. 
  No need to trawl through all of your bookmarks.`,
    },
    {
      image: "../images/illustration-features-tab-3.svg",
      title: "Share your bookmarks",
      descrip: `  Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.`,
    },
  ];

  const featureNames = [
    { name: "simple bookmarking" },
    { name: "speedy searching" },
    { name: "easy sharing" },
  ];

  const [showNav, setShowNav] = useState(false);

  const [activeFeature, setActiveFeature] = useState();
  const [activeQ, setActiveQ] = useState();

  const [margin, setMargin] = useState(20);

  const [email, setEmail] = useState();
  const [invalidEmail, setInvalidEmail] = useState(false);

  function feature(selected) {
    console.log(activeFeature);
    setActiveFeature(
      selected === activeFeature ? null : selected.target.textContent
    );

    if (selected.target.textContent === "speedy searching") {
      if (window.innerWidth > 1000) {
        setMargin(-770);

      } 
      else {
        setMargin(-370);
      }
    } else if (selected.target.textContent === "easy sharing") {
      if (window.innerWidth > 1000) {
        setMargin(-1570)
      }
      else{setMargin(-750);}
    } else {
      setMargin(20);
    }
  }


  function drop(selected) {
    setActiveQ(
      selected.target.previousElementSibling.textContent === activeQ
        ? null
        : selected.target.previousElementSibling.textContent
    );
  }

  function validateEmail() {
    if (!/@/.test(email)) {
      setInvalidEmail(true);
    }
  }

  return (
    <>
      <nav>
        <img className="logo" src="../images/logo-bookmark.svg" alt="" />

        <img
          onClick={() => setShowNav(true)}
          className="burger"
          src="../images/icon-hamburger.svg"
          alt=""
        />

        {showNav && (
          <div className="mobile-nav">
            <div className="logo-and-close">
              <svg
                className="nav-logo"
                width="148"
                height="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z"
                    fill="#ffff"
                    fill-rule="nonzero"
                  />
                  <g>
                    <circle fill="#ffff" cx="12.5" cy="12.5" r="12.5" />
                    <path
                      d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z"
                      fill="hsl(229, 31%, 21%)"
                    />
                  </g>
                </g>
              </svg>

              <img
                className="nav-close"
                src="../images/icon-close.svg"
                alt=""
                onClick={() => setShowNav(false)}
              />
            </div>

            <ul>
              <hr />
              <a href="#">features</a>
              <hr />
              <a href="#">pricing</a>
              <hr />
              <a href="#">contact</a>
              <hr />
            </ul>

            <button className="log-in">login</button>

            <div className="nav-socials">
              <img src="../images/icon-facebook.svg" alt="" />
              <img src="../images/icon-twitter.svg" alt="" />
            </div>
          </div>
        )}

        <div className="desktop-nav">
          <ul className="desktop-nav-ul">
            <a href="#">features</a>
            <a href="#">pricing</a>
            <a href="#">contact</a>
          </ul>

          <button className="log-in-desktop">login</button>
        </div>
      </nav>

      <main>
        <img
          className="hero-image"
          src="../images/illustration-hero.svg"
          alt=""
        />
        <div className="hero-design-bg"></div>
        <div className="hero-texts">
          <h1 className="heading">a simple bookmark manager</h1>
          <p className="description">
            A clean and simple intergace to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          <div className="buttons-container">
            <button className="chrome-btn">Get it on Chrome</button>
            <button className="firefox-btn">Get it on Firefox</button>
          </div>
        </div>
      </main>

      <section className="features-container">
        <div className="features-intro">
          <h1 className="heading">Features</h1>
          <p className="description">
            Our aim is to make it quick and east for you to access your
            favourite websites. Your bookmarks sync between your device so you
            can access them on the go.
          </p>
        </div>

        <div onClick={feature} className="feature">
          <hr />
          {featureNames.map((item, index) => (
            <>
              <h4
                key={index}
                className={activeFeature === item.name ? "active-feature" : ""}
              >
                {item.name}
              </h4>
              <hr />
            </>
          ))}
        </div>

        <div className="feature-preview">
          <div className="feature-design-bg"></div>

          <div className="preview" style={{ marginLeft: margin + "px" }}>
            {featureArr.map((item, index) => (
              <div key={index} className="fea">
                <img className="feature-image" src={item.image} alt="" />

                <div>
                  <h1 className="feature-name">{item.title}</h1>
                  <p className="feature-desciption">{item.descrip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="extensions">
        <h1 className="heading">Download the extension</h1>
        <p className="desciption">
          We've got more browsers in the pipeline. Please do let us know if
          your've got a favourite you'd like us to prioritize
        </p>

        <div className="cards-container">
          {extensionArr.map((item) => (
            <div className="card">
              <img className="browser-image" src={item.browserImg} alt="" />
              <h5 className="browser-name">Add to {item.browser}</h5>
              <h6 className="browser-version">
                Minimum version {item.minBrowser}
              </h6>

              <img src="../images/bg-dots.svg" alt="" />

              <button className="add">Add & install extension</button>
            </div>
          ))}
        </div>
      </section>

      <section className="questions-container">
        <h1 className="heading">Frequently asked questions</h1>
        <p className="desciption">
          Here are some of our FAQs. if you have any other question you'd like
          answered please feel free to email us
        </p>

        {qnaArr.map((item) => (
          <div
            className="question"
            style={{ height: activeQ === item.question ? "220px" : "60px" }}
          >
            <div onClick={drop} className="q-arrow">
              <h5 className="ques">{item.question}</h5>

              <svg
                style={{
                  transform: activeQ === item.question && "rotate(180deg)",
                }}
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
              >
                <path
                  fill="none"
                  stroke={
                    activeQ === item.question ? "hsl(0, 94%, 66%)" : "#5267DF"
                  }
                  stroke-width="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
            </div>
            <p className="ans">{item.answer}</p>
          </div>
        ))}

        <button className="more-info">More Info</button>
      </section>

      <section className="contact-container">
        <h6>35,00 + already joined</h6>
        <h1>Stay up-to-date with that we're doing</h1>

        <div className="input-button">
          <div className="input-container">
            {invalidEmail && (
              <img className="error" src="../images/icon-error.svg" alt="" />
            )}
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter you email address"
              style={{ border: invalidEmail && "3px solid hsl(0, 94%, 66%)" }}
            />
            {invalidEmail && (
              <h5 className="error-text">Whoops make sure its an email.</h5>
            )}
          </div>
          <button onClick={validateEmail} className="contact-us">
            Contact Us
          </button>
        </div>
      </section>

      <footer>
        <svg
          className="footer-logo"
          width="148"
          height="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z"
              fill="#ffff"
              fill-rule="nonzero"
            />
            <g>
              <circle fill="#5267DF" cx="12.5" cy="12.5" r="12.5" />
              <path
                d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z"
                fill="#FFF"
              />
            </g>
          </g>
        </svg>

        <ul>
          <a href="#">Features</a>
          <a href="#">pricing</a>
          <a href="#">contact</a>
        </ul>

        <div className="socials">
          <img src="../images/icon-facebook.svg" alt="" />
          <img src="../images/icon-twitter.svg" alt="" />
        </div>
      </footer>
    </>
  );
}

export default App;
