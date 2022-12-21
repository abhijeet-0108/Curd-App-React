import React from "react";

const About = () => {
  return (
    <div className="container mt-4">
      <h1>This funny tag syntax is neither a string nor HTML.</h1>
      <br />
      <p>
        It is called JSX, and it is a syntax extension to JavaScript. We
        recommend using it with React to describe what the UI should look like.
        JSX may remind you of a template language, but it comes with the full
        power of JavaScript.
      </p>
      <br />
      <br />
      <p>
        JSX produces React “elements”. We will explore rendering them to the DOM
        in the next section. Below, you can find the basics of JSX necessary to
        get you started.
      </p>
      <h2>Why JSX?</h2>
      <br />
      <br />
      <p>
        React embraces the fact that rendering logic is inherently coupled with
        other UI logic: how events are handled, how the state changes over time,
        and how the data is prepared for display. Instead of artificially
        separating technologies by putting markup and logic in separate files,
        React separates concerns with loosely coupled units called “components”
        that contain both. We will come back to components in a further section,
        but if you’re not yet comfortable putting markup in JS, this talk might
        convince you otherwise.
      </p><br/><br/>
      <p>
        React also known as React.js or ReactJS is a free and open-source
        front-end JavaScript library for building user interfaces based on UI
        components. It is maintained by Meta formerly Facebook and a community
        of individual developers and companies. React can be used as a base in
        the development of single-page, mobile, or server-rendered applications
        with frameworks like Next.js. However, React is only concerned with
        state management and rendering that state to the DOM, so creating React
        applications usually requires the use of additional libraries for
        routing, as well as certain client-side functionality.
      </p>
      <br />
      <p>
        React adheres to the declarative programming paradigm. Developers design
        views for each state of an application, and React updates and renders
        components when data changes. This is in contrast with imperative
        programming.
      </p>
      <br />
      <p>
        React code is made of entities called components. These components are
        reusable and must be formed in the SRC folder following the Pascal Case
        as its naming convention (capitalize camelCase). Components can be
        rendered to a particular element in the DOM using the React DOM library.
        When rendering a component, one can pass the values between components
        through "props".
      </p>
    </div>
  );
};

export default About;
