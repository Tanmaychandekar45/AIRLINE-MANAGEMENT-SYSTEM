import heroImage from "@/assets/aviation-hero.jpg";
import { FlightSearch } from "@/components/FlightSearch";
import { Plane, Shield, Clock, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="hero-section relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        <div className="relative z-10 text-center text-white px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <Plane className="w-6 h-6" />
              <span className="text-lg font-medium">Premium Aviation Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                SkyConnect
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-blue-50 max-w-2xl mx-auto leading-relaxed">
              Your journey begins here. Discover the world with premium flights, 
              exceptional service, and unbeatable comfort.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
              <div className="flex items-center gap-3 text-blue-50">
                <Shield className="w-5 h-5" />
                <span className="font-medium">Secure Booking</span>
              </div>
              <div className="flex items-center gap-3 text-blue-50">
                <Clock className="w-5 h-5" />
                <span className="font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-3 text-blue-50">
                <Award className="w-5 h-5" />
                <span className="font-medium">Best Prices</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <FlightSearch />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-cloud">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose SkyConnect?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our premium aviation services and world-class customer care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-effect p-8 text-center border-white/30 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-sky rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Secure & Safe</h3>
              <p className="text-muted-foreground">
                Your safety is our priority. All flights meet the highest security standards 
                with comprehensive safety protocols.
              </p>
            </Card>

            <Card className="glass-effect p-8 text-center border-white/30 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-sky rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Always On Time</h3>
              <p className="text-muted-foreground">
                Punctuality matters. Our flights maintain excellent on-time performance 
                to keep your schedule intact.
              </p>
            </Card>

            <Card className="glass-effect p-8 text-center border-white/30 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-sky rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Premium Experience</h3>
              <p className="text-muted-foreground">
                Enjoy luxury in the sky with spacious seating, gourmet meals, 
                and personalized service throughout your journey.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Plane className="w-8 h-8" />
            <h3 className="text-3xl font-bold">SkyConnect</h3>
          </div>
          <p className="text-background/70 mb-8">
            Connecting you to the world, one flight at a time.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-background/60">
            <span>© 2024 SkyConnect Airlines</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Contact Us</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;