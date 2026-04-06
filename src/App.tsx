/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  MessageCircle, 
  ChevronRight, 
  Truck, 
  CreditCard, 
  Star, 
  Facebook, 
  Music2, 
  Mail, 
  MapPin, 
  Phone,
  Menu,
  X,
  Sparkles,
  Heart,
  Smartphone,
  Package,
  CheckCircle2
} from 'lucide-react';

// Image Constants based on User Mapping
const IMG_ANIME_GRID = "https://storage.googleapis.com/m-infra.appspot.com/v0/b/ais-dev-gnbg6i3kcbpuepunqn7zya.firebasestorage.app/o/anime_figurines1.jpg?alt=media&token=87e1f409-5147-4933-9114-114032d80d29";
const IMG_ANIME_BOX = "https://storage.googleapis.com/m-infra.appspot.com/v0/b/ais-dev-gnbg6i3kcbpuepunqn7zya.firebasestorage.app/o/anime_figurines2.jpg?alt=media&token=96357700-1175-470a-867b-f47228392131";
const IMG_BEADS_CANDY_FISH = "https://storage.googleapis.com/m-infra.appspot.com/v0/b/ais-dev-gnbg6i3kcbpuepunqn7zya.firebasestorage.app/o/beads1.jpg?alt=media&token=60505b6b-5606-444f-8367-175514f7b247";
const IMG_BEADS_SQUARE = "https://storage.googleapis.com/m-infra.appspot.com/v0/b/ais-dev-gnbg6i3kcbpuepunqn7zya.firebasestorage.app/o/beads2.jpg?alt=media&token=2626e25f-0a78-4359-9944-d89000a63e9f";
const IMG_BEADS_PEARL = "https://storage.googleapis.com/m-infra.appspot.com/v0/b/ais-dev-gnbg6i3kcbpuepunqn7zya.firebasestorage.app/o/beads3.jpg?alt=media&token=22026514-469a-4127-9993-9c803875355a";
const IMG_BRACELET_PILE = "https://storage.googleapis.com/m-infra.appspot.com/v0/b/ais-dev-gnbg6i3kcbpuepunqn7zya.firebasestorage.app/o/bracelet1.jpg?alt=media&token=54734898-936b-4e19-9407-2c9386377756";
const IMG_BRACELET_SCATTERED = "https://storage.googleapis.com/m-infra.appspot.com/v0/b/ais-dev-gnbg6i3kcbpuepunqn7zya.firebasestorage.app/o/bracelet2.jpg?alt=media&token=2506b325-0164-448f-9f76-80f08960f279";
const IMG_PLUSH_REPAIR = "https://storage.googleapis.com/m-infra.appspot.com/v0/b/ais-dev-gnbg6i3kcbpuepunqn7zya.firebasestorage.app/o/cellphonerepair1.jpg?alt=media&token=78881f1e-0129-4318-971c-333061699923";
const IMG_LOGO = "https://storage.googleapis.com/m-infra.appspot.com/v0/b/ais-dev-gnbg6i3kcbpuepunqn7zya.firebasestorage.app/o/Logo.jpg?alt=media&token=6618525e-379e-491c-997f-85652f75437a";
const IMG_PROMO_BANNER = "https://storage.googleapis.com/m-infra.appspot.com/v0/b/ais-dev-gnbg6i3kcbpuepunqn7zya.firebasestorage.app/o/anime_figurines3.jpg?alt=media&token=68371305-6577-4b7b-944f-015e12810243";

const FB_URL = "https://www.facebook.com/chayasgiftshopph";
const TIKTOK_URL = "https://tiktok.com/@chayasgiftshopph";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-chaya-teal/90 backdrop-blur-md py-2 shadow-md' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src={IMG_LOGO} alt="Chaya's Gift Shop PH Logo" className="h-12 w-12 rounded-full border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
            <span className={`font-heading text-xl hidden sm:block ${isScrolled ? 'text-white' : 'text-chaya-navy'}`}>Chaya's Gift Shop PH</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {['Home', 'Shop', 'How to Order', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                className={`hover:text-chaya-gold transition-colors ${isScrolled ? 'text-white' : 'text-chaya-navy'}`}
              >
                {item}
              </button>
            ))}
            <a 
              href={FB_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-chaya-navy text-white px-6 py-2 rounded-full flex items-center gap-2 kawaii-button kawaii-shadow hover:bg-chaya-navy/90"
            >
              <MessageCircle size={18} />
              <span>Message Us 💬</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-chaya-navy p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-chaya-teal/20 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4">
                {['Home', 'Shop', 'How to Order', 'Contact'].map((item) => (
                  <button 
                    key={item} 
                    onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                    className="text-chaya-navy font-medium text-left py-2 border-b border-gray-100"
                  >
                    {item}
                  </button>
                ))}
                <a 
                  href={FB_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-chaya-teal text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  <span>Message Us 💬</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMG_BRACELET_SCATTERED} 
            alt="Background" 
            className="w-full h-full object-cover blur-sm opacity-30" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-chaya-blue/60 via-chaya-white/80 to-chaya-white"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-block"
          >
            <img src={IMG_LOGO} alt="Chaya's Gift Shop PH" className="max-w-[280px] md:max-w-[400px] mx-auto animate-float" referrerPolicy="no-referrer" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-heading text-chaya-navy mb-6 leading-tight"
          >
            Your Cute One-Stop Shop for <br />
            <span className="text-chaya-teal">Anime, Beads & More! 🎀</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Handmade bracelets • Anime figures • Plushies • Bead supplies • Phone repair — <br className="hidden md:block" />
            Shipped anywhere in the Philippines! 🇵🇭
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => scrollToSection('shop')}
              className="w-full sm:w-auto bg-chaya-teal text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 kawaii-button kawaii-shadow hover:scale-105 transition-transform"
            >
              <ShoppingBag size={20} />
              Shop Now 🛍️
            </button>
            <a 
              href={FB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-chaya-navy border-2 border-chaya-navy px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 kawaii-button hover:bg-gray-50 transition-colors"
            >
              <MessageCircle size={20} />
              Message Us on Facebook 💬
            </a>
          </motion.div>

          {/* Floating Sparkles */}
          <div className="absolute top-1/4 left-10 text-chaya-gold animate-bounce hidden md:block">
            <Sparkles size={32} />
          </div>
          <div className="absolute bottom-1/4 right-10 text-chaya-pink animate-pulse hidden md:block">
            <Heart size={32} />
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES SECTION */}
      <section id="shop" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading text-chaya-navy mb-4 inline-flex items-center gap-3">
              What We Sell <span className="text-chaya-gold">✨</span>
            </h2>
            <div className="w-24 h-1.5 bg-chaya-teal mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { title: "Anime Figures 🎌", desc: "Q Posket, Grandista & more", img: IMG_ANIME_GRID, id: 'anime' },
              { title: "Bead Bracelets 🌸", desc: "Handmade pastel daisy jewelry", img: IMG_BRACELET_PILE, id: 'bracelets' },
              { title: "Bead Supplies 🧵", desc: "Candy, fish & pearl beads", img: IMG_BEADS_PEARL, id: 'beads' },
              { title: "Plush & Collectibles 🧸", desc: "Cute toys & anime plushies", img: IMG_PLUSH_REPAIR, id: 'plush' },
              { title: "Cellphone Repair 📱", desc: "Screens, parts & accessories", img: IMG_PLUSH_REPAIR, id: 'repair' },
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
              >
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${cat.id === 'repair' ? 'object-bottom' : ''}`}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chaya-navy/80 via-chaya-navy/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-heading mb-1">{cat.title}</h3>
                  <p className="text-sm text-white/80 mb-4">{cat.desc}</p>
                  <button className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 hover:bg-white hover:text-chaya-navy transition-colors">
                    View Items <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED / BEST SELLERS SECTION */}
      <section className="py-20 bg-chaya-blue/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading text-chaya-navy mb-4 inline-flex items-center gap-3">
              Trending in the Shop <span className="text-red-500">🔥</span>
            </h2>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto pb-8 gap-6 snap-x no-scrollbar">
              {[
                { name: 'Bundle Deal "21+3 FREE = 24pcs"', price: 'Promo', img: IMG_PROMO_BANNER },
                { name: 'Q Posket Figures', price: '₱500+', img: IMG_ANIME_GRID },
                { name: 'Box Stock Anime Figures', price: '₱450+', img: IMG_ANIME_BOX },
                { name: 'Pastel Pearl Beads 100g', price: '₱55.00', img: IMG_BEADS_PEARL },
                { name: 'Candy Beads 40pcs', price: '₱50.00', img: IMG_BEADS_SQUARE },
                { name: 'Daisy Bead Bracelets', price: '₱85.00', img: IMG_BRACELET_SCATTERED },
              ].map((item, idx) => (
                <div key={idx} className="min-w-[280px] md:min-w-[320px] snap-start glass-card rounded-3xl overflow-hidden flex flex-col">
                  <div className="h-64 overflow-hidden relative">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 right-4 bg-chaya-gold text-chaya-navy font-bold px-3 py-1 rounded-full text-sm shadow-sm">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-chaya-navy mb-4 line-clamp-2">{item.name}</h3>
                    <div className="mt-auto">
                      <a 
                        href={FB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-chaya-teal text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 kawaii-button"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Scroll Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-8 h-2 bg-chaya-teal rounded-full"></div>
              <div className="w-2 h-2 bg-chaya-teal/30 rounded-full"></div>
              <div className="w-2 h-2 bg-chaya-teal/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW TO ORDER SECTION */}
      <section id="how-to-order" className="py-20 bg-chaya-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading text-chaya-navy mb-4 inline-flex items-center gap-3">
              How to Order <span className="text-chaya-teal">📦</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-chaya-teal/20 -translate-y-1/2 z-0"></div>
            
            {[
              { step: 1, icon: '🛍️', title: 'Browse & Choose', desc: 'Find your favorite items in our shop categories.' },
              { step: 2, icon: '💬', title: 'Message Us', desc: 'Send us a DM on Facebook or TikTok with your order.' },
              { step: 3, icon: '💳', title: 'Payment', desc: 'Pay securely via GCash or Bank Transfer.' },
              { step: 4, icon: '📦', title: 'We Ship!', desc: 'Wait for your items via LBC, J&T, or Lalamove.' },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 bg-white p-8 rounded-3xl shadow-md text-center border-2 border-chaya-teal/10"
              >
                <div className="w-16 h-16 bg-chaya-teal/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                  {item.icon}
                </div>
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-chaya-navy text-white rounded-full flex items-center justify-center font-heading">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading text-chaya-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SHIPPING & PAYMENT SECTION */}
      <section className="py-20 bg-chaya-teal/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-[2rem] shadow-lg border-b-8 border-chaya-teal"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-chaya-teal/20 rounded-2xl text-chaya-teal">
                  <Truck size={32} />
                </div>
                <h3 className="text-2xl font-heading text-chaya-navy">Delivery Options</h3>
              </div>
              <ul className="space-y-4">
                {['LBC Express', 'J&T Express', 'Lalamove', 'Meet-up (Marilao/Meycauayan)'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="text-chaya-teal" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-[2rem] shadow-lg border-b-8 border-chaya-navy"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-chaya-navy/10 rounded-2xl text-chaya-navy">
                  <CreditCard size={32} />
                </div>
                <h3 className="text-2xl font-heading text-chaya-navy">Payment Methods</h3>
              </div>
              <ul className="space-y-4">
                {['GCash', 'Bank Transfer (BDO/BPI)', 'Cash on Meet-up'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="text-chaya-navy" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. ABOUT US & TESTIMONIALS */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-heading text-chaya-navy mb-8">About Chaya's Gift Shop 🎀</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Chaya's Gift Shop PH is your go-to online shop for kawaii finds, anime collectibles, handcrafted bead jewelry, bead supplies, and phone repair needs. We're based in Marilao, Bulacan and ship nationwide! 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Follow us on Facebook and TikTok for new arrivals and surprise deals. We take pride in our carefully curated items and handmade creations that bring a little more cuteness to your day!
              </p>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
                <img src={IMG_BRACELET_PILE} alt="Handmade Bracelets" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-chaya-pink/30 rounded-full -z-0 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-chaya-teal/30 rounded-full -z-0 blur-3xl"></div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-heading text-chaya-navy mb-4">Happy Customers 💖</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ate Joy', review: 'Super cute ng mga bracelets! Responsive din si seller and mabilis ang shipping. Will order again! 🌸', stars: 5 },
              { name: 'Kuya Marco', review: 'Legit anime figures. Maayos ang packaging, walang damage yung box. Recommended shop for collectors! 🎌', stars: 5 },
              { name: 'Krizzia', review: 'Ang gaganda ng bead supplies, perfect for my DIY projects. Very affordable pa! Thank you Chaya! 🧵', stars: 5 },
            ].map((rev, idx) => (
              <div key={idx} className="bg-chaya-white p-8 rounded-3xl border-2 border-chaya-teal/5 relative">
                <div className="flex gap-1 mb-4 text-chaya-gold">
                  {[...Array(rev.stars)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="italic text-gray-700 mb-6">"{rev.review}"</p>
                <div className="font-bold text-chaya-navy">— {rev.name}</div>
                <div className="absolute -top-4 -right-4 text-chaya-teal/20">
                  <Sparkles size={48} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section id="contact" className="py-20 bg-chaya-blue/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading text-chaya-navy mb-4 inline-flex items-center gap-3">
              Get in Touch <span className="text-chaya-pink">💌</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-white p-8 rounded-[2rem] shadow-lg">
                <h3 className="text-xl font-heading text-chaya-navy mb-6">Contact Details</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-chaya-teal/10 text-chaya-teal rounded-lg">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="font-medium">chayasgiftshopph@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-chaya-navy/10 text-chaya-navy rounded-lg">
                      <Facebook size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Facebook</div>
                      <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-chaya-teal">facebook.com/chayasgiftshopph</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-black/10 text-black rounded-lg">
                      <Music2 size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">TikTok</div>
                      <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-chaya-teal">@chayasgiftshopph</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-chaya-gold/10 text-chaya-gold rounded-lg">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="font-medium">Marilao, Bulacan 3019</div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex gap-4">
                  <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="flex-1 bg-chaya-navy text-white py-3 rounded-xl flex items-center justify-center gap-2 kawaii-button">
                    <Facebook size={20} />
                  </a>
                  <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="flex-1 bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2 kawaii-button">
                    <Music2 size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-lg">
                <h3 className="text-2xl font-heading text-chaya-navy mb-8">Send us an Inquiry</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Name</label>
                      <input type="text" placeholder="Your cute name" className="w-full px-6 py-4 bg-chaya-white border-2 border-transparent focus:border-chaya-teal rounded-2xl outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Contact Number</label>
                      <input type="text" placeholder="09XX XXX XXXX" className="w-full px-6 py-4 bg-chaya-white border-2 border-transparent focus:border-chaya-teal rounded-2xl outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Message</label>
                    <textarea rows={4} placeholder="Tell us what you're looking for! ✨" className="w-full px-6 py-4 bg-chaya-white border-2 border-transparent focus:border-chaya-teal rounded-2xl outline-none transition-all resize-none"></textarea>
                  </div>
                  <button className="w-full bg-chaya-teal text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 kawaii-button kawaii-shadow">
                    Send Message 🎀
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-chaya-navy text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={IMG_LOGO} alt="Chaya's Gift Shop PH" className="h-16 w-16 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                <span className="font-heading text-2xl">Chaya's Gift Shop PH</span>
              </div>
              <p className="text-white/70 max-w-md mb-8">
                Your cute one-stop shop for anime collectibles, handmade jewelry, and more. Based in Bulacan, shipping nationwide with love! 💛
              </p>
              <div className="flex gap-4">
                <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-chaya-teal transition-colors">
                  <Facebook size={20} />
                </a>
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-chaya-teal transition-colors">
                  <Music2 size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-heading text-xl mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/70">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('shop')} className="hover:text-white transition-colors">Shop Categories</button></li>
                <li><button onClick={() => scrollToSection('how-to-order')} className="hover:text-white transition-colors">How to Order</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-xl mb-6">Payment Badges</h4>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-bold">GCash</div>
                <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-bold">Bank Transfer</div>
                <div className="bg-white/10 px-4 py-2 rounded-lg text-sm font-bold">Maya</div>
              </div>
              <div className="mt-8">
                <h4 className="font-heading text-lg mb-4">Shop Location</h4>
                <p className="text-white/70 text-sm flex items-center gap-2">
                  <MapPin size={16} /> Marilao / Meycauayan, Bulacan
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 text-center text-white/50 text-sm">
            <p className="mb-2">© 2026 Chaya's Gift Shop PH. All rights reserved.</p>
            <p>Made with 💛 in Bulacan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
