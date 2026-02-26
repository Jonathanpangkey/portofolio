"use client";
import {useState} from "react";
import {Mail, MapPin, Phone, Send, Github, Linkedin, Twitter} from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const {name, email, subject, message} = formData;

    const whatsappMessage = `
  Halo Jonathan
  
  Saya ${name}.
  Saya ingin menghubungi Anda terkait:
  
  Subjek: ${subject}
  
  Pesan:
  ${message}
  
  Email saya: ${email}
    `.trim();

    const phoneNumber = "6285332586520";

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  const contactInfo = [
    {
      icon: <Mail className='w-5 h-5' />,
      label: "Email",
      value: "jonathanpangkey912@gmail.com",
      link: "mailto:jonathanpangkey912@gmail.com",
    },
    {
      icon: <Phone className='w-5 h-5' />,
      label: "Phone",
      value: "+62 853 3258 6520",
      link: "tel:+6285332586520",
    },
    {
      icon: <MapPin className='w-5 h-5' />,
      label: "Location",
      value: "Jakarta, Indonesia",
      link: "https://www.google.com/maps/place/Rawamangun,+Kec.+Pulo+Gadung,+Kota+Jakarta+Timur,+Daerah+Khusus+Ibukota+Jakarta/@-6.1958289,106.8718802,15z/data=!3m1!4b1!4m6!3m5!1s0x2e69f4935b098709:0x60dc669208f8fdbb!8m2!3d-6.1976024!4d106.879792!16s%2Fg%2F12hhj6ps9?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className='w-5 h-5' />,
      label: "GitHub",
      link: "https://github.com/Jonathanpangkey",
    },
    {
      icon: <Linkedin className='w-5 h-5' />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/jonathanpangkey",
    },
  ];

  return (
    <section id='contact' className='relative py-24 px-6 overflow-hidden bg-background-dark'>
      <div className='absolute  right-1/3 w-125 h-125 bg-accent/8 rounded-full blur-3xl'></div>
      <div className='absolute -bottom-40 left-1/3 w-125 h-125 bg-primary/8 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <span className='text-accent text-sm font-semibold tracking-wider uppercase mb-4 block'>GET IN TOUCH</span>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            <span className='text-white'>Let's Work </span>
            <span className='bg-linear-to-r from-accent via-primary to-accent bg-clip-text text-transparent'>Together</span>
          </h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>Have a project in mind or just want to chat? Feel free to reach out!</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div className='space-y-8'>
            <div>
              <h3 className='text-2xl font-bold text-white mb-6'>Contact Information</h3>
              <p className='text-white/60 mb-8 leading-relaxed'>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className='space-y-4'>
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300 hover:bg-white/10'>
                  <div className='w-12 h-12 bg-linear-to-br from-accent to-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <div className='text-white'>{item.icon}</div>
                  </div>
                  <div>
                    <p className='text-white/60 text-sm'>{item.label}</p>
                    <p className='text-white font-semibold group-hover:text-accent transition-colors'>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className='text-white font-semibold mb-4'>Follow Me</h4>
              <div className='flex gap-4'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-linear-to-br hover:from-accent hover:to-primary hover:border-accent transition-all hover:scale-110'
                    aria-label={social.label}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label className='text-white/70 text-sm mb-2 block'>Your Name</label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='John Doe'
                  required
                  className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors'
                />
              </div>

              <div>
                <label className='text-white/70 text-sm mb-2 block'>Your Email</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='john@example.com'
                  required
                  className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors'
                />
              </div>

              <div>
                <label className='text-white/70 text-sm mb-2 block'>Subject</label>
                <input
                  type='text'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder='Project Inquiry'
                  required
                  className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors'
                />
              </div>

              <div>
                <label className='text-white/70 text-sm mb-2 block'>Message</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Tell me about your project...'
                  rows={5}
                  required
                  className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors resize-none'
                />
              </div>

              <button
                type='submit'
                className='w-full bg-linear-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2'>
                Send Message
                <Send className='w-5 h-5' />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
