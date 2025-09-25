


// Property Data
const properties = [
  {
    id: 1,
    title: "Skyline Penthouse",
    address: "123 Premium Ave, Luxury District",
    price: "$4,500/month",
    beds: "3 Beds",
    baths: "2 Baths",
    sqft: "1,800 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description:
      "Stunning penthouse with panoramic city views, high-end finishes, and a spacious terrace. This exquisite property features an open-concept living area, gourmet kitchen with premium appliances, and a master suite with a luxurious bathroom. The expansive terrace offers the perfect space for entertaining with breathtaking skyline views.",
  },
  {
    id: 2,
    title: "Urban Oasis Apartment",
    address: "456 Elite Street, Downtown",
    price: "$3,200/month",
    beds: "2 Beds",
    baths: "2 Baths",
    sqft: "1,200 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description:
      "Modern apartment in the heart of the city with luxury amenities and concierge service. This beautifully designed space features floor-to-ceiling windows, custom cabinetry, and high-end finishes throughout. Residents enjoy access to a state-of-the-art fitness center, rooftop lounge, and 24/7 concierge service.",
  },
  {
    id: 3,
    title: "Harbor View Condo",
    address: "789 Waterfront Blvd, Bay Area",
    price: "$3,800/month",
    beds: "2 Beds",
    baths: "2.5 Baths",
    sqft: "1,500 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description:
      "Luxury condo with breathtaking harbor views, gourmet kitchen, and premium finishes. This corner unit features an open floor plan, wide-plank hardwood flooring, and a chef's kitchen with top-of-the-line appliances. The master suite includes a walk-in closet and spa-like bathroom with dual vanities.",
  },
  {
    id: 4,
    title: "Garden Residence",
    address: "321 Park Lane, Green District",
    price: "$2,900/month",
    beds: "1 Beds",
    baths: "1 Baths",
    sqft: "900 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description:
      "Charming apartment with private garden access, recently renovated with high-end appliances.",
  },
  {
    id: 5,
    title: "Executive Loft",
    address: "555 Business Ave, Financial District",
    price: "$3,500/month",
    beds: "1 Beds",
    baths: "1 Baths",
    sqft: "1,100 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description:
      "Spacious loft-style apartment with exposed brick, high ceilings, and modern amenities.",
  },
  {
    id: 6,
    title: "Lakeside Retreat",
    address: "777 Serenity Drive, Lakeview",
    price: "$4,200/month",
    beds: "3 Beds",
    baths: "2 Baths",
    sqft: "1,600 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description:
      "Beautiful apartment with lake views, private balcony, and access to resort-style amenities.",
  },
];

// DOM Elements
const propertiesGrid = document.querySelector(".properties-grid");
const propertyModal = document.getElementById("propertyModal");
const closeModal = document.querySelector(".close-modal");
const modalTitle = document.getElementById("modal-property-title");
const modalAddress = document.getElementById("modal-property-address");
const modalPrice = document.getElementById("modal-property-price");
const modalBeds = document.getElementById("modal-property-beds");
const modalBaths = document.getElementById("modal-property-baths");
const modalSqft = document.getElementById("modal-property-sqft");
const modalDescription = document.getElementById("modal-property-description");
const modalImage = document.querySelector(".modal-property-img");
const contactForm = document.getElementById("contactForm");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const nav = document.querySelector("nav ul");

// Generate Property Cards
function generatePropertyCards() {
  propertiesGrid.innerHTML = "";

  properties.forEach((property) => {
    const card = document.createElement("div");
    card.className = "property-card";
    card.innerHTML = `
                    <div class="property-badge">Featured</div>
                    <img src="${property.image}" alt="${property.title}" class="property-img">
                    <div class="property-info">
                        <div class="property-price">${property.price}</div>
                        <h3>${property.title}</h3>
                        <p class="property-address"><i class="fas fa-map-marker-alt"></i> ${property.address}</p>
                        <div class="property-features">
                            <div class="property-feature"><i class="fas fa-bed"></i> ${property.beds}</div>
                            <div class="property-feature"><i class="fas fa-bath"></i> ${property.baths}</div>
                            <div class="property-feature"><i class="fas fa-ruler-combined"></i> ${property.sqft}</div>
                        </div>
                        <button class="property-btn view-details" data-id="${property.id}">View Details</button>
                    </div>
                `;
    propertiesGrid.appendChild(card);
  });

  // Add event listeners to view details buttons
  document.querySelectorAll(".view-details").forEach((button) => {
    button.addEventListener("click", function () {
      const propertyId = parseInt(this.getAttribute("data-id"));
      openPropertyModal(propertyId);
    });
  });
}

// Open Property Modal
function openPropertyModal(id) {
  const property = properties.find((p) => p.id === id);
  if (property) {
    modalTitle.textContent = property.title;
    modalAddress.textContent = property.address;
    modalPrice.textContent = property.price;
    modalBeds.textContent = property.beds;
    modalBaths.textContent = property.baths;
    modalSqft.textContent = property.sqft;
    modalDescription.textContent = property.description;
    modalImage.src = property.image;
    modalImage.alt = property.title;

    propertyModal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

// Close Modal
closeModal.addEventListener("click", function () {
  propertyModal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Close modal when clicking outside
window.addEventListener("click", function (event) {
  if (event.target === propertyModal) {
    propertyModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Contact Form Submission
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener("click", function () {
  nav.classList.toggle("show");
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: "smooth",
    });

    // Close mobile menu after clicking a link
    if (window.innerWidth <= 768) {
      nav.classList.remove("show");
    }
  });
});

// Header scroll effect
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    document.querySelector("header").style.background =
      "rgba(255, 255, 255, 0.98)";
    document.querySelector("header").style.boxShadow =
      "0 5px 20px rgba(0, 0, 0, 0.1)";
  } else {
    document.querySelector("header").style.background =
      "rgba(255, 255, 255, 0.95)";
    document.querySelector("header").style.boxShadow =
      "0 2px 15px rgba(0, 0, 0, 0.05)";
  }
});

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  generatePropertyCards();

  // Adjust navigation for mobile on resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      nav.classList.remove("show");
    }
  });
});
