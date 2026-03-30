export type Skill = {
    name: string;
    image: string;
  };
  
  export type Category = {
    letter: string;
    title: string;
    desc: string;
  };
  
  export type Ring = {
    skills: Skill[];
    radius: number;
    duration: number;
    reverse: boolean;
  };
  
  export const skills: Skill[] = [
    { name: "React",       image: "/img/skills/react.webp" },
    { name: "Tailwind",    image: "/img/skills/tailwind.webp" },
    { name: "Sass",        image: "/img/skills/sass.webp" },
    { name: "Bootstrap",   image: "/img/skills/bootstrap.webp" },
    { name: "Java",        image: "/img/skills/java.webp" },
    { name: "Spring Boot", image: "/img/skills/springboot.webp" },
    { name: "PHP",         image: "/img/skills/Php.webp" },
    { name: "Laravel",     image: "/img/skills/laravel.webp" },
    { name: "Node.js",     image: "/img/skills/express.webp" },
    { name: "Flask",       image: "/img/skills/flask.webp" },
    { name: "MySQL",       image: "/img/skills/mysql.webp" },
    { name: "PostgreSQL",  image: "/img/skills/postgres.webp" },
    { name: "MongoDB",     image: "/img/skills/MongoDB.webp" },
    { name: "Docker",      image: "/img/skills/docker.webp" },
    { name: "Git",         image: "/img/skills/git.webp" },
    { name: "Kafka",       image: "/img/skills/kafka log.webp" },
    { name: "Figma",       image: "/img/skills/Figma.webp" },
  ];
  
  export const rings: Ring[] = [
    { skills: skills.slice(0, 5),   radius: 175, duration: 20, reverse: false },
    { skills: skills.slice(5, 11),  radius: 285, duration: 32, reverse: true  },
    { skills: skills.slice(11, 17), radius: 395, duration: 46, reverse: false },
  ];
  
  export const categories: Category[] = [
    { letter: "F", title: "Frontend", desc: "React, Next.js, TypeScript, Tailwind CSS" },
    { letter: "B", title: "Backend",  desc: "Node.js, Laravel, SpringBoot, MySQL, PostgreSQL, MongoDB" },
    { letter: "D", title: "DevOps",   desc: "Docker, AWS, Digital Ocean, Git, CI/CD Github Actions" },
  ];