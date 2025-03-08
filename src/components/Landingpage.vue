<script setup>
// You can import icons or other components if needed
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="landing-container">
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="navbar-brand">
        <a href="#" class="logo">Talk<span>Ideas</span></a>
      </div>
      
      <div class="menu-toggle" @click="toggleMenu">
        <div class="hamburger" :class="{ 'active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div class="navbar-links" :class="{ 'active': isMenuOpen }">
        <a href="#" class="nav-link">Home</a>
        <a href="#features" class="nav-link">Features</a>
        <a href="#about" class="nav-link">About Us</a>
        <a href="#courses" class="nav-link">Courses</a>
        <a href="#contact" class="nav-link">Contact</a>
        <a href="#" class="nav-link nav-button">Sign In</a>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Talk<span>Ideas</span></h1>
        <p class="tagline">Education and Training Center</p>
        <div class="cta-buttons">
          <button class="primary-btn">Browse Ideas</button>
          <button class="secondary-btn">Learn More</button>
        </div>
      </div>
      <div class="hero-image">
        <img src="@/assets/images/talkideas.jpg" alt="TalkIdeas Education and Training" class="first-image">
      </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
      <h2>Why TalkIdeas?</h2>
      
      <div class="feature-cards">
        <div class="feature-card">
          <div class="feature-icon">🎯</div>
          <h3>Find Your Topic</h3>
          <p>Browse hundreds of curated talk ideas across various categories and domains.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">💡</div>
          <h3>Get Inspired</h3>
          <p>Overcome speaker's block with fresh perspectives and innovative angles.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">📈</div>
          <h3>Develop Content</h3>
          <p>Transform ideas into engaging presentations with our structured approach.</p>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="about" id="about">
      <h2>About Us</h2>
      <div class="about-content">
        <div class="about-text">
          <p>TalkIdeas was founded by a team of public speaking enthusiasts who recognized the challenge of finding compelling presentation topics. Our mission is to help speakers, educators, and professionals discover and develop engaging talk ideas.</p>
          <p>With years of experience in public speaking, education, and content development, our team curates the best presentation concepts that resonate with various audiences.</p>
        </div>
        <div class="about-image">
          <img src="@/assets/images/team-image.jpg" alt="TalkIdeas Team" class="team-photo">
        </div>
      </div>
    </section>

    <!-- Courses Section -->
    <section class="courses" id="courses">
      <h2>Our Courses</h2>
      <div class="course-cards">
        <div class="course-card">
          <div class="course-image">
            <div class="image-placeholder">
              <div class="placeholder-text">Course 1</div>
            </div>
          </div>
          <h3>Public Speaking Fundamentals</h3>
          <p>Master the basics of effective communication and confidence on stage.</p>
          <a href="#" class="course-link">Learn More</a>
        </div>
        
        <div class="course-card">
          <div class="course-image">
            <div class="image-placeholder">
              <div class="placeholder-text">Course 2</div>
            </div>
          </div>
          <h3>Advanced Presentation Design</h3>
          <p>Create visually stunning and impactful presentation materials.</p>
          <a href="#" class="course-link">Learn More</a>
        </div>
        
        <div class="course-card">
          <div class="course-image">
            <div class="image-placeholder">
              <div class="placeholder-text">Course 3</div>
            </div>
          </div>
          <h3>Storytelling for Speakers</h3>
          <p>Learn how to captivate audiences with compelling narratives.</p>
          <a href="#" class="course-link">Learn More</a>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works" id="how-it-works">
      <h2>How It Works</h2>
      
      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <h3>Browse Categories</h3>
          <p>Explore topics organized by industry, audience type, or presentation format.</p>
        </div>
        
        <div class="step">
          <div class="step-number">2</div>
          <h3>Select an Idea</h3>
          <p>Choose from our curated list of engaging talk concepts and frameworks.</p>
        </div>
        
        <div class="step">
          <div class="step-number">3</div>
          <h3>Customize & Present</h3>
          <p>Make it yours with our guidance and deliver a memorable presentation.</p>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials" id="testimonials">
      <h2>What Users Say</h2>
      
      <div class="testimonial-cards">
        <div class="testimonial">
          <p>"TalkIdeas helped me prepare for my conference presentation in half the time it usually takes."</p>
          <div class="testimonial-author">- Alex Johnson, Tech Speaker</div>
        </div>
        
        <div class="testimonial">
          <p>"I found the perfect angle for my TEDx talk thanks to the diverse ideas on this platform."</p>
          <div class="testimonial-author">- Samantha Lee, Educator</div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
      <h2>Contact Us</h2>
      <div class="contact-container">
        <div class="contact-info">
          <h3>Get in Touch</h3>
          <p>Have questions or feedback? We'd love to hear from you!</p>
          <div class="contact-item">
            <div class="contact-icon">📧</div>
            <p>talkideasonline@gmail.com</p>
          </div>
          <div class="contact-item">
            <div class="contact-icon">📱</div>
            <p>+63 0926 714 3040</p>
          </div>
          <div class="contact-item">
            <div class="contact-icon">📍</div>
            <p>Sogod, Philippines, 6606</p>
          </div>
        </div>
        <div class="contact-form">
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" placeholder="Your Name">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="Your Email">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" placeholder="Your Message" rows="5"></textarea>
            </div>
            <button type="submit" class="primary-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta">
      <h2>Ready to find your next talk idea?</h2>
      <p>Join thousands of speakers who've elevated their presentations</p>
      <button class="primary-btn large">Get Started Now</button>
    </section>
  </div>
</template>

<style scoped>

/*blaire edit*/
.first-image{
  max-width: 100%;
  width:100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: block;
  margin: 0 auto; 
}

.team-photo {
  max-width: 100%;
  width:100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: block;
  margin: 0 auto; 
}



/* Navbar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  box-sizing: border-box;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  color: #345801;
}

.logo span {
  color: #E29B03;
}

.navbar-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  color: #345801;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #E29B03;
  background-color: transparent;
}

.nav-button {
  background-color: #E29B03;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: #c98902;
  color: white;
}

.menu-toggle {
  display: none;
  cursor: pointer;
}

.hamburger {
  width: 24px;
  height: 20px;
  position: relative;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: #345801;
  border-radius: 2px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.hamburger span:nth-child(1) {
  top: 0px;
}

.hamburger span:nth-child(2) {
  top: 9px;
}

.hamburger span:nth-child(3) {
  top: 18px;
}

.hamburger.active span:nth-child(1) {
  top: 9px;
  transform: rotate(135deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.hamburger.active span:nth-child(3) {
  top: 9px;
  transform: rotate(-135deg);
}

.landing-container {
    width: 100%;
    max-width: 100%;
    min-height: 100vh; /* Ensure it takes full height */
    color: #345801;
    background-color: #ffffff; /* Ensure background color is applied */
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

/* Hero Section */
.hero {
    display: flex;
    align-items: center;
    min-height: 85vh;
    width: 100%;
    gap: 2rem;
    padding: 2rem 5%;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .features, .how-it-works, .testimonials, .cta, .about, .courses, .contact {
    width: 100%;
    box-sizing: border-box;
    padding: 5rem 5%;
    margin: 0 auto;
  }
  

.hero-content {
  flex: 1;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #345801;
}

h1 span {
  color: #E29B03;
}

.tagline {
  font-size: 1.5rem;
  color: #4F7D11;
  margin-bottom: 2rem;
  line-height: 1.4;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.primary-btn {
  background-color: #E29B03;
  color: white;
  border: none;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
}

.primary-btn:hover {
  background-color: #c98902;
}

.secondary-btn {
  background-color: transparent;
  color: #E29B03;
  border: 2px solid #E29B03;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.secondary-btn:hover {
  background-color: rgba(226, 155, 3, 0.1);
}

.hero-image {
  flex: 1;
}

.image-placeholder {
  background-color: #f7f9f0;
  height: 350px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4F7D11;
}

/* Features Section */
.features, .how-it-works, .testimonials, .cta, .about, .courses, .contact {
    padding: 4rem 5%;
    box-sizing: border-box;
  }

h2 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
  color: #345801;
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background-color: #f7f9f0;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(52, 88, 1, 0.07);
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #E29B03;
}

.feature-card h3 {
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  color: #345801;
}

.feature-card p {
  color: #4F7D11;
  line-height: 1.5;
}

/* About Us Section */
.about-content {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.about-text {
  flex: 1;
}

.about-text p {
  color: #4F7D11;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.about-image {
  flex: 1;
}

/* Courses Section */
.course-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.course-card {
  background-color: #f7f9f0;
  padding: 0 0 1.5rem 0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(52, 88, 1, 0.07);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.course-card:hover {
  transform: translateY(-5px);
}

.course-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.course-card h3 {
  margin: 1.5rem 1.5rem 0.8rem;
  font-size: 1.4rem;
  color: #345801;
}

.course-card p {
  margin: 0 1.5rem 1.5rem;
  color: #4F7D11;
  line-height: 1.5;
}

.course-link {
  display: inline-block;
  margin: 0 1.5rem;
  color: #E29B03;
  font-weight: 600;
  text-decoration: none;
}

.course-link:hover {
  text-decoration: underline;
  background-color: transparent;
}

/* Contact Section */
.contact-container {
  display: flex;
  gap: 3rem;
}

.contact-info, .contact-form {
  flex: 1;
}

.contact-info h3 {
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  color: #345801;
}

.contact-info p {
  color: #4F7D11;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.contact-icon {
  font-size: 1.5rem;
  color: #E29B03;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: #345801;
}

.form-group input, .form-group textarea {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
}

/* How it Works Section */
.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.step {
  text-align: center;
  padding: 1.5rem;
}

.step-number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #E29B03;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1.5rem;
}

.step h3 {
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  color: #345801;
}

.step p {
  color: #4F7D11;
}

/* Testimonials */
.testimonial-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial {
  background-color: #f7f9f0;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(52, 88, 1, 0.07);
}

.testimonial p {
  font-style: italic;
  margin-bottom: 1rem;
  color: #345801;
  line-height: 1.6;
}

.testimonial-author {
  font-weight: 600;
  color: #4F7D11;
}

/* Call to Action */
.cta {
    width: 100%;
    box-sizing: border-box;
    padding: 4rem 5%;
    margin: 2rem auto;
    background-color: #f7f9f0;
    border-radius: 8px;
    text-align: center;
  }
.cta h2 {
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.2rem;
  color: #4F7D11;
  margin-bottom: 2rem;
}

.primary-btn.large {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
}

/* Responsive design */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .navbar-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    flex-direction: column;
    padding: 1rem 0;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .navbar-links.active {
    max-height: 300px;
  }

  .hero {
    flex-direction: column;
    text-align: center;
    min-height: auto;
    padding-top: 3rem;
  }
  
  h1 {
    font-size: 2.8rem;
  }
  
  .tagline {
    font-size: 1.3rem;
  }
  
  .cta-buttons {
    justify-content: center;
  }
  
  .hero-image {
    width: 100%;
    margin-top: 2rem;
  }
  
  .image-placeholder {
    height: 250px;
  }

  .about-content, .contact-container {
    flex-direction: column;
  }

  .about-image {
    margin-top: 2rem;
  }

  .form-group input, .form-group textarea {
    width: 100%;
  }


}
</style>