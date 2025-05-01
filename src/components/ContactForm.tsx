import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: 'संदेश भेज दिया गया!',
        description: 'हम जल्द से जल्द आपसे संपर्क करेंगे।',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setLoading(false);
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark-muted mb-1">
            आपका नाम
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="अपना नाम लिखें"
            required
            className="bg-dark-secondary border-dark-border text-dark-text"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark-muted mb-1">
            ईमेल पता
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            required
            className="bg-dark-secondary border-dark-border text-dark-text"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark-muted mb-1">
            फोन नंबर
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="9876543210"
            required
            className="bg-dark-secondary border-dark-border text-dark-text"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-dark-muted mb-1">
            विषय
          </label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="बीमा पूछताछ"
            required
            className="bg-dark-secondary border-dark-border text-dark-text"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark-muted mb-1">
          संदेश
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="हम आपकी कैसे मदद कर सकते हैं?"
          rows={5}
          required
          className="bg-dark-secondary border-dark-border text-dark-text resize-none"
        />
      </div>
      
      <div className="text-right">
        <Button
          type="submit"
          disabled={loading}
          className="bg-dark-blue hover:bg-blue-600 text-white"
        >
          {loading ? 'भेज रहे हैं...' : 'संदेश भेजें'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
