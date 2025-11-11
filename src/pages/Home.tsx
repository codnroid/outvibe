import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import heroBanner from "@/assets/spring-wardrobe-switch-still-life.jpg";

const Home = () => {
  const trendingProducts = products.filter((p) => p.trending).slice(0, 4);
  const newDrops = products.filter((p) => p.newDrop).slice(0, 4);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 ">
          {/* Black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent z-10" />

          {/* Background image */}
          <img
            src={heroBanner}
            alt="Fashion Hero"
            loading="lazy"
            className="w-full h-full object-center opacity-90"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-background/90 px-6 py-2.5 rounded-full mb-8  border border-border/50"
            >
              <Sparkles className="h-4 w-4 " />
              <span className="text-sm font-semibold">
                New Collection Just Dropped
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-[1.1]">
              Find Your
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Perfect Vibe
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto">
              Trending fashion that matches your energy. Express yourself with
              styles curated for Gen Z.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-blue-400 to-violet-400 border-0 rounded-full text-lg px-10 h-14 "
              >
                <Link to="/shop">
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* New Drops Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              New Arrivals
            </h2>
            <p className="text-muted-foreground text-lg">
              Fresh styles just dropped
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {newDrops.map((product) => (
              <motion.div key={product.id} variants={item}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <Link to="/shop">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-24 gradient-hero/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-background/90 backdrop-blur-sm px-6 py-2.5 rounded-full mb-4 shadow-soft border border-border/50">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold">Trending Now</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              Most Popular
            </h2>
            <p className="text-muted-foreground text-lg">
              What everyone's loving right now
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {trendingProducts.map((product) => (
              <motion.div key={product.id} variants={item}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-card rounded-3xl p-12 md:p-16 shadow-soft border border-border/50">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Express Your
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Unique Style
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Join our community and discover fashion that matches your vibe
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-blue-400 to-violet-400 border-0 rounded-full px-8"
                >
                  <Link to="/shop">
                    Shop Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
