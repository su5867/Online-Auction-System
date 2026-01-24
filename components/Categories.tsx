
import React from 'react';
import { CATEGORIES } from '../constants';
import * as Icons from 'lucide-react';

interface CategoriesProps {
  onViewAllClick?: () => void;
  onCategoryClick?: (cat: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onViewAllClick, onCategoryClick }) => {
  return (
    <section className="py-24 bg-brand-navy">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Curated <span className="luxury-text-gradient italic">Specializations</span></h2>
            <p className="text-brand-slate font-light">Explore a world of luxury across our expert-vetted departments.</p>
          </div>
          <button 
            onClick={onViewAllClick}
            className="text-brand-gold font-bold text-xs uppercase tracking-widest border-b border-brand-gold/30 pb-1 hover:text-white hover:border-white transition-all"
          >
            View All Categories
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = (Icons as any)[cat.icon];
            return (
              <div 
                key={cat.name} 
                onClick={() => onCategoryClick?.(cat.name)}
                className="group relative block aspect-[3/4] overflow-hidden rounded-sm cursor-pointer"
              >
                <img src={cat.imageUrl} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={cat.name} />
                <div className="absolute inset-0 bg-brand-navy/60 group-hover:bg-brand-navy/40 transition-colors"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-10 h-10 luxury-gradient rounded-sm flex items-center justify-center mb-3 text-brand-navy shadow-xl">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-1">{cat.name}</h3>
                    <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">{cat.count} Items Available</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
