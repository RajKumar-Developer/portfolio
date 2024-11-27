/* eslint-disable react/no-unknown-property */
import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Fox from '../models/Fox';
import emailjs from '@emailjs/browser';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation,setCurrentAnimation] = useState('idle')
  const {alert,showAlert,hideAlert}=useAlert()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFocus=()=>setCurrentAnimation('walk');
  const handleBlur=()=>setCurrentAnimation('idle')

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit')

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Rajkumar R",
          from_email: form.email,
          to_email: 'rajkumarrcse28@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({show:true,text:'Message sent successfully',type:'success'})
        setIsLoading(()=>{
          hideAlert();
          setCurrentAnimation('idle')
          setForm({ name: '', email: '', message: '' });
        },[3000])
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation('idle')
        console.error(error);
        showAlert({show:true,text:'I didn\'t receive your message',type:'danger'})
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert}/>}
      {/* <Alert text="test"/> */}
      <div className="flex-1 min-w-[50%] flex flex-col pt-20">
        <h1 className="head-text blue-gradient_text">Get in Touch</h1>
        <form ref={formRef} className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
          <label className="text-black-500 font-semibold">
            Name
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              className="input"
              type="email"
              name="email"
              placeholder="YourEmail@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              className="textarea"
              name="message"
              rows="4"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-100 dark:focus:ring-purple-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[450px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5}/>
          <Suspense fallback={null}>
            <Fox
             position={[0.5, 0.35, 0]}
             rotation={[12.6, -0.6, 0]} 
             scale={[0.5, 0.5, 0.5]} 
             currentAnimation={currentAnimation}
            />

          </Suspense>
        </Canvas>
        <Loader />
      </div>
    </section>
  );
};

export default Contact;
