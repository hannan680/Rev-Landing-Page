import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
const testimonials = [{
  name: "Chris Elliott",
  role: "Owner, Radiant Security",
  company: "Radiant Security",
  avatar: "/lovable-uploads/758b4181-2dae-445d-b017-caa9eb8f065e.png",
  rating: 5,
  text: "RevSquared's AI agents completely revolutionized how we handle sales and tech support. Our response time improved dramatically, sales conversion rates increased, and we now have 24/7 support available. Game-changing technology.",
  results: ["Faster response times", "Higher conversions", "24/7 availability"]
}, {
  name: "Hershel Krupp",
  role: "Business Owner",
  company: "Construction Company",
  avatar: "/lovable-uploads/a5dc9957-a55a-4287-8f29-7f49a8146b42.png",
  rating: 5,
  text: "Working with RevSquared was a game-changer for our business. The AI system they created is smarter and more efficient than any employee we've ever had—it became a true engine for scaling our business. They were with us every step of the way.",
  results: ["Smarter than employees", "True scaling engine", "Step-by-step support"]
}, {
  name: "Kurt Strittmatter",
  role: "Business Owner",
  company: "Marketing & Lead Generation",
  avatar: "/lovable-uploads/51251cd2-7b11-4a0a-b7ff-c2a25868513a.png",
  rating: 5,
  text: "Kyle and Ahmad went above and beyond to create our marketing platform. The best part is they don't just build it and leave - they stay on top of the platform daily and work with you very quickly on every step. Highly recommend for lead generation!",
  results: ["Above & beyond service", "Daily optimization", "Lightning fast support"]
}, {
  name: "Don Mackee",
  role: "Owner",
  company: "BANA Roofing & Solar",
  avatar: "/lovable-uploads/7f426d81-8a3d-4258-97da-9273ee449fbf.png",
  rating: 5,
  text: "I was crazy stressed with a small team and phones ringing off the hook. I tried other AI solutions but they couldn't handle what I needed. RevSquared built exactly what my roofing business required - now I can actually focus on running my company instead of drowning in calls.",
  results: ["Handles high call volume", "Built for roofing industry", "Stress-free operations"]
}, {
  name: "James Lowery",
  role: "Mortgage Banker",
  company: "HomeFirst",
  avatar: "/lovable-uploads/fe17db4b-9468-43c2-99fc-acb7748e01c9.png",
  rating: 5,
  text: "RevSquared built a conversational AI that completely redefined how I connect with prospects. The AI engages leads in real-time with personalization that feels natural and human. It doesn't just collect data—it actively nurtures and qualifies leads, saving me time so I can focus on closing deals.",
  results: ["Natural AI conversations", "Active lead nurturing", "More time for closing"]
}];
export function PremiumTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 8000); // Slowed down from 6000ms to 8000ms

    return () => clearInterval(timer);
  }, []);
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  };
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };
  const staggerContainer = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <section id="testimonials" className="relative py-32 bg-gradient-to-br from-[#0D0D0D] via-[#20215A]/20 to-[#0D0D0D] text-white overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <motion.div className="absolute inset-0 bg-gradient-to-br from-[#6233EA]/[0.08] via-[#E536C1]/[0.05] to-[#00E5D6]/[0.08]" animate={{
        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
      }} transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }} style={{
        backgroundSize: '400% 400%'
      }} />
        
        {/* Moving light orbs */}
        <motion.div className="absolute top-1/3 left-1/5 w-72 h-72 bg-[#6233EA]/15 rounded-full blur-3xl" animate={{
        x: [0, 150, 0],
        y: [0, 80, 0],
        scale: [1, 1.2, 1]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-[#E536C1]/15 rounded-full blur-3xl" animate={{
        x: [0, -100, 0],
        y: [0, -60, 0],
        scale: [1, 1.3, 1]
      }} transition={{
        duration: 22,
        repeat: Infinity,
        ease: "easeInOut"
      }} />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-white/30 rounded-full" style={{
        left: `${15 + i * 7}%`,
        top: `${25 + i * 5}%`
      }} animate={{
        y: [0, -50, 0],
        opacity: [0.2, 1, 0.2],
        scale: [1, 2, 1]
      }} transition={{
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3
      }} />)}
      </div>

      <motion.div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
      once: true,
      margin: "-100px"
    }}>
        {/* Header */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <motion.div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6" whileHover={{
          scale: 1.05,
          borderColor: "rgba(255, 255, 255, 0.3)"
        }}>
            <motion.div animate={{
            rotate: 360
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}>
              <Sparkles className="h-4 w-4 text-[#00E5D6]" />
            </motion.div>
            <span className="text-sm font-medium text-white/80" style={{
            fontFamily: 'Audiowide, sans-serif'
          }}>
              ✨ Client Success Stories
            </span>
            <div className="w-2 h-2 bg-[#00E5D6] rounded-full animate-pulse" />
          </motion.div>

          <motion.h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight" variants={fadeInUp} style={{
          fontFamily: 'Audiowide, sans-serif'
        }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Trusted by
            </span>
            <br />
            <motion.span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5D6] via-[#6233EA] to-[#E536C1]" animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }} transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }} style={{
            backgroundSize: '200% 200%'
          }}>
              Industry Leaders
            </motion.span>
          </motion.h2>
          
          <motion.p className="text-xl sm:text-2xl text-[#D3D4FF] max-w-4xl mx-auto leading-relaxed" variants={fadeInUp} style={{
          fontFamily: 'Manrope, sans-serif'
        }}>Join a growing community of businesses transforming their operations with our premium AI solutions.</motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="relative h-[500px] md:h-[400px] perspective-1000">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div key={currentIndex} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{
              x: {
                type: "spring",
                stiffness: 300,
                damping: 30
              },
              opacity: {
                duration: 0.4
              },
              scale: {
                duration: 0.4
              },
              rotateY: {
                duration: 0.6
              }
            }} className="absolute inset-0">
                <div className="relative h-full bg-gradient-to-br from-[#20215A]/50 to-[#6233EA]/20 backdrop-blur-xl rounded-3xl border border-[#00E5D6]/30 p-8 md:p-12 overflow-hidden group">
                  {/* Animated background gradient */}
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-[#6233EA]/[0.08] via-[#E536C1]/[0.05] to-[#00E5D6]/[0.08] rounded-3xl" animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                }} transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }} style={{
                  backgroundSize: '300% 300%'
                }} />

                  {/* Quote icon */}
                  <motion.div className="absolute top-8 right-8 opacity-20" animate={{
                  rotate: [0, 10, 0]
                }} transition={{
                  duration: 4,
                  repeat: Infinity
                }}>
                    <Quote className="w-16 h-16 text-[#FEDD4D]" />
                  </motion.div>

                  <div className="relative z-10 h-full flex flex-col md:flex-row items-center gap-8">
                    {/* User Info */}
                    <div className="flex-shrink-0 text-center md:text-left">
                      <motion.div className="relative mb-6" whileHover={{
                      scale: 1.1
                    }} transition={{
                      duration: 0.3
                    }}>
                        <div className="w-24 h-24 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-[#00E5D6]/30 relative">
                          <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" />
                          <motion.div className="absolute inset-0 bg-gradient-to-br from-[#6233EA]/20 to-[#E536C1]/20" animate={{
                          opacity: [0, 0.3, 0]
                        }} transition={{
                          duration: 3,
                          repeat: Infinity
                        }} />
                        </div>
                        
                        {/* Floating ring animation */}
                        <motion.div className="absolute inset-0 border-2 border-[#00E5D6]/30 rounded-full" animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 0, 0.5]
                      }} transition={{
                        duration: 2,
                        repeat: Infinity
                      }} />
                      </motion.div>

                      <h3 className="text-2xl font-bold text-white mb-2" style={{
                      fontFamily: 'Audiowide, sans-serif'
                    }}>
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-[#00E5D6] mb-1 font-medium" style={{
                      fontFamily: 'Manrope, sans-serif'
                    }}>
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-[#D3D4FF] mb-4" style={{
                      fontFamily: 'Manrope, sans-serif'
                    }}>
                        {testimonials[currentIndex].company}
                      </p>
                      
                      {/* Star Rating */}
                      <div className="flex justify-center md:justify-start gap-1 mb-6">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => <motion.div key={i} initial={{
                        opacity: 0,
                        scale: 0
                      }} animate={{
                        opacity: 1,
                        scale: 1
                      }} transition={{
                        delay: i * 0.1,
                        duration: 0.3
                      }}>
                            <Star className="w-5 h-5 fill-[#FEDD4D] text-[#FEDD4D]" />
                          </motion.div>)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <motion.blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-light italic" initial={{
                      opacity: 0
                    }} animate={{
                      opacity: 1
                    }} transition={{
                      delay: 0.3,
                      duration: 0.8
                    }} style={{
                      fontFamily: 'Manrope, sans-serif'
                    }}>
                        "{testimonials[currentIndex].text}"
                      </motion.blockquote>

                      {/* Results */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {testimonials[currentIndex].results.map((result, i) => <motion.div key={i} className="bg-[#20215A]/30 rounded-lg p-3 border border-[#00E5D6]/20 backdrop-blur-sm" initial={{
                        opacity: 0,
                        y: 20
                      }} animate={{
                        opacity: 1,
                        y: 0
                      }} transition={{
                        delay: 0.5 + i * 0.1,
                        duration: 0.5
                      }} whileHover={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)"
                      }}>
                            <span className="text-sm text-[#D3D4FF] font-medium" style={{
                          fontFamily: 'Manrope, sans-serif'
                        }}>
                              {result}
                            </span>
                          </motion.div>)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <motion.button onClick={prevTestimonial} className="p-3 rounded-full bg-[#20215A]/50 border border-[#00E5D6]/30 backdrop-blur-sm text-[#00E5D6] hover:bg-[#00E5D6]/20 transition-all" whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(0, 229, 214, 0.2)"
          }} whileTap={{
            scale: 0.95
          }}>
              <ArrowLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => <motion.button key={index} onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }} className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-[#00E5D6] scale-125' : 'bg-white/30 hover:bg-white/50'}`} whileHover={{
              scale: 1.2
            }} whileTap={{
              scale: 0.9
            }} />)}
            </div>

            <motion.button onClick={nextTestimonial} className="p-3 rounded-full bg-[#20215A]/50 border border-[#00E5D6]/30 backdrop-blur-sm text-[#00E5D6] hover:bg-[#00E5D6]/20 transition-all" whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(0, 229, 214, 0.2)"
          }} whileTap={{
            scale: 0.95
          }}>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={staggerContainer}>
          {[{
          number: "45+",
          label: "Happy Clients"
        }, {
          number: "98%",
          label: "Satisfaction Rate"
        }, {
          number: "$2M+",
          label: "Revenue Generated"
        }, {
          number: "99.9%",
          label: "Uptime SLA"
        }].map((stat, index) => <motion.div key={index} className="text-center group" variants={fadeInUp} whileHover={{
          scale: 1.05
        }}>
              <motion.div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00E5D6] to-[#E536C1] bg-clip-text text-transparent mb-2" animate={{
            opacity: [0.7, 1, 0.7]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.5
          }} style={{
            fontFamily: 'Audiowide, sans-serif'
          }}>
                {stat.number}
              </motion.div>
              <div className="text-[#D3D4FF] text-sm font-medium group-hover:text-white/80 transition-colors" style={{
            fontFamily: 'Manrope, sans-serif'
          }}>
                {stat.label}
              </div>
            </motion.div>)}
        </motion.div>
      </motion.div>
    </section>;
}