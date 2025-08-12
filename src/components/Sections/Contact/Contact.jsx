import React, { useRef, useState } from 'react';
import { Linkedin, LocateIcon, Mail, Phone } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '../../ui/button';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_jhla88s',
        'template_lx5vpa4',
        form.current,
        'e5PafQirEFy_LwaSZ'
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          toast.error("Something went wrong. Please try again.");
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div
      id="contact"
      className="max-w-6xl mx-auto font-inter py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        
        {/* Contact Info */}
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Contact Me</h1>

          {[
            { icon: Mail, label: 'Email', value: 'sifatshansan@gmail.com' },
            { icon: Phone, label: 'Phone', value: '01827332136' },
            { icon: LocateIcon, label: 'Location', value: 'Sirajgonj, Bangladesh' },
            { icon: Linkedin, label: 'LinkedIn', value: 'https://www.linkedin.com/in/sifathasan1' }
          ].map((item, index) => (
            <div key={index} className="flex items-start sm:items-center gap-4">
              <item.icon size={44} className="bg-gray-200 p-2.5 rounded-xl flex-shrink-0" />
              <div className="min-w-0">
                <h6 className="text-gray-500 font-semibold">{item.label}</h6>
                <p className="font-medium break-words">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5 md:space-y-6 bg-white p-4 sm:p-6 rounded-lg shadow-sm border"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Send Me a Message</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <Input type="text" name="name" required placeholder="Your Name" />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Input type="email" name="email" required placeholder="Your Email" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <Textarea name="message" required className="h-32" placeholder="Your message..." />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
