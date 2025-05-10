import { ReactNode } from 'react';
import './App.css';

import { CsTopics, ClassLevel, ClassListing, ProgrammingLanguages, listings } from './listings';
import { Link } from 'react-router';

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

  for (const [csTopic] of Object.entries(CsTopics)) {
    const topic = CsTopics[csTopic as keyof typeof CsTopics];
    const listingWithTopic = listings.filter((listing) => listing.topic === topic);

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
          <div className="mt-4" key={topic}>
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
      <div className="w-60 h-fit border-1 rounded-4xl p-5 m-5">
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
    <>
      <nav>
        <div className="justify-evenly">
          <Link key={"Roadmap"} className="text-blue-500" to="/roadmap">RoadMap</Link>
          <Link key={"map"} className="text-blue-500" to="/map">Game</Link>
          <Link key={"upload"} className="text-blue-500" to="/upload">Upload File</Link>
        </div>
      </nav>
      <div>
        Free CS Courses Online
        {getTopicDisplay()}
      </div>
    </>
  );
}

export default App;
