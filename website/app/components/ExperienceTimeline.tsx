'use client'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export function ExperienceTimeline() {
  return (
    <section id="Experience">
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Experience</h2>
      <VerticalTimeline>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#415A77', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
          date={(
            <>
              <span className="block">Jan 2026 - Feb 2026</span>
              <span className="block text-sm mt-1 font-normal opacity-90">Cambridge, MA</span>
            </>
          ) as unknown as string}
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={
            <div className="flex justify-center items-center w-full h-full p-1">
              <img src="/Microsoft.svg" alt="Microsoft logo" className="w-[85%] h-[85%] object-contain" />
            </div>
          }
          visible={true}
        >
          <div>
            <h3 className="text-white text-[24px] font-bold">Software Engineer Intern</h3>
            <p className="text-white/80 text-[16px] font-semibold" style={{ margin: 0 }}>Microsoft</p>
          </div>
          <ul className="mt-5 list-disc ml-5 space-y-2">
            <li className="text-white text-[14px] tracking-wider">
              Worked with the Health and Life Sciences team to build a cloud-based assistant that automates diagnostic radiology workflows.
            </li>
            <li className="text-white text-[14px] tracking-wider">
              Built an AI radiology assistant using FastAPI, GPT-5.1, and spaCy, automating finding extraction and reducing report time by 80%.
            </li>
            <li className="text-white text-[14px] tracking-wider">
              Engineered DuckDB vector search mapping findings to 2,150+ codes, eliminating manual lookup for medical documentation.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#415A77', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
          date={(
            <>
              <span className="block">Jun 2025 - Aug 2025</span>
              <span className="block text-sm mt-1 font-normal opacity-90">Bethesda, MD</span>
            </>
          ) as unknown as string}
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={
            <div className="flex justify-center items-center w-full h-full p-1">
              <img src="/marriott.png" alt="Marriott International logo" className="w-[80%] h-[80%] object-contain" />
            </div>
          }
          visible={true}
        >
          <div>
            <h3 className="text-white text-[24px] font-bold">Software Engineer Intern</h3>
            <p className="text-white/80 text-[16px] font-semibold" style={{ margin: 0 }}>Marriott International</p>
          </div>
          <ul className="mt-5 list-disc ml-5 space-y-2">
            <li className="text-white text-[14px] tracking-wider">
              Built an internal chatbot in Microsoft Power Apps that converts natural language to SQL via GPT-4, built on a Power BI semantic layer.
            </li>
            <li className="text-white text-[14px] tracking-wider">
              Executed auto-generated SQL across 7 domains in Snowflake with RBAC and audit logs, returning results with sub-15-second latency.
            </li>
            <li className="text-white text-[14px] tracking-wider">
              Delivered actionable, SQL-transparent data insights with 86% accuracy, logging lineage and metadata in Azure for auditability.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#415A77', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
          date={(
            <>
              <span className="block">March 2024 - April 2024</span>
              <span className="block text-sm mt-1 font-normal opacity-90">Remote, CA</span>
            </>
          ) as unknown as string}
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img src="/snapchat.png" alt="Snap Inc. logo" className="w-[80%] h-[80%] object-contain" />
            </div>
          }
          visible={true}
        >
          <div>
            <h3 className="text-white text-[24px] font-bold">Software Development Extern</h3>
            <p className="text-white/80 text-[16px] font-semibold" style={{ margin: 0 }}>Snap Inc.</p>
          </div>
          <ul className="mt-5 list-disc ml-5 space-y-2">
            <li className="text-white text-[14px] tracking-wider">
              Designed a soccer-themed AR lens incorporating Snap&apos;s Lens Studio and 3D modeling, certified by Snap Inc.&apos;s Head of Entertainment.
            </li>
            <li className="text-white text-[14px] tracking-wider">
              Launched a Snapchat lens inspired by Reebok and soccer, compatible with iOS and Android, gathering views from 100+ countries.
            </li>
            <li className="text-white text-[14px] tracking-wider">
              Conducted data-driven market research in sports and technology using Tableau and MySQL, enhancing data visualization by 30%.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#415A77', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
          date={(
            <>
              <span className="block">May 2024 - July 2024</span>
              <span className="block text-sm mt-1 font-normal opacity-90">Remote, PA</span>
            </>
          ) as unknown as string}
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img src="/result.png" alt="Neftwerk logo" className="w-[90%] h-[90%] object-contain" />
            </div>
          }
          visible={true}
        >
          <div>
            <h3 className="text-white text-[24px] font-bold">Data Science Intern</h3>
            <p className="text-white/80 text-[16px] font-semibold" style={{ margin: 0 }}>Neftwerk</p>
          </div>
          <ul className="mt-5 list-disc ml-5 space-y-2">
            <li className="text-white text-[14px] tracking-wider">
              Designed and sorted data from CSVs to Attio dashboards to improve client information accuracy and operational efficiency by 60%.
            </li>
            <li className="text-white text-[14px] tracking-wider">
              Leveraged Attio&apos;s REST API to implement filtering and pagination, optimizing data retrieval by 30% and enhancing user experience.
            </li>
            <li className="text-white text-[14px] tracking-wider">
              Engineered Python automation for Excel-to-CSV pipeline, leveraging Git version control to optimize Attio dashboard data processing.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#415A77', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
          date={(
            <>
              <span className="block">Sep 2024 – Present</span>
              <span className="block text-sm mt-1 font-normal opacity-90">Amherst, MA</span>
            </>
          ) as unknown as string}
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img src="/lab.png" alt="Center for Intelligent Information Retrieval logo" className="w-[90%] h-[90%] object-contain" />
            </div>
          }
          visible={true}
        >
          <div>
            <h3 className="text-white text-[24px] font-bold">AI and LLM Research Intern</h3>
            <p className="text-white/80 text-[16px] font-semibold" style={{ margin: 0 }}>Center for Intelligent Information Retrieval</p>
          </div>
          <ul className="mt-5 list-disc ml-5 space-y-2">
            <li className="text-white text-[14px] tracking-wider">
              Built an LLM personalization platform using AWS and vLLM; rotated OpenRouter models like Claude 3.5 to analyze user preferences.
            </li>
            <li className="text-white text-[14px] tracking-wider">
              Captured 100 preferences per user in DynamoDB and streamed them to a DPO pipeline, improving the personalization benchmark.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#415A77', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
          date={(
            <>
              <span className="block">June 2024 - Aug 2024</span>
              <span className="block text-sm mt-1 font-normal opacity-90">Amherst, MA</span>
            </>
          ) as unknown as string}
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img src="/UMass.png" alt="University of Massachusetts Amherst logo" className="w-[80%] h-[80%] object-contain" />
            </div>
          }
          visible={true}
        >
          <div>
            <h3 className="text-white text-[24px] font-bold">ML Research Intern</h3>
            <p className="text-white/80 text-[16px] font-semibold" style={{ margin: 0 }}>University of Massachusetts Amherst</p>
          </div>
          <ul className="mt-5 list-disc ml-5 space-y-2">
            <li className="text-white text-[14px] tracking-wider">
              Optimized a CNN for ASL recognition, achieving a 97% F1 score through data augmentation and additional convolutional layers.
            </li>
            <li className="text-white text-[14px] tracking-wider">
              Utilized ResNet pre-trained models to enhance accuracy to 98% and reduce overfitting, improving generalization on unseen data.
            </li>
            <li className="text-white text-[14px] tracking-wider">
              Enhanced model robustness in Keras with batch normalization and the Image Data Generator for consistent validation performance.
            </li>
          </ul>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </section>
  )
}
