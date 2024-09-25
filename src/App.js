import React from "react";
import Header from "./components/Header/Header.jsx";
import { AppContainer } from "./App.styled";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Header />} />

        {/* <Header /> */}
      </Routes>
    </AppContainer>
  );
}

export default App;
