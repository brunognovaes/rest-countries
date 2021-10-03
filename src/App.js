import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import themes from "./styles/themes";
import { Container } from "./style";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Header theme={theme} setTheme={setTheme} />
      <Container>
        <Switch>
          <Route exact path="/">
            <Home theme={theme} />
          </Route>
          <Route
            path="/details/:id"
            component={(props) => <Details {...props} />}
          />
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
