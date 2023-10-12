import backgroundImage from '../assets/images/bg.jpeg';
import Header from './Navbar';
import Footer from './Footer';

function FAQPage() {
  const wrapperStyle = {
    background: `url(${backgroundImage}) center/cover no-repeat fixed`,
    minHeight: '100vh', // Ensure the background covers the entire viewport height
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Add a semi-transparent white background
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div className="wrapper" style={wrapperStyle}>
      <Header />
      <div className="container my-5" style={contentStyle}>
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center mb-3">Frequently Asked Questions</h1>
            <p className="lead text-center mt-3">
              Find answers to common questions here.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {/* FAQ Content */}
            <h2>Q: How do I place an order?</h2>
            <p>
              A: To place an order, simply browse our product catalog, select the items you want, and click the "Add to Cart" button. Then, proceed to the checkout page to complete your order by providing your shipping and payment information.
            </p>

            <h2>Q: What payment methods do you accept?</h2>
            <p>
              A: We accept various payment methods, including credit cards, debit cards, PayPal, and bank transfers. You can choose your preferred payment method during the checkout process.
            </p>

            <h2>Q: How long does shipping take?</h2>
            <p>
              A: Shipping times may vary depending on your location and the chosen shipping method. Generally, orders are processed and shipped within 1-3 business days. You can check the estimated delivery time during checkout.
            </p>

            <h2>Q: What is your return policy?</h2>
            <p>
              A: We offer a 30-day return policy. If you're not satisfied with your purchase, you can return the item within 30 days of receiving it. Please review our Returns & Refunds page for detailed instructions.
            </p>

            <h2>Q: How can I contact your customer support?</h2>
            <p>
              A: Our customer support team is available via email at support@example.com or by phone at +1-123-456-7890. You can also use our Contact Us page to send us a message, and we'll respond as soon as possible.
            </p>

            {/* Add more questions and answers as needed */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQPage;
