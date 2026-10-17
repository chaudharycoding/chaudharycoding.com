'use client'

import { animate, useInView } from 'framer-motion'
import { useLayoutEffect, useMemo, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const card = {
  background: 'rgba(255,255,255,0.06)',
  color: '#fff',
  boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
  border: '1px solid rgba(255,255,255,0.16)',
  backdropFilter: 'blur(10px)',
}
const arrow = { borderRight: '7px solid rgba(255,255,255,0.08)' }
const iconStyle = { background: 'rgb(255, 255, 255)', color: '#fff' }

function Role({
  id,
  when,
  where,
  logo,
  logoAlt,
  logoClass,
  pad = false,
  title,
  org,
  points,
}: {
  id: string
  when: string
  where: string
  logo: string
  logoAlt: string
  logoClass: string
  pad?: boolean
  title: string
  org: string
  points: string[]
}) {
  const [node, setNode] = useState<HTMLElement | null>(null)
  const ref = useMemo(() => ({ current: node }), [node])
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' })

  useLayoutEffect(() => {
    const el = document.getElementById(id)
    if (!el) return
    setNode(el)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(36px) scale(0.98)'
  }, [id])

  useLayoutEffect(() => {
    if (!node || !inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const controls = animate(
      node,
      { opacity: 1, y: 0, scale: 1 },
      { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
    )
    return () => controls.stop()
  }, [node, inView])

  return (
    <VerticalTimelineElement
      id={id}
      className="vertical-timeline-element--work"
      contentStyle={card}
      contentArrowStyle={arrow}
      date={(
        <>
          <span className="block">{when}</span>
          <span className="block text-sm mt-1 font-normal opacity-90">{where}</span>
        </>
      ) as unknown as string}
      iconStyle={iconStyle}
      icon={
        <div className={`flex justify-center items-center w-full h-full ${pad ? 'p-1' : ''}`}>
          <img src={logo} alt={logoAlt} className={`${logoClass} object-contain`} />
        </div>
      }
      visible
    >
      <div>
        <h3 className="font-display text-white text-[24px] font-semibold">{title}</h3>
        <p className="text-white/80 text-[16px] font-semibold" style={{ margin: 0 }}>{org}</p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point) => (
          <li key={point} className="text-white/80 text-[14px] leading-relaxed tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

export function ExperienceTimeline() {
  return (
    <section id="Experience">
      <h2 className="font-display text-[30px] font-semibold tracking-tight text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
        Experience
      </h2>
      <VerticalTimeline animate={false}>

        <Role
          id="role-marriott-ai"
          when="June 2026 - Present"
          where="Bethesda, MD"
          logo="/marriott.png"
          logoAlt="Marriott International logo"
          logoClass="w-[80%] h-[80%]"
          pad
          title="AI Engineer"
          org="Marriott International"
          points={[
            'Built agentic search over multi-source unstructured data, serving 200K+ users with governance, cost controls, and AI safeguards.',
            'Owned an internal AI tool end-to-end, aligning business requirements with engineering execution to drive platform integration.',
            "Partnered with vendors to introduce scalable agentic systems to Marriott's infrastructure, transforming hospitality data use cases.",
          ]}
        />
        <Role
          id="role-microsoft"
          when="Jan 2026 - Feb 2026"
          where="Cambridge, MA"
          logo="/Microsoft.svg"
          logoAlt="Microsoft logo"
          logoClass="w-[85%] h-[85%]"
          pad
          title="Software Engineer Intern"
          org="Microsoft"
          points={[
            'Worked with the Health and Life Sciences team to build a cloud-based assistant that automates diagnostic radiology workflows.',
            'Built an AI radiology assistant using FastAPI, GPT-5.1, and spaCy, automating finding extraction and reducing report time by 80%.',
            'Engineered DuckDB vector search mapping findings to 2,150+ codes, eliminating manual lookup for medical documentation.',
          ]}
        />
        <Role
          id="role-marriott-intern"
          when="Jun 2025 - Aug 2025"
          where="Bethesda, MD"
          logo="/marriott.png"
          logoAlt="Marriott International logo"
          logoClass="w-[80%] h-[80%]"
          pad
          title="Software Engineer Intern"
          org="Marriott International"
          points={[
            'Built an internal chatbot in Microsoft Power Apps that converts natural language to SQL via GPT-4, built on a Power BI semantic layer.',
            'Executed auto-generated SQL across 7 domains in Snowflake with RBAC and audit logs, returning results with sub-15-second latency.',
            'Delivered actionable, SQL-transparent data insights with 86% accuracy, logging lineage and metadata in Azure for auditability.',
          ]}
        />
        <Role
          id="role-snap"
          when="March 2024 - April 2024"
          where="Remote, CA"
          logo="/snapchat.png"
          logoAlt="Snap Inc. logo"
          logoClass="w-[80%] h-[80%]"
          title="Software Development Extern"
          org="Snap Inc."
          points={[
            "Designed a soccer-themed AR lens incorporating Snap's Lens Studio and 3D modeling, certified by Snap Inc.'s Head of Entertainment.",
            'Launched a Snapchat lens inspired by Reebok and soccer, compatible with iOS and Android, gathering views from 100+ countries.',
            'Conducted data-driven market research in sports and technology using Tableau and MySQL, enhancing data visualization by 30%.',
          ]}
        />
        <Role
          id="role-neftwerk"
          when="May 2024 - July 2024"
          where="Remote, PA"
          logo="/result.png"
          logoAlt="Neftwerk logo"
          logoClass="w-[90%] h-[90%]"
          title="Data Science Intern"
          org="Neftwerk"
          points={[
            'Designed and sorted data from CSVs to Attio dashboards to improve client information accuracy and operational efficiency by 60%.',
            "Leveraged Attio's REST API to implement filtering and pagination, optimizing data retrieval by 30% and enhancing user experience.",
            'Engineered Python automation for Excel-to-CSV pipeline, leveraging Git version control to optimize Attio dashboard data processing.',
          ]}
        />
        <Role
          id="role-ciir"
          when="Sep 2024 – Present"
          where="Amherst, MA"
          logo="/lab.png"
          logoAlt="Center for Intelligent Information Retrieval logo"
          logoClass="w-[90%] h-[90%]"
          title="AI and LLM Research Intern"
          org="Center for Intelligent Information Retrieval"
          points={[
            'Built an LLM personalization platform using AWS and vLLM; rotated OpenRouter models like Claude 3.5 to analyze user preferences.',
            'Captured 100 preferences per user in DynamoDB and streamed them to a DPO pipeline, improving the personalization benchmark.',
          ]}
        />
        <Role
          id="role-umass"
          when="June 2024 - Aug 2024"
          where="Amherst, MA"
          logo="/UMass.png"
          logoAlt="University of Massachusetts Amherst logo"
          logoClass="w-[80%] h-[80%]"
          title="ML Research Intern"
          org="University of Massachusetts Amherst"
          points={[
            'Optimized a CNN for ASL recognition, achieving a 97% F1 score through data augmentation and additional convolutional layers.',
            'Utilized ResNet pre-trained models to enhance accuracy to 98% and reduce overfitting, improving generalization on unseen data.',
            'Enhanced model robustness in Keras with batch normalization and the Image Data Generator for consistent validation performance.',
          ]}
        />

      </VerticalTimeline>
    </section>
  )
}
