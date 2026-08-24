import { AiFillGithub } from 'react-icons/ai'

import { ContactForm } from './components/ContactForm'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { OrbitalPortfolioHero } from './components/OrbitalPortfolioHero'
import { ProjectVideo } from './components/ProjectVideo'
import { SiteFooter } from './components/SiteFooter'
import { OrbitalHeroSection } from '@/components/ui/orbital-hero-section'

const projects = [
  {
    title: 'PerfectPitch',
    video: '/leetdemo.mp4',
    href: 'https://github.com/SatyaShodhaka/perfectpitch',
    blurb:
      'AI-powered platform designed to provide tailored feedback, script assistance, and a performance score for personalized interview preparation.',
  },
  {
    title: 'LeetBank',
    video: '/leetbank.mp4',
    href: 'https://github.com/rahmanMian/LeetBank',
    blurb:
      'Web-based platform designed to help you store, annotate and manage your LeetCode questions efficiently.',
  },
  {
    title: 'Uber Data Pipeline',
    video: '/Uber.mp4',
    href: 'https://github.com/chaudharycoding/Uber-Data-Engineering-Pipeline',
    blurb:
      'A scalable pipeline using Python, GCP, Mage.ai, and BigQuery to process NYC Uber trip data, automating ETL and delivering insights via Looker Studio.',
  },
  {
    title: 'PomoPay',
    video: '/pomopay.mp4',
    href: 'https://github.com/rahmanMian/pomopay',
    blurb:
      'A Pomodoro-based productivity app that sets weekly goals, links payments to accountability, and boosts focus with secure Stripe integration.',
  },
  {
    title: 'Sonar Data Classification',
    video: '/sonar.mp4',
    href: 'https://github.com/chaudharycoding/Dropout-Regularization-',
    blurb:
      'Developed a sonar signal classification model to distinguish between "Rock" and "Mine" signals using XGBoost.',
  },
  {
    title: 'Olympic Medal Predictor',
    video: '/olympic.mp4',
    href: 'https://github.com/chaudharycoding/-Predictive-Analytics-for-Olympic-Medal-Counts-using-Machine-Learning-',
    blurb:
      'Predictive analytics project designed to forecast Olympic medal counts using historical data and machine learning models.',
  },
] as const

const h2 =
  'font-display text-white font-semibold tracking-tight text-[30px] xs:text-[40px] sm:text-[50px] md:text-[60px]'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <OrbitalHeroSection
          className="h-full w-full"
          interactive={false}
          scrim="none"
          focus={[0.78, 0.42]}
          lead={0.1}
          viewRadius={3.2}
          glow={0.9}
          starCount={1400}
        />
      </div>

      <div className="relative z-10">
        <OrbitalPortfolioHero />

        <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-16 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-16 sm:pl-[max(1.25rem,env(safe-area-inset-left))] sm:pr-[max(1.25rem,env(safe-area-inset-right))] md:gap-20 lg:pl-[max(1.5rem,env(safe-area-inset-left))] lg:pr-[max(1.5rem,env(safe-area-inset-right))]">
          <ExperienceTimeline />

          <section id="Projects">
            <h2 className={h2}>Projects</h2>
            <p className="mt-3 max-w-3xl text-[17px] leading-[30px] text-white/80">
              Each project has a link to my GitHub code. Feel free to look at the quick video demos or
              check out the code.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map(({ title, video, href, blurb }) => (
                <article
                  key={title}
                  className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md transition-[border-color,transform,background-color] duration-200 hover:border-white/35 hover:bg-white/[0.09] motion-safe:hover:-translate-y-0.5"
                >
                  <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
                    <ProjectVideo src={video} />
                    <div className="absolute inset-0 m-3 flex justify-end">
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 w-11 min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-full bg-black/80 transition-colors duration-200 hover:bg-black focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-safe:active:scale-95"
                        aria-label={`${title} on GitHub`}
                      >
                        <AiFillGithub className="h-6 w-6 text-white" aria-hidden />
                      </a>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h3 className="font-display text-[24px] font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-white/75">{blurb}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="Contact" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className={h2}>
              Let&apos;s talk
            </h2>
            <p className="mt-3 max-w-3xl text-[17px] leading-[30px] text-white/80">
              Have a role, project, or idea in mind? Send a note — I usually reply within a day or
              two.
            </p>
            <ContactForm />
          </section>

          <SiteFooter />
        </div>
      </div>
    </main>
  )
}
