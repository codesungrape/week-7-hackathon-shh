import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FlashcardsContainer from "../FlashcardsContainer/FlashcardsContainer";
import Form from "../Form/Form";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Form />
      <FlashcardsContainer />
      <Footer />
    </>
  );
}

export default App;
