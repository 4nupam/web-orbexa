import Budget from "@/Components/Budget";
import Hero from "@/Components/Hero";
import Nav from "@/Components/Nav";
import Desctiption from "@/Components/Description";
import Process from "@/Components/Process";
import Projects from "@/Components/Projects";
import Different from "@/Components/Different";
import Faq from "@/Components/Faq";
import ContactForm from "@/Components/ContactForm"
import Footer from "@/Components/Footer"
import Tech from "@/Components/TechStacks"

export default function Page() {
  return (
    <>
      <Nav />

      <main className="bg-[var(--background)] flex flex-col gap-3">
        {/* Hero Section */}
        <section>
          <Hero />
        </section>

        {/* Desctiptions Section */}
        <section>
          <Desctiption />
        </section>
        <section>
          <Tech/>
        </section>

        {/* Budget Section */}
        <section>
          <Projects/>
        </section>
        <section>
          <Budget />
        </section>
        <section>
          <Process/>
        </section>

        <section>
          <Different />
        </section>

        <section>
          <Faq/>
        </section>

        <section>
          <ContactForm/>
        </section>

        <Footer/>
      </main>
    </>
  );
}
