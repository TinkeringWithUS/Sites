

export enum CsTopics {
  DataStructures = "Data Structures & Algorithms",
  Algorithms = "Algorithm Analysis & Design",
  OperatingSystems = "Operating Systems",
  ComputerArchitecture = "Computer Architecture",
  MachineLearning = "Machine Learning",
  Compilers = "Compilers",
  DeepLearning = "Deep Learning / Neural Networks",
  DistributedSystems = "Distributed Systems",
  ArtificialIntelligence = "AI (Artificial Intelligence)",
  ParallelComputing = "Parallel Computing",
  ComputerNetworks = "Computer Networking",
}

export enum ClassLevel {
  Undergrad = "Undergraduate",
  Grad = "Graduate",
  Both = "Undergraduate and Graduate"
};

export enum ProgrammingLanguages {
  C = "C",
  Cpp = "C++",
  Python = "Python",
  Java = "Java",
  Golang = "Golang",
  Javascript = "Javascript"
}

export type ClassListing = {
  university: string,
  link: string,
  topic: CsTopics,
  level: ClassLevel,
  notes?: string,
  languages?: ProgrammingLanguages[]
};


export const listings: ClassListing[] = [
  {
    university: "MIT",
    link: "http://nil.csail.mit.edu/6.5840/2024/",
    level: ClassLevel.Grad,
    topic: CsTopics.DistributedSystems,
    notes: "Solid, dslabs uses these labs as a base, but these labs don't use model checking. Golang is cool, nice to learn.",
    languages: [ProgrammingLanguages.Golang]
  },
  {
    university: "UC Berkeley",
    link: "https://inst.eecs.berkeley.edu/~cs188/sp25/",
    level: ClassLevel.Undergrad,
    topic: CsTopics.ArtificialIntelligence,
    notes: "The AI course everyone uses. Lots of reading, projects I heard are interesting, probably not the hardest.",
    languages: [ProgrammingLanguages.Python]
  },
  {
    university: "CMU",
    link: "https://www.cs.cmu.edu/~15418/",
    level: ClassLevel.Undergrad,
    topic: CsTopics.ParallelComputing,
    notes: "Videos are floating out there somewhere. Don't know too much, but looks solid.",
    languages: [ProgrammingLanguages.C, ProgrammingLanguages.Python, ProgrammingLanguages.Java]
  },
  {
    university: "UT Austin",
    link: "https://www.cs.utexas.edu/~venkatar/f24/index.html",
    level: ClassLevel.Undergrad,
    topic: CsTopics.ComputerNetworks,
    languages: [ProgrammingLanguages.C, ProgrammingLanguages.Python]
  },
  {
    university: "UWash",
    link: "https://courses.cs.washington.edu/courses/cse452/23wi/",
    level: ClassLevel.Undergrad,
    topic: CsTopics.DistributedSystems,
    languages: [ProgrammingLanguages.Java],
    notes: "Uses dslabs, amazing set of labs based on MIT's graduate distributed course. Uses Model Checking, heavily recommend doing them."
  },
  {
    university: "CMU-Fall",
    link: "https://www.synergylabs.org/courses/15-440/syllabus.html",
    level: ClassLevel.Undergrad,
    topic: CsTopics.DistributedSystems,
    notes: "Covers lots of topics that are very practical and not necessarily traditionally related to D.S. Like Security Protocols. Probably good for industry. Interesting projects, Tribbler (consistent hashing) and distributed password cracking. Uses Golang."
  },
  {
    university: "CMU-Spring",
    link: "https://www.andrew.cmu.edu/course/15-440/",
    level: ClassLevel.Undergrad,
    topic: CsTopics.DistributedSystems,
    notes: "No schedule, but has readings, projects all about distributed filesystems.",
    languages: [ProgrammingLanguages.C]
  },
  {
    university: "UIUC-Spring",
    link: "https://courses.grainger.illinois.edu/CS425/sp2025/schedule.html",
    level: ClassLevel.Undergrad,
    topic: CsTopics.DistributedSystems,
    notes: "More balanced in terms of distributed systems topics (explicitly covers p2p so Chord, and distributed transactions). Projects have no starter code, just specifications. Practical, good for SWE experience."
  },
  {
    university: "MIT-2018",
    link: "https://pdos.csail.mit.edu/6.S081/2018/schedule.html",
    level: ClassLevel.Grad,
    topic: CsTopics.OperatingSystems,
    notes: "Most rigorous version of OS engineering at MIT, try to do the latest xv6 labs first then tackle either PintOS or the JOS assignments."
  },
  {
    university: "MIT",
    link: "https://pdos.csail.mit.edu/6.S081/2024/schedule.html",
    level: ClassLevel.Grad,
    topic: CsTopics.OperatingSystems,
    notes: "I recommend doing all the xv6 labs first, very instructive. After, try extending xv6 substantially, working on 2018 version with JOS, or tackle PintOS."
  },
  {
    university: "UIUC",
    link: "https://cs423-uiuc.github.io/spring25/index.html",
    level: ClassLevel.Undergrad,
    topic: CsTopics.OperatingSystems,
    notes: "Assignments forces you to deal with linux. Useful for OS research (lots of research involves extending the kernel in some way), good for SWE skills."
  },
  {
    university: "Stanford",
    link: "https://web.stanford.edu/~ouster/cgi-bin/cs140-spring20/info.php",
    level: ClassLevel.Undergrad,
    topic: CsTopics.OperatingSystems,
    notes: "Tons of universities use PintOS, but very challenging with a slightly hard to understand codebase. Good for exposing yourself to large codebases and extending them."
  },
  {
    university: "Cornell",
    link: "https://www.cs.cornell.edu/courses/cs5414/2020fa/",
    level: ClassLevel.Undergrad,
    topic: CsTopics.DistributedSystems,
    notes: "Using dslabs, the schedule is balances both theory and practice, heavily recommend using this course page for schedule.",
    languages: [ProgrammingLanguages.Java]
  },
  {
    university: "UIUC",
    link: "",
    level: ClassLevel.Undergrad,
    topic: CsTopics.Algorithms,
  }
];