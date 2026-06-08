import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiUser, FiClock } from 'react-icons/fi';
import { FaWallet, FaStore, FaMoneyBillWave, FaExchangeAlt, FaChartLine, FaLock, FaUserCog, FaCoins } from 'react-icons/fa';
import { SiEthereum } from 'react-icons/si';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function Home() {
  const [openSections, setOpenSections] = useState({});

  const featuredProperties = [
    {
      id: 1,
      title: 'Luxury Downtown Apartment',
      price: {
        usd: 850000,
        eth: 425, // Example ETH value
      },
      location: 'Miami, FL',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      roi: '7.2% Annual',
      metrics: {
        totalInvestors: 142,
        funded: '89%',
        minInvestment: '$10',
      },
      status: 'Active Investment'
    },
    {
      id: 2,
      title: 'Modern Tech District Complex',
      price: {
        usd: 1200000,
        eth: 600,
      },
      location: 'Austin, TX',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      roi: '6.8% Annual',
      metrics: {
        totalInvestors: 203,
        funded: '95%',
        minInvestment: '$10',
      },
      status: 'Almost Funded'
    },
    {
      id: 3,
      title: 'Waterfront Commercial Space',
      price: {
        usd: 2100000,
        eth: 1050,
      },
      location: 'Seattle, WA',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      roi: '7.5% Annual',
      metrics: {
        totalInvestors: 89,
        funded: '45%',
        minInvestment: '$10',
      },
      status: 'New Listing'
    }
  ];

  const advantages = [
    {
      icon: FaChartLine,
      title: 'Profitability',
      description: 'Target average annual returns of 7% through strategic property investments and efficient management.'
    },
    {
      icon: FaExchangeAlt,
      title: 'Liquidity',
      description: 'Trade your property NFTs anytime on our marketplace, providing unprecedented real estate liquidity.'
    },
    {
      icon: FaLock,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no entry, exit, or capital gains fees. What you see is what you get.'
    },
    {
      icon: FaUserCog,
      title: 'Hassle-Free Management',
      description: 'ValorNuvesta handles all property management aspects, from maintenance to tenant relations.'
    }
  ];

  const investmentSteps = [
    {
      icon: FaWallet,
      title: 'Connect Wallet',
      description: 'Connect your cryptocurrency wallet to GoldenCity to start investing.'
    },
    {
      icon: FaStore,
      title: 'Choose Property',
      description: 'Browse our marketplace and select properties that match your investment goals.'
    },
    {
      icon: FaMoneyBillWave,
      title: 'Receive Returns',
      description: 'Collect monthly rental returns directly to your connected wallet.'
    },
    {
      icon: FaExchangeAlt,
      title: 'Flexible Exit',
      description: 'Sell your property NFTs whenever you want through our marketplace.'
    }
  ];

  const howItWorks = [
    {
      icon: FaCoins,
      title: 'Tokenization',
      description: 'Properties are divided into $10 NFT tokens, making real estate investment accessible to everyone.'
    },
    {
      icon: SiEthereum,
      title: 'Purchase NFTs',
      description: 'Buy property NFTs using cryptocurrency, becoming a fractional owner of the property.'
    },
    {
      icon: FaMoneyBillWave,
      title: 'Monthly Returns',
      description: 'Receive your share of rental income directly to your wallet each month.'
    },
    {
      icon: FaExchangeAlt,
      title: 'Flexible Trading',
      description: 'Hold for passive income or sell your NFTs on our marketplace at any time.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'crypto', name: 'Cryptocurrency' },
    { id: 'investment', name: 'Investment' },
    { id: 'property', name: 'Property' },
    { id: 'technology', name: 'Technology' },
    { id: 'market', name: 'Market Analysis' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Real Estate: Cryptocurrency Payments and Blockchain Technology',
      slug: 'future-real-estate-crypto-payments',
      excerpt: 'Explore how cryptocurrency and blockchain are revolutionizing property transactions and investment opportunities.',
      image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&q=80',
      category: 'crypto',
      author: 'Sarah Johnson',
      date: '2024-03-15',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Understanding Tokenized Real Estate Investment',
      slug: 'understanding-tokenized-real-estate',
      excerpt: "A comprehensive guide to property tokenization and how it's making real estate investment more accessible.",
      image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&q=80',
      category: 'investment',
      author: 'Michael Chen',
      date: '2024-03-12',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Smart Contracts in Real Estate Transactions',
      slug: 'smart-contracts-real-estate',
      excerpt: 'How smart contracts are streamlining property transactions and reducing costs.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      category: 'technology',
      author: 'David Rodriguez',
      date: '2024-03-10',
      readTime: '6 min read'
    }
  ];

  const faqSections = [
    {
      title: 'General Information',
      questions: [
        {
          question: "What is GoldenCity?",
          answer: "GoldenCity is an innovative investment project dedicated to real estate. We allow clients to invest as little as $10 in investment properties, with the aim of building up regular income and/or savings."
        },
        {
          question: "I want to buy NFTs, what payment methods are accepted?",
          answer: "You can use various payment methods such as Metamask, Phantom wallet, OKX wallet, Trust wallet, etc."
        },
        {
          question: "What is the marketplace, or secondary market?",
          answer: "The GoldenCity Marketplace is our platform that allows GoldenCity community members to buy and sell NFTs among themselves.  It is the equivalent of a secondary market where investors can buy and sell NFTs among themselves. We may also cooperate with other marketplaces to allow anyone to choose their preferred marketplace."
        },
        {
          question: "I sell or buy NFTs during the month. Who receives the rental income for the current month?",
          answer: "The rental income is paid to the investor who owns the NFTs on the day the royalties are paid."
        },
        {
          question: "Are transactions on the platform secure?",
          answer: "GoldenCity uses the most advanced technical means to ensure the confidentiality and security of transactions on the platform. "
        }
      ]
    }
  ];

  const toggleSection = (sectionTitle, questionIndex) => {
    setOpenSections(prev => ({
      ...prev,
      [`${sectionTitle}-${questionIndex}`]: !prev[`${sectionTitle}-${questionIndex}`]
    }));
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 glass-hero" />
        </div>

        <div className="relative container text-center text-white space-y-8">
          <motion.div
            className="glass-section p-8 md:p-12 max-w-4xl mx-auto bg-sapphire-900/50 dark:bg-gray-900/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Invest and Trade in Real Estate with Cryptocurrency
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl max-w-2xl mx-auto text-white/90 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Own fractional shares of premium properties through NFTs. Start investing with as little as $10.
            </motion.p>
          </motion.div>
        </div>
      </section>
      {/* Investment Steps */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-sapphire-800 dark:text-gray-100">Start Investing in Minutes</h2>
          <p className="text-platinum-600 dark:text-gray-400">Your journey to crypto-powered real estate investment</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {investmentSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="glass-card p-6 text-center group hover:shadow-glass-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <step.icon className="text-2xl text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-primary-600 dark:text-primary-400 text-2xl font-bold mb-4">Step {index + 1}</div>
                <h3 className="text-xl font-semibold mb-2 text-sapphire-800 dark:text-gray-100">{step.title}</h3>
                <p className="text-platinum-600 dark:text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-br from-sapphire-900 via-sapphire-800 to-sapphire-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sapphire-900/50 dark:from-gray-950/50 to-transparent"></div>
        <div className="container relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How GoldenCity Works</h2>
            <p className="text-sapphire-200 dark:text-gray-400">Understanding our tokenized real estate platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                className="glass-card bg-sapphire-800/30 dark:bg-gray-800/30 p-6 backdrop-blur-lg border-sapphire-700/30 dark:border-gray-700/30 group hover:bg-sapphire-700/40 dark:hover:bg-gray-700/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <item.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">{item.title}</h3>
                <p className="text-sapphire-200 dark:text-gray-400 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-sapphire-800 dark:text-gray-100">Featured Investment Opportunities</h2>
          <p className="text-platinum-600 dark:text-gray-400">Curated properties with verified returns and immediate tokenization</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              className="card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="relative h-48 rounded-t-2xl overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 glass-card px-3 py-1 text-primary-600 dark:text-primary-400 font-semibold text-sm">
                  {property.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-sapphire-800 dark:text-gray-100">{property.title}</h3>
                <p className="text-platinum-600 dark:text-gray-400 mb-4">{property.location}</p>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-platinum-500 dark:text-gray-500">Price</p>
                    <p className="font-semibold text-sapphire-800 dark:text-gray-100">${property.price.usd.toLocaleString()}</p>
                    <p className="text-sm text-primary-600 dark:text-primary-400">{property.price.eth} ETH</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-platinum-500 dark:text-gray-500">ROI</p>
                    <p className="font-semibold text-success dark:text-green-400">{property.roi}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-platinum-600 dark:text-gray-400">Total Investors</span>
                    <span className="font-medium text-sapphire-700 dark:text-gray-300">{property.metrics.totalInvestors}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-platinum-600 dark:text-gray-400">Funded</span>
                    <span className="font-medium text-sapphire-700 dark:text-gray-300">{property.metrics.funded}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-platinum-600 dark:text-gray-400">Min Investment</span>
                    <span className="font-medium text-sapphire-700 dark:text-gray-300">{property.metrics.minInvestment}</span>
                  </div>
                </div>

                <Link
                  to={`/properties/${property.id}`}
                  className="btn w-full flex items-center justify-center"
                >
                  Invest Now
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-sapphire-50 to-platinum-100 dark:from-gray-900 dark:to-gray-800 pt-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-sapphire-800 dark:text-gray-100">Why Choose GoldenCity</h2>
            <p className="text-platinum-600 dark:text-gray-400">Experience the future of real estate investment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center group hover:shadow-glass-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <advantage.icon className="text-4xl text-primary-600 dark:text-primary-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-xl font-semibold mb-2 text-sapphire-800 dark:text-gray-100">{advantage.title}</h3>
                <p className="text-platinum-600 dark:text-gray-400">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className="glass-section bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-600 dark:to-primary-700 p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 dark:from-primary-600/20 to-transparent"></div>
          <div className="relative">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Investing?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/95 drop-shadow-sm">
              Join thousands of investors already earning passive income through tokenized real estate.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
              <Link
                to="/properties"
                className="btn-secondary bg-glass-light text-primary-700 hover:bg-white border-white/30 dark:text-gray-200 dark:bg-gray-800/50 dark:hover:bg-gray-700/60"
              >
                Browse Properties
              </Link>
              <button
                className="btn bg-gradient-to-r from-primary-700 to-primary-800 hover:from-primary-800 hover:to-primary-900"
              >
                <FaWallet className="mr-2" />
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <div className="container bg-white dark:bg-transparent py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-3xl font-bold mb-4 text-sapphire-800 dark:text-gray-100">Latest Insights</h1>
          <p className="text-secondary-600 dark:text-gray-400">
            Stay informed with our latest articles and market analysis
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md dark:shadow-gray-900/30 overflow-hidden border dark:border-gray-700/50 hover:shadow-glass-lg dark:hover:shadow-gray-900/50 transition-all duration-300"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-800/90 px-3 py-1 rounded-full text-sm font-medium text-primary-600 dark:text-primary-400 border dark:border-gray-700">
                    {categories.find(c => c.id === post.category)?.name}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3 text-sapphire-800 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-secondary-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-secondary-500 dark:text-gray-500">
                    <FiUser className="mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <FiClock className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>

      {/* FAQ Preview */}
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-sapphire-800 dark:text-gray-100">Frequently Asked Questions</h2>
            <p className="text-secondary-600 dark:text-gray-400">Find answers to common questions about our platform, cryptocurrency payments, and real estate investment.</p>
          </div>
          <div className="space-y-8">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md dark:shadow-gray-900/30 overflow-hidden border dark:border-gray-700/50">
                <div className="divide-y divide-secondary-100 dark:divide-gray-700/50">
                  {section.questions.map((item, questionIndex) => (
                    <div key={questionIndex} className="p-6">
                      <button
                        className="w-full flex justify-between items-center text-left text-sapphire-800 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        onClick={() => toggleSection(section.title, questionIndex)}
                      >
                        <span className="font-medium">{item.question}</span>
                        {openSections[`${section.title}-${questionIndex}`] ? (
                          <FiChevronUp className="flex-shrink-0 ml-4 text-primary-600 dark:text-primary-400" />
                        ) : (
                          <FiChevronDown className="flex-shrink-0 ml-4 text-gray-400" />
                        )}
                      </button>
                      <AnimatePresence>
                        {openSections[`${section.title}-${questionIndex}`] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="mt-4 text-secondary-600 dark:text-gray-400">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Discord CTA */}
      <section className="py-16 bg-primary-900 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Join Our Community
              </h2>
              <p className="mt-4 text-lg text-primary-100 dark:text-gray-300">
                Connect with other crypto real estate investors, share insights, and get early access to new properties.
              </p>
              <dl className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-700 dark:bg-primary-600 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-white">
                      10,000+ Members
                    </dt>
                    <dd className="mt-2 text-base text-primary-100 dark:text-gray-300">
                      Join a growing community of crypto-savvy real estate investors
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-700 dark:bg-primary-600 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-white">
                      Weekly Events
                    </dt>
                    <dd className="mt-2 text-base text-primary-100 dark:text-gray-300">
                      Educational webinars, market updates, and networking sessions
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="mt-12 lg:mt-0 flex justify-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl dark:shadow-gray-900/50 p-8 max-w-sm w-full border dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-6">
                  Join Discord
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
                  Get instant access to our community and start connecting with other investors
                </p>
                <a
                  href="https://discord.gg/GoldenCity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                >
                  Join Now
                </a>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                  Already a member?{' '}
                  <a href="https://discord.gg/GoldenCity" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-500 transition-colors duration-200">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;