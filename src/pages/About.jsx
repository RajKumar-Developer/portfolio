import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import styles for the timeline
import { skills, experiences } from "../contents";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      {/* Header Section */}
      <h1 className="head-text">
        Hello, I&apos;m{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Rajkumar
        </span>
        👋
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I am a Web Developer and a Computer Science student at Amrita Vishwa
          Vidyapeetham, Coimbatore. I am passionate about building web
          applications and learning new technologies. I have experience working
          with React and Django. Currently, I am exploring Three.js and AR/VR
          technologies.
        </p>
      </div>

      {/* Skills Section */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-12">
          {skills.map((skill) => (
            <div
              className="block-container w-24 h-24 relative group"
              key={skill.name}
            >
              <div className="btn-back absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl transform rotate-y-180 backface-hidden transition-transform duration-500 group-hover:rotate-y-0" />
              <div className="btn-front absolute inset-0 shadow-md rounded-xl flex justify-center items-center transform backface-hidden transition-transform duration-500 group-hover:rotate-y-180">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 text-slate-500">
          <p>
            I&apos;ve gained hands-on experience as a UI/UX and Frontend
            Developer, honing my skills while collaborating with talented
            individuals. As a fresher, I bring a strong passion for creating
            seamless user interfaces and delivering clean, functional designs.
            I’m flexible, easy to collaborate with, and dedicated to producing
            high-quality work.
          </p>
        </div>
        <div className="mt-12">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg, color: "#fff" }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  background: "#f9f9f9",
                  borderRadius: "8px",
                  border: `2px solid ${experience.iconBg}`,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${experience.iconBg}`,
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, idx) => (
                    <li
                      key={`experience-point-${idx}`}
                      className="text-slate-600 font-normal text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
