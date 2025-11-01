export const experienceData = [
  {
    period: 'Jun 2023 - Present',
    position: 'Senior Automation QA Engineer / SDET',
    company: 'MWDN',
    projectTitle: 'Email Signatures SaaS Platform',
    summary:
      'Built the entire test automation ecosystem from the ground up for a fast-scaling B2B SaaS product. Migrated from an outdated Nightwatch setup to a modern Playwright + TypeScript stack, introduced CI/CD, metrics, and mentoring practices.',
    story: {
      problem:
        'When I joined, the project had almost no automation or infrastructure. The existing Nightwatch + Selenium setup covered less than 5% of functionality, was unstable, and lacked reporting or CI integration. There were no test strategies, metrics, or consistent QA processes, and releases relied entirely on manual validation.',
      actions: [
        'Refactored the legacy Nightwatch framework to stabilize existing tests, then rebuilt a modern E2E automation framework from scratch using Playwright and TypeScript.',
        'Designed and implemented full CI/CD pipelines using GitHub Actions with matrix job parallelization (horizontal + vertical scaling). Regression runs now execute in parallel across multiple VMs.',
        'Integrated Gmail API to automate email-based flows like sign-up confirmation, password reset, and signature rendering validation.',
        'Integrated Email on Acid for automated visual regression and screenshot comparison, enabling full verification of email signatures across clients.',
        'Developed a custom CLI tool so developers could easily run, filter, and debug tests locally — improving feedback speed and adoption across dev teams.',
        'Implemented detailed Playwright HTML reports including screenshots, videos, logs, and traces, along with metrics collection for test stability and flakiness tracking.',
        'Established and documented testing processes, including test plans, strategy, coverage metrics, and contribution guidelines.',
        'Set up and maintained automated test infrastructure in cloud environments, enabling devs to trigger runs on their own test environments.',
        'Mentored two junior AQA engineers and led their onboarding and growth after the team expanded.',
        'Replaced BrowserStack with in-house Playwright cloud execution, saving significant infrastructure costs.',
      ],
      results: [
        'Regression test coverage increased to over 80% of critical user paths.',
        'Full regression suite executes under 1 hour; smoke/sanity runs complete in ~5 minutes.',
        'Pass rate improved from 30% to 90%+ through flakiness reduction and better isolation.',
        'Reduced test flow creation time from ~1 week to 1 day due to CLI tooling and framework design.',
        'Enabled developers to self-serve testing, significantly improving collaboration and delivery speed.',
        'Eliminated BrowserStack dependency, reducing recurring costs while improving visibility and performance.',
        'Established scalable infrastructure ready for further parallelization and continuous improvement.',
      ],
    },
  },
  {
    period: 'Sep 2021 - Jun 2023',
    position: 'ATQC Software Engineer',
    company: 'SoftServe',
    projectTitle: 'Patient Management Web System (Healthcare Domain)',
    summary:
      'Developed and led automation for a healthcare web system that tracked patient data and hospital workflows. Built a custom Cypress-based framework with response-time metrics to ensure reliability and system responsiveness.',
    story: {
      problem:
        'The hospital system was used by staff to manage patient records for both in-patient and out-patient care. Due to high data load and multiple concurrent users, system responsiveness and stability were inconsistent. Manual testing couldn’t track performance regressions, and there was no automation framework, metrics, or CI integration in place.',
      actions: [
        'Designed and implemented a new Cypress-based automation framework from scratch, focusing on E2E reliability and performance visibility.',
        'Developed a custom metric-collection library that measured system response times and captured key performance data for critical user actions.',
        'Established and maintained test automation strategy, documentation, and guidelines for QA processes.',
        'Integrated automated tests with Jenkins CI for regular execution and performance tracking over time.',
        'Led a small team of QA engineers, reviewed automation code, resolved conflicts, and coordinated with developers and clients.',
        'Collected and analyzed metrics to identify performance bottlenecks and communicated results to stakeholders.',
      ],
      results: [
        'Delivered a stable E2E testing framework that became a key part of release validation.',
        'Enabled the team to monitor and compare response-time performance between releases.',
        'Reduced manual regression effort by introducing automated coverage for key workflows.',
        'Improved system responsiveness and reliability awareness through automated metrics.',
        'Provided the client with clear visibility into product performance and quality trends.',
      ],
    },
  },
  {
    period: 'Jan 2020 - Sep 2021',
    position: 'Middle AQA Engineer',
    company: 'GlobalLogic',
    projectTitle: 'Cross-Platform Mobile App for Blood Sugar Monitoring',
    summary:
      'Contributed to the test automation of a healthcare mobile application integrated with a BLE (Bluetooth Low Energy) device used to track and manage patient blood sugar levels. Focused on reliability and release readiness for both iOS and Android platforms.',
    story: {
      problem:
        'The project aimed to deliver a stable, cross-platform healthcare app that connected to medical BLE devices to monitor blood sugar levels. Manual testing of such device-dependent workflows was time-consuming and prone to human error. The team needed reliable automated tests to ensure consistent quality before each release.',
      actions: [
        'Analyzed functional and non-functional requirements to create detailed test designs and scenarios.',
        'Developed and maintained automated test scripts using Appium, FlutterDriver, WebDriverAgent, and NodeJS tools.',
        'Participated in building and extending the existing mobile automation framework for Flutter apps.',
        'Executed regression and smoke testing during dry runs and release phases.',
        'Reviewed automation code and supported other QA engineers with framework setup and usage.',
        'Onboarded new team members and helped them adopt automation best practices.',
        'Collaborated closely with developers to identify, reproduce, and verify BLE communication issues.',
      ],
      results: [
        'Reduced manual testing effort across iOS and Android by automating the most critical BLE communication scenarios.',
        'Improved release stability by introducing repeatable regression checks for key health-tracking flows.',
        'Accelerated testing cycles, allowing faster release sign-offs for new app versions.',
        'Established a consistent test structure that served as a foundation for future automation work.',
      ],
    },
  },
  {
    period: 'Nov 2018 - Jan 2020',
    position: 'Test Automation Engineer',
    company: 'ArtLemon',
    projectTitle: 'Management Control System (Web Application)',
    summary:
      'Worked on an internal web system for managing business departments and performance goals. Focused on building and maintaining small-scale UI automation and gaining hands-on experience with testing tools and frameworks.',
    story: {
      problem:
        'The internal system was actively evolving, and repetitive manual regression testing slowed down delivery. There was no existing automation in place, so basic test coverage for critical business workflows was needed to support stable releases.',
      actions: [
        'Assisted in creating the first version of a UI automation framework using JavaScript, WebdriverIO, and Mocha.',
        'Automated basic end-to-end scenarios for the core business modules, focusing on smoke and sanity coverage.',
        'Analyzed requirements and translated them into simple, maintainable test cases.',
        'Used Postman and Chrome DevTools to validate API responses and debug UI issues.',
        'Maintained documentation for test cases and test runs.',
        'Collaborated with developers and QA peers to integrate automated tests into the development cycle.',
        'Ran cross-browser checks on BrowserStack to verify UI consistency.',
      ],
      results: [
        'Introduced the first automated tests into the release process, reducing manual verification time.',
        'Helped identify several recurring UI and API integration issues early in development.',
        'Built foundational automation knowledge and practical experience with modern QA tooling.',
        'Contributed to establishing test documentation and early process standardization in the team.',
      ],
    },
  },
  {
    period: 'Nov 2016 - Nov 2018',
    position: 'QA Engineer (Manual)',
    company: 'US Real Estate Platform',
    projectTitle: 'Web Application for Renting and Selling Homes',
    summary:
      'Started my QA journey testing a large real-estate web application that connected homeowners, renters, and buyers. Focused on UI, API, and requirements testing while supporting customers and collaborating closely with developers.',
    story: {
      problem:
        'The platform managed thousands of property listings and required reliable search, listing, and contact features. Frequent updates introduced regressions, and there was no dedicated QA process at first. The challenge was to establish consistent manual testing coverage and improve release stability.',
      actions: [
        'Performed manual and UI testing of key flows such as search, listing creation, messaging, and payments.',
        'Analyzed requirements and created test cases to ensure feature completeness and alignment with client expectations.',
        'Executed API testing using Postman to validate backend data and endpoints.',
        'Verified cross-browser and responsive behavior using BrowserStack.',
        'Reported and tracked issues in Zoho BugTracker and Jira, maintaining clear communication with developers.',
        'Assisted customer support by reproducing and documenting user-reported issues.',
        'Explored early automation tools such as Selenium IDE to improve testing speed and consistency.',
      ],
      results: [
        'Established a structured QA process and consistent regression testing before each release.',
        'Improved defect detection rates and reduced production bugs through detailed manual verification.',
        'Contributed to smoother collaboration between QA, dev, and support teams.',
        'Gained strong fundamentals in testing practices that became the base for future automation work.',
      ],
    },
  },
];
