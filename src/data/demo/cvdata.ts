import { CvDataItem, Degree, EmploymentType, Gender, Language, LanguageRating, Salutation, StepType, Technologies } from "../../models/common"
import profilePicture from './image.jpg';

const cvDataItem: CvDataItem = {

  personal: {
    salutation: Salutation.Mr,
    profilePicture: profilePicture,
    name: "Donald",
    surname: "Duck",
    dateofbirth: "1985-01-22",
    placeofbirth: "Entenhausen",
    gender: Gender.Male
  },
  address: {
    street: "Hauptstrasse",
    propertyNumber: "12a",
    postcode: "12345",
    city: "Entenhausen",
    country: "USA"
  },
  contact: {
    mail: "donald@duck.de",
    phone: "(+01) 12345",
    linkedin: "http://linkedin.com",
    github: "http://github.com"
  },
  workplaces: [{
    type: StepType.Job,
    from: '1985-01-22',
    to: '1986-02-22',
    company: 'company',
    employmentType: EmploymentType.FullTime,
    title: 'master',
    duties: ['being master', 'programming'],
    technologies: [Technologies.Java, Technologies.Javascript],
    place: 'Kleinstadt'
  }, {
    type: StepType.Job,
    from: '1980-01-22',
    to: '1985-01-21',
    company: 'Duck Enterprise',
    employmentType: EmploymentType.FullTime,
    title: 'master',
    duties: ['being master', 'programming'],
    technologies: [Technologies.Java],
    place: 'Entenhausen'
  }, {
    type: StepType.University,
    from: '1980-01-22',
    to: '1985-01-21',
    company: 'University of Entenhausen',
    degree: Degree.MasterScience,
    title: 'Duckologie',
    place: 'Entenhausen'
  }],
  skills: {
    languages: [{
      language: Language.English,
      rating: LanguageRating.basic
    }]
  }
}

export default cvDataItem;