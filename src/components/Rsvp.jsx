import { useState } from "react";

function Rsvp() {
  const [form, setForm] = useState({
    name: "",
    attending: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can later connect this to a backend
    alert(`Submitted: ${JSON.stringify(form)}`);
  };

  return (
    <div className="relative w-full">
      {/* Background */}
      <img src="/background.png" alt="rsvp" className="w-full" />

      {/* Form Overlay */}
      <form
        onSubmit={handleSubmit}
        className="absolute top-0 left-0 w-full h-full text-center"
      >
        <h2 className="absolute top-[15%] left-[25%] text-xs font-cinzel font-bold text-[#821d30] tracking-wide sm:text-2xl">
          A Love Worth Celebrating <br /> And We Want You There
        </h2>

        <div className="absolute top-[26%] left-[22%] w-full max-w-[56%] flex flex-col space-y-4">
          <label className="text-[#839d4d] text-xs font-cinzel font-semibold">Full Name:</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full px-4 py-2 border-2 border-[#839d4d] rounded-lg text-center text-xs font-cinzel text-[#dba6b1] font-bold"
            required
          />
        </div>

        <div className="absolute top-[45%] left-[20%] w-full max-w-[60%] flex flex-col space-y-4 items-center">
          <label className="text-[#839d4d] text-xs font-cinzel font-semibold">Will you join us?</label>
          <div className="flex flex-col space-y-1 max-w-[70%]">
            <button
              type="button"
              className={`text-[#821d30] text-xs font-cinzel font-semibold rounded-md p-1 ${
                form.attending === "yes"
                  && "bg-[#d5efab]"
              }`}
              onClick={() => setForm({ ...form, attending: "yes" })}
            >
              Yes, wouldn’t miss it!
            </button>
            <button
              type="button"
              className={`text-[#821d30] text-xs font-cinzel font-semibold rounded-md p-1 ${
                form.attending === "no"
                  && "bg-[#d5efab]"
              }`}
              onClick={() => setForm({ ...form, attending: "no" })}
            >
              No, cannot attend.
            </button>
          </div>
        </div>

        <div className="absolute top-[76%] left-[22%] w-full max-w-[56%] flex flex-col space-y-1 items-center">
          <label className="text-[#839d4d] text-xs font-cinzel font-semibold">Phone Number:</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="0100260.... "
            className="w-full max-w-[70%] py-0.5 px-4 border-2 border-[#839d4d] rounded-lg text-center text-xs font-cinzel text-[#dba6b1] font-bold"
            required
          />
        </div>

        <button
          type="submit"
          className="absolute top-[89%] left-[21%] w-full max-w-[57%] text-sm font-cinzel font-bold text-[#821d30]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Rsvp;
