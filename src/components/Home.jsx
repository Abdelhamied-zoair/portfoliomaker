import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import ChatBot from './ChatBot';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Header />
      
      <div className="home-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Create Your Professional Portfolio in Minutes</h1>
            <p>Build stunning, responsive portfolios with our AI-powered portfolio maker. No coding required.</p>
            <div className="hero-buttons">
              <button className="cta-button" onClick={() => navigate('/portfolio-bot')}>
                Get Started Free
              </button>
              <button className="secondary-button" onClick={() => navigate('/templates')}>
                View Templates
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <h2>Why Choose Portfolio Maker?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3>AI-Powered Builder</h3>
                <p>Our smart bot guides you through creating the perfect portfolio step by step</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3>6 Professional Templates</h3>
                <p>Choose from modern, creative, and professional designs for every industry</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3>Fully Responsive</h3>
                <p>Your portfolio will look amazing on all devices - desktop, tablet, and mobile</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💳</div>
                <h3>Multiple Payment Options</h3>
                <p>Pay with Visa, MasterCard, PayPal, or InstaPay - secure and instant</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Fast Generation</h3>
                <p>Get your professional portfolio ready in less than 30 minutes</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>Secure & Reliable</h3>
                <p>Your data is protected with enterprise-grade security measures</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bot Features Section */}
        <section className="bot-features">
          <div className="container">
            <div className="bot-content">
              <div className="bot-info">
                <h2>Smart Portfolio Assistant</h2>
                <div className="bot-feature-list">
                  <div className="bot-feature">
                    <span className="bot-icon">💬</span>
                    <div>
                      <h4>24/7 Chat Support</h4>
                      <p>Get instant answers to your questions about templates, pricing, and features</p>
                    </div>
                  </div>
                  <div className="bot-feature">
                    <span className="bot-icon">📁</span>
                    <div>
                      <h4>PDF Upload Support</h4>
                      <p>Upload your existing resume or portfolio in PDF format for quick setup</p>
                    </div>
                  </div>
                  <div className="bot-feature">
                    <span className="bot-icon">🕒</span>
                    <div>
                      <h4>Real-time Information</h4>
                      <p>Get current time, template prices, and active promotions instantly</p>
                    </div>
                  </div>
                  <div className="bot-feature">
                    <span className="bot-icon">💡</span>
                    <div>
                      <h4>Smart Recommendations</h4>
                      <p>Receive personalized template suggestions based on your industry</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bot-preview">
                <div className="robot-avatar">🤖</div>
                <p>Hi! I'm your Portfolio Assistant. Ready to help you create an amazing portfolio!</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Home;