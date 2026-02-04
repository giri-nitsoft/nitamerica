import React, { useEffect } from 'react';
import { motion, useAnimation, type Variants, type TargetAndTransition } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Search, FileText, Settings, TrendingUp, Mail, Globe, MapPin } from 'lucide-react';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "circOut" } }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "circOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const App = () => {
  return (
    <div className="bg-black text-white antialiased selection:bg-cyan-500/30 blueprint-grid section-container">
      {/* Premium Cinematic Elements */}
      <div className="global-frame" />
      <div className="noise-bg opacity-[0.03]" />

      {/* Navigation */}
      <nav className="fixed w-full z-[110] bg-black/60 backdrop-blur-2xl border-b border-white/[0.05] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-8 py-5 md:py-6 flex justify-between items-center">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl md:text-3xl font-black tracking-tighter transition flex items-center gap-2 group"
          >
            <span className="text-white group-hover:text-accent transition-colors">NIT</span>
            <span className="text-gradient drop-shadow-[0_0_15px_rgba(145,179,240,0.3)]">AMERICA</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12 text-[10px] font-black tracking-[0.3em] text-gray-400">
            <a href="#about" className="hover:text-white transition duration-300">ABOUT</a>
            <a href="#brands" className="hover:text-white transition duration-300">BRANDS</a>
            <a href="#service" className="hover:text-white transition duration-300">SERVICE</a>
            <a href="#contact" className="px-8 py-3 bg-accent/5 border border-accent/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-500 tracking-[0.15em] hover:shadow-[0_0_20px_rgba(145,179,240,0.3)]">
              CONTACT
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <a href="#contact" className="text-[9px] font-black tracking-widest px-4 py-2 border border-white/10 rounded-full bg-white/5">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="relative">
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 blueprint-grid-fine opacity-20" />
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
            <motion.img
              initial={{ scale: 1.25 }}
              animate={{ scale: 1 }}
              transition={{ duration: 15, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
              src="/images/hero-la.png"
              className="w-full h-full object-cover opacity-50 grayscale contrast-125"
              alt="LA Skyline"
            />
            {/* Electric Glow Overlays */}
            <div className="absolute top-1/2 left-0 w-1/2 h-px bg-cyan-500/20 blur-md z-20" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-purple-500/10 blur-xl z-20" />
          </div>

          <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-accent font-black tracking-[0.5em] mb-8 text-sm md:text-base uppercase"
            >
              Gateway to Korea for US Brands
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[140px] font-black mb-12 tracking-tight md:tracking-[-0.06em] leading-[0.9] md:leading-[0.8]"
            >
              CONNECTING<br />
              <span className="text-gradient drop-shadow-[0_0_50px_rgba(145,179,240,0.2)] inline-block pr-1">US TRENDS</span><br />
              TO KOREA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-16"
            >
              Bringing U.S. trends to the heart of Korea.<br />
              <span className="text-white/80">NIT AMERICA</span> is your strategic partner for expanding brand value across borders.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="#brands" className="group relative inline-flex items-center justify-center px-12 py-6 font-bold text-white transition-all duration-500 bg-accent/20 hover:bg-accent/30 border border-accent/30 rounded-full hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(145,179,240,0.1)] filter backdrop-blur-md">
                EXPLORE PORTFOLIO
                <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1.5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 opacity-20"
          >
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white to-transparent mx-auto" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-primary relative flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <ScrollReveal variants={fadeInRight}>
                <div className="flex items-center mb-12">
                  <div className="h-px w-20 bg-accent mr-6" />
                  <span className="text-accent font-black tracking-[0.4em] text-[10px] uppercase">About Us</span>
                </div>
                <h2 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[84px] font-black mb-12 leading-[1.0] md:leading-[0.85] tracking-tighter">
                  Global Vision,<br />Local Action.
                </h2>
                <div className="space-y-12 text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
                  <p className="border-l-2 border-white/10 pl-8 transition-colors hover:border-accent">
                    <span className="text-white font-black text-2xl md:text-3xl block mb-6 tracking-tight">Two-Core Global Operation</span>
                    <strong className="text-white font-bold decoration-accent/30 decoration-8 underline-offset-8">NIT AMERICA</strong> is the US-based entity leading brand sourcing, licensing negotiations, and strategic partnerships directly from Irvine, California.
                  </p>
                  <p className="border-l-2 border-white/10 pl-8">
                    <strong className="text-white font-bold decoration-purple-500/30 decoration-8 underline-offset-8">NITSOFT</strong> serves as the execution core for the Korean market, driving localized commerce, IT-powered messaging, and scalable distribution infrastructure.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal variants={fadeInLeft}>
                <div className="relative group/card">
                  <div className="absolute -inset-8 bg-gradient-to-r from-cyan-600/20 via-blue-600/10 to-purple-600/20 rounded-[3rem] blur-[80px] opacity-40 group-hover/card:opacity-100 transition duration-1000" />
                  <div className="relative glass-card rounded-[3rem] p-16 shadow-3xl border-white/10 overflow-hidden transition-all duration-700 group-hover/card:scale-[1.02] group-hover/card:bg-white/[0.05] group-hover/card:border-white/20">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent group-hover/card:via-cyan-500/50 transition-all duration-700" />
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0 mb-20 relative px-4">
                      <div className="text-center w-full md:w-1/3">
                        <div className="text-5xl md:text-6xl mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">🇺🇸</div>
                        <div className="font-black text-2xl md:text-3xl tracking-tight">USA</div>
                        <div className="text-[11px] text-gray-500 tracking-[0.3em] uppercase mt-2 font-black mono-technical">Irvine, CA</div>
                      </div>
                      <div className="hidden md:block flex-1 px-8 relative">
                        <div className="h-px bg-white/10 w-full" />
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-accent via-white to-purple-500 -translate-y-1/2 blur-[1px] opacity-60 group-hover/card:opacity-100 transition-opacity duration-700" />
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 glass-card px-6 py-1.5 rounded-full text-[10px] text-accent font-black tracking-[0.2em] uppercase border-white/10 group-hover/card:border-accent/30 group-hover/card:bg-accent/10 transition-all duration-700">
                          CONNECT
                        </div>
                      </div>
                      <div className="text-center w-full md:w-1/3">
                        <div className="text-5xl md:text-6xl mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">🇰🇷</div>
                        <div className="font-black text-2xl md:text-3xl tracking-tight">KOREA</div>
                        <div className="text-[11px] text-gray-500 tracking-[0.3em] uppercase mt-2 font-black mono-technical">Strategic Hub</div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="glass-card p-10 rounded-3xl transition-all duration-500 hover:bg-white/[0.08] hover:glow-border-cyan cursor-pointer">
                        <div className="flex items-start gap-6">
                          <div className="w-3 h-3 rounded-full bg-cyan-500 mt-3 shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
                          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                            <span className="text-white font-bold">NIT AMERICA</span> leads US operations & networking.
                          </p>
                        </div>
                      </div>
                      <div className="glass-card p-10 rounded-3xl transition-all duration-500 hover:bg-white/[0.08] hover:glow-border-purple cursor-pointer">
                        <div className="flex items-start gap-6">
                          <div className="w-3 h-3 rounded-full bg-purple-500 mt-3 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                            Strategic partnership with <span className="text-white font-bold">NITSOFT</span> for Korean market expansion.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section id="brands" className="py-32 bg-white text-black relative flex items-center">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <ScrollReveal variants={fadeInUp}>
              <div className="text-center mb-24 md:mb-32">
                <span className="text-accent font-black tracking-[0.5em] text-[10px] uppercase block mb-6">Portfolio</span>
                <h2 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[100px] font-black tracking-tighter leading-none mb-4">OUR BRANDS</h2>
                <div className="h-1 w-24 bg-black mx-auto" />
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12">
              <BrandCard
                image="/images/Maui.jpg"
                category="SURF & STREET"
                name="MAUI & SONS"
                description="A global lifestyle brand capturing the free surf culture and street vibe of California."
                accentColor="blue"
              />
              <BrandCard
                image="/images/lagear.jpg"
                category="RETRO & ATHLEISURE"
                name="LA GEAR"
                description="An iconic sneakers and athleisure brand reimagining 80s and 90s retro vibes for the modern era."
                accentColor="purple"
                delay={0.2}
              />
            </div>
          </div>
        </section>

        {/* Service Section */}
        <section id="service" className="py-40 bg-zinc-950/50 relative flex items-center overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 blur-[160px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[160px] rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
            <ScrollReveal variants={fadeInUp}>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 border-b border-white/5 pb-20 gap-12">
                <div className="max-w-3xl">
                  <span className="text-accent font-black tracking-[0.5em] text-[10px] uppercase block mb-6">One-Stop Solution</span>
                  <h2 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[80px] font-black tracking-tight leading-[0.9] md:leading-[0.8]">From Discovery<br />To Expansion</h2>
                </div>
                <p className="text-gray-500 max-w-sm lg:text-right font-light text-xl leading-relaxed">
                  Beyond simple brokerage, we provide integrated solutions covering the entire process from brand discovery to market settlement.
                </p>
              </div>
            </ScrollReveal>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] border border-white/[0.05] shadow-2xl overflow-hidden rounded-3xl"
            >
              <ServiceItem
                num="01"
                title="Discovery"
                subtitle="Trend Sourcing"
                icon={<Search className="w-8 h-8" />}
                desc="We proactively discover trendy US brands based on local data."
              />
              <ServiceItem
                num="02"
                title="Licensing"
                subtitle="License Agreement"
                icon={<FileText className="w-8 h-8" />}
                desc="We secure licensing rights and design optimized contract structures through legal review"
              />
              <ServiceItem
                num="03"
                title="Infra"
                subtitle="Full Operation"
                icon={<Settings className="w-8 h-8" />}
                desc="We build all necessary infrastructure for distribution including logistics, customs, and CS."
              />
              <ServiceItem
                num="04"
                title="Expansion"
                subtitle="Localization"
                icon={<TrendingUp className="w-8 h-8" />}
                desc="We execute rebranding strategies and expand online/offline channels tailored for Korean markets."
              />
            </motion.div>
          </div>
        </section>

        {/* Footer / Contact Section */}
        <footer id="contact" className="bg-black pt-40 pb-24 border-t border-white/5 relative flex flex-col justify-between overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 lg:gap-40 mb-32 w-full">
            <ScrollReveal variants={fadeInRight}>
              <h2 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[88px] font-black mb-16 tracking-tighter leading-[0.8] md:leading-[0.75]">Ready to<br />Connect?</h2>
              <div className="space-y-8">
                <div className="group glass-card p-10 rounded-[2rem] hover:glow-border-cyan transition-all cursor-default relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-accent font-black tracking-[0.4em] text-[11px] uppercase">Global Sourcing HQ</span>
                  </div>
                  <p className="text-3xl md:text-4xl font-black text-white mb-3">Irvine, California</p>
                  <p className="text-gray-500 text-sm md:text-base flex items-center gap-3">
                    <MapPin className="w-4 h-4" /> Brand Discovery & License Acquisition
                  </p>
                </div>
                <div className="group glass-card p-10 rounded-[2rem] hover:glow-border-purple transition-all cursor-default relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-purple-500 font-black tracking-[0.4em] text-[11px] uppercase">Market Execution Center</span>
                  </div>
                  <p className="text-3xl md:text-4xl font-black text-white mb-3">Seoul, South Korea</p>
                  <p className="text-gray-500 text-sm md:text-base flex items-center gap-3">
                    <Globe className="w-4 h-4" /> Omni-channel Distribution & Localization
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variants={fadeInLeft}>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em] mb-16">Trusted Partners</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { name: 'NITSOFT', url: 'https://www.nitsoft.co.kr/' },
                      { name: 'BGI', url: 'https://www.brandgroupinternational.com/' },
                      { name: 'ERUDA MKT', url: 'https://e-ruda.net/home' },
                      { name: 'STCOMM', url: 'https://www.stcomm.kr/' }
                    ].map((p) => (
                      <a
                        key={p.name}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-24 glass-card flex items-center justify-center text-gray-500 font-black text-base hover:text-white transition-all cursor-pointer tracking-widest rounded-2xl border-white/10 hover:border-white/20"
                      >
                        {p.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-32">
                  <p className="text-gray-500 font-black tracking-[0.5em] text-[11px] uppercase mb-10 flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent" /> Business Inquiry
                  </p>
                  <a
                    href="mailto:nit@nitsoft.biz"
                    className="text-[clamp(28px,4vw,64px)] font-black text-white hover:text-accent transition-colors underline decoration-white/5 underline-offset-[16px] decoration-2 hover:decoration-accent/50 break-all"
                  >
                    nit@nitsoft.biz
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="max-w-7xl mx-auto px-8 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-600 font-black tracking-[0.4em] uppercase w-full">
            <p>&copy; 2026 NIT AMERICA. All rights reserved.</p>
            <p className="mt-6 md:mt-0">Connecting Global Brands to Local Markets</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

// Helper Components
interface ScrollRevealProps {
  children: React.ReactNode;
  variants: Variants;
}

const ScrollReveal = ({ children, variants }: ScrollRevealProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

interface BrandCardProps {
  image: string;
  category: string;
  name: string;
  description: string;
  accentColor: 'blue' | 'purple';
  delay?: number;
}

const BrandCard = ({ image, category, name, description, accentColor, delay = 0 }: BrandCardProps) => {
  const accentClasses = accentColor === 'blue' ? 'text-accent' : 'text-purple-400';
  const glowClasses = accentColor === 'blue' ? 'hover:glow-border-cyan' : 'hover:glow-border-purple';

  // Extract base animation and inject delay
  const visibleVariant = fadeInUp.visible as TargetAndTransition;
  const customVariants: Variants = {
    ...fadeInUp,
    visible: {
      ...visibleVariant,
      transition: {
        ...visibleVariant.transition,
        delay
      }
    }
  };

  return (
    <ScrollReveal variants={customVariants}>
      <div className={`group relative overflow-hidden h-[700px] bg-black cursor-pointer blueprint-corner corner-tl corner-br border border-white/5 transition-all duration-700 ${glowClasses} hover:scale-[1.01] hover:z-10`}>

        <div className={`scanner-line ${accentColor === 'purple' ? 'scanner-line-purple' : ''} opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s]`} />

        <div className="absolute inset-0 bg-black/40 z-10 transition-opacity group-hover:opacity-10" />
        <img
          src={image}
          className="w-full h-full object-cover transition duration-[2.5s] ease-out group-hover:scale-110 grayscale-[0.8] group-hover:grayscale-0"
          alt={name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-20" />

        <div className="absolute bottom-0 left-0 p-12 md:p-16 z-30 w-full transform translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-out">
          <div className="overflow-hidden mb-6">
            <p className={`${accentClasses} font-black tracking-[0.6em] text-[10px] uppercase opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 delay-100`}>
              {category}
            </p>
          </div>
          <h3 className="text-5xl md:text-7xl font-black text-white italic mb-8 tracking-tighter leading-none">{name}</h3>
          <div className="overflow-hidden">
            <p className="text-gray-400 text-lg max-w-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-300 font-light leading-relaxed">
              {description}
            </p>
          </div>
          <div className="mt-12 h-px w-0 group-hover:w-full bg-gradient-to-r from-white/20 to-transparent transition-all duration-1000 delay-500" />
        </div>
      </div>
    </ScrollReveal>
  );
};

interface ServiceItemProps {
  num: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  desc: string;
}

const ServiceItem = ({ num, title, subtitle, icon, desc }: ServiceItemProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="glass-card p-12 hover:bg-white/[0.07] transition-all duration-700 group cursor-default border-white/5 blueprint-grid-fine blueprint-corner corner-tr relative overflow-hidden"
    >
      <div className="scanner-line opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out" />

      <div className="flex justify-between items-start mb-20 relative z-10">
        <div className="absolute -top-14 -left-6 text-[64px] font-black text-white/[0.03] group-hover:text-accent/[0.08] transition-all duration-700 pointer-events-none italic mono-technical">
          {num}
        </div>
        <div className="text-accent text-[10px] font-black tracking-[0.5em] uppercase px-3 py-1 bg-accent/10 border border-accent/20 rounded-sm">
          {title}
        </div>
        <div className="text-white/20 group-hover:text-accent transition-all duration-700 scale-125 transform group-hover:rotate-[360deg] group-hover:scale-150">
          {icon}
        </div>
      </div>

      <h3 className="text-3xl font-black mb-8 text-white tracking-tight leading-tight group-hover:text-accent transition-all duration-500">
        {subtitle}
      </h3>
      <p className="text-base text-gray-400 leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-500 max-w-[280px]">
        {desc}
      </p>

      <div className="mt-12 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
        <div className="w-8 h-px bg-cyan-500/40" />
        <span className="text-[9px] font-mono text-cyan-500/60 tracking-widest uppercase">System Online</span>
      </div>
    </motion.div>
  );
};

export default App;
