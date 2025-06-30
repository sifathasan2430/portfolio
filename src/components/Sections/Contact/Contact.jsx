import React, { useRef, useState } from 'react';
import { Linkedin, LinkIcon, LocateIcon, Mail, Phone } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '../../ui/button';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'; // Optional for user feedback

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_jhla88s',     // Replace with your EmailJS service ID
        'template_lx5vpa4',    // Replace with your EmailJS template ID
        form.current,
        'e5PafQirEFy_LwaSZ'      // Replace with your EmailJS public key
      )
      .then(
        () => {
          toast.success("Message sent successfully!"); // Optional
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
    <div id="contact" className="max-w-6xl mx-auto font-inter py-10 px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-8">
          <h1 className="text-xl font-bold mb-6">Contact Me</h1>

          <div className="flex items-center gap-6">
            <Mail size={50} className="bg-gray-300 p-4 rounded-2xl" />
            <div>
              <h6 className="text-[#b2b2bc] font-bold">Email</h6>
              <p className="font-semibold">sifatshansan@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Phone size={50} className="bg-gray-300 p-4 rounded-2xl" />
            <div>
              <h6 className="text-[#b2b2bc] font-bold">Phone</h6>
              <p className="font-semibold">01827332136</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <LocateIcon size={50} className="bg-gray-300 p-4 rounded-2xl" />
            <div>
              <h6 className="text-[#b2b2bc] font-bold">Location</h6>
              <p className="font-semibold">Sirajgonj, Bangladesh</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Linkedin size={50} className="bg-gray-300 p-4 rounded-2xl" />
            <div>
              <h6 className="text-[#b2b2bc] font-bold">LinkedIn</h6>
              <p className="font-semibold">loading</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <h1 className="text-xl font-bold mb-6">Send Me a Message</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-lg">Name:</p>
              <Input type="text" name="name" required placeholder="Your Name" />
            </div>

            <div className="space-y-2">
              <p className="text-lg">Email:</p>
              <Input type="email" name="email" required placeholder="Your Email" />
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-lg">Message:</p>
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
