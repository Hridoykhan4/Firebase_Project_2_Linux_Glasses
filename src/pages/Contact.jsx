import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-12 text-lg">We’d love to hear from you! Whether you have a question about our products or anything else, feel free to contact us.</p>
        
        {/* Contact Form */}
        <div className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary w-full py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Our Store</h3>
            <p className="text-lg">123 Sunglass Avenue, Fashion City, FC 4567</p>
            <p className="text-lg">Phone: (123) 456-7890</p>
            <p className="text-lg">Email: support@sunglassstore.com</p>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-bold mb-4">Find Us</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="250"
              frameBorder="0"
              style={{ border: '0' }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
