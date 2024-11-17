export default function PricingTicket() {
  return (
    <section>
      <div className=" bg-[url(/ticket.png)] bg-cover bg-center p-20 flex items-center justify-between">
        <div className="space-y-4">
          <h1 className="text-[#3A3A3F] font-bold text-2xl md:text-5xl">
            Confirm Your Ticket
          </h1>
          <p className="text-body text-[#585962] max-w-[550px]">
            Don’t miss out on this unique opportunity to learn from and connect
            with SaaS experts from across the globe.
          </p>
        </div>
        <div>
          <button className="md:mt-8 flex justify-center items-center gap-2 border border-[#FFDA24] py-2 px-5 rounded-full bg-[#fff] text-sm md:text-base text-[#0A0A0B] font-semibold">
            Buy Tickets Now
          </button>
        </div>
      </div>
    </section>
  );
}
