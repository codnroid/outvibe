import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { products } from '@/lib/products';
import { useFilterStore } from '@/stores/useFilterStore';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { category, gender, brand, sortBy, setCategory, setGender, setBrand, setSortBy, clearFilters } = useFilterStore();

  const categories = ['tops', 'bottoms', 'dresses', 'accessories', 'shoes'];
  const genders = ['men', 'women', 'unisex'];
  const brands = [...new Set(products.map((p) => p.brand))];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Apply filters
    if (category.length > 0) {
      filtered = filtered.filter((p) => category.includes(p.category));
    }
    if (gender.length > 0) {
      filtered = filtered.filter((p) => gender.includes(p.gender));
    }
    if (brand.length > 0) {
      filtered = filtered.filter((p) => brand.includes(p.brand));
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.newDrop ? 1 : 0) - (a.newDrop ? 1 : 0));
        break;
      default:
        // featured - trending first
        filtered.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
    }

    return filtered;
  }, [category, gender, brand, sortBy]);

  const handleCategoryChange = (cat: string) => {
    setCategory(category.includes(cat) ? category.filter((c) => c !== cat) : [...category, cat]);
  };

  const handleGenderChange = (gen: string) => {
    setGender(gender.includes(gen) ? gender.filter((g) => g !== gen) : [...gender, gen]);
  };

  const handleBrandChange = (br: string) => {
    setBrand(brand.includes(br) ? brand.filter((b) => b !== br) : [...brand, br]);
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h3 className="font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${cat}`}
                checked={category.includes(cat)}
                onCheckedChange={() => handleCategoryChange(cat)}
              />
              <Label htmlFor={`category-${cat}`} className="capitalize cursor-pointer">
                {cat}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Gender */}
      <div>
        <h3 className="font-semibold mb-3">Gender</h3>
        <div className="space-y-2">
          {genders.map((gen) => (
            <div key={gen} className="flex items-center space-x-2">
              <Checkbox
                id={`gender-${gen}`}
                checked={gender.includes(gen)}
                onCheckedChange={() => handleGenderChange(gen)}
              />
              <Label htmlFor={`gender-${gen}`} className="capitalize cursor-pointer">
                {gen}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <h3 className="font-semibold mb-3">Brand</h3>
        <div className="space-y-2">
          {brands.map((br) => (
            <div key={br} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${br}`}
                checked={brand.includes(br)}
                onCheckedChange={() => handleBrandChange(br)}
              />
              <Label htmlFor={`brand-${br}`} className="cursor-pointer">
                {br}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button
        onClick={clearFilters}
        variant="outline"
        className="w-full rounded-full"
      >
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Shop All</h1>
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Mobile Filter Button */}
          <Sheet open={showFilters} onOpenChange={setShowFilters}>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden rounded-full">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>

          {/* Sort */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-sm text-muted-foreground hidden sm:inline">Sort by:</span>
            <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
              <SelectTrigger className="w-[180px] rounded-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-card rounded-2xl p-6 shadow-soft">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                {(category.length > 0 || gender.length > 0 || brand.length > 0) && (
                  <Button
                    onClick={clearFilters}
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No products found. Try adjusting your filters.
                </p>
                <Button
                  onClick={clearFilters}
                  variant="outline"
                  className="mt-4 rounded-full"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
