
'use client';

import { useState, useMemo } from 'react';
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from 'lucide-react';

const citiesData = [
  { name: "Gurgaon", state: "Haryana", country: "India" },
];

interface GroupedCities {
  [country: string]: {
    [state: string]: string[];
  };
}

export default function CitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAndGroupedCities = useMemo(() => {
    const filtered = citiesData.filter(city => {
      const matchesSearch = city.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });

    return filtered.reduce<GroupedCities>((acc, city) => {
      if (!acc[city.country]) {
        acc[city.country] = {};
      }
      if (!acc[city.country][city.state]) {
        acc[city.country][city.state] = [];
      }
      acc[city.country][city.state].push(city.name);
      return acc;
    }, {});
  }, [searchTerm]);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 container py-12 md:py-20">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">Cities We Serve</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We are currently live in Gurgaon, India. We are expanding to new locations soon!
            </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
            <div className="relative">
                <Input 
                    type="text"
                    placeholder="Search for a city..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
        </div>

        {Object.keys(filteredAndGroupedCities).length > 0 ? (
          <div className="space-y-12">
            {Object.entries(filteredAndGroupedCities).map(([country, states]) => (
              <div key={country}>
                <h2 className="text-3xl font-bold font-headline mb-6 pb-2 border-b-2 border-primary">{country}</h2>
                <div className="space-y-8">
                  {Object.entries(states).map(([state, cities]) => (
                    <div key={state}>
                      <h3 className="text-xl font-semibold text-muted-foreground mb-4">{state}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3">
                        {cities.map(city => (
                          <div key={city} className="flex items-center gap-2 group">
                             <MapPin className="h-4 w-4 text-primary/50 group-hover:text-primary transition-colors" />
                             <span className="text-foreground group-hover:font-medium transition-all">{city}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
            <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No cities found matching your criteria.</p>
                <p className="text-muted-foreground mt-2">We are currently only operating in Gurgaon.</p>
            </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
