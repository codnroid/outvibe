import { create } from 'zustand';

interface FilterStore {
  category: string[];
  gender: string[];
  priceRange: [number, number];
  brand: string[];
  sortBy: 'featured' | 'price-low' | 'price-high' | 'newest';
  setCategory: (categories: string[]) => void;
  setGender: (genders: string[]) => void;
  setPriceRange: (range: [number, number]) => void;
  setBrand: (brands: string[]) => void;
  setSortBy: (sort: 'featured' | 'price-low' | 'price-high' | 'newest') => void;
  clearFilters: () => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  category: [],
  gender: [],
  priceRange: [0, 200],
  brand: [],
  sortBy: 'featured',
  setCategory: (categories) => set({ category: categories }),
  setGender: (genders) => set({ gender: genders }),
  setPriceRange: (range) => set({ priceRange: range }),
  setBrand: (brands) => set({ brand: brands }),
  setSortBy: (sort) => set({ sortBy: sort }),
  clearFilters: () => set({ category: [], gender: [], priceRange: [0, 200], brand: [], sortBy: 'featured' }),
}));
