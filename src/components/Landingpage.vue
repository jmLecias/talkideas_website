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