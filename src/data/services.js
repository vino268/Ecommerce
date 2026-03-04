// Services data from CCTV Kart
export const services = [
  // Installation Services
  {
    id: 1,
    name: "CCTV Camera Installation",
    category: "Installation",
    price: 500,
    priceType: "per camera",
    image: "https://m.media-amazon.com/images/I/61bPKQkHILL._SL1500_.jpg",
    description: "Professional installation of CCTV cameras with wiring and configuration",
    fullDescription: "Our expert technicians provide complete CCTV camera installation services. We handle everything from mounting cameras to running cables and configuring the system for optimal coverage. Each installation includes proper cable management, weatherproofing for outdoor cameras, and thorough testing.",
    features: [
      "Professional camera mounting and positioning",
      "Cable routing and concealment",
      "Outdoor weatherproofing",
      "System configuration and testing",
      "Basic user training included"
    ],
    includes: [
      "Site survey",
      "Camera mounting hardware",
      "Up to 30m cable per camera",
      "BNC/RJ45 connectors",
      "1 year installation warranty"
    ],
    duration: "2-3 hours per camera"
  },
  {
    id: 2,
    name: "NVR/DVR Installation & Setup",
    category: "Installation",
    price: 1000,
    priceType: "per unit",
    image: "https://m.media-amazon.com/images/I/61Y0YK5X8xL._SL1500_.jpg",
    description: "Complete NVR/DVR installation with hard drive setup and network configuration",
    fullDescription: "Complete installation and configuration service for your NVR/DVR unit. Our technicians will install the hard drive, configure recording schedules, set up remote viewing, and ensure all cameras are properly connected and recording.",
    features: [
      "Hard drive installation and formatting",
      "Recording schedule configuration",
      "Motion detection setup",
      "Remote viewing app setup",
      "Email alert configuration"
    ],
    includes: [
      "HDD installation",
      "Network configuration",
      "Mobile app setup (2 devices)",
      "User manual walkthrough",
      "1 year support"
    ],
    duration: "1-2 hours"
  },
  {
    id: 3,
    name: "EPABX Panel Installation (8 Channel)",
    category: "Installation",
    price: 1500,
    originalPrice: 1875,
    priceType: "per panel",
    image: "https://m.media-amazon.com/images/I/71JQv3R9qxL._SL1500_.jpg",
    description: "Installation of EPABX panel for intercom and communication systems",
    fullDescription: "Professional EPABX panel installation service for seamless internal communication. We handle complete wiring, extension setup, and configuration of all intercom features including call forwarding, conferencing, and external line management.",
    features: [
      "Panel mounting and wiring",
      "Extension configuration",
      "Call forwarding setup",
      "Conference call setup",
      "External line integration"
    ],
    includes: [
      "Panel mounting hardware",
      "Up to 8 extensions setup",
      "Wiring for extensions",
      "Programming services",
      "User training"
    ],
    duration: "3-4 hours"
  },
  {
    id: 4,
    name: "Cable Termination",
    category: "Installation",
    price: 250,
    originalPrice: 313,
    priceType: "per point",
    image: "https://m.media-amazon.com/images/I/61TLJbpZxWL._SL1500_.jpg",
    description: "Professional cable termination services for network and CCTV cables",
    fullDescription: "Expert cable termination service for all types of network and CCTV cables. We ensure proper crimping, testing, and certification of each termination point for reliable connectivity and optimal signal quality.",
    features: [
      "Cat5e/Cat6 termination",
      "Coaxial cable termination",
      "BNC connector crimping",
      "RJ45 connector crimping",
      "Cable testing and certification"
    ],
    includes: [
      "Connectors (BNC/RJ45)",
      "Cable testing",
      "Labeling",
      "Quality certification",
      "Workmanship warranty"
    ],
    duration: "15-30 minutes per point"
  },
  {
    id: 5,
    name: "Access Control Installation",
    category: "Installation",
    price: 2000,
    priceType: "per door",
    image: "https://m.media-amazon.com/images/I/61xBVrPaWDL._SL1500_.jpg",
    description: "Complete access control system installation including biometric devices",
    fullDescription: "Comprehensive access control installation for secure entry management. We install and configure biometric devices, card readers, electromagnetic locks, and integrate with your existing security infrastructure for a complete access management solution.",
    features: [
      "Biometric device mounting",
      "EM lock/strike installation",
      "Exit button setup",
      "Software configuration",
      "User enrollment training"
    ],
    includes: [
      "Device mounting",
      "Lock installation",
      "Wiring up to 15m",
      "Power supply setup",
      "10 user enrollments"
    ],
    duration: "2-4 hours per door"
  },
  {
    id: 6,
    name: "Fire Alarm System Installation",
    category: "Installation",
    price: 3500,
    priceType: "per zone",
    image: "https://m.media-amazon.com/images/I/51W14Lq9tKL._SL1024_.jpg",
    description: "Fire alarm system installation with smoke detectors and control panel",
    fullDescription: "Complete fire alarm system installation including smoke detectors, heat sensors, manual call points, and control panel configuration. Our certified technicians ensure compliance with fire safety regulations and proper integration with building management systems.",
    features: [
      "Smoke detector installation",
      "Control panel setup",
      "Zone configuration",
      "Sounder installation",
      "Testing and commissioning"
    ],
    includes: [
      "Detector mounting",
      "Cable routing",
      "Panel programming",
      "Testing certificate",
      "Compliance documentation"
    ],
    duration: "4-6 hours per zone"
  },
  // Annual Maintenance Contract
  {
    id: 7,
    name: "CCTV System AMC - Basic",
    category: "Annual Maintenance Contract",
    price: 5000,
    priceType: "per year",
    image: "https://m.media-amazon.com/images/I/71NNtJjw4jL._SL1500_.jpg",
    description: "Annual maintenance for up to 4 cameras including 2 preventive visits",
    fullDescription: "Our Basic AMC package provides essential maintenance for small CCTV setups. Includes scheduled preventive maintenance visits, remote support, and discounted repair services to keep your security system running smoothly throughout the year.",
    features: [
      "2 preventive maintenance visits",
      "Camera lens cleaning",
      "DVR/NVR health check",
      "Cable connection inspection",
      "Firmware updates"
    ],
    includes: [
      "Up to 4 cameras coverage",
      "1 DVR/NVR unit",
      "Remote troubleshooting",
      "20% discount on repairs",
      "Priority response time"
    ],
    duration: "12 months"
  },
  {
    id: 8,
    name: "CCTV System AMC - Standard",
    category: "Annual Maintenance Contract",
    price: 10000,
    priceType: "per year",
    image: "https://m.media-amazon.com/images/I/71NNtJjw4jL._SL1500_.jpg",
    description: "Annual maintenance for up to 8 cameras including 4 preventive visits",
    fullDescription: "Our Standard AMC package is ideal for medium-sized installations. With quarterly preventive maintenance visits and comprehensive coverage, this plan ensures maximum uptime and optimal performance of your CCTV security system.",
    features: [
      "4 preventive maintenance visits",
      "Complete system health check",
      "HDD health monitoring",
      "Night vision calibration",
      "Software/firmware updates"
    ],
    includes: [
      "Up to 8 cameras coverage",
      "2 DVR/NVR units",
      "24/7 remote support",
      "30% discount on repairs",
      "48-hour response guarantee"
    ],
    duration: "12 months"
  },
  {
    id: 9,
    name: "CCTV System AMC - Premium",
    category: "Annual Maintenance Contract",
    price: 20000,
    priceType: "per year",
    image: "https://m.media-amazon.com/images/I/71NNtJjw4jL._SL1500_.jpg",
    description: "Annual maintenance for up to 16 cameras with unlimited support calls",
    fullDescription: "Our Premium AMC package offers comprehensive coverage for large installations. With monthly preventive visits, unlimited support calls, and significant discounts on replacements, this plan provides complete peace of mind for your security investment.",
    features: [
      "Monthly preventive visits",
      "Unlimited support calls",
      "Real-time system monitoring",
      "Priority emergency response",
      "Annual camera repositioning"
    ],
    includes: [
      "Up to 16 cameras coverage",
      "4 DVR/NVR units",
      "24/7 dedicated support line",
      "50% discount on parts",
      "24-hour response guarantee"
    ],
    duration: "12 months"
  },
  {
    id: 10,
    name: "AMC of Sliding Gate",
    category: "Annual Maintenance Contract",
    price: 8000,
    originalPrice: 10000,
    priceType: "per year",
    image: "https://m.media-amazon.com/images/I/71mG6fV8IaL._SL1500_.jpg",
    description: "Annual maintenance contract for automatic sliding gates",
    fullDescription: "Comprehensive annual maintenance for automatic sliding gates ensuring smooth operation and extended equipment life. Our service includes lubrication, motor inspection, sensor calibration, and safety system testing to prevent breakdowns.",
    features: [
      "Quarterly maintenance visits",
      "Motor and gear inspection",
      "Track cleaning and lubrication",
      "Sensor alignment check",
      "Safety system testing"
    ],
    includes: [
      "4 scheduled visits",
      "Lubrication materials",
      "Minor adjustments",
      "Emergency breakdown support",
      "30% discount on repairs"
    ],
    duration: "12 months"
  },
  // Service Charges
  {
    id: 11,
    name: "On-Site Technical Support",
    category: "Service Charges",
    price: 500,
    priceType: "per visit",
    image: "https://m.media-amazon.com/images/I/71XWXUL77rL._SL1500_.jpg",
    description: "Technical support visit for troubleshooting and repair",
    fullDescription: "Professional on-site technical support for troubleshooting and resolving issues with your security systems. Our experienced technicians will diagnose problems, perform repairs, and ensure your system is back to optimal performance.",
    features: [
      "System diagnostics",
      "Hardware troubleshooting",
      "Software configuration",
      "Minor repairs included",
      "Performance optimization"
    ],
    includes: [
      "Travel within city limits",
      "1 hour service time",
      "Basic tools and equipment",
      "Diagnostic report",
      "Recommendations"
    ],
    duration: "1-2 hours"
  },
  {
    id: 12,
    name: "Remote Technical Support",
    category: "Service Charges",
    price: 200,
    priceType: "per session",
    image: "https://m.media-amazon.com/images/I/61PKuATqvKL._SL1500_.jpg",
    description: "Remote assistance for configuration and minor issues",
    fullDescription: "Quick and convenient remote technical support for software configuration, settings adjustment, and minor troubleshooting. Our technicians will connect remotely to resolve issues without the need for an on-site visit.",
    features: [
      "Remote system access",
      "Configuration changes",
      "Software troubleshooting",
      "User guidance",
      "Settings optimization"
    ],
    includes: [
      "30 minutes support time",
      "Screen sharing session",
      "Step-by-step guidance",
      "Configuration backup",
      "Follow-up email"
    ],
    duration: "30-45 minutes"
  }
];

// Service categories
export const serviceCategories = [
  "All",
  "Installation",
  "Annual Maintenance Contract",
  "Service Charges"
];

export default services;
