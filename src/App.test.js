import React from "react";
import { render, mount } from "@testing-library/react";
import App from "./App";
import { getByRole, fireEvent, getByPlaceholderText } from '@testing-library/dom'
import ContactForm from "./components/ContactForm";


test("renders App without crashing", () => {
  render(<App />);
});







