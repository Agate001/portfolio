"use client";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { cn } from "@/lib/utils";
import { Button } from "@base-ui/react/button";
import { div } from "motion/react-client";
import { useTheme } from "next-themes";
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
/>;
const Home = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex flex-col">
      <StarsBackground
        starColor={resolvedTheme === "dark" ? "#FFF" : "#FFF"}
        className={cn(
          " z-0 min-h-screen inset-0 dark:bg-[radial-gradient(ellipse_at_bottom,_#f5f5f5_0%,_#fff_100%)]",
        )}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <h1 className="text-white text-5xl col-span-2 text-center mt-30 lg:row-1">
            Carlos Lopez
          </h1>
          <div className="ps-5 flex min-w-full row-3 lg:row-2 col-span-2 justify-center">
            <p className="text-white lg:text-2xl sm:max-w-xl max-w-3xs  justify-center mt-10">
              I'm a full-stack developer who enjoys building thoughtful web
              experiences from the ground up. I work with technologies like C#,
              JavaScript, TypeScript, and Next.js to create applications that
              are both functional and intuitive. Whether I'm designing a clean
              interface with Tailwind and CSS or developing the logic behind it,
              I enjoy the process of turning ideas into something real.
            </p>
          </div>
          <div className="lg:row-3 row-4 flex min-w-full col-span-2 justify-center mt-10">
            <h1 className="text-3xl text-white">Skills</h1>
          </div>

          <div className="flex min-w-full row-1 lg:row-span-4 lg:col-start-3 col-span-2 items-center justify-center">
            <img
              className="pb-4 rounded max-h-100"
              src="/assets/pfp.png"
              alt=""
            />
          </div>

          <div className="lg:row-4 grid grid-cols-4 col-span-2 gap-4 mt-6 text-5xl pb-10">
            <div className="col-span-4 md:col-span-2 flex justify-center gap-8">
            <img
              className="sm:max-w-15"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
            />
            <img
              className="sm:max-w-15"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            />
            <img
              className="sm:max-w-15"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            />
            </div>
            <div className="col-span-4 md:col-span-2 md:row-1 flex justify-center gap-8">
            <img
              className="sm:max-w-15"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            />
            <img
              className="sm:max-w-15"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            />
            <img
              className="sm:max-w-15"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
            />
            </div>
            <div className="md:col-span-2 col-span-4 flex justify-center gap-8">
            <img
              className="sm:max-w-15"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            />
            <img
              className="sm:max-w-15"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
            />
            <img
              className="sm:max-w-15"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            />
            </div>
            <div className="md:col-span-2 col-span-4 flex justify-center gap-8">
            <img
              className="sm:max-w-15"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
            />
            <img
              className="sm:max-w-15"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
            />
            <img
              className="sm:max-w-15"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
            />
            </div>
            
          </div>
        </div>
      </StarsBackground>

      <section className="w-full bg-gray-900 py-20 px-6">
        <div className="mx-autoxl">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            Projects
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-blue-900 p-6 shadow-lg transition hover:scale-105">
              <h3 className="mb-3 text-center text-2xl font-semibold text-white">
                All For One project
              </h3>
              <div className="flex justify-center">
                <img
                  className="pb-4 rounded max-h-40"
                  src="/assets/afo.png"
                  alt=""
                />
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href="https://allforonerebuild-one.vercel.app/"
                  className="rounded-lg bg-white px-4 py-2 font-semibold text-blue-900 transition hover:bg-blue-200"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Agate001/PokeDex.git"
                  className="rounded-lg border border-white px-4 py-2 text-white transition hover:bg-white hover:text-blue-900"
                >
                  Code
                </a>
              </div>
            </div>

            <div className="rounded-xl bg-blue-900 p-6 shadow-lg transition hover:scale-105">
              <h3 className="mb-3 text-center text-2xl font-semibold text-white">
                Project Two
              </h3>
              <div className="flex justify-center">
                <img
                  className="pb-4 rounded max-h-40"
                  src="/assets/poke.png"
                  alt=""
                />
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href="https://thankful-island-050c19c1e.1.azurestaticapps.net/"
                  className="rounded-lg bg-white px-4 py-2 font-semibold text-blue-900 transition hover:bg-blue-200"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Agate001/PokeDex.git"
                  className="rounded-lg border border-white px-4 py-2 text-white transition hover:bg-white hover:text-blue-900"
                >
                  Code
                </a>
              </div>
            </div>

            <div className="rounded-xl bg-blue-900 p-6 shadow-lg transition hover:scale-105">
              <h3 className="mb-3 text-center text-2xl font-semibold text-white">
                Project Three
              </h3>
              <div className="flex justify-center">
                <img
                  className="pb-4 rounded max-h-40"
                  src="/assets/weathertracker.png"
                  alt=""
                />
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href="https://weathertracker-theta.vercel.app/"
                  className="rounded-lg bg-white px-4 py-2 font-semibold text-blue-900 transition hover:bg-blue-200"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Agate001/LopezCP-7.git"
                  className="rounded-lg border border-white px-4 py-2 text-white transition hover:bg-white hover:text-blue-900"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className=" bg-black min-h-screen flex items-center justify-center px-6">
        <section className="w-full max-w-xl  text-white rounded-xl shadow-lg p-8 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-center">Contact</h1>

          {/* Phone */}
          <div className="flex items-center justify-between border-b pb-3">
            <span className="font-medium">Phone</span>
            <p>(209) 598-0651</p>
          </div>

          {/* Email */}
          <div className="flex items-center justify-between border-b pb-3">
            <span className="font-medium">Email</span>
            <p>carlos.lopez5639@gmail.com</p>
          </div>

          {/* Github */}
          <div className="flex items-center justify-between border-b pb-3">
            <span className="font-medium">Github</span>

            <a
              href="https://github.com/Agate001"
              className="flex items-center gap-2 hover:opacity-80 bg-gray-500 rounded"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                width={24}
              />
              Agate001
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-between border-b pb-3">
            <span className="font-medium">LinkedIn</span>

            <a
              href="https://www.linkedin.com/in/carlos-lopez-mazoraqui-18130b3b7/"
              className="flex items-center gap-2 hover:opacity-80 "
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                width={40}
              />
            </a>
          </div>

          {/* Resume */}
          <div className="flex items-center justify-between">
            <span className="font-medium">Resume</span>

            <a
              href="/assets/CarlosLopezResume.pdf"
              download="CarlosLopezResume"
              className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-zinc-800 transition"
            >
              Download
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
