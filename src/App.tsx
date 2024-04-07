import { FC, useCallback, useEffect, useState } from "react";
import "./App.css";
import Address from "./components/Address/Address";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Personal from "./components/Personal/Personal";
import Root from "./components/Root/Root";
import Section from "./components/Section/Section";
// import Skills from "./components/Skills/Skills";
import Timeline from "./components/Timeline/Timeline";
import { CvDataItem } from "./models/common";
import TechnologyList from "./components/TechnologyList/TechnologyList";
import LanguageSkills from "./components/LanguageSkills/LanguageSkills";
import CvData from "./data/demo/cvdata";

const App: FC = () => {
  const [customCvData, setCustomCvData] = useState<string>();
  const [data, setData] = useState<CvDataItem>(CvData);

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const cvdata = params.get('cvdata');
    if (cvdata) {
      setCustomCvData(cvdata);
    }
  }, [setCustomCvData]);  

  const cvData = useCallback(async () => {
    return await new Promise<CvDataItem>((resolve) => {
      if (!customCvData) {
        return;
      }
      import(`./data/private/${customCvData}/cvdata`).then((cvData) => {
        resolve(cvData.default);
      }).catch(() => {
        console.error('CV not Found', customCvData);
      });
    });
  }, [customCvData]);

  useEffect(() => {
    cvData().then((cvData) => {
      setData(cvData);
    });
  });

  if (!data) {
    return <div></div>;
  }
  return (
    <div className="App flex flex-1 m-4">
      <Root>
        <Header/>
        <Section title="personal">
          <Personal
            data={data.personal}
          ></Personal>
        </Section>

        <Section title="address">
          <Address
            data={data.address}
          ></Address>
        </Section>

        <Section title="contact">
          <Contact
            data={data.contact}
          />
        </Section>

        <Section title="knowledge">
          <div className="flex flex-col gap-5">
            <TechnologyList workplaces={data.workplaces}></TechnologyList>
            <LanguageSkills languageSkills={data.skills.languages} />
          </div>
          <div className="break-before-page h-0"></div>
        </Section>

        
        <Section title="career">
          <Timeline workplaces={data.workplaces}/>
        </Section>
        

        {false && <Section title="projects"> </Section>}
        
      </Root>
    </div>
  );
}

export default App;
