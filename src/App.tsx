/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Star,
  CheckCircle2,
  Award
} from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'table', label: 'Value' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
];

export default function App() {
  return (
    <div className="min-h-screen paper-grain relative overflow-x-hidden">
      {/* 
        Slide 01: Hero / Introduction 
      */}
      <section id="hero" className="min-h-screen flex flex-col relative border-b border-brand-dark/10">
        <div className="absolute top-8 right-8 flex flex-col md:flex-row gap-4 md:gap-8 text-sm font-bold z-10 text-right">
          <a href="mailto:navyakapoor.work@gmail.com" className="flex items-center justify-end gap-2 hover:text-brand-red transition-all group">
            <Mail size={16} className="group-hover:scale-110" /> 
            navyakapoor.work@gmail.com
          </a>
          <a href="tel:+918445663733" className="flex items-center justify-end gap-2 hover:text-brand-red transition-all group">
            <Phone size={16} className="group-hover:scale-110" /> 
            +91 8445663733
          </a>
        </div>

        <div className="grid lg:grid-cols-12 flex-grow">
          {/* Content Left */}
          <div className="lg:col-span-8 p-8 lg:p-24 flex flex-col justify-center relative">
            <motion.span 
              initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
              animate={{ opacity: 1, rotate: -12, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="handwritten text-5xl text-brand-red/60 absolute top-24 left-12 lg:left-32 pointer-events-none"
            >
              portfolio
            </motion.span>
            
            <motion.h1 
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="title-condensed text-[14vw] sm:text-[12vw] leading-[0.8] text-brand-red mb-6"
            >
              INTRODUCTION
            </motion.h1>
            
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-end gap-4 mb-14"
            >
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tighter">Hi, I'm</h2>
              <span className="handwritten text-7xl lg:text-8xl text-brand-red -mb-4 lg:-mb-6">navya kapoor</span>
            </motion.div>

            <div className="max-w-3xl space-y-12">
              <p className="text-xl lg:text-3xl font-light leading-snug tracking-tight text-brand-dark/90 px-2 lg:px-0">
                A strategic thinker with a passion for unlocking business potential through clear vision and data-driven planning.
              </p>
              
              <div className="relative">
                {/* Red block with "a" icon */}
                <div className="bg-brand-red text-white p-10 lg:p-14 rounded-sm shadow-2xl relative overflow-hidden group">
                  <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-shrink-0 w-24 h-24 bg-white p-3 rounded-sm rotate-3 shadow-xl transform group-hover:rotate-6 transition-transform duration-500">
                      <div className="w-full h-full border-2 border-brand-red flex items-center justify-center text-brand-red font-bold text-lg text-center leading-none">
                        &lt;div&gt;a
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-xl lg:text-2xl leading-relaxed font-light">
                        I turn raw spreadsheets into scroll-stopping campaigns, before my coffee goes cold.
                      </p>
                      <p className="text-2xl lg:text-3xl font-bold italic tracking-tight">
                        Give me the why, I'll give you the wow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-16 flex items-center gap-6"
            >
              <span className="handwritten text-3xl text-brand-red font-bold rotate-[-2deg]">Disclaimer!</span>
              <p className="text-sm lg:text-base font-bold tracking-widest text-brand-dark/60 uppercase">
                Currently: open to work & ready to make your brand unforgettable:)
              </p>
            </motion.div>
          </div>

          {/* Visual Right */}
          <div className="lg:col-span-4 bg-brand-red relative group h-[50vh] lg:h-auto order-first lg:order-last">
            <img 
              src="/Navya.jpg"  
              className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:grayscale-0 transition-all duration-1000"
              alt="Navya Kapoor"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </section>

      {/* 
        Slide 02: What I Bring to the Table 
      */}
      <section id="table" className="py-24 px-8 lg:px-24 bg-brand-paper relative border-b border-brand-dark/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-brand-red/5 rounded-sm p-4 relative group max-w-md mx-auto lg:mx-0">
                <div className="w-full h-full border border-brand-red/20 rounded-sm flex flex-col items-center justify-center p-8 bg-white shadow-xl rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500">
                    <p className="handwritten text-5xl mb-6 font-bold text-center">What I Bring to the Table :)</p>
                    <img 
                        src="/Cat.jpg" 
                        className="rounded-lg shadow-2xl grayscale group-hover:brightness-110 group-hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                    />
                </div>
            </div>
            
            <div className="space-y-8">
                <div className="bg-brand-red text-white p-10 lg:p-14 shadow-2xl relative overflow-hidden rotate-[1deg]">
                    <p className="text-2xl lg:text-3xl leading-relaxed relative z-10 italic font-light">
                        "I love building things from the ground up, whether it's designing my mom's old saree into a dress from scratch, curating aesthetic mood boards or crafting creative marketing ideas that connect with people."
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="h-px flex-grow bg-brand-dark/10"></div>
                    <span className="title-condensed text-2xl text-brand-red">STRATEGIC VISION</span>
                    <div className="h-px flex-grow bg-brand-dark/10"></div>
                </div>
            </div>
        </div>
      </section>

      {/* 
        Slide 03: Core Skills 
      */}
      <section id="skills" className="py-24 px-8 lg:px-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
            <h2 className="title-condensed text-8xl lg:text-[10vw] text-brand-red leading-none">CORE SKILLS</h2>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <Star className="text-brand-red fill-brand-red" size={80} />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-x-16 gap-y-16">
              {[
                { 
                  title: "AI & Automation", 
                  skills: "Zapier AI · Julius AI · Claude AI · Google AI Studio",
                  note: "yes, I use AI. strategically."
                },
                { 
                  title: "Creative & Design", 
                  skills: "Canva · Mood Boarding · Social Media Content · Visual Storytelling"
                },
                { 
                  title: "Marketing & Design", 
                  skills: "Meta Ads · Google Ads · Canva · Hootsuite · Semrush · Similarweb"
                },
                { 
                  title: "Strategy & Ops", 
                  skills: "Market Research · Campaign Planning · Brand Outreach"
                }
              ].map((group) => (
                <div key={group.title} className="border-t-2 border-brand-dark/10 pt-8 group hover:border-brand-red transition-colors">
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{group.title}</h3>
                  <p className="text-xl text-brand-dark/70 leading-relaxed mb-4">{group.skills}</p>
                  {group.note && (
                    <span className="handwritten text-2xl text-brand-red font-bold">{group.note}</span>
                  )}
                </div>
              ))}
              
              <div className="md:col-span-2 border-t-4 border-brand-red pt-10">
                <h3 className="text-3xl font-bold mb-6 text-brand-red uppercase tracking-tighter">Data Research & Analytics</h3>
                <p className="text-2xl lg:text-3xl text-brand-dark font-light tracking-tight leading-tight">
                  Excel · Google Sheets · IBM SPSS · Python · SQL · Tableau · Google Analytics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        Slide 03: Professional Experience 
      */}
      <section id="experience" className="py-32 px-8 lg:px-24 paper-grain relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 relative">
             <motion.div
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               className="inline-block"
             >
                <h2 className="title-condensed text-[12vw] text-brand-red leading-none mb-4">PROFESSIONAL EXPERIENCE</h2>
                <span className="handwritten text-5xl text-brand-dark/40 absolute -bottom-4 right-0 lg:right-24 rotate-[-4deg]">Journey so far</span>
             </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 text-left">
            {/* Togethr.club */}
            <div className="bg-white p-12 lg:p-16 rounded-sm shadow-2xl border border-gray-100 flex flex-col relative group overflow-hidden">
              <div className="mb-10 text-left">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold tracking-tighter leading-none">Togethr.club <span className="block text-lg font-normal text-brand-dark/60 mt-1">(Swopshop Pvt. Ltd.)</span></h3>
                  <span className="bg-brand-red/10 text-brand-red text-sm font-bold px-4 py-2 rounded-full whitespace-nowrap">May – Jul 2025</span>
                </div>
                <p className="text-brand-red font-bold text-lg tracking-widest uppercase mb-8">Marketing Intern · Greater Noida</p>
                <ul className="space-y-6 text-xl text-brand-dark/80 font-light">
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-brand-red shrink-0 mt-1" size={24} />
                    <span>Secured meetings with <span className="font-bold text-brand-dark">10+ D2C industry-leading brands</span> including Deconstruct</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-brand-red shrink-0 mt-1" size={24} />
                    <span>Onboarded brands with <span className="font-bold text-brand-dark">100k+ monthly traffic</span></span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-brand-red shrink-0 mt-1" size={24} />
                    <span>Improved team operational efficiency by <span className="font-bold text-brand-red">40%</span></span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-auto pt-8 border-t border-brand-dark/5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-brand-red font-bold uppercase tracking-tighter text-sm">
                  <Award size={20} /> Professional Certification
                </div>
              </div>
            </div>

            {/* DeerConnect */}
            <div className="bg-brand-dark text-white p-12 lg:p-16 rounded-sm shadow-2xl flex flex-col relative group">
               <div className="mb-10 text-left">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold tracking-tighter leading-none">DeerConnect</h3>
                  <span className="bg-white/10 text-white text-sm font-bold px-4 py-2 rounded-full">Mar – Apr 2025</span>
                </div>
                <p className="text-brand-red font-bold text-lg tracking-widest uppercase mb-8">Marketing Intern · Remote</p>
                <ul className="space-y-6 text-xl opacity-80 font-light">
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-brand-red shrink-0 mt-1" size={24} />
                    <span>Built & optimised social media campaigns.</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-brand-red shrink-0 mt-1" size={24} />
                    <span>Tracked real data, improved digital brand presence.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto pt-10 border-t border-white/10 relative">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="bg-brand-red p-8 rounded-sm text-center shadow-xl cursor-default"
                >
                  <span className="handwritten text-4xl font-bold leading-none text-white whitespace-nowrap overflow-hidden italic">Creative Thinking & Design</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        Slide 04: Key Projects 
      */}
      <section id="projects" className="py-32 px-8 lg:px-24 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="title-condensed text-8xl lg:text-[10vw] text-brand-red leading-none">KEY PROJECTS</h2>
            <div className="text-right pb-4">
              <span className="handwritten text-4xl block text-brand-dark/40 mb-2">Case Study // IRP 2026</span>
              <span className="title-condensed text-5xl block text-brand-red">Blurred Boundaries</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
               <p className="text-3xl lg:text-4xl font-light leading-snug tracking-tight mb-16 border-l-8 border-brand-red pl-10 italic text-brand-dark/90 text-left">
                "I investigated the friction between individual agency and algorithmic curation, proving that modern taste is a retrospective narrative layered onto synchronized consumption."
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-brand-paper p-10 rounded-sm border border-brand-red/10 shadow-sm hover:shadow-xl transition-all">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-6xl font-display text-brand-red">α</span>
                    <span className="text-6xl font-display text-brand-dark">0.824</span>
                  </div>
                  <h4 className="font-bold text-sm tracking-widest uppercase text-brand-red mb-3">CRONBACH RELIABILITY</h4>
                  <p className="text-brand-dark/60 leading-relaxed">Ensuring high scale consistency in psychological metrics across user segments.</p>
                </div>
                
                <div className="bg-brand-paper p-10 rounded-sm border border-brand-red/10 shadow-sm hover:shadow-xl transition-all">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-6xl font-display text-brand-red">41.5%</span>
                  </div>
                  <h4 className="font-bold text-sm tracking-widest uppercase text-brand-red mb-3">AESTHETIC ANXIETY</h4>
                  <p className="text-brand-dark/60 leading-relaxed">Predictable variance in platform behavior based on social comparison habits.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-brand-red text-white p-12 shadow-2xl relative group text-left">
                <Star className="absolute -top-6 -right-6 text-brand-paper fill-brand-paper rotate-12" size={48} />
                <h3 className="text-3xl lg:text-4xl font-bold mb-10 underline decoration-white/20 underline-offset-8 uppercase tracking-tighter">The Authenticity Paradox</h3>
                
                <div className="space-y-10">
                  <div className="relative">
                    <p className="text-2xl lg:text-3xl font-light leading-tight">
                      <span className="font-display text-6xl block mb-2">90%</span>
                      of Gen Z claim uniqueness as a core pillar, yet behavioral data shows...
                    </p>
                    <motion.div 
                      whileInView={{ width: "100%" }}
                      initial={{ width: 0 }}
                      className="h-1 bg-white/20 mt-6"
                    />
                  </div>

                  <div>
                     <span className="font-display text-7xl text-white block mb-2">40%</span>
                     <p className="text-xl lg:text-2xl font-bold bg-white text-brand-red px-4 py-2 inline-block">HIGHER SYNCHRONIZATION</p>
                     <p className="text-lg mt-2 opacity-80 italic">with viral trends than internal preference.</p>
                  </div>

                  <div className="pt-8 border-t border-white/20">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-60">Visual Research Insights</p>
                    <p className="text-xl font-bold mt-2">77.5% Platform Dominance: Instagram as 'Visual Incubator'</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        Slide 05 & 06: Certifications 
      */}
      <section id="certifications" className="py-32 px-8 lg:px-24 paper-grain relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-20">
            <h2 className="title-condensed text-8xl lg:text-[10vw] text-brand-red leading-none">KEY CERTIFICATIONS</h2>
            <Award className="text-brand-red" size={64} />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {[
              { 
                title: "Introduction to Strategy Consulting Job Simulation", 
                provider: "BCG / Forage", 
                date: "March 2025",
                type: "Strategy"
              },
              { 
                title: "Digital Marketing Mastery", 
                provider: "IIT Delhi (TRYST-2025)", 
                date: "March 2025",
                type: "Marketing"
              },
              { 
                title: "Google Ads Search Certification", 
                provider: "Google Ads Search", 
                status: "Certified",
                type: "Ads"
              },
              { 
                title: "Inbound Marketing Certified", 
                provider: "HubSpot Academy", 
                date: "Valid 2024–2027",
                type: "Strategy"
              },
              { 
                title: "Digital Marketing Certified", 
                provider: "HubSpot Academy", 
                date: "Valid 2024–2027",
                type: "Marketing"
              },
              { 
                title: "Advertising & Promotions Management", 
                provider: "NPTEL Online Certification (IIT Dhanbad)", 
                score: "96% [Elite + Topper 1%]",
                type: "Elite"
              },
            ].map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white p-10 border border-brand-dark/5 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group ${cert.type === 'Elite' ? 'border-brand-red border-2' : ''}`}
              >
                <div className="text-left">
                  <div className="flex justify-between items-center mb-8">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${cert.type === 'Elite' ? 'bg-brand-red text-white' : 'bg-brand-dark/5 text-brand-dark/60'}`}>
                      {cert.type}
                    </span>
                    <ExternalLink size={16} className="text-brand-dark/20 group-hover:text-brand-red" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tighter leading-tight group-hover:text-brand-red transition-colors">{cert.title}</h3>
                  <p className="text-brand-red font-bold text-sm tracking-widest uppercase">{cert.provider}</p>
                </div>
                
                <div className="mt-10 pt-10 border-t border-brand-dark/5 flex justify-between items-center">
                   <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-brand-red" />
                     <span className="text-xs font-bold text-brand-dark/40 uppercase">{cert.date || cert.status || cert.score}</span>
                   </div>
                   {cert.score && <Award size={18} className="text-brand-red" />}
                </div>
              </motion.div>
            ))}

            <div className="p-10 bg-brand-red text-white flex flex-col items-center justify-center text-center shadow-2xl rotate-[1deg]">
               <p className="text-xs font-bold uppercase tracking-[0.4em] opacity-60">Elite Record 2025/2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        Slide 07: Thank You / Contact Footer 
      */}
      <footer className="bg-brand-red text-white py-32 px-8 lg:px-24 relative overflow-hidden">
        {/* Abstract Background Design */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <Star className="absolute top-20 left-20 rotate-12 scale-[3]" />
          <Star className="absolute bottom-20 right-20 -rotate-12 scale-[4]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 handwritten text-[35vw] text-white/50 rotate-[-12deg] select-none">2026</div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="title-condensed text-[16vw] lg:text-[14vw] leading-none mb-0 tracking-tighter">THANK YOU</h2>
            <motion.span 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="handwritten text-[10vw] block mt-[-4vw] lg:mt-[-6vw] mb-20 italic"
            >
              Everyone
            </motion.span>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32 pt-20 border-t border-white/20">
              <div className="text-center lg:text-left space-y-4">
                <span className="handwritten text-6xl block text-white">Navya Kapoor</span>
                <span className="font-display text-4xl opacity-40 uppercase block tracking-widest">[ 2026 ]</span>
              </div>

              <div className="flex flex-col gap-6 text-left">
                <a href="mailto:navyakapoor.work@gmail.com" className="group flex items-center gap-4 text-2xl lg:text-3xl font-light hover:text-brand-paper transition-all">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-red transition-all">
                    <Mail size={24} />
                  </div>
                  navyakapoor.work@gmail.com
                </a>
                <a href="tel:+918445663733" className="group flex items-center gap-4 text-2xl lg:text-3xl font-light hover:text-brand-paper transition-all">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-red transition-all">
                    <Phone size={24} />
                  </div>
                  +91 8445663733
                </a>
                <a href="https://www.linkedin.com/in/navya-kapoor-041512bd" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-2xl lg:text-3xl font-light hover:text-brand-paper transition-all">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-red transition-all">
                    <Linkedin size={24} />
                  </div>
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-32 text-center text-left text-[10px] font-bold uppercase tracking-[0.5em] opacity-30">
          DESIGNED WITH STRATEGY & VISION · NAVYA KAPOOR
        </div>
      </footer>

      {/* Floating Scroll Indicator */}
      <div className="fixed bottom-8 right-12 flex flex-col items-center gap-4 z-50 mix-blend-difference hidden lg:flex">
         <span className="title-condensed text-white rotate-90 text-[10px] tracking-widest origin-left translate-y-8">SCROLL</span>
         <div className="w-px h-24 bg-white/30 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 96, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute top-0 left-0 w-full h-1/4 bg-white"
            />
         </div>
      </div>
    </div>
  );
}
