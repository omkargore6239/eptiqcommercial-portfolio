import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FaLink, 
  FaArrowLeft,
  FaEye,
  FaUserFriends,
  FaComments,
  FaHeart,
  FaMobileAlt,FaHandshake,
  FaGlobe ,
  FaCalendarCheck,
  FaSyncAlt,
  FaVideo ,
  FaBell ,
  FaFileMedical ,
  FaRobot,
  FaBicycle ,
  FaMapMarkedAlt ,
  FaRegCreditCard,FaBuilding,
  FaChartLine,      
  FaCogs,
  FaChalkboardTeacher ,FaGraduationCap ,FaLaptopCode ,FaBrain, 
  FaDatabase,
  FaExpandArrowsAlt,
  FaThumbsUp,
  FaPaperPlane,
  FaRoute,
  FaUsersCog,
  FaUserMd ,
  FaShieldAlt,      
  FaUserClock,
  FaBroadcastTower,
  FaHandHoldingHeart ,
  FaLock,
  FaMoneyCheckAlt,
  FaCube,
  FaClock,
  FaShoppingCart ,
  FaBoxOpen ,
  FaCreditCard ,
  FaTruck ,
  FaStar,
  FaRocket ,
  FaCheckDouble,
  FaHardHat,
  FaCheckCircle,
  FaTools,
  FaCalendarAlt,
  FaClipboardList,
  FaMicrochip,
  FaSearch,
  FaUsers,
  FaPlug,
  FaLeaf,
  FaSolarPanel,
  FaFileInvoiceDollar,
  FaMoneyBillWave,
  FaGlobeEurope,
  FaTachometerAlt,
  FaBatteryFull,
  FaExpandAlt,
  FaMapMarkerAlt,  
  FaCloudSun,  
  FaUserShield, 
  FaTrophy,
  FaSmile,
  FaChartPie,
  FaDollarSign,
  FaWarehouse,
} from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Module icons configuration
  const moduleIcons = {
    // scheduling: <FaCalendarAlt className="text-purple-500 text-xl mr-3" />,
    // ProductionPlanning: <FaClipboardList className="text-blue-500 text-xl mr-3" />,
    // planning: <FaClipboardList className="text-blue-500 text-xl mr-3" />,
    // prond: <FaMicrochip className="text-green-500 text-xl mr-3" />,
    // recording: <FaClipboardList className="text-red-500 text-xl mr-3" />,
    // quality: <FaSearch className="text-yellow-500 text-xl mr-3" />,
    // hrms: <FaUsers className="text-pink-500 text-xl mr-3" />
    
  };

  const projects = [
    {
      id: 1,
      title: 'Offerlearning',
      link: 'https://offerlearning.com/',
      image: '/project/offerlearning.jpeg',
      category: 'Online Learning',
      description: `Offerlearning is an advanced e-learning platform designed to provide interactive and hands-on learning experiences. It offers a wide range of courses, certifications, and virtual labs, allowing learners to gain real-world skills in technology, business, and professional development. The platform integrates AI-driven personalized learning paths, gamified content, and collaborative tools, making learning engaging and accessible from anywhere.`,
    
      techStack: ['React', 'AWS IoT Core', 'Node.js', 'MongoDB Atlas'],
    
      features: [
        {
          icon: <FaChalkboardTeacher className="text-blue-500 text-2xl" />,
          title: 'Live & On-Demand Courses',
          description: 'Access a wide range of expert-led courses with live and pre-recorded sessions, covering various industries including tech, business, and creative skills.'
        },
        {
          icon: <FaGraduationCap className="text-blue-500 text-2xl" />,
          title: 'Certification & Career Pathways',
          description: 'Earn industry-recognized certifications and follow guided learning paths tailored to career goals with structured progress tracking.'
        },
        {
          icon: <FaRobot className="text-blue-500 text-2xl" />,
          title: 'AI-Powered Personalized Learning',
          description: 'AI-driven recommendations help learners find the best courses, quizzes, and exercises based on their progress and interests.'
        },
        {
          icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
          title: 'Virtual Labs & Hands-On Practice',
          description: 'Gain practical experience with coding sandboxes, IoT simulations, and interactive projects that allow learners to apply knowledge in real-world scenarios.'
        },
        {
          icon: <FaUsers className="text-blue-500 text-2xl" />,
          title: 'Community & Peer Collaboration',
          description: 'Engage in discussions, join study groups, and collaborate with fellow learners and instructors through interactive forums and live Q&A sessions.'
        },
        {
          icon: <FaChartLine className="text-blue-500 text-2xl" />,
          title: 'Progress Tracking & Analytics',
          description: 'Detailed analytics provide insights into learning progress, strengths, and areas for improvement with adaptive learning suggestions.'
        }
      ],
    
      benefits: [
        {
          icon: <FaClock className="text-blue-500 text-2xl" />,
          title: 'Flexible Learning Schedule',
          description: 'Learn at your own pace with 24/7 access to course materials, recorded sessions, and practice exercises.'
        },
        {
          icon: <FaBrain className="text-blue-500 text-2xl" />,
          title: 'Skill-Based Learning',
          description: 'Practical, project-based learning ensures that users develop job-ready skills applicable in real-world scenarios.'
        },
        {
          icon: <FaBrain className="text-blue-500 text-2xl" />,
          title: 'Industry-Expert Instructors',
          description: 'Courses are designed and taught by industry leaders and subject matter experts with years of experience.'
        },
        {
          icon: <FaTrophy className="text-blue-500 text-2xl" />,
          title: 'Career Advancement & Job Readiness',
          description: 'Earn valuable certifications and gain access to job placement programs to boost career growth and employment opportunities.'
        },
        {
          icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
          title: 'Secure & Scalable Platform',
          description: 'Cloud-based infrastructure ensures data security, reliability, and seamless accessibility from any device globally.'
        }
      ]
    }
    ,
    { 
      id: 2,
      title: 'Padcorp',
      link: 'https://padcorp.shop/',
      image: '/project/padcorp.jpeg',
      category: 'Agri-Tech Retail',
      description: `Farm equipment marketplace with integrated ERP solutions for agricultural machinery sales, financing, and maintenance. Supports precision farming integration and equipment lifecycle management.`,
      modules: [
        { name: 'Equipment Financing', description: 'Integrated loan/lease management with partner banks and MFIs' },
        { name: 'Precision Farming Hub', description: 'IoT integration for tractor GPS and harvest monitoring systems' },
        { name: 'Maintenance Scheduling', description: 'Predictive service planning based on equipment usage analytics' },
        { name: 'Parts Inventory', description: 'AI-powered spare parts demand forecasting' },
        { name: 'Dealer Network', description: 'Multi-tier distribution management for rural outreach' },
        { name: 'Warranty Tracker', description: 'Blockchain-based equipment service history ledger' }
      ],
      features: [
        {
          icon: <FaTools className="text-blue-500 text-2xl" />,
          title: 'Smart Equipment Catalog',
          description: 'AI-powered recommendation engine suggests machinery based on farm size, crop type, and soil conditions. Includes 3D equipment previews and comparative specs analysis.'
        },
        {
          icon: <FaMoneyBillWave className="text-blue-500 text-2xl" />,
          title: 'Flexi-Financing Solutions',
          description: 'Integrated crop-cycle aligned repayment plans with automatic harvest income deductions. Supports government subsidy management and collateral-free microloans.'
        },
        {
          icon: <FaCogs className="text-blue-500 text-2xl" />,
          title: 'Precision Farming Integration',
          description: 'Connect farm equipment to soil sensors and weather APIs. Auto-advertise compatible implements based on farmers\' existing machinery and crop patterns.'
        },
        {
          icon: <FaClipboardList className="text-blue-500 text-2xl" />,
          title: 'Predictive Parts Inventory',
          description: 'ML-driven spare parts forecasting using equipment telemetry data. Maintain optimal stock levels across rural service centers with drone-assisted delivery routing.'
        },
        {
          icon: <FaLeaf className="text-blue-500 text-2xl" />,
          title: 'Crop-Centric Equipment Packages',
          description: 'Pre-configured machinery bundles for specific crops (e.g., rice transplanters + harvesters + dryers). Includes ROI calculators based on regional yield averages.'
        },
        {
          icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
          title: 'Digital Service Records',
          description: 'Blockchain-maintained maintenance history for resale value preservation. Automatic warranty claims processing with IoT-verified equipment usage data.'
        }
      ],
      benefits: [
        {
          icon: <FaTachometerAlt className="text-blue-500 text-2xl" />,
          title: '40% Faster Farm Mechanization',
          description: 'End-to-end equipment acquisition process from selection to financing completed in 72 hours versus traditional 3-week cycles'
        },
        {
          icon: <FaClock className="text-blue-500 text-2xl" />,
          title: '60% Reduced Downtime',
          description: 'Predictive maintenance alerts and rural service networks ensure equipment availability during critical farming windows'
        },
        {
          icon: <FaChartLine className="text-blue-500 text-2xl" />,
          title: '30% Higher Crop Yield',
          description: 'Precision farming packages optimized for local conditions increase production efficiency and resource utilization'
        },
        {
          icon: <FaExpandAlt className="text-blue-500 text-2xl" />,
          title: '5-Year Equipment Lifespan',
          description: 'AI-maintained service schedules and genuine parts availability extend machinery operational life'
        },
        {
          icon: <FaUsers className="text-blue-500 text-2xl" />,
          title: 'Pan-India Rural Network',
          description: '15,000+ village-level service points with regional equipment customization (e.g., narrow-track tractors for hilly terrain)'
        },
        {
          icon: <FaCheckCircle className="text-blue-500 text-2xl" />,
          title: 'Govt. Compliance Ready',
          description: 'Automated FPO (Farmer Producer Organization) documentation and subsidy claim processing'
        }
      ]
    },
    { 
      id: 3,
      title: 'VegoBike',
      link: 'https://play.google.com/store/apps/details?id=com.vegobike',
      image: '/project/vegobike.jpeg',
      category: 'Smart Mobility',
      description: `AI-powered bike-sharing platform with IoT-enabled e-bikes, predictive maintenance, and seamless integration with public transit systems for urban last-mile connectivity.`, 
      modules: [
        { name: 'Ride Planning', description: 'Multi-modal trip planning with real-time bike availability and public transit schedules' },
        { name: 'Bike Health Monitoring', description: 'IoT sensors track battery health, tire pressure, and brake conditions for predictive maintenance' },
        { name: 'Dynamic Pricing', description: 'AI-driven fare adjustments based on demand, weather, and traffic conditions' },
        { name: 'User Safety', description: 'Real-time crash detection and emergency SOS alerts with GPS tracking' },
        { name: 'Fleet Management', description: 'Automated bike redistribution using demand heatmaps and AI optimization' },
        { name: 'Sustainability Dashboard', description: 'Track carbon savings and environmental impact for riders and cities' }
      ],
      features: [
        {
          icon: <FaMapMarkerAlt className="text-blue-500 text-2xl" />,
          title: 'Real-Time Bike Heatmaps',
          description: 'Interactive maps showing bike availability, parking zones, and high-demand areas. Integrates with public transit stops for seamless last-mile connectivity.'
        },
        {
          icon: <FaBatteryFull className="text-blue-500 text-2xl" />,
          title: 'Smart Battery Management',
          description: 'E-bike battery status tracking with predictive charging alerts. Auto-route riders to nearest charging docks when battery is low.'
        },
        {
          icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
          title: 'Anti-Theft Geofencing',
          description: 'Geo-boundaries trigger alarms and disable bikes if moved outside approved zones. Real-time tracking aids recovery of stolen bikes.'
        },
        {
          icon: <FaChartLine className="text-blue-500 text-2xl" />,
          title: 'AI-Powered Fleet Optimization',
          description: 'Predictive algorithms redistribute bikes based on historical usage patterns, weather forecasts, and special events.'
        },
        {
          icon: <FaUsers className="text-blue-500 text-2xl" />,
          title: 'Group Ride Modes',
          description: 'Social features for group rides with shared routes, leaderboards, and carbon-saving competitions.'
        },
        {
          icon: <FaCloudSun className="text-blue-500 text-2xl" />,
          title: 'Weather-Adaptive Routing',
          description: 'Auto-suggest safer routes during rain or snow, with real-time alerts for slippery conditions.'
        }
      ],
      benefits: [
        {
          icon: <FaLeaf className="text-blue-500 text-2xl" />,
          title: '20-Ton Monthly Carbon Offset',
          description: 'Replace short car trips with e-bike rides, reducing urban emissions and traffic congestion.'
        },
        {
          icon: <FaMoneyBillWave className="text-blue-500 text-2xl" />,
          title: '30% Lower Operational Costs',
          description: 'Predictive maintenance and optimized fleet routing reduce bike downtime and servicing expenses.'
        },
        {
          icon: <FaClock className="text-blue-500 text-2xl" />,
          title: '50% Faster Last-Mile Connectivity',
          description: 'Seamless integration with buses and metros ensures faster commutes compared to walking or taxis.'
        },
        {
          icon: <FaUserShield className="text-blue-500 text-2xl" />,
          title: '99.9% Ride Safety',
          description: 'Crash detection, emergency alerts, and real-time rider tracking ensure safe urban mobility.'
        },
        {
          icon: <FaExpandAlt className="text-blue-500 text-2xl" />,
          title: 'City-Wide Scalability',
          description: 'Modular system supports 10,000+ bikes across multiple zones, with dynamic pricing for demand balancing.'
        },
        {
          icon: <FaSmile className="text-blue-500 text-2xl" />,
          title: 'Enhanced Rider Experience',
          description: 'Personalized ride recommendations, rewards for frequent users, and gamified challenges boost engagement.'
        }
      ]
    },
    { 
      id: 4,
      title: 'Sasha Clothings',
      link: 'https://sashaclothings.in',
      image: '/project/sashaclothings.jpeg',
      category: 'Fashion Tech',
      description: `AI-powered fashion platform with virtual try-on and personalized styling recommendations. Integrates AR visualization and social commerce features.`,
      techStack: ['React', 'Django', 'PostgreSQL', 'TensorFlow'],
      features: [
        '👗 Virtual fitting room (AR)',
        '🎨 Style customization tools',
        '📦 Same-day delivery tracking',
        '📱 Social media integration',
        '🤖 AI stylist assistant'
      ],
      benefits: [
        '📈 35% higher conversion rate',
        '🛒 25% lower return rates',
        '⏱️ <2s recommendation engine',
        '🌍 Global payment gateways'
      ]
    },
    { 
      id: 5,
      title: 'AK Enterprises',
      link: 'https://akenterprisess.in',
      image: '/project/akenterprises.jpeg',
      category: 'Business Automation',
      description: `End-to-end process automation platform with RPA and legacy system integration. Features document AI processing and compliance automation.`,
      techStack: ['Vue.js', 'Spring Boot', 'MongoDB', 'UiPath'],
      features: [
        '🤖 RPA workflow designer',
        '📄 Document processing AI',
        '🔐 Compliance automation',
        '📊 Cross-platform analytics',
        '🔗 Legacy system integration'
      ],
      benefits: [
        '⏱️ 70% process time reduction',
        '📉 60% lower error rates',
        '🛡️ GDPR/ISO27001 compliance',
        '🌍 Multi-region deployment'
      ]
    },
    { 
      id: 6,
      title: 'Harkal Studios',
      link: 'https://harkalstudios.in',
      image: '/project/harkalstudios.jpeg',
      category: 'Media Automation',
      description: `AI-driven media production platform with automated editing, metadata tagging, and multi-platform publishing. Supports 4K/8K video processing.`,
      techStack: ['React', 'Node.js', 'AWS S3', 'FFmpeg'],
      features: [
        '🎥 Automated video editing',
        '📂 Smart metadata tagging',
        '🌐 Multi-CDN publishing',
        '📊 Content performance analytics',
        '🔒 DRM protection'
      ],
      benefits: [
        '⏱️ 80% faster production cycles',
        '📉 40% storage cost reduction',
        '🌍 Global content distribution',
        '🛡️ Enterprise-grade security'
      ]
    },
    { 
      id: 7,
      title: 'Pandvesdeltaforce',
      link: 'https://pandvesdeltaforce.com',
      image: '/project/pandvesdeltaforce.jpeg',
      category: 'Smart Manufacturing',
      description: `Industry 4.0 MES solution with IIoT integration and predictive quality control. Supports lean manufacturing and real-time OEE tracking.`,
      techStack: ['Angular', 'Java', 'MySQL', 'OPC UA'],
      features: [
        '🏭 Real-time OEE monitoring',
        '🔮 Predictive quality analytics',
        '🤖 Automated material handling',
        '📈 Production scheduling AI',
        '🔗 ERP/MES integration'
      ],
      benefits: [
        '📈 25% productivity increase',
        '📉 30% defect reduction',
        '⚡ 50% faster changeovers',
        '🌍 Multi-plant visibility'
      ]
    },
    { 
      id: 8,
      title: 'Owlsale Windo',
      link: 'https://play.google.com/store/apps/details?id=com.owlsalewindo.customer',
      image: '/project/owlsalewindo.jpeg',
      category: 'E-commerce Platform',
      description: `Comprehensive e-commerce platform offering seamless online shopping experiences, advanced inventory management, and AI-driven recommendations.`,
      techStack: ['Flutter', 'Firebase', 'Node.js', 'Stripe'],
      features: [
        {
          icon: <FaShoppingCart className="text-blue-500 text-2xl" />, 
          title: 'Seamless Shopping Experience',
          description: 'A user-friendly interface allowing customers to browse, search, and purchase products effortlessly across multiple categories.'
        },
        {
          icon: <FaBoxOpen className="text-blue-500 text-2xl" />, 
          title: 'Advanced Inventory Management',
          description: 'Real-time stock tracking, automated restocking alerts, and seamless supplier integrations ensure optimal product availability.'
        },
        {
          icon: <FaCreditCard className="text-blue-500 text-2xl" />, 
          title: 'Secure Payment Processing',
          description: 'Multiple payment options, including credit cards, digital wallets, and BNPL, backed by robust fraud prevention mechanisms.'
        },
        {
          icon: <FaTruck className="text-blue-500 text-2xl" />, 
          title: 'Efficient Order Fulfillment',
          description: 'Integrated logistics support with real-time tracking, automated order processing, and optimized delivery routes for faster shipping.'
        },
        {
          icon: <FaStar className="text-blue-500 text-2xl" />, 
          title: 'AI-Driven Product Recommendations',
          description: 'Personalized shopping experiences powered by AI analyzing browsing behavior, past purchases, and preferences.'
        }
      ],
      benefits: [
        {
          icon: <FaRocket className="text-blue-500 text-2xl" />, 
          title: 'Increased Sales & Conversions',
          description: 'AI-driven recommendations and an intuitive shopping experience lead to higher conversion rates and customer retention.'
        },
        {
          icon: <FaClock className="text-blue-500 text-2xl" />, 
          title: 'Reduced Operational Costs',
          description: 'Automated order processing, inventory tracking, and supplier management reduce manual workload and errors.'
        },
        {
          icon: <FaSmile className="text-blue-500 text-2xl" />, 
          title: 'Enhanced Customer Satisfaction',
          description: 'Seamless navigation, fast checkout, and timely delivery contribute to improved customer experience and brand loyalty.'
        },
        {
          icon: <FaGlobe className="text-blue-500 text-2xl" />, 
          title: 'Global Reach',
          description: 'Support for multiple languages, currencies, and international shipping broadens market reach and customer base.'
        },
        {
          icon: <FaChartLine className="text-blue-500 text-2xl" />, 
          title: 'Data-Driven Business Insights',
          description: 'Comprehensive analytics dashboards providing real-time insights into sales, customer behavior, and marketing performance.'
        }
      ]
    },
    { 
      id: 9,
      title: 'OK Bikes',
      link: 'https://okbikes.eptiqos.com/',
      image: '/project/okbikes.jpeg',
      category: 'Bike Rental Service',
      description: `OK Bikes is an on-demand bike rental platform offering seamless mobility solutions. Users can rent bikes for short or long durations through a user-friendly app, featuring GPS tracking, dynamic pricing, and secure payment options. Designed for urban commuters, tourists, and businesses, OK Bikes ensures cost-effective and eco-friendly travel.`,
      techStack: ['React Native', 'Node.js', 'MongoDB', 'Mapbox', 'Stripe'],
      
      features: [
        {
          icon: <FaBicycle className="text-blue-500 text-2xl" />, 
          title: 'Wide Range of Bikes',
          description: 'Rent different types of bikes, including scooters, electric bikes, and standard bicycles, based on your preference and trip needs.'
        },
        {
          icon: <FaMapMarkedAlt className="text-blue-500 text-2xl" />, 
          title: 'Real-Time GPS Tracking',
          description: 'Locate available bikes nearby and navigate effortlessly using our integrated Mapbox-based GPS system.'
        },
        {
          icon: <FaMoneyBillWave className="text-blue-500 text-2xl" />, 
          title: 'Flexible Pricing & Plans',
          description: 'Choose from hourly, daily, and weekly rental plans with transparent pricing and no hidden fees.'
        },
        {
          icon: <FaLock className="text-blue-500 text-2xl" />, 
          title: 'Smart Lock System',
          description: 'Unlock bikes securely using the app with QR code scanning, eliminating the need for physical keys.'
        },
        {
          icon: <FaRegCreditCard className="text-blue-500 text-2xl" />, 
          title: 'Seamless Payments',
          description: 'Make quick and secure payments via Stripe, PayPal, and other payment gateways within the app.'
        },
        {
          icon: <FaUserShield className="text-blue-500 text-2xl" />, 
          title: 'Insurance & Safety Features',
          description: 'Get insurance coverage for rides and access emergency response services in case of accidents or theft.'
        }
      ],
      
      benefits: [
        {
          icon: <FaClock className="text-blue-500 text-2xl" />, 
          title: 'Quick & Hassle-Free Rentals',
          description: 'Complete your booking in under a minute and start riding instantly without paperwork or long wait times.'
        },
        {
          icon: <FaLeaf className="text-blue-500 text-2xl" />, 
          title: 'Eco-Friendly Commuting',
          description: 'Reduce carbon emissions by choosing bike rentals over fuel-based transportation.'
        },
        {
          icon: <FaBuilding className="text-blue-500 text-2xl" />, 
          title: 'Ideal for Businesses',
          description: 'Custom rental solutions for corporate employees, food delivery services, and gig workers.'
        },
        {
          icon: <FaMobileAlt className="text-blue-500 text-2xl" />, 
          title: '100% Mobile Operated',
          description: 'Book, unlock, and ride using just your smartphone without requiring manual intervention.'
        },
        {
          icon: <FaUsers className="text-blue-500 text-2xl" />, 
          title: 'Growing Community',
          description: 'Join thousands of satisfied riders who rely on OK Bikes for their daily commutes and leisure trips.'
        }
      ]
    },
    { 
      id: 10,
      title: 'Electrodigit',
      link: '#',
      image: '/Eptiq clients/ELECTRODIGIT.jpeg',
      category: 'Industry 4.0',
      description: `MES solution for electronics manufacturing with component-level traceability and real-time process control. Supports high-mix/low-volume production.`,
      modules: [
        { name: 'Scheduling', description:  '' },
        { name: 'ProductionPlanning', description:  '' },
        { name: 'PROND', description:  '' },
        { name: 'Recording', description:  '' },
        { name: 'Quality Inspection', description:  '' },
        { name: 'HRMS', description:  '' }
      ],
      features: [
        {
          icon: <FaEye className="text-blue-500 text-2xl" />,
          title: 'Real-Time Production Monitoring',
          description: 'MES provides real-time visibility into production activities, helping track progress, detect bottlenecks, and ensure timely delivery. Operators and managers can monitor machinery status, production rates, and downtime, which leads to faster corrective actions.'
        },
        {
          icon: <FaSyncAlt className="text-blue-500 text-2xl" />,
          title: 'Integration with Existing ERP',
          description: 'Our MES seamlessly integrates with your current ERP system, creating a fully connected environment. This integration ensures that data flows smoothly between production lines and back-office functions, providing comprehensive insights into the manufacturing process while keeping sales, purchase, and financial operations in sync.'
        },
        {
          icon: <FaRobot className="text-blue-500 text-2xl" />,
          title: 'Process Automation',
          description: 'Automation is a cornerstone of MES, reducing manual input and ensuring consistency in production. From raw material tracking to finished product assembly, automated workflows eliminate repetitive tasks, allowing teams to focus on value-added activities.'
        },
        {
          icon: <FaCheckCircle className="text-blue-500 text-2xl" />,
          title: 'Quality Control and Traceability',
          description: 'MES enhances quality management by enabling real-time monitoring of product standards. Every stage of production is documented, and product quality is continuously tracked, ensuring compliance with industry standards. This helps reduce defects, improve product reliability, and ensure traceability for every unit produced.'
        },
        {
          icon: <FaCalendarAlt className="text-blue-500 text-2xl" />,
          title: 'Production Scheduling and Optimization',
          description: 'By utilizing real-time data from both the shop floor and ERP, MES helps optimize production scheduling. This ensures efficient use of resources, minimizes downtime, and maintains optimal throughput, increasing overall manufacturing performance.'
        }
      ],
    
      benefits: [
        {
          icon: <FaChartLine className="text-blue-500 text-2xl" />,
          title: 'Enhanced Operational Visibility',
          description: 'Integrating MES with your ERP system gives you a 360-degree view of your operations, from raw material procurement to finished goods, helping you make better-informed decisions.'
        },
        {
          icon: <FaCogs className="text-blue-500 text-2xl" />,
          title: 'Improved Manufacturing Efficiency',
          description: 'With real-time monitoring and automated process control, MES reduces downtime and increases throughput. The integration with ERP optimizes the entire production flow, from materials management to order fulfillment, resulting in cost savings and higher production efficiency.'
        },
        {
          icon: <FaDatabase className="text-blue-500 text-2xl" />,
          title: 'Accurate Data for Business Decisions',
          description: 'MES ensures that accurate, real-time data from the shop floor is fed into your ERP, providing better insights into production performance. This allows managers to make more informed decisions about inventory, procurement, and capacity planning, aligning manufacturing operations with broader business objectives.'
        },
        {
          icon: <FaExpandArrowsAlt className="text-blue-500 text-2xl" />,
          title: 'Greater Flexibility and Scalability',
          description: 'The MES system can be easily scaled as your business grows. As production demands increase, the system can handle more complex workflows, product lines, and customization requirements, without disrupting existing operations.'
        },
        {
          icon: <FaThumbsUp className="text-blue-500 text-2xl" />,
          title: 'Improved Product Quality',
          description: 'MES offers continuous monitoring of production quality, enabling businesses to identify and address quality issues early in the process. This integration with ERP ensures that quality standards are maintained consistently, leading to fewer defects, improved customer satisfaction, and reduced costs associated with rework.'
        }
      ]
    },

    
    
    // Add this after ID:10 project in the projects array
    { 
      id: 11,
      title: 'Matchwell Engineering',
      link: 'https://matchwellengineering.com',  // Updated live link
      image: '/project/matchwell.jpeg',
      category: 'Industrial Automation',
      description: `Custom automation solutions for heavy industries with predictive maintenance and remote monitoring capabilities. Specializes in CNC machine integration and robotic process automation.`,
      techStack: ['Angular', 'Java Spring', 'MySQL', 'OPC UA'],
      features: [
        '🏭 Equipment health monitoring',
        '🤖 Robotic cell integration',
        '📈 Production yield optimization',
        '🔧 Predictive maintenance alerts'
      ],
      benefits: [
        '🛠️ 30% longer equipment lifespan',
        '📉 40% reduction in downtime',
        '⚡ 25% faster production cycles',
        '🌍 Multi-factory monitoring'
      ]
    },
    { 
      id: 12,
      title: 'AVS Engineering',
      link: 'https://avsengineering.in',
      image: '/project/AVS-ERP.jpg',
      category: 'Enterprise Resource Planning',
      description: `Comprehensive ERP solutions designed for manufacturing and supply chain industries, streamlining business operations, financial management, and resource planning.`,
      modules: [
        { name: 'Finance Management', description: 'Integrated financial tracking, budgeting, and real-time expense monitoring' },
        { name: 'Inventory Control', description: 'Automated stock management with demand forecasting' },
        { name: 'Procurement', description: 'End-to-end vendor and purchase order management' },
        { name: 'HRMS', description: 'Employee records, payroll processing, and attendance tracking' },
        { name: 'Customer Relationship Management (CRM)', description: 'Centralized customer interactions and sales tracking' },
        { name: 'Supply Chain Management', description: 'Optimized logistics, warehousing, and distribution planning' }
      ],
      features: [
        {
          icon: <FaDatabase className="text-blue-500 text-2xl" />, 
          title: 'Centralized Data Management',
          description: 'A unified ERP system consolidates data across departments, ensuring real-time access to critical business insights.'
        },
        {
          icon: <FaSyncAlt className="text-blue-500 text-2xl" />,
          title: 'Seamless System Integration',
          description: 'ERP integrates seamlessly with third-party applications, reducing manual data entry and improving accuracy.'
        },
        {
          icon: <FaCogs className="text-blue-500 text-2xl" />,
          title: 'Automated Business Processes',
          description: 'Automates key business operations, minimizing errors and enhancing efficiency across finance, HR, and logistics.'
        },
        {
          icon: <FaChartLine className="text-blue-500 text-2xl" />,
          title: 'Real-Time Analytics & Reporting',
          description: 'Gain actionable insights through customizable reports and dashboards, improving decision-making and forecasting accuracy.'
        },
        {
          icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
          title: 'Robust Security & Compliance',
          description: 'Advanced role-based access controls and compliance tracking ensure data security and regulatory adherence.'
        }
      ],
      benefits: [
        {
          icon: <FaChartPie className="text-blue-500 text-2xl" />,
          title: 'Enhanced Operational Efficiency',
          description: 'ERP streamlines business workflows, reducing redundancies and optimizing resource utilization.'
        },
        {
          icon: <FaDollarSign className="text-blue-500 text-2xl" />,
          title: 'Cost Reduction & Budget Control',
          description: 'Improved financial management and forecasting help businesses cut unnecessary costs and maintain profitability.'
        },
        {
          icon: <FaUsers className="text-blue-500 text-2xl" />,
          title: 'Improved Workforce Productivity',
          description: 'Automated processes free up employees from repetitive tasks, allowing them to focus on high-value activities.'
        },
        {
          icon: <FaWarehouse className="text-blue-500 text-2xl" />,
          title: 'Optimized Inventory & Supply Chain',
          description: 'Real-time inventory tracking and demand planning ensure efficient supply chain operations.'
        },
        {
          icon: <FaThumbsUp className="text-blue-500 text-2xl" />,
          title: 'Scalability & Flexibility',
          description: 'Modular ERP design supports business expansion, adapting to new processes and evolving market demands.'
        }
      ]
    }
,
    { 
      id: 13,
      title: 'Falcon',
      link: '#',  // Updated live link
      image: '/Eptiq clients/Falcon.jpeg',
      category: 'Supply Chain Tech',
      description: `At Falcon, we successfully delivered a fully integrated ERP and Order Fulfillment System (OFS) that work in synergy to streamline their operations. The ERP system handles core business functions such as finance, HR, inventory, and procurement, while the OFS ensures real-time tracking of dispatches, notifications to clients, and order processing.

The integration between these systems enables seamless data flow across departments, reducing operational friction and enabling more informed decision-making. Real-time updates on orders, coupled with detailed reports from both systems, give managers and teams full visibility into the manufacturing and supply chain processes. This integration has not only enhanced productivity but also optimized the order fulfillment cycle, ensuring that products are delivered on time and to the highest standards.`, 
      modules: [
        { name: 'Scheduling', description:  '' },
        { name: 'ProductionPlanning', description:  '' },
        { name: 'PROND', description:  '' },
        { name: 'Recording', description:  '' },
        { name: 'Quality Inspection', description:  '' },
        { name: 'HRMS', description:  '' }
      ],
      features: [
        {
          icon: <FaEye className="text-blue-500 text-2xl" />,
          title: 'End to end integration',
          description: ' ERP and OFS are tightly integrated, providing a seamless flow of information across finance, inventory, procurement, and dispatch.' },
        {
          icon: <FaSyncAlt className="text-blue-500 text-2xl" />,
          title: 'Real-Time Notifications',
          description: 'Clients are automatically notified upon dispatch with details like tracking numbers and delivery schedules, enhancing communication and customer satisfaction.'},
        {
          icon: <FaRobot className="text-blue-500 text-2xl" />,
          title: 'Multi-Level Authentication',
          description: ' The system includes verification steps to ensure data accuracy before dispatch, reducing errors and improving overall efficienc'
        },
        {
          icon: <FaCheckCircle className="text-blue-500 text-2xl" />,
          title: 'Automated Dispatch Tracking',
          description: 'All orders are tracked in real time from dispatch to delivery, ensuring that both internal teams and clients are kept informed at every step.'
        },
        {
          icon: <FaCalendarAlt className="text-blue-500 text-2xl" />,
          title: 'Comprehensive Reporting',
          description: ' Managers receive detailed reports from both systems, allowing for better strategic decisions based on data-driven insights.'
        }
      ],
      benefits: [
        {
          icon: <FaChartLine className="text-blue-500 text-2xl" />,
          title: 'Streamlined Operations',
          description: ' With ERP and OFS working together, processes are more efficient, reducing the time spent on manual tasks and improving overall workflow.'},
        {
          icon: <FaCogs className="text-blue-500 text-2xl" />,
          title: 'Increased Productivity',
          description: 'Automation of key tasks and real-time updates result in faster order processing, reducing delays and improving client satisfaction.'
        },
        {
          icon: <FaDatabase className="text-blue-500 text-2xl" />,
          title: 'Better Data Accuracy',
          description: 'The integration minimizes errors by ensuring that all systems are working with the same set of up-to-date information, enhancing decision-making.'
        },
        {
          icon: <FaExpandArrowsAlt className="text-blue-500 text-2xl" />,
          title: 'Improved Client Communication',
          description: 'Automated notifications ensure that clients are kept in the loop, improving their experience and fostering stronger relationships.'
        },
        // {
        //   icon: <FaThumbsUp className="text-blue-500 text-2xl" />,
        //   title: 'Enhanced Customer Satisfaction',
        //   description: 'Deliver orders faster and more accurately with real-time tracking and optimized processes. Improve customer satisfaction by meeting delivery commitments consistently.'
        // }
      ]
    },
    { 
      id: 14,
      title: 'Global Tek',
      link: '#',  
      image: '/Eptiq clients/Globaltek.jpeg',
      category: 'Warehouse Tech',
      description: `Robotics-driven automation system for warehouses, combining autonomous mobile robots (AMRs), drone swarms, and AI to optimize inventory handling and logistics.`, 
      modules: [
        { name: 'Fleet Control', description: 'Centralized management of robot fleets for task allocation and coordination' },
        { name: 'Path Optimization', description: 'AI-driven route planning for robots and drones to minimize travel time' },
        { name: 'Inventory Robotics', description: 'Integration of robotic pickers, sorters, and palletizers with warehouse workflows' },
        { name: 'Predictive Maintenance', description: 'AI-powered health monitoring for robotic systems to prevent downtime' },
        { name: 'Safety Protocols', description: 'Collision avoidance and emergency response systems for human-robot collaboration' },
        { name: 'Integration Gateway', description: 'Seamless connectivity with WMS, ERP, and legacy warehouse systems' }
      ],
      features: [
        {
          icon: <FaRobot className="text-blue-500 text-2xl" />,
          title: 'Autonomous Mobile Robots (AMRs)',
          description: 'Self-navigating robots for goods transportation, equipped with LiDAR and computer vision for dynamic environment adaptation. Operate 24/7 with automatic charging and load balancing.'
        },
        {
          icon: <FaPaperPlane className="text-blue-500 text-2xl" />,
          title: 'Drone Inventory Scanning',
          description: 'Autonomous drone fleets for aerial stock verification in high racks, using RFID and barcode scanning. Conduct 3D mapping and cycle counts 10x faster than manual processes.'
        },
        {
          icon: <FaRoute className="text-blue-500 text-2xl" />,
          title: 'Dynamic Path Planning',
          description: 'Real-time traffic management for robots using machine learning. Automatically reroute systems avoid congestion and prioritize urgent orders during peak operations.'
        },
        {
          icon: <FaUsersCog className="text-blue-500 text-2xl" />,
          title: 'Swarm Coordination',
          description: 'Collaborative multi-robot workflows for pallet building and order consolidation. Synchronized robots share workload based on proximity and battery status.'
        },
        {
          icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
          title: 'Collision Avoidance',
          description: '3D spatial awareness system using IoT sensors and thermal imaging. Robots automatically freeze or redirect when humans enter restricted zones.'
        },
        {
          icon: <FaSyncAlt className="text-blue-500 text-2xl" />,
          title: 'Real-Time Inventory Sync',
          description: 'Instant WMS updates via robot-collected data, with blockchain-backed audit trails for high-value inventory. Integrates with ERP for automated reordering.'
        }
      ],
      benefits: [
        {
          icon: <FaUserClock className="text-blue-500 text-2xl" />,
          title: '70% Labor Productivity Boost',
          description: 'Robots handle repetitive tasks while staff focuses on exception management and process improvement.'
        },
        {
          icon: <FaCube className="text-blue-500 text-2xl" />,
          title: '3D Space Utilization',
          description: 'Automated vertical storage and retrieval enables 40% better cube utilization compared to traditional shelving.'
        },
        {
          icon: <FaClock className="text-blue-500 text-2xl" />,
          title: '24/7 Operations',
          description: 'Lights-out automation capabilities for continuous order fulfillment without human supervision.'
        },
        {
          icon: <FaCheckDouble className="text-blue-500 text-2xl" />,
          title: '99.99% Inventory Accuracy',
          description: 'Robotic scanning eliminates human counting errors, with discrepancy alerts resolved in <15 minutes.'
        },
        {
          icon: <FaExpandArrowsAlt className="text-blue-500 text-2xl" />,
          title: 'Elastic Scalability',
          description: 'Modular robot fleets expand capacity for peak seasons. Add/remove units without infrastructure changes.'
        },
        {
          icon: <FaHardHat className="text-blue-500 text-2xl" />,
          title: 'Zero Incident Safety',
          description: 'ISO 3691-4 compliant systems with emergency stop compliance and air quality monitoring in robotic zones.'
        }
      ]
    },
    { 
      id: 15,
      title: 'Powerica Solutions',
      link: 'https://powericasolutions.com',
      image: '/project/OFS.jpg',
      category: 'Energy Tech',
      description: `AI-driven energy orchestration platform for industrial facilities, optimizing power consumption, renewable integration, and carbon neutrality goals.`, 
      modules: [
        { 
          name: 'Real-Time Monitoring', 
          description: 'Live tracking of energy usage across machinery, HVAC, and production lines with IoT sensor integration' 
        },
        { 
          name: 'Carbon Analytics', 
          description: 'Granular CO2 emission calculations tied to specific processes, equipment, and energy sources' 
        },
        { 
          name: 'Demand Forecasting', 
          description: 'Machine learning models predicting energy needs based on production schedules and weather patterns' 
        },
        { 
          name: 'Renewable Controller', 
          description: 'Automated switching between grid, solar, and battery storage based on cost and sustainability targets' 
        },
        { 
          name: 'Compliance Reporting', 
          description: 'Pre-built templates for ISO 50001, RECs (Renewable Energy Certificates), and carbon credit auditing' 
        },
        { 
          name: 'Peak Shaving', 
          description: 'AI-powered load shifting to avoid demand charges during utility rate spikes' 
        }
      ],
      features: [
        {
          icon: <FaPlug className="text-blue-500 text-2xl" />,
          title: 'Live Energy Pulse Monitoring',
          description: 'Second-by-second tracking of power quality, voltage irregularities, and harmonic distortions across all connected assets. Trigger automated responses for anomalies exceeding thresholds.'
        },
        {
          icon: <FaLeaf className="text-blue-500 text-2xl" />,
          title: 'Carbon Footprint Heatmaps',
          description: 'Visualize emission hotspots across production lines with drill-down capabilities to machine-level data. Compare actuals against sustainability benchmarks in real time.'
        },
        {
          icon: <FaSolarPanel className="text-blue-500 text-2xl" />,
          title: 'Renewable Energy Orchestration',
          description: 'Seamlessly blend grid power with onsite solar/wind generation. Automatically prioritize renewable sources during peak tariff hours while maintaining production SLAs.'
        },
        {
          icon: <FaMicrochip className="text-blue-500 text-2xl" />,
          title: 'Machine-Level Efficiency Scoring',
          description: 'AI algorithms rate equipment energy performance using OEE (Overall Equipment Effectiveness) data. Recommend maintenance or retirement for energy-inefficient assets.'
        },
        {
          icon: <FaChartLine className="text-blue-500 text-2xl" />,
          title: 'Predictive Demand Shaping',
          description: 'Anticipate energy needs 72 hours ahead using production schedules and weather forecasts. Pre-cool facilities or charge batteries during off-peak windows.'
        },
        {
          icon: <FaFileInvoiceDollar className="text-blue-500 text-2xl" />,
          title: 'Auto-Generated Sustainability Reports',
          description: 'Compile auditable reports for carbon credits, RECs, and ESG compliance. Integrate with SAP EHS for enterprise-wide sustainability tracking.'
        }
      ],
      benefits: [
        {
          icon: <FaMoneyBillWave className="text-blue-500 text-2xl" />,
          title: '35% Lower Energy Costs',
          description: 'Reduce peak demand charges and optimize renewable usage to cut operational expenses while maintaining production uptime.'
        },
        {
          icon: <FaGlobeEurope className="text-blue-500 text-2xl" />,
          title: 'Carbon-Neutral Operations',
          description: 'Achieve net-zero targets faster with real-time emission tracking and automated renewable energy balancing across facilities.'
        },
        {
          icon: <FaTachometerAlt className="text-blue-500 text-2xl" />,
          title: '20% Higher Asset Utilization',
          description: 'Identify and retire energy-draining equipment while optimizing schedules for high-efficiency machinery.'
        },
        {
          icon: <FaBatteryFull className="text-blue-500 text-2xl" />,
          title: 'Grid-Independent Manufacturing',
          description: 'Maintain 95% uptime during power outages through intelligent battery management and renewable energy reserves.'
        },
        {
          icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
          title: 'Regulatory Compliance',
          description: 'Stay ahead of energy regulations with automated documentation for CEA (Central Electricity Authority) and international green manufacturing standards.'
        },
        {
          icon: <FaExpandAlt className="text-blue-500 text-2xl" />,
          title: 'Enterprise Scalability',
          description: 'Deploy across global facilities with localized energy pricing models and multi-currency carbon credit market integration.'
        }
      ]
    },

    { 
      id: 16,
      title: 'SB Industries',
      link: '#',
      image: '/project/SBI.jpg',
      category: 'Industry 4.0',
      description:'An Enterprise Resource Planning (ERP) solution for SB Industries will help streamline business operations, integrate departments, and improve efficiency. The ERP system will unify various business processes into a single platform, ensuring real-time data access, automation, and better decision-making.', 
      modules: [
        { name: 'Accounting', description:  '' },
        { name: 'HRMS', description:  '' },
        { name: 'CRMS', description:  '' },
        { name: 'Project Management System', description:  '' },
        { name: 'Inventry', description:  '' },
        { name: 'Production', description:  '' }
      ],
      features: [
        {
          icon: <FaEye className="text-blue-500 text-2xl" />,
          title: 'Real-Time Production Monitoring',
          description: 'Visibility into production activities, helping track progress, detect bottlenecks, and ensure timely delivery.Operators and managers can monitor machinery status, production rates, and downtime. Faster corrective actions ensure smoother manufacturing processes'
        },
        {
          icon: <FaSyncAlt className="text-blue-500 text-2xl" />,
          title: 'Quality Control and Traceability',
          description: 'Our ERP seamlessly integrates with your current ERP system, creating a fully connected environment. This integration ensures that data flows smoothly between production lines and back-office functions, providing comprehensive insights into the manufacturing process while keeping sales, purchase, and financial operations in sync.'
        },
        {
          icon: <FaRobot className="text-blue-500 text-2xl" />,
          title: 'Process Automation',
          description: 'Automation is a cornerstone of ERP, reducing manual input and ensuring consistency in production. From raw material tracking to finished product assembly, automated workflows eliminate repetitive tasks, allowing teams to focus on value-added activities.'
        },
        {
          icon: <FaCheckCircle className="text-blue-500 text-2xl" />,
          title: 'Quality Control and Traceability',
          description: 'MES enhances quality management by enabling real-time monitoring of product standards. Every stage of production is documented, and product quality is continuously tracked, ensuring compliance with industry standards. This helps reduce defects, improve product reliability, and ensure traceability for every unit produced.'
        },
        {
          icon: <FaCalendarAlt className="text-blue-500 text-2xl" />,
          title: 'Production Scheduling and Optimization',
          description: 'By utilizing real-time data from both the shop floor and ERP, MES helps optimize production scheduling. This ensures efficient use of resources, minimizes downtime, and maintains optimal throughput, increasing overall manufacturing performance.'
        }
      ],
    
      benefits: [
        {
          icon: <FaChartLine className="text-blue-500 text-2xl" />,
          title: 'Enhanced Operational Visibility',
          description: 'Integrating ERP with your MES system gives you a 360-degree view of your operations, from raw material procurement to finished goods, helping you make better-informed decisions.'
        },
        {
          icon: <FaCogs className="text-blue-500 text-2xl" />,
          title: 'Improved Manufacturing Efficiency',
          description: 'With real-time monitoring and automated process control, MES reduces downtime and increases throughput. The integration with ERP optimizes the entire production flow, from materials management to order fulfillment, resulting in cost savings and higher production efficiency.'
        },
        {
          icon: <FaDatabase className="text-blue-500 text-2xl" />,
          title: 'Accurate Data for Business Decisions',
          description: 'ERP ensures that accurate, real-time data from the shop floor is fed into your ERP, providing better insights into production performance. This allows managers to make more informed decisions about inventory, procurement, and capacity planning, aligning manufacturing operations with broader business objectives.'
        },
        {
          icon: <FaExpandArrowsAlt className="text-blue-500 text-2xl" />,
          title: 'Greater Flexibility and Scalability',
          description: 'The ERP system can be easily scaled as your business grows. As production demands increase, the system can handle more complex workflows, product lines, and customization requirements, without disrupting existing operations.'
        },
        {
          icon: <FaThumbsUp className="text-blue-500 text-2xl" />,
          title: 'Improved Product Quality',
          description: 'ERP offers continuous monitoring of production quality, enabling businesses to identify and address quality issues early in the process. This integration with ERP ensures that quality standards are maintained consistently, leading to fewer defects, improved customer satisfaction, and reduced costs associated with rework.'
        }
      ]
    },

    { 
      id: 17,
      title: 'ANTB',
      link: '#',
      image: '/Eptiq clients/ANTB.png',
      category: 'Industry 4.0',
      description: `Unified ERP-SCADA integration platform bridging business operations with industrial automation for real-time production optimization and closed-loop manufacturing.`, 
      modules: [
        { name: 'Scheduling', description:  '' },
        { name: 'ProductionPlanning', description:  '' },
        { name: 'PROND', description:  '' },
        { name: 'Recording', description:  '' },
        { name: 'Quality Inspection', description:  '' },
        { name: 'HRMS', description:  '' }
      ],
      features: [
        {
          icon: <FaSyncAlt className="text-blue-500 text-2xl" />,
          title: 'Bidirectional ERP-SCADA Sync',
          description: 'Real-time data exchange between business systems and plant floor devices. Production orders from ERP automatically trigger SCADA workflows, while equipment telemetry updates inventory levels in ERP.'
        },
        {
          icon: <FaRobot className="text-blue-500 text-2xl" />,
          title: 'Automated Closed-Loop Processes',
          description: 'SCADA-collected machine data triggers ERP actions: Auto-replenish materials when stock dips below thresholds, schedule maintenance based on equipment runtime, and adjust production plans using actual cycle times.'
        },
        {
          icon: <FaMicrochip className="text-blue-500 text-2xl" />,
          title: 'Unified Asset Intelligence',
          description: 'Combine ERP maintenance schedules with SCADA condition monitoring for predictive upkeep. Visualize OEE (Overall Equipment Effectiveness) metrics alongside financial performance in unified dashboards.'
        },
        {
          icon: <FaChartLine className="text-blue-500 text-2xl" />,
          title: 'Energy-Aware Production',
          description: 'SCADA power consumption data integrated with ERP cost models. Automatically shift non-critical operations to off-peak hours based on real-time energy pricing from smart grid APIs.'
        },
        {
          icon: <FaPlug className="text-blue-500 text-2xl" />,
          title: 'IoT Edge Integration',
          description: 'Direct connectivity between ERP and PLCs/RTUs through OPC UA. Execute material call-offs directly from production line HMIs while maintaining ERP system of record integrity.'
        }
      ],
      benefits: [
        {
          icon: <FaCogs className="text-blue-500 text-2xl" />,
          title: 'E2E Process Automation',
          description: 'Reduce manual data entry by 90% through seamless ERP-SCADA integration. Purchase orders automatically convert to machine programs, with production results updating financial records in real-time.'
        },
        {
          icon: <FaClock className="text-blue-500 text-2xl" />,
          title: 'Zero Latency Manufacturing',
          description: 'Achieve 1-second latency between shop floor events and ERP updates. Respond to material shortages or quality issues before they impact production schedules.'
        },
        {
          icon: <FaMoneyBillWave className="text-blue-500 text-2xl" />,
          title: 'Dynamic Cost Optimization',
          description: 'Adjust production routes based on real-time ERP cost data and SCADA machine availability. Automatically reroute orders to most cost-effective lines during energy price spikes.'
        },
        {
          icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
          title: 'Audit-Proof Compliance',
          description: 'Tamper-proof records combining ERP transactions with SCADA sensor data. Reconstruct full production history including machine parameters for every batch/serial number.'
        },
        {
          icon: <FaExpandAlt className="text-blue-500 text-2xl" />,
          title: 'Multi-Plant Synchronization',
          description: 'Central ERP coordinates production across SCADA systems in distributed facilities. Balance loads between plants based on real-time capacity and local energy constraints.'
        }
      ]
    },

    { 
      id: 18,
      title: 'World Globe',
      link: '#',
      image: '/Eptiq clients/world globe.png',
      category: 'Event Management',
      description: `A comprehensive event management platform designed to streamline planning, coordination, and execution of events with advanced tools and features.`, 
      techStack: ['React', 'Node.js', 'MongoDB', 'Firebase'],
      
      features: [
        {
          icon: <FaCalendarCheck className="text-blue-500 text-2xl" />, 
          title: 'Event Scheduling',
          description: 'Plan and schedule events seamlessly with automated reminders and real-time updates for attendees and organizers.'
        },
        {
          icon: <FaUsers className="text-blue-500 text-2xl" />, 
          title: 'Attendee Management',
          description: 'Efficiently manage event registrations, ticketing, and participant engagement with an intuitive dashboard.'
        },
        {
          icon: <FaBroadcastTower className="text-blue-500 text-2xl" />, 
          title: 'Live Streaming Integration',
          description: 'Host virtual events with built-in support for live streaming and interactive sessions.'
        },
        {
          icon: <FaChartPie className="text-blue-500 text-2xl" />, 
          title: 'Analytics & Reporting',
          description: 'Gain insights with real-time analytics on attendee engagement, ticket sales, and event performance.'
        },
        {
          icon: <FaMobileAlt className="text-blue-500 text-2xl" />, 
          title: 'Mobile Accessibility',
          description: 'Access event details, schedules, and notifications from any device with a responsive design.'
        }
      ],
      benefits: [
        {
          icon: <FaHandHoldingHeart className="text-blue-500 text-2xl" />, 
          title: 'Enhanced Attendee Experience',
          description: 'Deliver a seamless and engaging experience with personalized event recommendations and networking opportunities.'
        },
        {
          icon: <FaLock className="text-blue-500 text-2xl" />, 
          title: 'Secure Transactions',
          description: 'Ensure safe, secure and encrypted ticket purchases and payments with integrated security protocols.'
        },
        {
          icon: <FaClipboardList className="text-blue-500 text-2xl" />, 
          title: 'Efficient Planning',
          description: 'Automate administrative tasks, reduce manual efforts, and focus on delivering high-quality events.'
        },
        {
          icon: <FaGlobe className="text-blue-500 text-2xl" />, 
          title: 'Global Reach',
          description: 'Expand event visibility and attract attendees from around the world through digital marketing tools and SEO optimization.'
        },
        {
          icon: <FaMoneyCheckAlt className="text-blue-500 text-2xl" />, 
          title: 'Cost Optimization',
          description: 'Reduce overhead costs with smart budget tracking, automated invoicing, and financial analytics.'
        }
      ]
},

    { 
      id: 19,
      title: 'Matrimoni',
      link: '#',
      image: '/Eptiq clients/matrimoni.png',
      category: 'Matrimoni',
      description: `A premier matrimonial platform connecting individuals for meaningful relationships. Features advanced matchmaking algorithms, verified profiles, and secure communication channels for a seamless experience.`, 
      techStack: ['React', 'Node.js', 'MongoDB', 'GraphQL'],
      
      features: [
        {
          icon: <FaUserFriends className="text-red-500 text-2xl" />, 
          title: 'Advanced Matchmaking',
          description: 'AI-driven compatibility matching based on user preferences, interests, and personality traits to help find the perfect match.'
        },
        {
          icon: <FaShieldAlt className="text-red-500 text-2xl" />, 
          title: 'Verified Profiles',
          description: 'Ensures authenticity with identity verification, preventing fake profiles and enhancing trust among users.'
        },
        {
          icon: <FaComments className="text-red-500 text-2xl" />, 
          title: 'Secure Communication',
          description: 'Built-in chat and messaging system with end-to-end encryption for safe and private conversations between matches.'
        },
        {
          icon: <FaHeart className="text-red-500 text-2xl" />, 
          title: 'Personalized Recommendations',
          description: 'Smart AI suggestions based on user activity, preferences, and search history to increase successful connections.'
        },
        {
          icon: <FaMobileAlt className="text-red-500 text-2xl" />, 
          title: 'Mobile-Friendly Interface',
          description: 'Fully responsive design optimized for mobile users, providing a seamless experience across all devices.'
        }
      ],
      benefits: [
        {
          icon: <FaHandshake className="text-red-500 text-2xl" />, 
          title: 'Genuine Connections',
          description: 'Helps users find meaningful relationships with like-minded individuals, increasing the chances of successful matches.'
        },
        {
          icon: <FaEye className="text-red-500 text-2xl" />, 
          title: 'Privacy & Safety',
          description: 'Strict security measures and user privacy settings ensure a safe and respectful environment for all members.'
        },
        {
          icon: <FaThumbsUp className="text-red-500 text-2xl" />, 
          title: 'User-Friendly Experience',
          description: 'Intuitive design and easy navigation make finding and communicating with matches simple and hassle-free.'
        },
        {
          icon: <FaGlobe className="text-red-500 text-2xl" />, 
          title: 'Global Reach',
          description: 'Connect with potential partners worldwide, expanding the possibilities for finding the right match.'
        },
        {
          icon: <FaCalendarCheck className="text-red-500 text-2xl" />, 
          title: 'Event & Community Features',
          description: 'Participate in matchmaking events, webinars, and community discussions to enhance engagement and interactions.'
        }
      ]
}
,

    { 
      id: 20,
      title: 'ANTB',
      link: '#',
      image: '/Eptiq clients/ANTB.png',
      category: 'Industry 4.0',
      description: `Unified ERP-SCADA integration platform bridging business operations with industrial automation for real-time production optimization and closed-loop manufacturing.`, 
      techStack: ['Angular', 'Java', 'MySQL', 'OPC UA'],
      
      features: [
        {
          icon: <FaSyncAlt className="text-blue-500 text-2xl" />,
          title: 'Bidirectional ERP-SCADA Sync',
          description: 'Real-time data exchange between business systems and plant floor devices. Production orders from ERP automatically trigger SCADA workflows, while equipment telemetry updates inventory levels in ERP.'
        },
        {
          icon: <FaRobot className="text-blue-500 text-2xl" />,
          title: 'Automated Closed-Loop Processes',
          description: 'SCADA-collected machine data triggers ERP actions: Auto-replenish materials when stock dips below thresholds, schedule maintenance based on equipment runtime, and adjust production plans using actual cycle times.'
        },
        {
          icon: <FaMicrochip className="text-blue-500 text-2xl" />,
          title: 'Unified Asset Intelligence',
          description: 'Combine ERP maintenance schedules with SCADA condition monitoring for predictive upkeep. Visualize OEE (Overall Equipment Effectiveness) metrics alongside financial performance in unified dashboards.'
        },
        {
          icon: <FaChartLine className="text-blue-500 text-2xl" />,
          title: 'Energy-Aware Production',
          description: 'SCADA power consumption data integrated with ERP cost models. Automatically shift non-critical operations to off-peak hours based on real-time energy pricing from smart grid APIs.'
        },
        {
          icon: <FaPlug className="text-blue-500 text-2xl" />,
          title: 'IoT Edge Integration',
          description: 'Direct connectivity between ERP and PLCs/RTUs through OPC UA. Execute material call-offs directly from production line HMIs while maintaining ERP system of record integrity.'
        }
      ],
      benefits: [
        {
          icon: <FaCogs className="text-blue-500 text-2xl" />,
          title: 'E2E Process Automation',
          description: 'Reduce manual data entry by 90% through seamless ERP-SCADA integration. Purchase orders automatically convert to machine programs, with production results updating financial records in real-time.'
        },
        {
          icon: <FaClock className="text-blue-500 text-2xl" />,
          title: 'Zero Latency Manufacturing',
          description: 'Achieve 1-second latency between shop floor events and ERP updates. Respond to material shortages or quality issues before they impact production schedules.'
        },
        {
          icon: <FaMoneyBillWave className="text-blue-500 text-2xl" />,
          title: 'Dynamic Cost Optimization',
          description: 'Adjust production routes based on real-time ERP cost data and SCADA machine availability. Automatically reroute orders to most cost-effective lines during energy price spikes.'
        },
        {
          icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
          title: 'Audit-Proof Compliance',
          description: 'Tamper-proof records combining ERP transactions with SCADA sensor data. Reconstruct full production history including machine parameters for every batch/serial number.'
        },
        {
          icon: <FaExpandAlt className="text-blue-500 text-2xl" />,
          title: 'Multi-Plant Synchronization',
          description: 'Central ERP coordinates production across SCADA systems in distributed facilities. Balance loads between plants based on real-time capacity and local energy constraints.'
        }
      ]
    },

    { 
      id: 21,
      title: 'DT Care',
      link: '#',
      image: '/Eptiq clients/DT care.png',
      category: 'Doctor Appointment Booking',
      description: `DT Care is a seamless doctor appointment booking application, connecting patients with healthcare providers for hassle-free scheduling, consultations, and follow-ups.`, 
      techStack: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
      
      features: [
        {
          icon: <FaCalendarCheck className="text-blue-500 text-2xl" />, 
          title: 'Easy Appointment Scheduling',
          description: 'Users can quickly book, reschedule, or cancel appointments with their preferred doctors at their convenience.'
        },
        {
          icon: <FaVideo className="text-blue-500 text-2xl" />, 
          title: 'Teleconsultation Support',
          description: 'Integrated video call functionality allows patients to consult with doctors remotely, reducing the need for physical visits.'
        },
        {
          icon: <FaBell className="text-blue-500 text-2xl" />, 
          title: 'Automated Reminders',
          description: 'Patients receive timely notifications and reminders for upcoming appointments and follow-ups.'
        },
        {
          icon: <FaFileMedical className="text-blue-500 text-2xl" />, 
          title: 'Digital Medical Records',
          description: 'Secure storage and easy access to prescriptions, test reports, and past consultations within the app.'
        },
        {
          icon: <FaMapMarkerAlt className="text-blue-500 text-2xl" />, 
          title: 'Doctor Search by Location & Specialization',
          description: 'Users can filter and find doctors based on their specialty and proximity, ensuring convenient access to healthcare.'
        }
      ],
      
      benefits: [
        {
          icon: <FaUserMd className="text-blue-500 text-2xl" />, 
          title: 'Improved Healthcare Access',
          description: 'Ensures that patients can easily connect with healthcare professionals, reducing waiting times and improving efficiency.'
        },
        {
          icon: <FaShieldAlt className="text-blue-500 text-2xl" />, 
          title: 'Secure & Confidential',
          description: 'All medical records and consultations are encrypted to maintain patient privacy and data security.'
        },
        {
          icon: <FaMobileAlt className="text-blue-500 text-2xl" />, 
          title: 'User-Friendly Mobile Experience',
          description: 'A clean and intuitive interface designed for seamless navigation and quick appointment booking.'
        },
        {
          icon: <FaMoneyBillWave className="text-blue-500 text-2xl" />, 
          title: 'Cost-Effective Consultations',
          description: 'Reduces the need for unnecessary hospital visits, saving time and money for both patients and doctors.'
        },
        {
          icon: <FaClipboardList className="text-blue-500 text-2xl" />, 
          title: 'Streamlined Doctor Management',
          description: 'Doctors can manage their availability, appointment slots, and patient records with ease.'
        }
      ]
    }
    
    // ... (Other projects follow similar enhanced structure)
  ];

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 p-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Project Not Found</h1>
        <Link 
          to="/" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 pt-20 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        
        {/* Project Header */}
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 sm:h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8 bg-gradient-to-t from-black/80">
            <h1 className="text-2xl sm:text-4xl font-bold text-white">{project.title}</h1>
            <p className="text-sm sm:text-lg text-gray-200 mt-1">{project.category}</p>
          </div>
        </div>

        <div className="p-4 sm:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Main Content */}
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">Overview</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {project.description}
              </p>

              {/* Key Features */}
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mt-6 mb-4">Features</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center mb-3">
                      <span className="text-blue-500 mr-3">{feature.icon}</span>
                      <h3 className="text-lg sm:text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mt-6 mb-4">Benefits</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.benefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center mb-3">
                      <span className="text-blue-500 mr-3">
                        {benefit.icon || <FaCheckCircle className="text-xl sm:text-2xl" />}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold">
                        {benefit.title || benefit}
                      </h3>
                    </div>
                    {benefit.description && (
                      <p className="text-sm sm:text-base text-gray-600">
                        {benefit.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="/#contactus"
                  className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <FaLink className="mr-2" /> Book Demo
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-80 lg:w-96 bg-gray-50 p-4 sm:p-6 rounded-xl">
              {project.modules ? (
                <>
                  <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                    <FaTools className="mr-2" /> Modules
                  </h2>
                  <ul className="space-y-3">
                    {project.modules.map((module, index) => (
                      <li key={index} className="bg-white p-3 rounded-lg shadow-sm">
                        <div className="flex items-center">
                          {moduleIcons[module.name.toLowerCase().replace(' ', '')]}
                          <div>
                            <h3 className="font-medium">{module.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {module.description}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              ) : project.techStack ? (
                <>
                  <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                    <FaTools className="mr-2" /> Tech Stack
                  </h2>
                  <ul className="space-y-2">
                    {project.techStack.map((tech, index) => (
                      <li key={index} className="bg-white p-3 rounded-lg shadow-sm">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center py-4 sm:py-6">
          <Link 
            to="/" 
            className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <FaArrowLeft className="mr-2" /> All Projects
          </Link>
        </div>

        

      </div>
    </section>
  );
};

export default ProjectDetails;