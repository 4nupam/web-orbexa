export default function Process() {
  const processData = [
    {
      num: "01",
      label: "🔍 Vision & Strategy Sprint",
      desc:
        "We begin with a high-impact discovery session to crystalize your vision, define success metrics, and architect a razor-sharp MVP roadmap.",
    },
    {
      num: "02",
      label: "🎨 Design Excellence Sprint",
      desc:
        "Our UX/UI experts craft elegant, conversion-optimized interfaces that align perfectly with your brand and user expectations.",
    },
    {
      num: "03",
      label: "💻 Precision Development Sprint",
      desc:
        "Using cutting-edge technologies and scalable architecture, we engineer your product for performance, reliability, and growth.",
    },
    {
      num: "04",
      label: "🚀 Launch, Support & Scale",
      desc:
        "We don’t just ship and vanish. We ensure a seamless launch, provide proactive support, and set you up to scale confidently.",
    },
  ];

  return (
    <section className="flex flex-col w-full bg-[var(--text)] px-6 py-16 gap-6 items-center overflow-hidden">
      <h2 className="text-white font-extrabold text-4xl md:text-8xl">
        HOW WE SHIP FAST
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {processData.map((step, idx) => (
          <div
            key={step.num}
            className="bg-[var(--background)] p-6 rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
            style={{
              animationDelay: `${idx * 0.15}s`,
              animationFillMode: "both",
            }}
          >
            <div className="text-[var(--primary)] text-4xl shadow-orange-600 font-extrabold drop-shadow-2xl mb-2">
              {step.num}
            </div>
            <div className="text-xl font-bold text-[var(--text)] mb-2">
              {step.label}
            </div>
            <p className="text-sm text-[var(--text)] opacity-80">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
