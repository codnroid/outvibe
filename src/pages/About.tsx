import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Sparkles, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/thumb-1920-1354305.jpeg";

const About = () => {
  return (
    <main className=" pb-20">
      {/* Hero Section */}
      <section className="relative py-44 flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBanner}
            alt="Fashion Hero"
            className="w-full h-full object-cover object-center opacity-90"
          />
          {/* Black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight tracking-tight">
              Welcome to
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Outvibe
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              We're more than a fashion store — we're a movement celebrating
              Gen&nbsp;Z creativity, confidence, and culture.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
                Shop Now
              </button>
              <button className="px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition">
                Explore Trends
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Outvibe was born from a simple idea: fashion should be fun,
                  accessible, and authentic. We noticed that Gen Z was craving a
                  shopping experience that matched their energy—vibrant,
                  expressive, and unapologetically bold.
                </p>
                <p>
                  Founded in 2024, we've grown from a small online boutique to a
                  thriving community of fashion-forward individuals who aren't
                  afraid to stand out. Every piece we curate tells a story, and
                  we're here to help you tell yours.
                </p>
                <p>
                  Our mission? To make fashion accessible, sustainable, and most
                  importantly—fun. Because at the end of the day, your outfit
                  should make you feel like the main character in your own
                  story.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            >
              {[
                {
                  icon: Sparkles,
                  title: "Authentic Style",
                  description:
                    "We celebrate individuality and self-expression through fashion.",
                },
                {
                  icon: Heart,
                  title: "Community First",
                  description:
                    "Our customers aren't just shoppers—they're part of the Outvibe family.",
                },
                {
                  icon: Users,
                  title: "Inclusive Fashion",
                  description:
                    "Style has no boundaries. We offer fashion for everyone, everywhere.",
                },
              ].map((value, idx) => (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-8 shadow-soft text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-violet-400 mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-center">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Have questions? Want to collaborate? We'd love to hear from you!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "hello@outvibe.com",
                  link: "mailto:hello@outvibe.com",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+1 (555) 123-4567",
                  link: "tel:+15551234567",
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content: "Los Angeles, CA",
                  link: "#",
                },
              ].map((contact) => (
                <a
                  key={contact.title}
                  href={contact.link}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-smooth text-center group"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-muted group-hover:bg-gradient-to-r from-blue-600 via-blue-400 to-violet-400 group-hover:text-white transition-smooth mb-4">
                    <contact.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{contact.title}</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-smooth">
                    {contact.content}
                  </p>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <div className="mt-12 bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-3 rounded-full bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-3 rounded-full bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-full bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-2xl bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto bg-gradient-to-r from-blue-600 via-blue-400 to-violet-400 border-0 rounded-full"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
