import { services } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Our Services</h1>
          <p className="text-muted-foreground">
            Professional security solutions and support from our expert team
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Service Features */}
        <div className="bg-muted/30 rounded-lg border border-border p-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            What's Included in Our Services?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Site assessment and security audit',
              'Professional system design',
              'Expert installation by trained technicians',
              '24/7 technical support',
              'Maintenance and monitoring',
              'Rapid emergency response',
              'Competitive pricing with flexible payment',
              'Warranty and guarantee coverage',
            ].map((feature, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'John Smith',
                role: 'Store Manager',
                text: 'TN Automation installed our system and the quality has been outstanding. Highly professional team.',
              },
              {
                name: 'Sarah Johnson',
                role: 'Home Owner',
                text: 'Amazing customer service and excellent installation. I feel much safer now with their system.',
              },
              {
                name: 'Mike Davis',
                role: 'Business Owner',
                text: 'Best security solution in the area. Quick response, reliable equipment, great support.',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20 p-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Service Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Consultation',
                desc: 'Free assessment of your security needs',
              },
              {
                step: '2',
                title: 'Design',
                desc: 'Custom system design for your property',
              },
              {
                step: '3',
                title: 'Installation',
                desc: 'Professional setup and testing',
              },
              {
                step: '4',
                title: 'Support',
                desc: 'Ongoing maintenance and assistance',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact our team today for a free consultation and custom quote
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="gap-2">
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
            >
              +1 (615) 555-1234
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
