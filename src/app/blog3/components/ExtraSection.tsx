"use client";

export default function ExtraSection({ cards }) {
  // const cards = [
  //   {
  //     color: "#e8edff",
  //     icon: "/icons/business.png",
  //     title: "Business Insurance",
  //     desc: "Comprehensive coverage for businesses of all sizes and industries.",
  //     link: "#",
  //     linkColor: "#4c6fff",
  //   },
  //   {
  //     color: "#ffe5e5",
  //     icon: "/icons/life.png",
  //     title: "Life Insurance",
  //     desc: "Secure your family's financial future with life insurance policies.",
  //     link: "#",
  //     linkColor: "#ff4c4c",
  //   },
  //   {
  //     color: "#f4e6ff",
  //     icon: "/icons/home.png",
  //     title: "Home Insurance",
  //     desc: "Protect your home and belongings with comprehensive property coverage.",
  //     link: "#",
  //     linkColor: "#a64cff",
  //   },
  //   {
  //     color: "#e6fff2",
  //     icon: "/icons/medical.png",
  //     title: "Medical Insurance",
  //     desc: "Comprehensive health coverage for you and your family's medical needs.",
  //     link: "#",
  //     linkColor: "#22aa66",
  //   },
  //   {
  //     color: "#ffefd9",
  //     icon: "/icons/motorcycle.png",
  //     title: "Motorcycle Insurance",
  //     desc: "Specialized coverage for motorcycle enthusiasts and daily riders.",
  //     link: "#",
  //     linkColor: "#ff7b00",
  //   },
  // ];
  return (
    <>
      <section className="insurance-section ">
        <div className="insurance-header">
          <h2>Know More Insurance Types</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="insurance-grid ">
          {cards?.map((card, i: number) => (
            <div
              key={i}
              className="insurance-card"
              style={{ backgroundColor: card.color }}
            >
              <div className="insurance-icon">
                <img src={card?.icon} alt={card?.name} />
              </div>
              <h3 className="card-title">{card?.name}</h3>
              <p>{card?.desc}</p>
              <a href={card.link} style={{ color: card.linkColor }}>
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-left">
            <h2>Subscribe our newsletter</h2>
            <p>
              Non consectetur a erat nam at. Sit amet risus nullam eget felis
              eget nunc lobortis.
            </p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email ..." required />
            <button type="submit">✓</button>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Insurance Section */
        .insurance-section {
          text-align: center;
          padding: 60px 20px;
        }

        .insurance-header {
          text-align: left;
          margin-bottom: 40px;
        }

        .insurance-header h2 {
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: 10px;
        }

        .insurance-header p {
          max-width: 600px;
          color: #666;
          font-size: 0.95rem;
          margin: 0;
        }

        .insurance-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .insurance-card {
          padding: 30px 20px;
          border-radius: 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s;
          color: black;
        }

        .insurance-card:hover {
          transform: translateY(-4px);
        }

        .insurance-card img {
          width: 48px;
          height: 48px;
          margin-bottom: 16px;
        }

        .insurance-card h3 {
          margin-bottom: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          color: black;
        }

        .insurance-card p {
          font-size: 0.9rem;
          color: #444;
          margin-bottom: 12px;
        }

        .insurance-card a {
          font-weight: 600;
          text-decoration: underline;
          font-size: 0.85rem;
        }

        /* Newsletter Section - Fully Responsive */
        .newsletter-section {
          background-color: #fca311;
          border-radius: 20px;
          padding: clamp(30px, 5vw, 50px);
          margin: clamp(40px, 8vw, 60px) auto;
          max-width: min(1000px, calc(100% - 40px));
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          min-height: 200px;
        }

        .newsletter-section::before,
        .newsletter-section::after {
          content: "";
          position: absolute;
          background: repeating-linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.2) 2px,
            transparent 2px,
            transparent 4px
          );
          width: clamp(60px, 15vw, 120px);
          height: clamp(60px, 15vw, 120px);
          border-radius: 50%;
          z-index: 0;
        }

        .newsletter-section::before {
          top: clamp(-20px, -3vw, -30px);
          left: clamp(-20px, -3vw, -30px);
        }

        .newsletter-section::after {
          bottom: clamp(-20px, -3vw, -30px);
          right: clamp(-20px, -3vw, -30px);
        }

        .newsletter-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: clamp(20px, 4vw, 40px);
          width: 100%;
          z-index: 2;
          position: relative;
        }

        .newsletter-left {
          flex: 1 1 300px;
          color: white;
          min-width: 0;
        }

        .newsletter-left h2 {
          font-size: clamp(1.25rem, 4vw, 2rem);
          margin-bottom: clamp(8px, 1.5vw, 12px);
          font-weight: 700;
          line-height: 1.2;
        }

        .newsletter-left p {
          font-size: clamp(0.85rem, 2.5vw, 0.95rem);
          opacity: 0.9;
          line-height: 1.5;
          margin: 0;
        }

        .newsletter-form {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 50px;
          overflow: hidden;
          flex: 0 0 auto;
          min-width: 280px;
          max-width: 400px;
          height: clamp(42px, 6vw, 50px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .newsletter-form input {
          flex: 1;
          border: none;
          outline: none;
          padding: 0 clamp(12px, 2vw, 20px);
          font-size: clamp(0.85rem, 2vw, 0.95rem);
          min-width: 0;
          height: 100%;
          background: transparent;
        }

        .newsletter-form input::placeholder {
          color: #999;
        }

        .newsletter-form button {
          background: #14213d;
          color: white;
          border: none;
          padding: 0;
          cursor: pointer;
          font-size: clamp(55px, 10vw, 75px);
          height: 100%;
          width: clamp(45px, 8vw, 60px);
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom-left-radius: 50px;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .newsletter-form button:hover {
          background-color: #0f172a;
          transform: scale(1.05);
        }

        .newsletter-form button:active {
          transform: scale(0.95);
        }

        /* Tablet Styles */
        @media (max-width: 768px) {
          .newsletter-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: clamp(20px, 4vw, 30px);
          }

          .newsletter-left {
            flex: 1 1 100%;
            max-width: 100%;
          }

          .newsletter-form {
            width: 100%;
            max-width: 100%;
            min-width: 0;
          }
        }

        /* Mobile Styles */
        @media (max-width: 480px) {
          .newsletter-section {
            margin-left: 20px;
            margin-right: 20px;
            border-radius: 16px;
            min-height: 180px;
          }

          .newsletter-left h2 {
            font-size: 1.3rem;
            margin-bottom: 8px;
          }

          .newsletter-left p {
            font-size: 0.9rem;
          }

          .newsletter-form {
            height: 44px;
          }

          .newsletter-form input {
            font-size: 0.9rem;
            padding: 0 16px;
          }

          .newsletter-form button {
            width: 60px;
            font-size: 1rem;
          }
        }

        /* Extra Small Mobile */
        @media (max-width: 320px) {
          .newsletter-section {
            margin-left: 10px;
            margin-right: 10px;
            padding: 25px 15px;
          }

          .newsletter-left h2 {
            font-size: 1.2rem;
          }

          .newsletter-left p {
            font-size: 0.85rem;
          }

          .newsletter-form {
            height: 40px;
          }

          .newsletter-form button {
            width: 55px;
          }
        }

        /* Landscape Mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .newsletter-section {
            padding: 20px;
            min-height: auto;
          }

          .newsletter-container {
            gap: 20px;
          }

          .newsletter-left h2 {
            font-size: 1.4rem;
            margin-bottom: 6px;
          }

          .newsletter-left p {
            font-size: 0.85rem;
          }
        }

        /* Large Desktop */
        @media (min-width: 1200px) {
          .newsletter-section {
            max-width: 1100px;
          }

          .newsletter-left h2 {
            font-size: 2.2rem;
          }

          .newsletter-left p {
            font-size: 1rem;
          }

          .newsletter-form {
            max-width: 450px;
            height: 55px;
          }

          .newsletter-form button {
            width: 65px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}
