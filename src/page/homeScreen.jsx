import React from "react";

function HomeScreen() {
  return (
    <div className="home-screen">
      <header>
        <h1>Welcome to Our Website</h1>
      </header>
      <main>
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            {/* Add more features here */}
          </ul>
        </section>
        <section className="about-us">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque lacus vitae scelerisque tristique. Donec vel neque a
            magna viverra posuere.
          </p>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Our Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default HomeScreen;
