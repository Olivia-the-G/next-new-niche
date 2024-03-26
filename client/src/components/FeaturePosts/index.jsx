import React, { useEffect, useState, useRef } from "react";
import Isotope from "isotope-layout";
import PostDetailsModal from "../PostDetailsModal";
import "./FeaturePosts.css";

const FeaturePosts = () => {
  const isotope = useRef();

  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    FOODWINE: "Food and Wine Pairing",
    CHEESEWINE: "Cheese and Wine Pairing",
    OTHER: "Random Articles",
  };

  const projectsData = [
    {
      id: 1,
      title: "Pinot Noir with earthy flavors",
      projectInfo:
        "Recipes made with earthy ingredients like mushrooms and lentils taste great with reds like Pinot Noir and Dolcetto, which are light-bodied but full of savory depth. Pinot is also often delicious alongside salmon, proving that red wine and fish can go together brilliantly.",
      client: "Admin",
      date: "May 06, 2019",
      thumbImage:
        "https://github.com/Olivia-the-G/next-new-niche/blob/main/client/src/img/01%20-%20Pinot%20Noir%20with%20earthy%20flavors.png?raw=true",

      sliderImages: [
        "../src/img/01 - Mushroom-Sauce-2.jpeg",
        "../src/img/01 - Mushroom-Sauce.jpeg",
      ],
      categories: ["*", filters.FOODWINE],
    },

    {
      id: 16,
      title: "Fresh Cheese",
      projectInfo:
        "The best pairings for these types of cheese are light-bodied white wines, those with fruit-forward profiles and tight acidities. Wines are meant to be drunk fresh with no aging and spend most of their time in stainless steel tanks. Think Sauvignon Blanc, unoaked Chardonnay, Pinot Grigio, and Vermentino.",
      client: "Admin",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 18, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "../src/img/16 - 01.jpeg",
      sliderImages: ["../src/img/16 - 02.jpeg", "../src/img/16 - 03.jpeg"],
      categories: ["*", filters.CHEESEWINE],
    },

    {
      id: 3,
      title: "Champagne with anything salty",
      projectInfo:
        "Many dry sparkling wines, such as brut Champagne and Spanish cava, actually have a faint touch of fruity sweetness. This makes them extra-refreshing when served with salty foods. They also cut through the richness and oil of fried dishes: Bubbly and a bowl of potato chips is terrific.",
      client: "Admin",
      date: "September 16, 2019",
      thumbImage: "../src/img/03 - Champagne 2.jpeg",
      sliderImages: [
        "../src/img/03 - Champagne 1.png",
        "../src/img/03 - Champagne 3.jpeg",
      ],
      categories: ["*", filters.FOODWINE],
    },

    {
      id: 4,
      title: "Cabernet Sauvignon with juicy red meat",
      projectInfo:
        "California Cabernet, Bordeaux, and Bordeaux-style blends are terrific with steaks and lamb dishes. The firm tannins in Cab cut through the fat and protein, which in turn smooth out the tannins. It's a perfect symbiotic relationship in each bite.",
      client: "Admin",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "October 02, 2019",

      thumbImage: "../src/img/04 - Cabernet Sauvignon with juicy red meat.png",
      sliderImages: [
        "../src/img/04 - Best+Sunday+Roast+Wines+roast+beef+thethreedrinkers.jpeg",
        "../src/img/04 - Wine_to_Pair_with_Steak.jpg",
      ],
      categories: ["*", filters.FOODWINE],
    },

    {
      id: 6,
      title: "Oak Used for Spirit Casks",
      projectInfo:
        "Spirits and oak have been almost inseparable since the 3rd century, back when the Romans swapped in barrels for the clay pots and other breakable vessels they traditionally used for booze-making. But the complex flavors these casks imparted were only later realized through sheer circumstance, after barrels were left to sit for extended periods in transit overseas. Eventually, Cognac producers began charring barrels to break down and caramelize the wood’s sugars, and distillers have never looked back.",
      client: "Admin",
      date: "May 06, 2020",
      thumbImage: "../src/img/Oak.png",
      sliderImages: [
        "../src/img/white-vs-red-wine.jpg",
        "../src/img/white-vs-red.png",
      ],

      categories: ["*", filters.OTHER],
    },

    {
      id: 7,
      title: "Wine Producing Countries",
      projectInfo:
        "Italy has been leading the way for several years now, making almost 20% of the global production, followed by France, ranked as the second largest wine producer, then Spain, while it has the most vineyard surface area in the world, it comes third on the list of the top wine-producing countries.This three countries produces nearly half of the world’s wine.",
      client: "Admin",
      date: "March 06, 2024",
      thumbImage: "../src/img/vineyards-italy.jpeg",
      sliderImages: ["./src/img/Italy Wine Map.png", "../src/img/TOP-5.PNG"],
      categories: ["*", filters.OTHER],
    },

    {
      id: 17,
      title: "Soft, Creamy Cheese",
      projectInfo:
        "To pair these cheeses, we must find bold wines that won’t fall short. This is where white wine and cheese pairing is essential. Full-bodied Chardonnays, traditional white Riojas, or oak-aged Viognier will have the necessary weight for the task. The dairy creaminess typical in some white wines, a product of malolactic fermentation, mirrors the flavors in cheese perfectly.",
      client: "Admin",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "September 18, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },

      thumbImage: "../src/img/17 - 01.jpeg",
      sliderImages: ["../src/img/17 - 02.jpeg", "../src/img/17 - 03.jpeg"],
      categories: ["*", filters.CHEESEWINE],
    },

    {
      id: 18,
      title: "Aged Semi-Hard and Hard Cheese",
      projectInfo:
        "As cheese ages, it loses moisture and gains flavor concentration. Cheddar, Edam, Emmental, and Gouda are considered semi-hard cheeses. Their creaminess is characteristic, and so is their firm but malleable texture. Moreover, the flavor can be mild or quite assertive. Semi-hard cheeses will pair nicely with medium-bodied red wines like Merlot, Malbec, or a Montepulciano.",
      client: "Admin",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "December 24, 2020",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "../src/img/18 - 01.jpeg",
      sliderImages: ["../src/img/18 - 02.jpeg", "../src/img/18 - 03.jpeg"],
      categories: ["*", filters.CHEESEWINE],
    },

    {
      id: 19,
      title: " How to store your wine properly",
      projectInfo:
        "The golden rule of storing wine, whether it’s for next month or next decade, is to keep it somewhere (1) cool, (2) dark, and (3) away from temperature fluctuations, and (4) away from vibrations. Pro Tip: Wine bottles with corks in them should be stored on their side so that the cork can remain moist and sealed. Wines with screw caps can be stored upright.",
      client: "Admin",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "November 14, 2019",
      thumbImage: "../src/img/store-wine1.png",
      sliderImages: ["../src/store-wine.jpeg", "../src/img/store-wine-2.jpeg"],
      categories: ["*", filters.OTHER],
    },
  ];


  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    const handleResize = () => {
      isotope.current.layout();
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      isotope.current.destroy();
    };
  }, []);

  // handle images loaded and filter key change
  useEffect(() => {
    if (projectsData.length && imagesLoaded === projectsData.length) {
      isotope.current.arrange({
        filter: filterKey === "*" ? "*" : `.${filterKey}`,
      });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  return (
    <>
      <section id="portfolio" className="container px-lg-5 min-vh-100">
        <div className="container px-lg-5">
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2 className="text-24 fw-600 w-100 mb-0 text-light opacity-4">
              Currated Corks
            </h2>
            <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0">
              FEATURED POSTS
              <span className="heading-separator-line  d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}

          {/* Filter Menu */}
          <ul className="position-relative d-flex mb-5 justify-content-evenly">
            <li className="nav-link">
              <div
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
                style={{ cursor: "pointer" }}
              >
                All
              </div>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-link" key={i}>
                <div
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  style={{ cursor: "pointer" }}
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </div>
              </li>
            ))}
          </ul>

          {/* portfolio cards */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project) => {
                  if (project.categories.includes(filterKey)) {
                    return (
                      <div
                        className={
                          "col-sm-6 col-lg-4 filter-item " +
                          project.categories.join(" ")
                        }
                        key={project.id}
                      >
                        <div className="portfolio-box rounded">
                          <div className="portfolio-img rounded">
                            <img
                              onLoad={() => {
                                setimagesLoaded(imagesLoaded + 1);
                              }}
                              className="img-fluid d-block portfolio-image"
                              src={project.thumbImage}
                              alt=""
                            />
                            <div className="portfolio-overlay">
                              <a
                                className="popup-ajax stretched-link"
                                href=""
                                onClick={() => {
                                  setSelectedProjectDetails(project);
                                }}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              />
                              <div className="portfolio-overlay-details">
                                <h5 className="text-white fw-400">
                                  {project.title}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return "";
                  }
                })}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <PostDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={false}
        ></PostDetailsModal>
      </div>
    </>
  );
};

export default FeaturePosts;
