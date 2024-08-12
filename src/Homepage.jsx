import React from 'react';
import { ArrowRight, Server, Users, Database, ArrowUpRight, Clock, Zap, ShieldCheck, CheckCircle, BarChart, Brain, Shield, Globe, Heart, HeartHandshake, MapPin, Wrench, Check } from 'lucide-react';
import logo from './logo.png'; // Adjust path as needed
import PackageSelector from './PackageSelector.jsx'; 

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-custom-blue shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Left side with phone and message */}
          <div className="flex items-center">
            <span className="text-white hover:text-blue-600 text-2xl font-semibold">
              <a href="tel:9168956134">Get a Tech Onsite Now! - 24/7 IT Resolution </a>
            </span>            
          </div>

          {/* Right side with navigation */}
          <ul className="ml-auto flex space-x-4">
            <li><a href="#approach" className="text-white hover:text-blue-600">Our Approach</a></li>
            <li><a href="#services" className="text-white hover:text-blue-600">Services</a></li>
            <li><a href="#quoteless" className="text-white hover:text-blue-600">quoteless.ai</a></li>
            <li><a href="#contact" className="text-white hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </header>

      <main>
        <section className="bg-custom-blue text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <a href="/" className="mb-8 md:mb-0 md:mr-8">
              <img
                src={logo}
                alt="Tower Bridge Technical"
                className="h-96 w-auto"
              />
            </a>

            <div>
              <h2 className="text-custom-gold text-4xl font-bold mb-4">Elevate Your Business with AI-Driven Solutions</h2>
              <p className="text-xl mb-8">Secure, integrate, and innovate with Tower Bridge Technical's three-phase approach.</p>
              <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold inline-flex items-center">
                Get an Quote - No wait!
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </section>
        

        <section id="it-services-quote" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            {/* <h2 className="text-3xl font-bold mb-8 text-center">Get an Instant Quote for IT Services</h2> */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-center">How Our Instant Quote System Works</h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" className="w-full h-auto">
                  <style>
                    {`
                      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                      @keyframes drawLine { to { stroke-dashoffset: 0; } }
                      .icon { animation: fadeIn 0.5s ease-out forwards; opacity: 0; }
                      .line { stroke-dasharray: 300; stroke-dashoffset: 300; animation: drawLine 1s linear forwards; }
                      #icon1 { animation-delay: 0.5s; }
                      #icon2 { animation-delay: 1.5s; }
                      #icon3 { animation-delay: 2.5s; }
                      #icon4 { animation-delay: 3.5s; }
                      #line1 { animation-delay: 1s; }
                      #line2 { animation-delay: 2s; }
                      #line3 { animation-delay: 3s; }
                    `}
                  </style>

                  <g id="icon1" className="icon">
                    <circle cx="100" cy="100" r="40" fill="#3B82F6"/>
                    <text x="100" y="105" fontFamily="Arial" fontSize="40" fill="white" textAnchor="middle">1</text>
                  </g>
                  <text x="100" y="160" fontFamily="Arial" fontSize="14" textAnchor="middle">Describe Issue</text>

                  <line id="line1" x1="140" y1="100" x2="260" y2="100" stroke="#4B5563" strokeWidth="2" className="line"/>
                  <g id="icon2" className="icon">
                    <circle cx="300" cy="100" r="40" fill="#3B82F6"/>
                    <text x="300" y="105" fontFamily="Arial" fontSize="40" fill="white" textAnchor="middle">2</text>
                  </g>
                  <text x="300" y="160" fontFamily="Arial" fontSize="14" textAnchor="middle">AI Analysis Engine</text>

                  <line id="line2" x1="340" y1="100" x2="460" y2="100" stroke="#4B5563" strokeWidth="2" className="line"/>

                  <g id="icon3" className="icon">
                    <circle cx="500" cy="100" r="40" fill="#3B82F6"/>
                    <text x="500" y="105" fontFamily="Arial" fontSize="40" fill="white" textAnchor="middle">3</text>
                  </g>
                  <text x="500" y="160" fontFamily="Arial" fontSize="14" textAnchor="middle">Instant Quote</text>

                  <line id="line3" x1="540" y1="100" x2="660" y2="100" stroke="#4B5563" strokeWidth="2" className="line"/>

                  <g id="icon4" className="icon">
                    <circle cx="700" cy="100" r="40" fill="#3B82F6"/>
                    <text x="700" y="105" fontFamily="Arial" fontSize="40" fill="white" textAnchor="middle">4</text>
                  </g>
                  <text x="700" y="160" fontFamily="Arial" fontSize="14" textAnchor="middle">Schedule Service</text>
                </svg>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Instant, Accurate Quotes for Our IT Services</h3>
                  <p className="mb-6">Experience the future of IT service requests with our AI-powered quoting system. Get immediate, precise pricing for the IT support you need, without the wait.</p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Clock className="text-blue-600 mr-2 flex-shrink-0" size={24} />
                      <span>Receive quotes in seconds, not hours or days</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="text-blue-600 mr-2 flex-shrink-0" size={24} />
                      <span>AI-driven accuracy based on your specific IT requirements</span>
                    </li>
                    <li className="flex items-start">
                      <ShieldCheck className="text-blue-600 mr-2 flex-shrink-0" size={24} />
                      <span>Secure and confidential process, compliant with data protection regulations</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Benefits of Our Instant Quote System</h3>
                  <p className="mb-6">Our quotes may be instant, and AI powered. Our customer service, thorough and always human :)</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Get consistent pricing across all our service offerings</li>
                    <li>Initiate service requests faster, reducing downtime</li>
                    <li>Cut out the MSP middlemen, get a tech directly</li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <a href="/get-quote" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center hover:bg-blue-700 transition duration-300">
                  Get an Instant IT Service Quote
                  <ArrowUpRight className="ml-2" size={20} />
                </a>
                <p className="mt-4 text-sm text-gray-600">No commitment required. Get an accurate quote for our IT services in seconds.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="why-choose-us" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Tower Bridge Technical?</h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Users className="text-blue-600 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4">Onsite Experts</h3>
                <p className="text-gray-600 mb-4">
                  Skip the frustrating phone trees and techs that tell you to reboot. Work directly with technicians who are local, onsite and care to understand your business needs.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>No subcontractors or middlemen</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>Faster problem resolution</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>Consistent point of contact for all your IT needs</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Heart className="text-blue-600 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4">Customer-Centric Approach</h3>
                <p className="text-gray-600 mb-4">
                  We go beyond a simple reboot. Our team digs deep to provide tailored solutions that truly address your unique business challenges and goals.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>Personalized IT strategies aligned with your business</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>Proactive problem-solving to prevent future issues</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>Regular check-ins to ensure your ongoing satisfaction</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Shield className="text-blue-600 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-4">Unparalleled Experience</h3>
                <p className="text-gray-600 mb-4">
                  With a decade of experience supporting California's critical systems and collaborating with the Department of Defense, we bring top-tier expertise to your business.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>10 years of experience in high-security systems</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>Expertise in upgrading unique networks</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>Proven track record across all 32 of California's Prisons</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-xl text-gray-700 mb-6">
                At Tower Bridge Technical, we're committed to elevating your business through technology. 
                Our approach goes beyond quick fixes – we deliver comprehensive solutions that drive long-term success.
              </p>
              <a href="#contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                Experience the Difference Today
              </a>
                <section id="package-selector" className="my-12">
                      <PackageSelector/>
                </section>
            </div>
          </div>
        </section>



        <section id="ai-implementation" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Implement AI in Your Business: Our Proven Approach</h2>
            <div className="text-center mb-12">
              <p className="text-xl text-gray-700">Wondering how to harness the power of AI for your business? Our three-step approach ensures a smooth, effective AI integration tailored to your unique needs.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <Server className="text-blue-600 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">1. Systems Assessment</h3>
                <p className="mb-4">We evaluate and optimize your current IT infrastructure to create a solid foundation for AI integration.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>Comprehensive security audit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>Data storage and processing optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>Scalability planning for AI workloads</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <Users className="text-blue-600 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">2. Cultural Alignment</h3>
                <p className="mb-4">We prepare your team for AI adoption, ensuring they're ready to leverage new technologies effectively.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>AI awareness workshops</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>Role-specific AI training programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>Change management support</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <Database className="text-blue-600 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">3. Data Optimization</h3>
                <p className="mb-4">We help you harness your data's full potential, making it AI-ready and actionable.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>Data quality assessment and cleansing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>AI-focused data structuring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>Data governance framework implementation</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <Brain className="text-blue-600 mb-2" size={32} />
                  <h4 className="text-lg font-semibold mb-2">Tailored Solutions</h4>
                  <p>We customize our approach to fit your unique business needs and goals.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <BarChart className="text-blue-600 mb-2" size={32} />
                  <h4 className="text-lg font-semibold mb-2">Measurable Results</h4>
                  <p>Our process focuses on delivering tangible, data-driven outcomes.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Users className="text-blue-600 mb-2" size={32} />
                  <h4 className="text-lg font-semibold mb-2">Expert Guidance</h4>
                  <p>Our team of AI specialists ensures a smooth transition at every step.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a href="/ai-consultation" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center hover:bg-blue-700 transition duration-300">
                Schedule Your AI Readiness Consultation
                <ArrowRight className="ml-2" size={20} />
              </a>
              <p className="mt-4 text-sm text-gray-600">Let's explore how AI can transform your business operations and drive growth.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 Tower Bridge Technical. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
