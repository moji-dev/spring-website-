let zenBot = [
  {
    id: "1",
    message:
      "Hello my friend. My name is ZenBot. What can I help you with today?",
    trigger: "2"
  },
  {
    id: "2",
    options: [
      { value: "quick-help", label: "Quick Help", trigger: "3" },
      { value: "hads", label: "Medical Questionnaire", trigger: "5" },
      { value: "other", label: "Other", trigger: "40" }
    ]},
  {
    id: "3",
    message: "What quick help do you need?",
    trigger: "4"
  },
  {
    id: "4",
    options: [
      { value: "meditation", label: "Meditation", trigger: "35" },
      { value: "music", label: "Calming Music", trigger: "36" },
      { value: "breathing", label: "Breathing Technique", trigger: "37" }
    ]},
  {
    id: "5",
    message:
      "Welcome to the HADS Medical Questionnaire. I need to ask you a few questions so that I know how I can help you. Please answer the following questions the best you can by clicking on the answer you believe to be true to you.",
    trigger: "6"
  },
  {
    id: "6",
    message:
      "I feel tense or wound up:",
    trigger: "7"
  },
  {
    id: "7",
    options: [
      { value: "3", label: "Most of the time", trigger: "8" },
      { value: "2", label: "A lot of the time", trigger: "8" },
      { value: "1", label: "From time to time (occasionally)", trigger: "8" },
      { value: "0", label: "Not at all", trigger: "8" },
    ]},
  {
    id: "8",
    message:
      "I still enjoy the things I used to enjoy:",
    trigger: "9"
  },
  {
    id: "9",
    options: [
      { value: "0", label: "Definitely as much", trigger: "10" },
      { value: "1", label: "Not quite so much", trigger: "10" },
      { value: "2", label: "Only a little", trigger: "10" },
      { value: "3", label: "Hardly at all", trigger: "10" },
    ]},
  {
    id: "10",
    message:
       "I get sort of frightened feeling as if something awful is about to happen:",
    trigger: "11"
  },
  {
    id: "11",
    options: [
      { value: "3", label: "Very definitely and quite badly", trigger: "12" },
      { value: "2", label: "Yes, but not too badly", trigger: "12" },
      { value: "1", label: "A little, but it doesn't worry me", trigger: "12" },
      { value: "0", label: "Not at all", trigger: "12" },
    ]},
  {
    id: "12",
    message:
       "I can laugh and see the funny side of things:",
    trigger: "13"
  },
  {
    id: "13",
    options: [
      { value: "0", label: "As much as I always could", trigger: "14" },
      { value: "1", label: "Not quite so much now", trigger: "14" },
      { value: "2", label: "Definitely not so much now", trigger: "14" },
      { value: "3", label: "Not at all", trigger: "14" },
    ]},
  {
    id: "14",
    message:
      "Worrying thoughts go through my mind:",
    trigger: "15"
  },
  {
    id: "15",
    options: [
      { value: "3", label: "A great deal of the time", trigger: "16" },
      { value: "2", label: "A lot of the time", trigger: "16" },
      { value: "1", label: "From time to time (but not too often)", trigger: "16" },
      { value: "0", label: "Occaisionally", trigger: "16" },
    ]},
  {
    id: "16",
    message:
      "I feel cheerful:",
    trigger: "17"
  },
  {
    id: "17",
    options: [
      { value: "3", label: "Not at all", trigger: "18" },
      { value: "2", label: "Not often", trigger: "18" },
      { value: "1", label: "Sometimes", trigger: "18" },
      { value: "0", label: "Most of the time", trigger: "18" },
    ]},
  {
    id: "18",
    message:
      "I can sit at ease and feel relaxed:",
    trigger: "19"
  },
  {
    id: "19",
    options: [
      { value: "0", label: "Definitely", trigger: "20" },
      { value: "1", label: "Usually", trigger: "20" },
      { value: "2", label: "Not Often", trigger: "20" },
      { value: "3", label: "Not at all", trigger: "20" },
    ]},
  {
    id: "20",
    message:
       "I feel as if I am slowed down:",
    trigger: "21"
  },
  {
    id: "21",
    options: [
      { value: "3", label: "Nearly all the time", trigger: "22" },
      { value: "2", label: "Very Often", trigger: "22" },
      { value: "1", label: "Sometimes", trigger: "22" },
      { value: "0", label: "Not at all", trigger: "22" },
    ]},
  {
    id: "22",
    message:
      "I get a sort of frightened feeling like 'butterflies' in my stomach:",
    trigger: "23"
  },
  {
    id: "23",
    options: [
      { value: "0", label: "Not at all", trigger: "24" },
      { value: "1", label: "Occasionally", trigger: "24" },
      { value: "2", label: "Quite Often", trigger: "24" },
      { value: "3", label: "Very Often", trigger: "24" },
    ]},
  {
    id: "24",
    message:
      "I have lost interest in my appearance:",
    trigger: "25"
  },
  {
    id: "25",
    options: [
      { value: "3", label: "Definitely", trigger: "26" },
      { value: "2", label: "I don't take as much care as I should", trigger: "26" },
      { value: "1", label: "I may not take quite as much care", trigger: "26" },
      { value: "0", label: "I take just as much care as ever", trigger: "26" },
    ]},
  {
    id: "26",
    message:
      "I feel restless as I have to be on the move:",
    trigger: "27"
  },
  {
    id: "27",
    options: [
      { value: "3", label: "Very much indeed", trigger: "28" },
      { value: "2", label: "Quite a lot", trigger: "28" },
      { value: "1", label: "Not very much", trigger: "28" },
      { value: "0", label: "Not at all", trigger: "28" },
    ]},
  {
    id: "28",
    message:
      "I look forward with enjoyment to things:",
    trigger: "29"
  },
  {
    id: "29",
    options: [
      { value: "0", label: "As much as I ever did", trigger: "30" },
      { value: "1", label: "Rather less than I used to", trigger: "30" },
      { value: "2", label: "Definitely less than I used to", trigger: "30" },
      { value: "3", label: "Hardly at all", trigger: "30" },
    ]},
  {
    id: "30",
    message:
      "I get sudden feelings of panic:",
    trigger: "31"
  },
  {
    id: "31",
    options: [
      { value: "3", label: "Very often indeed", trigger: "32" },
      { value: "2", label: "Quite often", trigger: "32" },
      { value: "1", label: "Not very often", trigger: "32" },
      { value: "0", label: "Not at all", trigger: "32" },
    ]},
  {
    id: "32",
    message:
      "I can enjoy a good book or radio or TV program:",
    trigger: "33"
  },
  {
    id: "33",
    options: [
      { value: "0", label: "Often", trigger: "34" },
      { value: "1", label: "Sometimes", trigger: "34" },
      { value: "2", label: "Not Often", trigger: "34" },
      { value: "3", label: "Very Seldom", trigger: "34" },
    ]},
  {
    id: "34",
    message:
      "Your result is:",
    trigger: "40"
  },
  {
    id: "35",
    component: (
      <div> <a href= "https://www.youtube.com/watch?v=8Xdwr4cRTVA">5 Minute Guided Meditation</a>
        </div>
        ),
    asMessage: true,
    trigger: "40"
  },
  {
    id: "36",
    component: (
      <div> <a href= "https://www.youtube.com/watch?v=hso3oR8PJss">5 Minute Calming Audio</a>
        </div>
        ),
    asMessage: true,
    trigger: "40"
  },
  {
    id: "37",
    component: (
      <div> <a href= "https://www.youtube.com/watch?v=TXNECaIJPDI">5 Minute Breathing Excercise</a>
        </div>
        ),
    asMessage: true,
    trigger: "40"
  },
  {
    id: "40",
    options: [
      { value: "start", label: "Go back to start", trigger: "2" },
      { value: "end", label: "Close ZenBot", trigger: "41" },
    ]},
  {
    id: "41",
    message: "Thankyou for your time. I hope you have a wonderful day!",
    end: true
  }
];
export default zenBot;
