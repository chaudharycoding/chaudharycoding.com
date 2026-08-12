import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import { ExperienceTimeline } from './components/ExperienceTimeline'
import { HeaderNav } from './components/HeaderNav'
import { ProjectVideo } from './components/ProjectVideo'

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-[#003049]">
        <div
          className="mx-auto flex w-full max-w-[90rem] flex-col gap-16 pb-[max(4rem,env(safe-area-inset-bottom))] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(3rem,env(safe-area-inset-top))] sm:pl-[max(1.25rem,env(safe-area-inset-left))] sm:pr-[max(1.25rem,env(safe-area-inset-right))] md:gap-20 md:pb-[max(5rem,env(safe-area-inset-bottom))] md:pt-[max(4rem,env(safe-area-inset-top))] lg:pl-[max(1.5rem,env(safe-area-inset-left))] lg:pr-[max(1.5rem,env(safe-area-inset-right))]"
        >

        {/* ── Hero / Nav ── */}
        <section id="About">
          <HeaderNav title="Muhammad Zaeem Chaudhary" />
          <hr className="h-0.5 border-t-0 bg-gray-300 opacity-100" />

          <div className="mt-8 space-y-5">
            <p className="text-base leading-relaxed text-white md:text-lg md:leading-relaxed">
              Hello, my name is Zaeem. I&apos;m a Computer Science major at the{' '}
              <strong className="font-bold">University of Massachusetts Amherst</strong>, with a focus on
              artificial intelligence and security.
            </p>
            <p className="text-base leading-relaxed text-white md:text-lg md:leading-relaxed">
              This winter break, I interned at{' '}
              <strong className="font-bold">Microsoft</strong> on the Health and Life Sciences team,
              building an AI assistant that helps radiologists speed up and simplify parts of their
              reporting workflow. Last summer, I interned at{' '}
              <strong className="font-bold">Marriott International</strong>, where I built a chatbot
              that lets people ask data questions in plain English and get clean, SQL-backed answers.
            </p>
            <p className="text-base leading-relaxed text-white md:text-lg md:leading-relaxed">
              On campus, I have done research at <strong className="font-bold">CIIR</strong> on making
              LLMs more personalized and more useful over time.
            </p>
            <p className="text-base leading-relaxed text-white md:text-lg md:leading-relaxed">
              When I&apos;m not coding, I&apos;m probably watching football, cricket, tennis, or Formula 1
              and pretending it&apos;s data analytics!!
            </p>
          </div>
        </section>

        {/* ── Experience (client component — VerticalTimeline needs hooks) ── */}
        <ExperienceTimeline />

        {/* ── Projects ── */}
        <section id="Projects">
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects</h2>
          <div className="w-full flex">
            <p className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]">
              Each project has a link to my GitHub code. Feel free to look at the quick video demos or check out my code.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="min-w-0 rounded-2xl bg-[#415A77] p-5">
              <div className="relative w-full h-[240px]">
                <ProjectVideo src="/leetdemo.mp4" />
                <div className="absolute inset-0 flex justify-end m-3">
                  <a
                    href="https://github.com/SatyaShodhaka/perfectpitch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-black/80 transition-colors duration-200 hover:bg-black motion-safe:active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#415A77]"
                    aria-label="PerfectPitch on GitHub"
                  >
                    <AiFillGithub className="h-6 w-6 text-white" aria-hidden />
                  </a>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">PerfectPitch</h3>
                <p className="mt-2 text-gray-200 text-[14px]">
                  AI-powered platform designed to provide tailored feedback, script assistance, and a performance score for personalized interview preparation.
                </p>
              </div>
            </div>

            <div className="min-w-0 rounded-2xl bg-[#415A77] p-5">
              <div className="relative w-full h-[240px]">
                <ProjectVideo src="/leetbank.mp4" />
                <div className="absolute inset-0 flex justify-end m-3">
                  <a
                    href="https://github.com/rahmanMian/LeetBank"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-black/80 transition-colors duration-200 hover:bg-black motion-safe:active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#415A77]"
                    aria-label="LeetBank on GitHub"
                  >
                    <AiFillGithub className="h-6 w-6 text-white" aria-hidden />
                  </a>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">LeetBank</h3>
                <p className="mt-2 text-gray-200 text-[14px]">
                  Web-based platform designed to help you store, annotate and manage your LeetCode questions efficiently.
                </p>
              </div>
            </div>

            <div className="min-w-0 rounded-2xl bg-[#415A77] p-5">
              <div className="relative w-full h-[240px]">
                <ProjectVideo src="/Uber.mp4" />
                <div className="absolute inset-0 flex justify-end m-3">
                  <a
                    href="https://github.com/chaudharycoding/Uber-Data-Engineering-Pipeline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-black/80 transition-colors duration-200 hover:bg-black motion-safe:active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#415A77]"
                    aria-label="Uber Data Pipeline on GitHub"
                  >
                    <AiFillGithub className="h-6 w-6 text-white" aria-hidden />
                  </a>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">Uber Data Pipeline</h3>
                <p className="mt-2 text-gray-200 text-[14px]">
                  A scalable pipeline using Python, GCP, Mage.ai, and BigQuery to process NYC Uber trip data, automating ETL and delivering insights via Looker Studio.
                </p>
              </div>
            </div>

            <div className="min-w-0 rounded-2xl bg-[#415A77] p-5">
              <div className="relative w-full h-[240px]">
                <ProjectVideo src="/pomopay.mp4" />
                <div className="absolute inset-0 flex justify-end m-3">
                  <a
                    href="https://github.com/rahmanMian/pomopay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-black/80 transition-colors duration-200 hover:bg-black motion-safe:active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#415A77]"
                    aria-label="PomoPay on GitHub"
                  >
                    <AiFillGithub className="h-6 w-6 text-white" aria-hidden />
                  </a>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">PomoPay</h3>
                <p className="mt-2 text-gray-200 text-[14px]">
                  A Pomodoro-based productivity app that sets weekly goals, links payments to accountability, and boosts focus with secure Stripe integration.
                </p>
              </div>
            </div>

            <div className="min-w-0 rounded-2xl bg-[#415A77] p-5">
              <div className="relative w-full h-[240px]">
                <ProjectVideo src="/sonar.mp4" />
                <div className="absolute inset-0 flex justify-end m-3">
                  <a
                    href="https://github.com/chaudharycoding/Dropout-Regularization-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-black/80 transition-colors duration-200 hover:bg-black motion-safe:active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#415A77]"
                    aria-label="Sonar Data Classification on GitHub"
                  >
                    <AiFillGithub className="h-6 w-6 text-white" aria-hidden />
                  </a>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">Sonar Data Classification</h3>
                <p className="mt-2 text-gray-200 text-[14px]">
                  Developed a sonar signal classification model to distinguish between &quot;Rock&quot; and &quot;Mine&quot; signals using XGBoost.
                </p>
              </div>
            </div>

            <div className="min-w-0 rounded-2xl bg-[#415A77] p-5">
              <div className="relative w-full h-[240px]">
                <ProjectVideo src="/olympic.mp4" />
                <div className="absolute inset-0 flex justify-end m-3">
                  <a
                    href="https://github.com/chaudharycoding/-Predictive-Analytics-for-Olympic-Medal-Counts-using-Machine-Learning-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-black/80 transition-colors duration-200 hover:bg-black motion-safe:active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#415A77]"
                    aria-label="Olympic Medal Predictor on GitHub"
                  >
                    <AiFillGithub className="h-6 w-6 text-white" aria-hidden />
                  </a>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">Olympic Medal Predictor</h3>
                <p className="mt-2 text-gray-200 text-[14px]">
                  Predictive analytics project designed to forecast Olympic medal counts using historical data and machine learning models.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── Contact ── */}
        <section id="Contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact</h2>
          <hr className="mt-8 h-0.5 border-t-0 bg-gray-300 opacity-100" />
          <div className="flex flex-wrap items-center justify-center gap-8 py-8 text-5xl text-gray-600 sm:gap-16">
            <a
              href="mailto:muhammadzaee@umass.edu"
              className="inline-flex min-h-[44px] items-center text-base leading-8 text-white underline-offset-4 transition-colors duration-200 hover:underline active:opacity-80"
            >
              muhammadzaee@umass.edu
            </a>
            <a
              href="https://github.com/chaudharycoding"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zaeem Chaudhary on GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded text-gray-400 outline-none transition-colors duration-200 hover:text-white motion-safe:active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#003049]"
            >
              <AiFillGithub className="h-10 w-10" aria-hidden />
            </a>
            <a
              href="https://www.linkedin.com/in/zaeem-chaudhary/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zaeem Chaudhary on LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded text-gray-400 outline-none transition-colors duration-200 hover:text-white motion-safe:active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#003049]"
            >
              <AiFillLinkedin className="h-10 w-10" aria-hidden />
            </a>
          </div>
        </section>

        </div>
      </main>
    </div>
  )
}
