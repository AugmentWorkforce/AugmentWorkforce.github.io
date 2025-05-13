export default function Contact() {
  return (
    <div>
      {/* Contact Section */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-purple-lsue mb-6 border-b-2 border-[#FDD023] inline-block text-center">
          Contact Us
        </h1>
        <div className="space-y-6 mt-6">
          {/* Contact Form Card */}
          <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border-1 border-neutral-800">
            <h2 className="text-xl font-semibold text-white mb-4">Send Us a Message</h2>
            <form action="mailto:contact@workforceaugmentationlab.org" method="POST" encType="text/plain">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-gray-800 text-foreground-secondary border-1 border-neutral-800 rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-800 text-foreground-secondary border-1 border-neutral-800 rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="bg-gray-800 text-foreground-secondary border-1 border-neutral-800 rounded p-2 w-full"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Card */}
          <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border-1 border-neutral-800">
            <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
            <p className="text-gray-400">
              Email: <a href="mailto:contact@workforceaugmentationlab.org" className="text-foreground-secondary hover:underline">contact@workforceaugmentationlab.org</a>
            </p>
            <p className="text-gray-400 mt-2">
              Address: Louisiana State University, Baton Rouge, LA 70803
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}