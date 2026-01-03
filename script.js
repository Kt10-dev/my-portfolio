particlesJS("particles-js", {
  particles: {
    number: {
      value: 80, // Number of dots
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150, // Lines ki length
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2, // Speed adjust kar sakte ho
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" }, // Mouse le jaane par door bhagenge
      onclick: { enable: true, mode: "push" },
    },
  },
  retina_detect: true,
});



// Particles Config
particlesJS("particles-js", {
    particles: {
        number: { value: 60 },
        color: { value: "#ffffff" },
        line_linked: { enable: true, color: "#c770f0", opacity: 0.2 },
        move: { speed: 1.5 }
    }
});

// Project Data
const projectCard = {
    numpy: {
        title: "Computational Data Analytics",
        how: "Built using Python, NumPy, and Pandas to handle 50,000+ data rows efficiently.",
        promptRole: "I used Prompt Engineering to mathematically verify the broadcasting rules for matrix multiplication and to generate optimized data-cleaning scripts."
    },
    loan: {
        title: "Fintech Loan Management System",
        how: "Developed a MERN stack app with automated risk assessment logic and JWT security.",
        promptRole: "Prompt Engineering helped me design the MongoDB aggregation pipelines and create secure validation schemas for user input."
    },
    retail: {
        title: "Retail Architecture (Client Project)",
        how: "A full-scale E-commerce site with Redux-managed state and dynamic inventory.",
        promptRole: "Used prompts to simulate user-traffic scenarios and debug asynchronous state updates in the checkout flow."
    }
};

const projectData = {
    loan: {
        title: "Fintech Loan Management System",
        brief: `
        <div class="modal-section">
            <h4 class="modal-sub-title"><i class="fas fa-university"></i> Project Overview</h4>
            <p>A specialized Fintech solution designed to streamline the student lending lifecycle. The platform automates everything from initial application to administrative disbursement workflows.</p>
        </div>

        <div class="modal-section">
            <h4 class="modal-sub-title"><i class="fas fa-cogs"></i> Business Logic & SDE Work</h4>
            <ul class="modal-list">
                <li><strong>Automated Workflow:</strong> Implemented a state-machine logic to track loan statuses: <i>Applied → Under Review → Approved → Disbursed.</i></li>
                <li><strong>Admin Dashboard:</strong> A data-rich command center for lenders to monitor total loan volume and manage risk assessment in real-time.</li>
                <li><strong>Data Integrity:</strong> Built robust backend validation to ensure financial data accuracy and prevent fraudulent entries.</li>
            </ul>
        </div>

        <div class="modal-section highlighted-section">
            <h4 class="modal-sub-title"><i class="fas fa-brain"></i> Prompt Engineering Role</h4>
            <p>To ensure SDE-grade reliability, I used advanced AI prompting to:</p>
            <ul class="modal-list">
                <li>Design a highly scalable <b>MongoDB Schema</b> for complex many-to-one financial relationships.</li>
                <li>Generate optimized <b>JWT Authentication</b> scripts and secure API route protectors.</li>
                <li>Stress-test edge cases in the interest calculation and repayment logic.</li>
            </ul>
        </div>

        <div class="modal-section">
            <h4 class="modal-sub-title"><i class="fas fa-user-shield"></i> Security & Performance</h4>
            <p>Secured with <b>Bcrypt hashing</b> for passwords and <b>JWT</b> for session management. Hosted on <b>Vercel</b> with a focus on low-latency data fetching.</p>
        </div>
    `,
        tech: "React, Node.js, MongoDB, Express, JWT Auth."
    },
    retail: {
        title: "Rao Sahab Wears (E-commerce)",
       brief: `
        <div class="modal-section">
            <h4 class="modal-sub-title"><i class="fas fa-info-circle"></i> Project Overview</h4>
            <p>A production-grade retail platform engineered for a seamless shopping experience. Features include real-time product browsing, a persistent shopping cart, and a secure checkout flow.</p>
        </div>

        <div class="modal-section">
            <h4 class="modal-sub-title"><i class="fas fa-layer-group"></i> Architecture & Logic</h4>
            <ul class="modal-list">
                <li><strong>Persistent Cart:</strong> Built with <b>Redux Toolkit</b> to ensure the cart remains intact even after page refreshes.</li>
                <li><strong>Inventory Logic:</strong> Automated backend checks to prevent over-selling and manage stock levels in real-time.</li>
                <li><strong>Admin Intelligence:</strong> A secure dashboard for the client to track sales analytics and manage product data via <b>MongoDB Atlas</b>.</li>
            </ul>
        </div>

        <div class="modal-section highlighted-section">
            <h4 class="modal-sub-title"><i class="fas fa-robot"></i> Prompt Engineering Integration</h4>
            <p>I utilized specialized AI prompting to:</p>
            <ul class="modal-list">
                <li>Stress-test backend APIs for high-traffic simulations.</li>
                <li>Optimize <b>MongoDB Aggregation Pipelines</b> for complex product filtering.</li>
                <li>Debug asynchronous Redux-Thunk actions, ensuring a bug-free UI.</li>
            </ul>
        </div>

        <div class="modal-section">
            <h4 class="modal-sub-title"><i class="fas fa-shield-alt"></i> Security & Deployment</h4>
            <p>Implemented <b>JWT Authentication</b> and private route middleware to secure the Admin panel. Deployed on <b>Vercel</b> with automated CI/CD for zero downtime.</p>
        </div>
    `,
        tech: "React, Redux Toolkit, Node.js, Express, MongoDB, JWT, Vercel."
    },
    numpy: {
        title: "Computational Data Analytics",
        brief: "Based on my tutorial with 1,000+ views. Covers how NumPy performs operations 50x faster than Python lists. Includes matrix broadcasting, slicing, and boolean indexing for real-world EDA.",
        tech: "Python, NumPy, Pandas, Data Visualization."
    },
    portfolio: {
        title: "Interactive Personal Portfolio",
        brief: "Built to represent my brand 'Vijay.Dev'. I implemented Particles.js for background interactivity and used a modular design so that it loads fast on Vercel.",
        tech: "HTML5, CSS3, JavaScript, Particles.js, Vercel."
    },
    ml: {
        title: "Machine Learning Classifier",
        brief: "A fundamental data science project where I applied regression and classification algorithms to predict outcomes based on historical patterns.",
        tech: "Python, Pandas, Scikit-Learn, Matplotlib."
    }
};

const modal = document.getElementById("project-modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-modal");

document.querySelectorAll(".view-details").forEach(btn => {
    btn.onclick = () => {
        const id = btn.getAttribute("data-project");
        const data = projectData[id];
        modalBody.innerHTML = `
            <h3>${data.title}</h3>
            <p style="margin: 15px 0; line-height: 1.6;">${data.brief}</p>
            <p><strong>Technologies Used:</strong> <span style="color: #c770f0;">${data.tech}</span></p>
        `;
        modal.style.display = "block";
    };
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; };