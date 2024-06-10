export default () => (`
    <div class="register-container">
      <h2>Register</h2>
      <form id="register-form">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  `);
