<Fragment>
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          !isAuthenticated ? (
            <Login setAuth={setAuth} />
          ) : (
            <Dashboard setAuth={setAuth} />
          )
        }
      />
      <Route
        path="/register"
        element={
          !isAuthenticated ? (
            <Register setAuth={setAuth} />
          ) : (
            <Dashboard setAuth={setAuth} />
          )
        }
      />
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? (
            <Dashboard setAuth={setAuth} />
          ) : (
            <Login setAuth={setAuth} />
          )
        }
      />
    </Routes>
  </BrowserRouter>
</Fragment>;
