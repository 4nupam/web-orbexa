"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { supabase } from "../../lib/supabaseClient";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    time: "",
    type: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.number || !form.email || !form.message) {
      toast.error("Please fill all required fields.");
      return;
    }

    const { error } = await supabase.from("contact-form").insert([form]);

    if (error) {
      console.error("Supabase insert error:", error);
      toast.error("Failed to submit form.");
    } else {
      toast.success("Message sent successfully!");
      setForm({
        name: "",
        number: "",
        email: "",
        time: "",
        type: "",
        message: "",
      });
    }
  };

  return (
    <section className="w-full px-6 py-20 flex flex-col items-center bg-white text-[var(--text)] overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold text-center mb-6 leading-tight tracking-tight"
      >
        <span className="text-[var(--primary)]">READY FOR</span> LIFTOFF?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg sm:text-xl text-center max-w-4xl mb-12 text-gray-400"
      >
        Let’s talk about turning your vision into a scalable digital product.
        Fill out the form and we’ll get back to you within 24 hours.
      </motion.p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <Image
            src="/contact.jpg"
            alt="Contact"
            width={600}
            height={500}
            className="rounded-2xl w-full h-auto object-cover"
          />
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/5 p-8 backdrop-blur border border-white/10"
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-4 outline-none border-b-2 border-[var(--primary)] bg-white/10 placeholder:text-gray-400"
            required
          />
          <input
            name="number"
            type="tel"
            placeholder="Phone Number"
            value={form.number}
            onChange={handleChange}
            className="p-4 outline-none border-b-2 border-[var(--primary)] bg-white/10 placeholder:text-gray-400"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="col-span-1 sm:col-span-2 p-4 outline-none border-b-2 border-[var(--primary)] bg-white/10 placeholder:text-gray-400"
            required
          />
          <input
            name="time"
            type="text"
            placeholder="Preferred Time to Connect"
            value={form.time}
            onChange={handleChange}
            className="col-span-1 sm:col-span-2 p-4 outline-none border-b-2 border-[var(--primary)] bg-white/10 placeholder:text-gray-400"
          />
          <input
            name="type"
            type="text"
            placeholder="Type of Business"
            value={form.type}
            onChange={handleChange}
            className="col-span-1 sm:col-span-2 p-4 outline-none border-b-2 border-[var(--primary)] bg-white/10 placeholder:text-gray-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="col-span-1 sm:col-span-2 p-4 outline-none border-b-2 border-[var(--primary)] bg-white/10 placeholder:text-gray-400"
            required
          ></textarea>
          <button
            type="submit"
            className="col-span-1 cursor-pointer rounded-md sm:col-span-2 p-4 text-white font-bold bg-[var(--primary)] hover:opacity-90 transition duration-300"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
}
