import React, { useState, useEffect, useRef } from 'react';
import './Events.css';

const Events = ({ Header, darkTheme }) => {
  const [activeItem, setActiveItem] = useState(null);
  const wrapperRef = useRef(null); // Reference to the wrapper for detecting outside
  const events = [
    {
      imageUrl:
        "https://i.pinimg.com/564x/45/6e/10/456e100b6448a5b773a0363d1b2c8d55.jpg",

      url: "https://www.google.com",
      title: "",
      description: "",
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/-huSeQKd_-p8/W5DrHdvLOBI/AAAAAAABYQA/RP1o15IgfdsF67agyFnqrRBOYt_A_WaSwCHMYCw/cricova-winery-913?imgmax=1600",
      url: "https://e22u.short.gy/KTU286",
      title: "",
      description: "",
    },
    {
      imageUrl:
        "https://facts.net/wp-content/uploads/2023/07/15-facts-about-charleston-wine-food-festival-1690069801.jpg",
      url: "https://charlestonwineandfood.com/",
      title: "Charleston Wine & Food Festival",
      description: "Where chefs, painters, and musicians swap their tools for aprons and corkscrews. It's not just a feast for your taste buds; it's a banquet for your soul. Here, fine dining meets fine art, all served with a side of Southern charm. Forget ordinary festivals—this is where gastronomy and gallery walk hand in hand, proving Charleston knows how to throw a party with palette and palate!"
    },
    {
      imageUrl:
        "https://orlandoflconnections.com/wp-content/uploads/2014/09/fwc-1.jpg",
      url: "https://swandolphinfoodandwineclassic.com/",
      title: "The Food & Wine Classic",
      description:
        "Get ready for a culinary magic carpet ride at the Food and Wine Classic in Walt Disney World! Indulge in endless eats and sips with a side of Disney dazzle. It's a festival where wine flows like pixie dust, and the food is fit for a prince or princess. Come for the taste, stay for the fairy-tale fun and maybe even spot a dolphin doing the backstroke!",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/6f/e0/99/6fe0994de4b59b7e0bcec893f211aaa9.jpg",
      url: "https://www.carnifest.com/its-beaujolais-nouveau-time-festival-2024/",
      title: "Beaujolais Nouveau Time Festival",
      description:
        "Mark your calendars for the Beaujolais Nouveau Time Festival, the ultimate wine bash! Every November, South Burgundy buzzes with 12 varieties of fresh wine, music, and fireworks. It's where wine flows and spirits soar. Ready your taste buds for a jubilee drenched in tradition and the newest reds. Cheers to adventure!",
    },
    {
      imageUrl:
        "https://cdn1.discovertuscany.com/img/montepulciano/bravio-delle-botti/bravio-delle-botti23.jpg?auto=compress,enhance,format&h=750",
      url: "https://www.discovertuscany.com/montepulciano/bravio-delle-botti.html",
      title: "Barrel race at Montepulciano",
      description:
        "Imagine a Tuscan festival where wine barrels become racing stars! The Bravìo delle Botti sees eight districts in a barrel-rolling battle through Poliziana's heart, all for a painted prize. It's a test of strength, strategy, and stamina, with every pusher dreaming of victory in the shadow of the Duomo. Pure, barrel-rolling brilliance!",
    },
    {
      imageUrl:
        "https://moldovatovisit.eu/wp-content/uploads/2018/04/moldova-wineries-tour-4-1024x658.jpg",
      url: "https://moldova.travel/en/rutele-vietii/ziua-nationala-a-vinului/",
      title: "Moldova's Wine Festival",
      description:
        "Dive into Moldova's wine festival, a vibrant showcase of national pride with stands flaunting wines from dry to sweet, aged in legendary cellars. Feast on traditional fare, from grilled delights to placinta, against a backdrop of folk music and dance. It's more than a tasting; it's a cultural immersion!",
    },
    {
      imageUrl:
        "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/420046892_768184115346173_77036514565723437_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=K7UvmG8bUaUAX_ix0mK&_nc_ht=scontent-ord5-2.xx&oh=00_AfDqE2Dy_tMfBtMQl0bhZKxjgZvp-ZzgJLgoMlkG871c9w&oe=66066589",
      url: "https://niagarawinefestival.com/",
      title: "SPRING SPARKLES FESTIVAL",
      description:
        "Let’s add a bit of sparkle to the early days of spring! Wake up from winter and kick off spring with fizz and fun. The Spring Sparkles Festival celebrates all 100% Ontario VQA Sparkling wines – traditional or charmat method, of any varietal or style. Integrate this wine into your everyday life and add some sparkle to your day, even in the humdrum of a long, Canadian winter.",
    },
    {
      imageUrl:
        "https://www.spain.info/export/sites/segtur/.content/imagenes/reportajes/rioja-la/fiesta-vendimia-la-rioja.jpg",
      url: "https://www.spain.info/en/discover-spain/fiestas-grape-harvest-rioja/",
      title: "The San Mateo Festival ",
      description:
        "Stomp into Spain's San Mateo Festival, where your feet get a juicy workout squishing grapes! It's a week of wine worship in Rioja, blending tradition with toe-tapping fun since '56. Dance, drink, and discover wine-making from vine to glass. It's the grape-est party ever, where every squish is a wish for fun!",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/3c/77/da/3c77da9a3e11cf13a0f82d77ac00d9d0.jpg",
      url: "",
      title: "",
      description: "",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/02/51/5d/02515dcf6a7122f956db8c82bc19babf.jpg",
      url: "",
      title: "",
      description: "",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/58/52/66/585266a2629197a265adbdfe6d0d56a5.jpg",
      url: "",
      title: "",
      description: "",
    },
  ];

  const handleClick = (index) => {
    setActiveItem(index === activeItem ? null : index); // Toggle active state or set new
  };

  useEffect(() => {
    // Function to check if click is outside the items and reset activeItem
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActiveItem(null); // Deactivate all items
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);
 
  return (
    <section id="events" className={`section ${darkTheme ? "bg-dark-1" : ""}`}>
      <div className={`container ${Header ? "" : "px-lg-5"}`}>
        <div className="position-relative d-flex text-center mb-5">
          <h2 className={`text-24 fw-600 w-100 mb-0 ${darkTheme ? "text-muted opacity-1" : "text-light opacity-4"}`}>
            Grape Gatherings
          </h2>
          <p className={`text-9 text-dark fw-700 position-absolute w-100 align-self-center lh-base mb-0 ${darkTheme ? "text-white" : "text-dark"}`}>
            WINE EVENTS
            <span className="heading-separator-line d-block mx-auto"></span>
          </p>
        </div>

        <div className="wrapper" ref={wrapperRef}>
          <div className="items">
            {events.map((event, index) => (
              <div key={index}
               className="item2" 
               tabIndex="0" 
               onClick={() => handleClick(index)} 
               style={{ 
                backgroundImage: `
                  linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 15%),
                  linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 35%),
                  url(${event.imageUrl})
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                {/* Conditionally render item-content based on activeItem */}
                {activeItem === index && (
                  <div className="item-content">
                    <a href={event.url} className="event-title" target="_blank" rel="noopener noreferrer">{event.title}</a>
                    <p className="event-description">{event.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Events;



