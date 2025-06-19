import "./ProjectSection.css";
const ProjectSection = () => {
  return (
    <div id="services">
      <div className="project-container">
        <h1 className="sub-title">Projects</h1>
        <div className="services-list">
          <div>
            <i className="fa-brands fa-react"></i>
            <h2>Health Report Analyzer</h2>
            <p>
              A web application designed to analyze and extract data from health
              reports using OCR (Optical Character Recognition) technology with
              Tesseract.js. It provides users with a simple interface to upload
              their reports and receive automated analysis, ensuring quick and
              accurate data extraction. Tech Stack: React.js, Node.js,
              Express.js, Tesseract.js, TailwindCSS Features: Upload health
              reports (PDF or images). Extract and display key health metrics
              using OCR. Store and retrieve analyzed data efficiently. Intuitive
              and user-friendly interface. Role: Full Stack Developer (Frontend
              & Backend)
            </p>
            <a href="#">learn more</a>
          </div>
          <div>
            <i className="fa-brands fa-js"></i>
            <h2> Movie Ticket Booking System</h2>
            <p>
              An online platform for booking movie tickets with user
              authentication, movie listing, booking management, and feedback
              features. Built with a robust backend and a dynamic user
              interface. Tech Stack: HTML, CSS, JavaScript, PHP, MySQL Features:
              User authentication & registration. Browse and book movie tickets.
              Admin panel for managing movies, bookings, and feedback. Database
              management with cinema_db (Tables: movietable, bookingtable,
              users, feedbacktable). Role: Full Stack Developer (Frontend &
              Backend)
            </p>
            <a href="#">learn more</a>
          </div>
          <div>
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>

            <h2> Restaurant Management System </h2>
            <p>
              Developed a desktop-based restaurant management system using .Net
              and MySQL to handle day-to-day operations like order management,
              billing, and inventory control. The system offers a smooth
              interface for staff and admin users to manage orders, and generate
              reports. Simple order and menu management Automatic bill
              generation Basic admin control using MySQL database Easy-to-use
              Windows Forms interface.
              Role: Full Stack Developer
            </p>
            <a href="#">learn more </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectSection;
