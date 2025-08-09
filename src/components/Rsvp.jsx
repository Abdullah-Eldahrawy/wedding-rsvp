import { useState } from "react";

function Rsvp({visibility}) {
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
    <div className={`relative w-full ${visibility}`}>
      {/* Background */}
      <img src="/background.png" alt="rsvp" className="w-full" />

      {/* Form Overlay */}
      <form
        onSubmit={handleSubmit}
        className="absolute top-0 left-0 w-full h-full text-center items-center flex flex-col"
      >
        {/* <h2 className="absolute top-[15%] left-[25%] text-xs font-cinzel font-bold text-[#821d30] tracking-wide sm:text-2xl">
          A LOVE WORTH CELEBRATING <br /> AND WE WANT YOU THERE
        </h2> */}

        <div className="absolute top-[30%] max-w-[56%] flex flex-col space-y-4">
          {/* <label className="text-[#839d4d] text-xs font-cinzel font-semibold">Full Name:</label> */}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="........"
            className="py-0.5$ border-2 border-[#839d4d] rounded-lg text-center text-xs font-cinzel text-[#dba6b1] font-bold"
            required
          />
        </div>

        <div className="absolute top-[50%] w-full max-w-[60%] flex flex-col space-y-4 items-center">
          {/* <label className="text-[#839d4d] text-xs font-cinzel font-semibold">Will you join us?</label> */}
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

        <div className="absolute top-[80%] w-full max-w-[56%] flex flex-col space-y-1 items-center">
          {/* <label className="text-[#839d4d] text-xs font-cinzel font-semibold">Phone :</label> */}
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="........"
            className="w-full max-w-[70%] py-0.5 px-4 border-2 border-[#839d4d] rounded-lg text-center text-xs font-cinzel text-[#dba6b1] font-bold"
            required
          />
        </div>

        <button
          type="submit"
          className="absolute top-[89%] w-full max-w-[57%] text-sm font-cinzel font-bold text-[#821d30]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Rsvp;
