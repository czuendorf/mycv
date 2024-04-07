

export interface CvDataItem {
  workplaces: WorkplaceDataItem[]
  personal: PersonalDataItem
  address: AddressDataItem
  contact: ContactDataItem
  skills: SkillsDataItem
}

export interface PersonalDataItem {
  salutation: Salutation
  profilePicture: string
  name: string
  surname: string
  dateofbirth: string
  placeofbirth: string
  gender: Gender
}

export interface AddressDataItem {
  street: string
  propertyNumber: string
  postcode: string
  city: string
  country: string
}

export interface ContactDataItem {
  mail: string
  phone: string
  linkedin?: string
  github?: string
}

export interface WorkplaceDataItem {
  type: StepType;
  from: string;
  to?: string;
  company?: string;
  website?: string;
  degree?: Degree;
  employmentType?: EmploymentType;
  title: string;
  place: string;
  duties?: string[];
  technologies?: Technologies[] | string[];
}

export interface SkillsDataItem {
  languages: LanguageSkill[];
}

export interface InterestsDataItem {
  hobbys: string[];
}

export enum Degree {
  BachelorScience = "bachelorofscience",
  MasterScience = "masterofscience",
  HighSchoolDiploma = "highschooldiploma",
  ProfessionalEducation = "professionaleducation",
}

export enum Gender {
  Male = "male",
  Female = "female",
  Diverse = "diverse",
}

export enum Salutation {
  Mr = "mr",
  Mrs = "mrs",
  Neutral = "neutral",
}

export enum EmploymentType {
  FullTime = "fulltime",
  PartTime = "parttime",
  Internship = "internship",
}

export enum StepType {
  Job = 'job',
  University = 'university',
  CommunityService = 'communityservice',
  School = 'school',
  Thesis = 'thesis',
  Internship = 'internship',
  WorkingStudent = 'workingstudent'
}

export enum Technologies {
  Javascript = 'JavaScript',
  TypeScript = 'TypeScript',
  Angular = 'Angular',
  WebGL = 'WebGL',
  NodeJS = 'Node.js',
  ThreeJS = 'Three.js',
  drei = 'drei',
  r3f = 'React Three Fiber',
  RxJS = 'RxJS',
  Storybook = 'Storybook',
  HTML = 'HTML',
  Java = 'Java',
  Spring = 'Spring',
  Swing = 'Swing',
  SQL = 'SQL',
  PHP = 'PHP',
  XML = 'XML',
  REST = 'REST',
  OpenAPI = 'OpenAPI',
  WebSocket = 'WebSocket',
  CSS = 'CSS',
  LESS = 'LESS',
  SASS = 'SASS',
  Azure = 'Azure',
  SOAP = 'SOAP',
  SVG = 'SVG',
  React = 'React',
  Sphinx = 'Sphinx',
  Webpack = 'Webpack',
  Express = 'Express',
  Grunt = 'Grunt',
  Nightwatch = 'Nightwatch.js',
  Selenium = 'Selenium',
  HANA_XS = 'SAP HANA XS',
  UI5 = 'SAP UI5',
  Tailwind = 'Tailwind',
}

export enum OS {
  Windows = 'Windows',
  Linux = 'Linux',
  MacOS = 'MacOS'
}

export enum Frameworks {
  OSGI = 'OSGi',
}

export enum VersionControl {
  Git = 'Git',
  SVN = 'SVN',
  CVS = 'CVS',
}

export enum ProgrammingLanguages {
  Java = 'Java',
  PHP = 'PHP',
  UnixShell = 'UnixShell',
  Prolog = 'Prolog',
  JavaScript = 'JavaScript',
  ActionScript = 'ActionScript',
}

export enum BuildSystems {
  Maven = 'Maven',
  Ant = 'Ant',
  Grunt = 'Grunt',
}

export enum TestFramework {
  JUnit = 'JUnit',
  Mocha = 'Mocha',
  Chai = 'Chai',
  Jest = 'Jest',
  QUnit = 'QUnit',
  Chakram = 'Chakram',
  Selenium = 'Selenium',
  Nightwatch = 'Nightwatch',
  Puppeteer = 'Puppeteer',
  Playwright = 'Playwright',
}

export enum DatabaseTechnologies {
  SQL = 'SQL',
  SQLite = 'SQLite',
  OrmLite = 'OrmLite',
  Hibernate = 'Hibernate',
  MongoDB = 'MongoDB',
  Mongoose = 'Mongoose',
}

export enum IDE {
  Eclipse = 'Eclipse',
  JetBrainsWebstorm = 'JetBrains WebStorm',
  AndroidStudio = 'Android Studio',
  Sublime = 'Sublime',
  VisualStudioCode = 'Visual Studio Code',
}

export enum SoftwareProducts {
  MicrosoftOffice = 'Microsoft Office',
  JIRA = 'JIRA',
  Linear = 'Linear',
  Confluence = 'Confluence',
  Photoshop = 'Adobe Photoshop',
  Notion = 'Notion',

}

export enum Language {
  German = 'german',
  English = 'english',
  French = 'french',
  Polish = 'polish',
}

export enum LanguageRating {
  native = 'native',
  fluent = 'fluent',
  businessfluent = 'businessfluent',
  basic = 'basic',
}

export interface LanguageSkill {
  language: Language,
  rating: LanguageRating
}

