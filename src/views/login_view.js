export default () => (`
  
  <div class="form-container">
    <p class="title">Welcome back</p>
    <form id="login-form" class="form">
      <input id="email" type="email" class="input" placeholder="Email">
      <input id="password" type="password" class="input" placeholder="Password">
      <p class="page-link">
        <span class="page-link-label">Forgot Password?</span>
      </p>
      <button class="form-btn">Log in</button>
    </form>
    <p class="sign-up-label">
      Don't have an account?<a href="register" class="sign-up-link">Sign up</a>
    </p>
  </div> `
);
