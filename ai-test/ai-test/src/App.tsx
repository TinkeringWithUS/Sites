import { ReactNode } from 'react';
import './App.css';

enum CsTopics {
  DataStructures = "Data Structures & Algorithms",
  Algorithms = "Algorithm Analysis",
  OperatingSystems = "Operating Systems",
  ComputerArchitecture = "Computer Architecture",
  MachineLearning = "Machine Learning",
  Compilers = "Compilers",
  DeepLearning = "Deep Learning / Neural Networks",
  DistributedSystems = "Distributed Systems",
  ArtificialIntelligence = "AI (Artificial Intelligence)",
  ParallelComputing = "Parallel Computing",
  ComputerNetworks = "Computer Networking"
}

enum ClassLevel {
  Undergrad = "Undergraduate",
  Grad = "Graduate",
  Both = "Undergraduate and Graduate"
};

enum ProgrammingLanguages {
  C = "C",
  Cpp = "C++",
  Python = "Python",
  Java = "Java",
  Golang = "Golang",
  Javascript = "Javascript"
}

type ClassListing = {
  university: string,
  link: string,
  topic: CsTopics,
  level: ClassLevel,
  notes?: string,
  languages?: ProgrammingLanguages[]
};

const listings: ClassListing[] = [
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
  }
];

function languagesToImageLinks(languages: ProgrammingLanguages[]) {
  return languages.map((language) => {
    switch (language) {
      case ProgrammingLanguages.Python:
        return "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png";
      case ProgrammingLanguages.Golang:
        return "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png";
      case ProgrammingLanguages.Java:
        return "https://img.icons8.com/?size=512&id=13679&format=png";
      case ProgrammingLanguages.Javascript:
        return "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?20120221235433";
      case ProgrammingLanguages.Cpp:
        return "https://raw.githubusercontent.com/Benio101/cpp-logo/master/cpp_logo.png";
      case ProgrammingLanguages.C:
        return "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg";
      default:
        break;
    }
  });
}


function App() {
  const topicToListing: Map<string, ClassListing[]> = new Map();

  console.log("listings: " + JSON.stringify(listings));

  for (const [csTopic, _] of Object.entries(CsTopics)) {
    const topic = CsTopics[csTopic as keyof typeof CsTopics];
    const listingWithTopic = listings.filter((listing) => listing.topic === topic);

    console.log("listing with topic: " + listingWithTopic);
    // console.log("cs topic: " + csTopic + ); 

    if (!topicToListing.has(csTopic)) {
      topicToListing.set(csTopic, listingWithTopic);
    } else {
      console.log("cs topics already exists, not adding to avoid dupes, topic: " + csTopic);
    }
  }

  const getTopicDisplay = () => {
    const topicElements: ReactNode[] = [];

    for (const topic of topicToListing.keys()) {
      const listings = topicToListing.get(topic);
      const topicTitle = CsTopics[topic as keyof typeof CsTopics];

      if (listings && listings.length > 0) {
        topicElements.push(
          <div className=" mt-4" key={topic}>
            {topicTitle}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {listings?.map((listing) => {
                return createListing(listing);
              })}
            </div>
          </div>
        )
      }
    }

    return topicElements;
  };


  const createListing = (listing: ClassListing) => {
    return (
      <div className="w-50 h-fit">
        <div>
          <a className="text-blue-400" href={listing.link}>Link</a>
        </div>
        <div>
          {listing.university}
        </div>
        {listing.notes &&
          <p>
            {listing.notes}
          </p>
        }
        {listing.languages && listing.languages.length > 0 &&
          <div className="flex">
            {languagesToImageLinks(listing.languages).map((imgLink) => {
              return (
                <img className="aspect-square w-5 rounded-lg" src={imgLink} />
              );
            })}
          </div>
        }
      </div>
    );
  }

  return (
    <div>
      Free CS Courses Online
      {getTopicDisplay()}
    </div>
  );
}

export default App;
