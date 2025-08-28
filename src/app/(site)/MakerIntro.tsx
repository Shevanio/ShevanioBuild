export default function MakerIntro() {
  return (
    <div className="bg-[#212121] mb-8 text-gray-300 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative w-[200px] h-[200px] flex-shrink-0">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg flex flex-col items-center justify-center p-6 text-center"
              style={{ backgroundImage: "url('/idee8.png')" }}
            ></div>
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-white">
              About David Luna Camuñez 🚀
            </h1>
            <p className="text-base">
              I'm a 26-year-old Systems Administrator and Monitoring Technician based 
              in Barcelona, Spain. I'm passionate about cybersecurity, Machine Learning, 
              and AI, with a focus on automating processes using bash and Python.
            </p>
            <p className="text-base">
              Currently working at{" "}
              <strong className="text-white">Abast</strong> as a Monitoring & System Administrator, 
              I have extensive experience in network administration, system monitoring, 
              and cybersecurity implementations.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-base">My core expertise includes:</p>

          <ol className="space-y-4 list-decimal list-inside">
            <li className="text-base">
              <span className="font-semibold text-white">Programming Languages</span>—
              TypeScript, JavaScript, Java, Python, and Bash scripting.
            </li>
            <li className="text-base">
              <span className="font-semibold text-white">Frameworks & Tools</span>
              —React, Node.js, Git, Jenkins, Selenium, Grafana, InfluxDB, and Kibana.
            </li>
            <li className="text-base">
              <span className="font-semibold text-white">
                Cybersecurity & Systems
              </span>
              —Network administration, system monitoring, and security implementations.
            </li>
          </ol>

          <p className="text-base">
            I hold a{" "}
            <span className="font-semibold text-white">
              Master's in Cybersecurity from UCJC
            </span>
            {" "}and various certifications in Linux, ElasticSearch, React with Redux, 
            and Ethical Hacking. Check out my projects and experience below! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
