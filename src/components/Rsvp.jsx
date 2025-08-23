import { useState } from "react";
import { toast } from "sonner";

function Rsvp({ visibility, setCurrPage }) {
  const [form, setForm] = useState({
    name: "",
    coming: null, 
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.coming === null) {
      toast.error("Please select whether you will attend or not.");
      return;
    }

    const fetchPromise = fetch("https://wedding-rsvp-api-iota.vercel.app/api/rsvps", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then((res) => {
      if (!res.ok) throw new Error("Failed to submit RSVP");
      return res.json();
    });

    toast.promise(fetchPromise, {
      loading: "Submitting RSVP...",
      success: (data) => {
        // Reset form values once it succeeds
        setForm({ name: "", coming: null, phone: "" });
        setCurrPage("home");
        return `Thanks ${data?.name?.split(" ")[0] || ""}, your RSVP was submitted 🎉`;
      },
      error: "There was a problem submitting your RSVP",
    });

    try {
      const data = await fetchPromise;
      console.log("API response:", data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={`relative w-full ${visibility}`}>
      <img src="/background.png" alt="rsvp" className="w-full" />

      <form
        onSubmit={handleSubmit}
        className="absolute top-0 left-0 w-full h-full text-center items-center flex flex-col"
      >
        {/* Name Input */}
        <div className="absolute top-[30.5%] max-w-[45%] flex flex-col space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="........"
            className="py-1 px-2 border-2 border-[#839d4d] rounded-lg text-center text-xs font-cinzel text-[#dba6b1] font-bold"
            required
          />
        </div>

        {/* Attending Buttons */}
        <div className="absolute top-[50%] w-full max-w-[60%] flex flex-col space-y-4 items-center">
          <div className="flex flex-col space-y-3 max-w-[70%]">
            <button
              type="button"
              className={`text-[#821d30] text-[10px] font-cinzel font-semibold rounded-lg p-1 outline-solid ${
                form.coming === true && "bg-[#d5efab]"
              }`}
              onClick={() => setForm({ ...form, coming: true })}
            >
              Yes, wouldn’t miss it!
            </button>
            <button
              type="button"
              className={`text-[#821d30] text-[10px] font-cinzel font-semibold rounded-lg p-1 outline-solid ${
                form.coming === false && "bg-[#d5efab]"
              }`}
              onClick={() => setForm({ ...form, coming: false })}
            >
              No, cannot attend.
            </button>
          </div>
        </div>

        {/* Phone Input */}
        <div className="absolute top-[80%] w-full max-w-[56%] flex flex-col space-y-1 items-center">
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
          className="absolute top-[89%] w-full max-w-[57%] text-sm font-cinzel font-bold text-[#821d30] underline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Rsvp;
