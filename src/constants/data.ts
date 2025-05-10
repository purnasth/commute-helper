import rider from '../assets/vector/hero-rider.svg';
import passenger from '../assets/vector/passenger.svg';

export const mockLocations = [
  // Educational Institutions
  {
    id: '1',
    name: 'Kathmandu BernHardt College',
    address: 'Bafal, Kathmandu',
    type: 'College',
  },
  {
    id: '2',
    name: 'Tribhuvan University',
    address: 'Kirtipur, Kathmandu',
    type: 'University',
  },
  {
    id: '3',
    name: 'Nepal Engineering College',
    address: 'Changunarayan, Bhaktapur',
    type: 'College',
  },
  {
    id: '4',
    name: 'Kathmandu University',
    address: 'Dhulikhel, Kavre',
    type: 'University',
  },

  // Religious Sites
  {
    id: '5',
    name: 'Boudhanath Stupa',
    address: 'Boudha, Kathmandu',
    type: 'UNESCO World Heritage Site',
  },
  {
    id: '6',
    name: 'Pashupatinath Temple',
    address: 'Gaushala, Kathmandu',
    type: 'Hindu Temple',
  },
  {
    id: '7',
    name: 'Swayambhunath Temple',
    address: 'Swayambhu, Kathmandu',
    type: 'Buddhist Temple',
  },
  {
    id: '8',
    name: 'Changu Narayan Temple',
    address: 'Bhaktapur District',
    type: 'UNESCO World Heritage Site',
  },

  // Historical Sites
  {
    id: '9',
    name: 'Kathmandu Durbar Square',
    address: 'Kathmandu',
    type: 'Historical Square',
  },
  {
    id: '10',
    name: 'Patan Durbar Square',
    address: 'Lalitpur, Kathmandu Valley',
    type: 'Historical Square',
  },
  {
    id: '11',
    name: 'Bhaktapur Durbar Square',
    address: 'Bhaktapur',
    type: 'Historical Square',
  },
  {
    id: '12',
    name: 'Narayanhiti Palace Museum',
    address: 'Kathmandu',
    type: 'Museum',
  },

  // Malls and Shopping
  {
    id: '13',
    name: 'Civil Mall',
    address: 'New Baneshwor, Kathmandu',
    type: 'Shopping Mall',
  },
  {
    id: '14',
    name: 'Bhatbhateni Supermarket',
    address: 'Multiple Locations, Kathmandu',
    type: 'Supermarket',
  },
  {
    id: '15',
    name: 'Kathmandu Mall',
    address: 'New Road, Kathmandu',
    type: 'Shopping Mall',
  },
  {
    id: '16',
    name: 'Thamel Market',
    address: 'Thamel, Kathmandu',
    type: 'Tourist Shopping Area',
  },

  // Parks and Natural Sites
  {
    id: '17',
    name: 'Shivapuri-Nagarjun National Park',
    address: 'Kathmandu Valley',
    type: 'National Park',
  },
  {
    id: '18',
    name: 'Garden of Dreams',
    address: 'Kaiser Mahal, Kathmandu',
    type: 'Urban Park',
  },
  {
    id: '19',
    name: 'Nagarkot',
    address: 'Bhaktapur District',
    type: 'Scenic Viewpoint',
  },
  {
    id: '20',
    name: 'Chandragiri Hills',
    address: 'Southwest of Kathmandu',
    type: 'Hill Station',
  },

  // Cultural Centers
  {
    id: '21',
    name: 'Nepal Academy',
    address: 'Kamaladi, Kathmandu',
    type: 'Cultural Institution',
  },
  {
    id: '22',
    name: 'Kopan Monastery',
    address: 'Kopan, Kathmandu',
    type: 'Buddhist Monastery',
  },
  {
    id: '23',
    name: 'National Museum of Nepal',
    address: 'Chhauni, Kathmandu',
    type: 'Museum',
  },
  {
    id: '24',
    name: 'Patan Museum',
    address: 'Patan Durbar Square',
    type: 'Art Museum',
  },

  // Additional Landmarks
  {
    id: '25',
    name: 'Budha Nilkant Temple',
    address: 'Budhanilkantha, Kathmandu',
    type: 'Hindu Temple',
  },
  {
    id: '26',
    name: 'Jagannath Temple',
    address: 'Kathmandu',
    type: 'Hindu Temple',
  },
  {
    id: '27',
    name: 'Dakshinkali Temple',
    address: 'Pharping, Kathmandu',
    type: 'Hindu Temple',
  },
  {
    id: '28',
    name: 'Tribhuven Museum',
    address: 'Kathmandu Durbar Square',
    type: 'Museum',
  },

  // Additional Locations
  {
    id: '29',
    name: 'Itum Bahal',
    address: 'Thamel, Kathmandu',
    type: 'Historical Site',
  },
  {
    id: '30',
    name: 'Asan Bazaar',
    address: 'Asan, Kathmandu',
    type: 'Traditional Market',
  },
  {
    id: '31',
    name: 'Taudaha Lake',
    address: 'Taudaha, Kathmandu Valley',
    type: 'Natural Site',
  },
  {
    id: '32',
    name: 'White Gumba (Seto Gumba)',
    address: 'Boudha, Kathmandu',
    type: 'Buddhist Monastery',
  },
  {
    id: '33',
    name: 'Kirtipur',
    address: 'Kirtipur, Kathmandu',
    type: 'Historical Town',
  },
  {
    id: '34',
    name: 'Pharping',
    address: 'Pharping, Kathmandu',
    type: 'Pilgrimage Site',
  },

  // Educational and Research Centers
  {
    id: '35',
    name: 'Central Department of Geology, TU',
    address: 'Kirtipur, Kathmandu',
    type: 'Research Center',
  },
  {
    id: '36',
    name: 'Nepal Academy of Science and Technology',
    address: 'Lalitpur, Kathmandu',
    type: 'Research Institute',
  },
  {
    id: '37',
    name: 'Kathmandu University School of Arts',
    address: 'Dhulikhel, Kavre',
    type: 'Educational Institution',
  },
  {
    id: '38',
    name: 'Nepal Engineering College',
    address: 'Bhaktapur',
    type: 'Technical College',
  },

  // Additional Cultural and Historical Sites
  {
    id: '39',
    name: 'Kumari Ghar',
    address: 'Kumari Ghar, Kathmandu',
    type: 'Cultural Landmark',
  },
  {
    id: '40',
    name: 'Hanuman Dhoka Palace',
    address: 'Basantapur, Kathmandu',
    type: 'Historical Palace',
  },
  {
    id: '41',
    name: 'Kasthamandap',
    address: 'Kasthamandap, Kathmandu',
    type: 'Historical Pavilion',
  },
  {
    id: '42',
    name: 'Maju Deval',
    address: 'Kathmandu Durbar Square',
    type: 'Historic Temple',
  },

  // Modern Attractions
  {
    id: '43',
    name: 'Thamel Chowk',
    address: 'Thamel, Kathmandu',
    type: 'Tourist Hub',
  },
  {
    id: '44',
    name: 'Basantapur Tower',
    address: 'Kathmandu Durbar Square',
    type: 'Historical Landmark',
  },
  {
    id: '45',
    name: 'Freak Street',
    address: 'Kathmandu',
    type: 'Historical Neighborhood',
  },

  // Additional Religious Sites
  {
    id: '46',
    name: 'Krishna Mandir',
    address: 'Patan Durbar Square',
    type: 'Hindu Temple',
  },
  {
    id: '47',
    name: 'Mahaboudha Temple',
    address: 'Patan, Kathmandu',
    type: 'Buddhist Temple',
  },
  {
    id: '48',
    name: 'Kumbeshwar Temple',
    address: 'Lalitpur, Kathmandu',
    type: 'Hindu Temple',
  },

  // Natural and Scenic Locations
  {
    id: '49',
    name: 'Godavari Botanical Garden',
    address: 'Lalitpur District',
    type: 'Nature Reserve',
  },
  {
    id: '50',
    name: 'Shivapuri Peak',
    address: 'Shivapuri-Nagarjun National Park',
    type: 'Hiking Destination',
  },
  {
    id: '51',
    name: 'Sundarijal',
    address: 'Kathmandu Valley',
    type: 'Scenic Waterfall',
  },
  {
    id: '52',
    name: 'Chobhar Gorge',
    address: 'Kirtipur, Kathmandu',
    type: 'Natural Landmark',
  },

  // Additional Modern Facilities
  {
    id: '53',
    name: 'Tribhuvan International Airport',
    address: 'Kathmandu',
    type: 'Transportation Hub',
  },
  {
    id: '54',
    name: 'Nepal Stock Exchange',
    address: 'Kathmandu',
    type: 'Financial Institution',
  },
  {
    id: '55',
    name: 'National Stadium',
    address: 'Kathmandu',
    type: 'Sports Facility',
  },
  {
    id: '56',
    name: 'Nepal Telecom Headquarters',
    address: 'Kathmandu',
    type: 'Telecommunications',
  },

  // Final Unique Locations
  {
    id: '57',
    name: 'Kathmandu Guest House',
    address: 'Thamel, Kathmandu',
    type: 'Accommodation',
  },
  {
    id: '58',
    name: 'Ratna Rajya Library',
    address: 'Kathmandu',
    type: 'Public Library',
  },
  {
    id: '59',
    name: 'National Archives',
    address: 'Kathmandu',
    type: 'Historical Repository',
  },
  {
    id: '60',
    name: 'Rato Machindranath Temple',
    address: 'Patan, Kathmandu',
    type: 'Religious Site',
  },

  {
    id: '61',
    name: 'Islington College',
    address: 'Kathmandu',
    type: 'IT College',
  },
  {
    id: '62',
    name: 'Ace Institute of Management',
    address: 'Kathmandu',
    type: 'Management & IT College',
  },
  {
    id: '63',
    name: 'Kathmandu Institute of Technology',
    address: 'Dhapasi, Kathmandu',
    type: 'Technology College',
  },
  {
    id: '64',
    name: 'Chelsea International Academy',
    address: 'Kathmandu',
    type: 'International IT College',
  },
  {
    id: '65',
    name: 'Global College International',
    address: 'Kathmandu',
    type: 'IT and Management College',
  },
  {
    id: '66',
    name: 'Orient College of Science and Management',
    address: 'Kathmandu',
    type: 'Technology College',
  },
  {
    id: '67',
    name: 'Malpi Institute',
    address: 'Kathmandu',
    type: 'IT and Technical Institute',
  },
  {
    id: '68',
    name: 'Nami College',
    address: 'Kathmandu',
    type: 'Technical College',
  },
  {
    id: '69',
    name: 'Kaasthamandap A Level Academy',
    address: 'Kathmandu',
    type: 'Advanced Technology College',
  },
  {
    id: '70',
    name: 'Victoria Technical College',
    address: 'Koteshwor, Kathmandu',
    type: 'Technical Institute',
  },

  // Additional Educational Institutions
  {
    id: '71',
    name: 'All Nepal College of Technical Education',
    address: 'Gaushala, Kathmandu',
    type: 'Technical College',
  },
  {
    id: '72',
    name: 'Kantipur Community Health Services',
    address: 'Balaju, Kathmandu',
    type: 'Technical Institute',
  },
  {
    id: '73',
    name: 'Sumnima Polytechnic Institute',
    address: 'Kathmandu',
    type: 'Polytechnic College',
  },
  {
    id: '74',
    name: 'Emerald Technical School',
    address: 'Balaju, Kathmandu',
    type: 'Technical School',
  },
  {
    id: '75',
    name: 'Singh Academy',
    address: 'Samakhushi, Kathmandu',
    type: 'Educational Institute',
  },
  {
    id: '76',
    name: 'Technical Training & Research Institute',
    address: 'Kumaripati, Lalitpur',
    type: 'Research and Training Center',
  },
  {
    id: '77',
    name: 'Kantipur Technical College',
    address: 'Balaju, Kathmandu',
    type: 'Technical College',
  },
  {
    id: '78',
    name: 'United Technical School',
    address: 'Kumaripati, Lalitpur',
    type: 'Technical School',
  },
  {
    id: '79',
    name: 'Spark Institute of Technology',
    address: 'Kathmandu',
    type: 'Technology Institute',
  },
  {
    id: '80',
    name: 'Norvic Institute of Nursing Education',
    address: 'Maharajgunj, Kathmandu',
    type: 'Specialized Education Institute',
  },

  // University Campuses and Specialized Institutions
  {
    id: '81',
    name: 'Tribhuvan University School of Engineering',
    address: 'Kirtipur, Kathmandu',
    type: 'University Campus',
  },
  {
    id: '82',
    name: 'Kathmandu University School of Computing',
    address: 'Dhulikhel, Kavre',
    type: 'Technology School',
  },
  {
    id: '83',
    name: 'Tribhuvan University Central Department of Computer Science',
    address: 'Kirtipur, Kathmandu',
    type: 'Research Department',
  },
  {
    id: '84',
    name: 'Nepal Engineering College',
    address: 'Kathmandu Valley',
    type: 'Engineering Institute',
  },
  {
    id: '85',
    name: 'Advanced College of Technology',
    address: 'Kathmandu',
    type: 'Technology College',
  },

  // Addition of Software companies
  {
    id: '86',
    name: 'Leapfrog Technology',
    address: 'Dilllibazar, Kathmandu',
    type: 'Software Company',
  },
  {
    id: '87',
    name: 'Deerwalk Institute of Technology',
    address: 'Jaya Bageshwori Road, Bhaktapur',
    type: 'Software Company',
  },
  {
    id: '88',
    name: 'CloudFactory',
    address: 'Lalitpur, Nepal',
    type: 'Software Company',
  },
  {
    id: '89',
    name: 'Verisk Nepal',
    address: 'Pulchowk, Kathmandu',
    type: 'Software Company',
  },
  {
    id: '90',
    name: 'F1Soft International',
    address: 'Group Tower, Lalitpur, Kathmandu',
    type: 'Software Company',
  },
];

export const faqContents = [
  {
    question: 'What is the purpose of this web app?',
    answer:
      'This web app helps connect riders and passengers, allowing them to coordinate commutes efficiently. ',
  },
  {
    question: 'Which technologies are used in this project?',
    answer:
      'The frontend uses Vite, React.js, TypeScript, TailwindCSS, and pnpm, while the backend uses .NET Core with C#.',
  },
  {
    question: 'How can I post or search for a ride?',
    answer:
      "Simply fill in the 'From' and 'To' locations, select your role (Rider/Passenger), and confirm your ride details.",
  },
  {
    question: 'Is there real-time suggestion functionality?',
    answer:
      "Yes, the app provides real-time suggestions for 'From' and 'To' locations based on your input.",
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes, we prioritize data security and use secure communication protocols.',
  },
  {
    question: 'Can I change my role from Rider to Passenger later?',
    answer:
      'Yes, you can update your role anytime from your profile or while posting a ride.',
  },
  {
    question: 'Why was Commute Connect developed?',
    answer:
      'Commute Connect was developed to make daily commutes easier and more efficient by connecting riders and passengers.',
  },
  {
    question: 'What is the vision and mission of Commute Connect?',
    answer:
      'Our Vision is to live in a world where we all share resources to better preserve our economy and planet. Our Mission is to fill the empty seats in our ride and make our commute more affordable and sustainable.',
  },
  {
    question: 'Is Commute Connect profit-oriented?',
    answer:
      "Commute Connect is non profit-oriented and aims to provide a free service to the community and help reduce carbon emissions. It doesn't generate any revenue from the platform.",
  },
];

export const quickMessages = [
  "I'm leaving now",
  "I'll be there in 5 minutes",
  'See you at the location',
];

export const findRideFormFields = [
  {
    name: 'from',
    label: 'From',
    type: 'text',
    placeholder: 'Current Location',
  },
  {
    name: 'to',
    label: 'To',
    type: 'text',
    placeholder: 'Kathmandu BernHardt College',
  },
  {
    name: 'message',
    label: 'Message',
    type: 'text',
    placeholder: "I'm leaving in 5 minutes",
  },
  {
    name: 'role',
    label: "I'm a",
    type: 'select',
    options: ['Rider', 'Passenger'],
  },
];

export const policies = [
  {
    id: 'ride-cancellation',
    title: 'Ride Cancellation Policy',
    link: '/policies/ride-cancellation',
    content: [
      'Cancellations made within 30 minutes of the ride start time may incur a penalty.',
      'Repeated cancellations may result in temporary suspension of your account.',
      'Contact support for emergencies or disputes regarding cancellations.',
    ],
  },
  {
    id: 'terms',
    title: 'Terms of Service',
    link: '/policies/terms',
    content: [
      'Provide accurate information when creating your account and booking rides.',
      'Respect other users and adhere to community guidelines.',
      'Any misuse of the platform may result in account suspension or termination.',
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    link: '/policies/privacy',
    content: [
      'We collect only the necessary information to provide our services.',
      'Your data is stored securely and is not shared with third parties without your consent.',
      'You can request to delete your account and associated data at any time.',
    ],
  },
];

export const userRoles = [
  {
    id: 'rider',
    router: '/roles/rider',
    title: 'Post a ride & Make an Impact',
    description:
      'Share your ride with your co-workers and students sharing the same route and utilize the resources and empty seats of your vehicle. Save money, time and the environment. Your ride can make a difference. Share your ride now & be a hero!',
    rulesTitle: 'Rules when posting a ride',
    heroImage: rider,
    rules: [
      {
        title: 'Carry Documents',
        description:
          'Owning a valid driving license is a must to post a ride & you should be carrying them.',
      },
      {
        title: 'Be Reliable',
        description:
          "Only post a ride if you are sure you're going to the destination and be on time.",
      },
      {
        title: 'Be Courteous',
        description:
          'Be polite to your passengers and respect their time and comfort.',
      },
      {
        title: 'Drive Safely',
        description:
          'Stick to the speed limit and follow the traffic rules. Safety of you and your passengers is important.',
      },
    ],
  },
  {
    id: 'passenger',
    router: '/roles/passenger',
    title: 'Share a ride & Save the Environment',
    description:
      'Search for a hero who is going to the same destination as you and share a ride with them. Save money, time and the environment. Your ride can make an impact for an environment. Share the ride. Share the memories.',
    rulesTitle: 'Rules when requesting a ride',
    heroImage: passenger,
    rules: [
      {
        title: 'Be Accessible',
        description:
          'Be on the location on time and be ready for pickup when the hero',
      },
      {
        title: 'Be Courteous',
        description:
          'Be polite to your rider and respect their time and comfort.',
      },
      {
        title: 'Be Friendly',
        description:
          'Engage in pleasant conversation and make the ride enjoyable for everyone.',
      },
      {
        title: 'Be Safe',
        description:
          'Follow all safety guidelines as a passenger and ensure the ride is safe for everyone.',
      },
    ],
  },
];

export const navLinks = [
  {
    id: 1,
    title: 'Get Home',
    link: '/',
  },
  {
    id: 2,
    title: 'Find a Ride',
    link: '/role/passenger',
  },
  {
    id: 3,
    title: 'Post a Ride',
    link: '/role/rider',
  },
];

export const allowedEmails = [
  'purna@kbc.edu.np',
  'purna@gov.np',
  'mridani@kbc.edu.np',
  'mridani@gov.np',
  'priyanka@kbc.edu.np',
  'priyanka@gov.np',
];
