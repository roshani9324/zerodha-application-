import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 m-3 " id="supportWrapper">
        <h4 className="fs-3 ">Support portal</h4>
        <a href=" " id="underline">
          Track Ticket
        </a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            id="search-text"
            type="text"
            class="form-control typeahead"
            autocomplete="off"
            placeholder="Eg: how do i activate F&amp;O, why is my order getting rejected ..."
            autofocus=""
          />

          <br />
          <a href=" " id="underline">
            Track account opening
          </a>
          <a href=" " id="underline">
            Track segment activation
          </a>
          <a href=" " id="underline">
            Intraday margins
          </a>
          <a href=" " id="underline">
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href=" ">Latest Intraday leverages and Square-off timings</a>
            </li>
            <li>
              <a href=" ">Surveillance measure on scrips - December 2024</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
