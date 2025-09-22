import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Plane, Calendar, Users, MapPin, Loader2 } from "lucide-react";

interface FlightData {
  id: number;
  flightNumber: string;
  airline: string;
  time: string;
  price: string;
  duration: string;
}

interface StatusMessage {
  message: string;
  type: 'error' | 'info' | 'success';
}

export const FlightSearch = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [passengers, setPassengers] = useState('1');
  const [flights, setFlights] = useState<FlightData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<StatusMessage>({ message: '', type: 'info' });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!origin || !destination || !departureDate) {
      setStatusMessage({ message: 'Please fill in all search fields.', type: 'error' });
      return;
    }

    setIsLoading(true);
    setFlights([]);
    setStatusMessage({ message: '', type: 'info' });

    setTimeout(() => {
      setIsLoading(false);
      const dummyFlights: FlightData[] = [
        { id: 1, flightNumber: 'SC123', airline: 'SkyConnect', time: '08:00 AM', price: '$250', duration: '2h 30m' },
        { id: 2, flightNumber: 'SC456', airline: 'SkyConnect', time: '02:30 PM', price: '$320', duration: '2h 45m' },
        { id: 3, flightNumber: 'SC789', airline: 'SkyConnect', time: '09:15 PM', price: '$285', duration: '2h 20m' },
      ];

      if (Math.random() > 0.8) {
        setStatusMessage({ message: 'No flights found. Please try a different search.', type: 'info' });
      } else {
        setFlights(dummyFlights);
        setStatusMessage({ message: `Found ${dummyFlights.length} flights from ${origin} to ${destination}`, type: 'success' });
      }
    }, 1500);
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Search Form */}
      <Card className="glass-effect p-8 border-white/30 shadow-medium">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-sky rounded-lg">
            <Plane className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-foreground">Book Your Flight</h2>
        </div>
        
        <form onSubmit={handleSearch} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="origin" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <MapPin className="w-4 h-4" />
                From
              </Label>
              <Input
                id="origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="Origin city"
                className="input-field h-14 text-lg"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="destination" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <MapPin className="w-4 h-4" />
                To
              </Label>
              <Input
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Destination city"
                className="input-field h-14 text-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="departure" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Calendar className="w-4 h-4" />
                Departure Date
              </Label>
              <Input
                id="departure"
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="input-field h-14 text-lg"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="passengers" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Users className="w-4 h-4" />
                Passengers
              </Label>
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger className="input-field h-14">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Passenger</SelectItem>
                  <SelectItem value="2">2 Passengers</SelectItem>
                  <SelectItem value="3">3 Passengers</SelectItem>
                  <SelectItem value="4">4+ Passengers</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="btn-primary w-full h-16 text-xl font-bold shadow-glow"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                Searching Flights...
              </>
            ) : (
              <>
                <Plane className="w-6 h-6 mr-3" />
                Find Flights
              </>
            )}
          </Button>
        </form>
      </Card>

      {/* Status Message */}
      {statusMessage.message && (
        <Card className={`p-4 text-center font-semibold ${
          statusMessage.type === 'error' 
            ? 'bg-destructive/10 text-destructive border-destructive/20' 
            : statusMessage.type === 'success'
            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
            : 'bg-muted text-muted-foreground border-border/40'
        }`}>
          {statusMessage.message}
        </Card>
      )}

      {/* Flight Results */}
      {flights.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground">Available Flights</h3>
          <div className="space-y-4">
            {flights.map((flight) => (
              <Card key={flight.id} className="flight-card">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Plane className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{flight.airline}</p>
                        <h4 className="text-xl font-bold text-foreground">{flight.flightNumber}</h4>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-medium text-primary">{origin}</span>
                      <div className="flex-1 h-px bg-border"></div>
                      <Plane className="w-4 h-4 text-primary" />
                      <div className="flex-1 h-px bg-border"></div>
                      <span className="font-medium text-primary">{destination}</span>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <span>Departure: <span className="font-medium text-foreground">{flight.time}</span></span>
                      <span>Duration: <span className="font-medium text-foreground">{flight.duration}</span></span>
                    </div>
                  </div>
                  
                  <div className="text-center md:text-right space-y-3">
                    <p className="text-4xl font-bold text-primary">{flight.price}</p>
                    <Button className="btn-primary">
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};