import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../src/landing_page/home/Hero.js";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero/>);
    const heroImage = screen.getByAltText("HeroImage");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  test("renders signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button", {
      name: /Signup Now/i, // Regex without quotes
    });
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });
});
