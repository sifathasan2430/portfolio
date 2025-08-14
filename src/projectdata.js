const  projects = [
  {
    id: "room-finder",
    title: "Room Finder",
    description:
      "A full-stack web application where administrators manage apartment listings and users can search, filter, and book rooms. Uses Redux Toolkit to manage global authentication.",
    imageUrl:[ "https://i.ibb.co.com/XfBQ5RHq/png-9.jpg","https://i.ibb.co.com/kgxXvhVV/png-12.jpg"],
    liveLink: "https://roomatefinder-5e9a6.web.app",
    githubLink: "https://github.com/sifathasan2430/roommatefinder-client-site",
    techStack: ["HTML", "Tailwind", "React", "MongoDB","redux-toolkit", "Express"],
    challenges: [
      "Building advanced search and filter system by redux toolkit",
      "Implementing booking flow with role-based access",
    ],
    futurePlans: [
      "Add payment integration",
      "Enable map-based room search",
      "update the dashboard"
    ],
  },
  {
    id: "life-insurance",
    title: "Life Insurance Management",
    description:
      'This Life Insurance Management Platform is a feature-rich MERN stack application designed with separate, role-based dashboards for Admins, Agents, and Customers, ensuring each user has tailored tools and controls.\n\n' +
      'The system is secured with JWT-protected APIs, using HttpOnly cookies for authentication and strict role validation. Payments are handled through integrated Stripe services, enabling premium transactions with live status tracking and transaction management.\n\n' +
      'Customers can calculate premiums through a dynamic quote system and apply for policies via a multi-step application form, which includes a detailed health disclosure section for underwriting.\n\n' +
      'Admins have powerful tools to assign agents, review applications through feedback modals, and access insights on transactions, users, blogs, and policies in organized tables.\n\n' +
      'The platform supports blog creation, editing, and visit tracking, as well as a policy review system with star ratings. Additional features include a claim request process with approval tracking and PDF uploads, newsletter subscriptions stored in the database for future engagement, and plans for downloadable policy PDFs.\n\n' +
      'The UI is fully responsive across mobile, tablet, and desktop, styled with Tailwind CSS and enhanced with SweetAlert modals for a modern user experience. Data fetching is optimized using @tanstack/react-query, with page-specific SEO titles managed via react-helmet-async.\n\n' +
      'Users can easily search and filter policies by keyword and category, while server-side pagination ensures fast and efficient browsing.',
    imageUrl:["https://i.ibb.co.com/9mzTvSqN/png-10.jpg","https://i.ibb.co/PG4xPdtr/png-1.jpg"] ,
    liveLink: "https://life-insurance-management.web.app",
    githubLink: "https://github.com/sifathasan2430/-Life-Insurance-Management-Platform",
    techStack: ["React", "Express", "MongoDB", "Firebase", "Tailwind", "Stripe"],
    challenges: [
      "Implementing secure JWT authentication with HttpOnly cookies",
      "Payment system integration",
      "Handling multiple roles and their routes",
    ],
    futurePlans: [
      "Add AI-based chatbot for customer support",
      "Implement multilingual support",
      "Introduce a mobile app version",
    ],
  },
  
  {
    id: "tour-management",
    title: "Tour Management System",
    description:
      'A full-stack MERN web application for creating, booking, and managing tour packages, built with React, Express, MongoDB, and Firebase Authentication.\n\n' +
      'The platform allows users to browse and book tour packages with detailed views including images, descriptions, prices, and durations.\n\n' +
      'Registered users can securely log in, view their personal bookings, and manage their own tour listings by adding, updating, or deleting packages.\n\n' +
      'The application features protected routes for logged-in users, Firebase-secured API endpoints, and a smooth user experience with a custom animated 404 page powered by Framer Motion.',
    imageUrl:[ "https://i.ibb.co.com/N6djkdv0/png-8.jpg",'https://i.ibb.co.com/gZPXzBS2/png-11.jpg'],
    liveLink: "https://tourmanagementsystem-3651f.web.app",
    githubLink: "https://github.com/sifathasan2430/tourbooking",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    challenges: [
      "Handling complex booking availability logic",
      "Designing responsive and user-friendly UI",
    ],
    futurePlans: [
      "Add AI-based destination suggestions",
      "Integrate hotel and transport booking",
    ],
  },
];
export default projects;