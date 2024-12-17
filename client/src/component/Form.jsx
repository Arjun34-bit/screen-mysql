import React from "react";

const Form = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Pro Form Layout</h1>

        <div className="flex space-x-8">
          {/* Contact Form */}
          <div className="flex-1 bg-white p-6 rounded shadow">
            <span className="text-xl font-semibold mb-4">Contact Form 2</span>
            <form>
              <div className="flex space-x-4 mb-4">
                <input
                  className="border p-2 rounded w-1/2"
                  placeholder="First name"
                />
                <input
                  className="border p-2 rounded w-1/2"
                  placeholder="Last name"
                />
              </div>
              <input
                className="border w-full p-2 mb-4 rounded"
                placeholder="Email"
              />
              <input
                className="border w-full p-2 mb-4 rounded"
                placeholder="Phone"
              />

              <div className="mb-4">
                <label>Select Option:</label>
                <div className="flex gap-4 mt-2">
                  <label>
                    <input type="radio" name="option" /> Graphics Design
                  </label>
                  <label>
                    <input type="radio" name="option" /> Web Development
                  </label>
                  <label>
                    <input type="radio" name="option" /> Logo Design
                  </label>
                </div>
              </div>

              <textarea
                className="border w-full p-2 mb-4 rounded"
                placeholder="Message"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
                Send Message
              </button>
            </form>
          </div>

          {/* Survey Form */}
          <div className="flex-1 bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Survey Form</h2>
            <form>
              <input
                className="border w-full p-2 mb-4 rounded"
                placeholder="Name"
              />
              <input
                className="border w-full p-2 mb-4 rounded"
                placeholder="Email"
              />
              <input
                className="border w-full p-2 mb-4 rounded"
                placeholder="Age"
              />

              <div className="mb-4">
                <label>Which option best describes you?</label>
                <select className="border w-full p-2 mt-2 rounded">
                  <option>Select your subject</option>
                  <option>Student</option>
                  <option>Professional</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label>Would you recommend our site?</label>
                <div className="flex gap-4 mt-2">
                  <label>
                    <input type="radio" name="recommend" /> Yes
                  </label>
                  <label>
                    <input type="radio" name="recommend" /> No
                  </label>
                  <label>
                    <input type="radio" name="recommend" /> Maybe
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label>Which languages & frameworks you know?</label>
                <div className="flex gap-4 mt-2">
                  <label>
                    <input type="checkbox" /> C
                  </label>
                  <label>
                    <input type="checkbox" /> JavaScript
                  </label>
                  <label>
                    <input type="checkbox" /> React
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Form;
