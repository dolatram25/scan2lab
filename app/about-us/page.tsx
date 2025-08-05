import About from "@/components/About";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <main className="w-[100vw] mx-auto ">
        <section className="text-center bg-white py-10">
          <h1 className="text-4xl md:text-4xl font-bold text-gray-800">Scan2Lab</h1>
          <p className="mt-4 text-[16px] text-gray-600 max-w-2xl mx-auto">
            Bridging physical samples with digital science. Fast, secure, and smart scanning solutions for modern labs.
          </p>
        </section>

        <div className="bg-blue-100 w-[100%] px-30 py-20 mb-20">
            <section className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
                <p className="text-gray-600 mb-6">
                  Scan2Lab is a digital platform that enables laboratories, researchers, and educators to scan, digitize, and manage physical specimens with unmatched precision. Our technology bridges the gap between physical reality and digital science workflows.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  To simplify and accelerate the process of converting physical samples into shareable, analyzable digital data — without compromising accuracy or security.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Scan2Lab?</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>High-resolution scanning for biological, chemical, and industrial samples</li>
                  <li>Cloud storage and access from any device</li>
                  <li>Secure, scalable infrastructure with research-specific workflows</li>
                  <li>Integrations with LIMS, ELNs, and collaboration tools</li>
                </ul>
              </div>

              <div className="bg-gray-100 rounded-xl shadow-md p-4">
                <Image
                  src="/images/ultrasound-imaging.jpg"
                  alt="Scan2Lab example scan"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
                <p className="mt-3 text-sm text-gray-500 text-center">
                  Digitized sample view from the Scan2Lab system
                </p>
              </div>
            </section>
        </div>

        
      </main>

      <About/>

    </div>
    
  );
}
