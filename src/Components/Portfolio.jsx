/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "News Classifier",
    description:
      "A web app that classifies news articles into 4 categories: Business, Entertainment, Politics, and Sports. The model was trained using the Multinomial Naive Bayes algorithm.",
    url: "https://zeleoeo-verbose-enigma-4px66ppqx6phvxp-1234.preview.app.github.dev/",
  },
  {
    title: "Artificial Intelligence Flappy Bird",
    description:
      "Artificial Intelligence trained to play Flappy Bird using the NEAT Library in python.",
    url: "https://github.com/ZeleOeO/Artificial-Intelligence-Flappy-Bird",
  },
  {
    title: "Nebula",
    description:
      "A pygame learning course for beginners. The course takes you through the basics of pygame and how to create a simple game.",
    url: "https://github.com/poopsicles/nebula",
  },
  {
    title: "G313 Calculator",
    description:
      "Created a calculator using HTML, CSS, and JavaScript. Includes basic math functions and a dark mode toggle.",
    url: "https://github.com/Rai-nee/Team_Project",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
