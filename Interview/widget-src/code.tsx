// This is a counter widget with buttons to increment and decrement the number.

const { widget } = figma
const { useSyncedState, usePropertyMenu, AutoLayout, Text, SVG } = widget

var questions = [
  "Are you ready to speak about Product Design?",
  "In your opinion, what is a product design?",
  "Tell us about the newest thing you’ve learned that has improved your design work. What was it?",
  "In your opinion, how should a good design process start? Why?",
  "What’s the most important aspect of your job?",
  "What is your favorite piece in your portfolio?",
  "How would you redesign iphone’s messaging interface?",
  "Tell me about your design challenge",
  "What could Siri do better?",
  "What is the most challenging project you have ever worked on?",
  "What do you want to work at here?",
  "Describe the project that you had the most trouble with. What would you have done differently?​",
  "What was the biggest takeaway from your current job that you will carry with you throughout your career?​",
  "How do you keep your team engaged?",
  "Give an example of how you set goals and achieve them​.",
  "Tell me about a time when you solved a conflict at work.​",
  "Why do you want to change jobs? Why now?",
  "Share an example of how you were able to motivate employees or co-workers.",
  "What do you do when the requirement from the stakeholder is vague?",
  "How do you stay organized?",
  "Give an example of an occasion when you used logic to solve a problem.",
  "What do you do if you don not know the solution for a certain problem and nobody can help at the moment?",
  "How do you experiment?",
  "What websites do you spend a lot of time on?",
  "What do you do if you disagree with your boss?",
  "Talk about a time that you failed.​",
  "What was the design process of your project?",
  "Tell me about a time that you did something wrong, and what you learned from the process",
  "Where do you find inspiration?",
  "Tell me about the projects you're most proud of and why. What was your role?",
  "How do you deal with feedback?",
  "How do you hand off a project?",
  "Why did you become a designer?",
  "How would you describe your design research?",
  "Please explain the three best projects from your portfolio",
  "What would you say will be future of design? Or the next big thing?",
  "What is your biggest design challenge?",
  "What are your strengths?",
  "How do you learn and grow your knowledge and expertise?",
  "What constitutes good design?",
  "What do you do in your current job?",
  "How many people are in your team?",
  "Do you follow any designers?",
  "How do you keep yourself updated with the latest design trends?",
  "Which company do you think does the best branding?",
  "What’s your favorite product or app and why?",
  "Which product’s design do you dislike and how would you change it?",
  "Can you code?",
  "Have you faced any problems while working with developers? How do you solve it?",
  "What do you do when project managers or clients don’t like your design?",
  "Do you have experience leading a team or conducting presentations?",
  "How do you handle critique on your designs?",
  "Have you done usability testing?",
  "Talk me through your design process",
  "When do you know a design is complete?",
  "How do you stay organized or keep up with deadlines?",
  "What’s the role of a product designer? What does design mean to you?",
  "What do you enjoy most about working in design?",
  "Have you revisited your key success metrics since successful launches? How are they the same or different?",
  "How do you handle several people who ask you something who all have priorities?",
  "Reimagine and redesign an existing digital product of your choice that showcases your skills and abilities to solve a complex problem as a designer",
  "Tell me about a product that you really love and why. How could it be improved?",
  "How could you describe interaction design to someone don not know interaction design?",
  "Tell me the high-level thinking behind your application",
  "Do you use data for design decisions?",
  "If you could improve one mobile experience, what would it be and why?",
  "Show us an example of a website with great design",
  "What type of technology are you interested in?",
  "Explain how you work with engineers, designers, and product managers",
  "Looking back at the design for this project, what would you change visually?",
  "Recommend to us a design related book, then explain why you have recommended it",
  "What designer has had the biggest influence on your work? Why?",
  "What advice would you give to a young designer that just finished studying?",
  "How do you rate your skills in product thinking, interaction design, and visual design?",
  "What led you to your final design? Describe the tradeoffs you considered",
  "How do you validate your decisions?",
  "What type of process do you use in conducting user research?",
  "Tell me about your experience with A/B testing. How long do you have experience with mobile and web responsive projects?",
  "Talk about a time you negotiated your way to the ideal UX solution?",
  "What would you do if you know you are going to miss a deadline?",
  "How do you handle a situation when a developer doesn’t create the product the way you designed it?",
  "How do you know your designs meet the customers demands?",
  "What are you passionate about?",
  "Can you describe a time when your recommendation improved the design process?",
  "Describe a time when someone disagreed with you. How was this resolved?",
  "As a designer, what motivates you and what demotivates you?",
  "What is product thinking?",
  "Which company do you think have the best design?",
  "What is the typical day like for someone in this position?",
  "What are the learning/mentoring opportunities within the company?",
  "Have can you collaborate effectively with the remote team?",
  "Talk through a recent project thoroughly and tell me what you learnt",
  "What metrics signaled you to work on problem?",
  "Critique an app on your phone",
  "Critiquing YouTube video app",
  "Rethink the ATM",
  "Do you lean on data or intuition for design decisions? What do you do when you don’t have data?",
  "As a CEO, why should I invest in design?",
  "How do you validate or test the usability of a design?",
  "What tools do you use?",
  "Why are you interested in this company?",
  "Explain Product Design in 10 words",
  "How do you define the role of the Product Designer? Which parts of the product and process do you see as your responsibility and which are not?",
  "Do you consider yourself technically inclined? What is the most technically-challenging project you have tackled?",
  "If you had to pick one of the following as your greatest strength, what would it be",
  "What inspires your thinking about design?",
  "Tell me about your current customers or clients",
  "Tell me about a time you were surprised by user reactions during user research",
  "Are you more comfortable designing on a team or solo?",
  "Tell me a little about your current team's structure",
  "Do you have experience working in an agile development environment?",
  "What is the best way for design to integrate into the agile process?",
  "What is different about managing designers? Can you talk a little bit about the pitfalls of managing designers? How do you motivate designers?",
  "Design a vending machine for blind people",
  "What are you looking for in a new position?"
]

function Widget() {
  const [count, setCount] = useSyncedState('count', 0)
  var i = 0

  if (count !== 0) {
    usePropertyMenu(
      [
        {
          itemType: 'action',
          propertyName: 'reset',
          tooltip: 'Reset',
          icon: `<svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9026 1.43168C12.1936 1.47564 12.4822 1.54098 12.7663 1.62777L12.7719 1.62949C14.0176 2.0114 15.109 2.78567 15.8858 3.83854L15.8918 3.84665C16.5473 4.73808 16.9484 5.78867 17.058 6.88508L14.0863 4.88858L13.3259 6.02047L17.3852 8.74774L17.9079 9.09894L18.2994 8.60571L21.0056 5.19662L19.9376 4.34879L18.3531 6.34479C18.3424 6.27511 18.3306 6.20563 18.3179 6.13636C18.1135 5.02233 17.6601 3.96334 16.9851 3.04274L16.9791 3.03462C16.0303 1.74427 14.6956 0.794984 13.1714 0.326388L13.1658 0.32466C12.8171 0.217755 12.4627 0.137298 12.1055 0.0832198C10.899 -0.0994351 9.66061 0.0188515 8.50099 0.435448L8.4947 0.437711C7.42511 0.823053 6.46311 1.44778 5.6774 2.25801C5.38576 2.55876 5.11841 2.88506 4.87886 3.23416C4.85856 3.26376 4.83845 3.29351 4.81854 3.32343L5.94262 4.08294L5.94802 4.07484C5.96253 4.0531 5.97717 4.03146 5.99195 4.00993C6.71697 2.95331 7.75331 2.15199 8.95541 1.72013L8.9617 1.71788C9.33245 1.58514 9.71301 1.48966 10.098 1.43156C10.6957 1.34135 11.3039 1.34123 11.9026 1.43168ZM3.70034 6.39429L0.994141 9.80338L2.06217 10.6512L3.64663 8.65521C3.65741 8.72489 3.66916 8.79437 3.68187 8.86364C3.88627 9.97767 4.33964 11.0367 5.01467 11.9573L5.02063 11.9654C5.96945 13.2557 7.30418 14.205 8.82835 14.6736L8.83398 14.6753C9.18281 14.7823 9.53732 14.8628 9.89464 14.9168C11.101 15.0994 12.3393 14.9811 13.4988 14.5646L13.5051 14.5623C14.5747 14.1769 15.5367 13.5522 16.3224 12.742C16.614 12.4413 16.8813 12.115 17.1209 11.7659C17.1412 11.7363 17.1613 11.7065 17.1812 11.6766L16.0571 10.9171L16.0518 10.9252C16.0372 10.9469 16.0225 10.9686 16.0078 10.9902C15.2827 12.0467 14.2464 12.848 13.0444 13.2799L13.0381 13.2821C12.6673 13.4149 12.2868 13.5103 11.9018 13.5684C11.3041 13.6587 10.6958 13.6588 10.0971 13.5683C9.8062 13.5244 9.51754 13.459 9.23347 13.3722L9.22784 13.3705C7.98212 12.9886 6.89078 12.2143 6.11393 11.1615L6.10795 11.1534C5.45247 10.2619 5.05138 9.21133 4.94181 8.11492L7.91342 10.1114L8.6739 8.97953L4.61459 6.25226L4.09188 5.90106L3.70034 6.39429Z" fill="white"/>
          </svg>
          `,
        },
      ],
      () => {
        setCount(0)
      },
    )
  }

  return (
    <AutoLayout
      direction={"vertical"}
      verticalAlignItems={'center'}
      horizontalAlignItems={"center"}
      spacing={24}
      padding={32}
      cornerRadius={24}
      fill={'#FFFFFF'}
      stroke={'#E6E6E6'}
    >
      <Text fontSize={16} fill={'#999999'} width={420} horizontalAlignText={'center'}>
        {"Interview questions"}
      </Text>
      <Text fontSize={32} width={420} horizontalAlignText={'center'}>
        {questions[count]}
      </Text>
      <SVG
        src={`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.7841 30.2045L18.7386 28.1818L25.8409 21.0795H8V18.125H25.8409L18.7386 11.0341L20.7841 9L31.3864 19.6023L20.7841 30.2045Z" fill="black"/>
        </svg>`}
        onClick={() => {
          i = (Math.random() * questions.length) | 0
          setCount(count + i - count)
        }}
      ></SVG>
    </AutoLayout>
  )
}

widget.register(Widget)
