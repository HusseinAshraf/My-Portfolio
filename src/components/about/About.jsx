
import { motion } from 'framer-motion';
import { RiDownload2Fill } from '@remixicon/react';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import my_resume from '../../assets/resume/my-resume.pdf';

const aboutVariantsFromLeft = {
  hidden: { opacity: 0, y: 70, x: -150 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, ease: 'easeInOut', delay: 0.2 },
  },
};

const aboutVariantsFromRight = {
  hidden: { opacity: 0, y: 70, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, ease: 'easeInOut', delay: 0.4 },
  },
};

const aboutVariantsFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeInOut', delay: 0.6 },
  },
};

function About() {
  return (
    <section className="about-section mx-auto my-9 px-4 pt-7 md:min-h-screen md:px-6" id="about">
      <div className="flex flex-col md:flex-row gap-8">
        {/* About Me Section */}
        <div className="about-me md:w-1/2">
          <SectionHeading>About Me</SectionHeading>
          <motion.p
            className="mt-4 text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={aboutVariantsFromRight}
          >
            I am a driven Junior Frontend React Developer, proficient in (HTML5, CSS3, Bootstrap, Sass, Javascript, React, Redux, Material UI, Tailwind, Bootstrap)
          </motion.p>

          <motion.p
            className="mt-4 text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={aboutVariantsFromLeft}
          >
            Passionate about developing user-friendly web applications, to contribute to innovative projects and enhance my skills.
          </motion.p>

          <motion.p
            className="mt-4 text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={aboutVariantsFromRight}
          >
            My motto is "Do what you love, love what you do," and I aim to excel and innovate in this field.
          </motion.p>
        </div>

        {/* Education Section */}
        <div className="education md:w-1/2">
          <SectionHeading>Education</SectionHeading>
          <div className="mt-4">
            <motion.div
              className="text-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={aboutVariantsFromLeft}
            >
              <strong>Bachelor of Science in Computer Science & AI</strong>
            </motion.div>
            <motion.div
              className="mt-2 text-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={aboutVariantsFromRight}
            >
              Beni Suef University, Faculty of Computer and Artificial Intelligence
            </motion.div>
            <motion.div
              className="mt-2 text-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={aboutVariantsFromLeft}
            >
              Graduation: 2019 – 2023 | Beni Suef, Egypt
            </motion.div>
            <motion.div
              className="mt-2 text-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={aboutVariantsFromRight}
            >
              Graduation Project: E-Commerce (Grade: Excellent)
            </motion.div>
          </div>
        </div>
      </div>

      <motion.a
        className="mt-8 flex items-center justify-center justify-self-center md:justify-self-end"
        href={my_resume}
        download
        rel="noopener noreferrer"
        target="_blank"
        variants={aboutVariantsFromLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Button btnAnimated="secondary">
          Download CV <RiDownload2Fill className="ml-3" size={20} />
        </Button>
      </motion.a>
    </section>
  );
}

export default About;
