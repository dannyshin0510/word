// some simple svg for to drawout the hangman model

export const HANGMAN_PARTS = [
  <circle
    key="head"
    cx="150"
    cy="50"
    r="20"
    stroke="currentColor"
    fill="none"
    strokeWidth="4"
  />,
  <line
    key="body"
    x1="150"
    y1="70"
    x2="150"
    y2="150"
    stroke="currentColor"
    strokeWidth="4"
  />,
  <line
    key="leftArm"
    x1="150"
    y1="100"
    x2="120"
    y2="130"
    stroke="currentColor"
    strokeWidth="4"
  />,
  <line
    key="rightArm"
    x1="150"
    y1="100"
    x2="180"
    y2="130"
    stroke="currentColor"
    strokeWidth="4"
  />,
  <line
    key="leftLeg"
    x1="150"
    y1="150"
    x2="120"
    y2="180"
    stroke="currentColor"
    strokeWidth="4"
  />,
  <line
    key="rightLeg"
    x1="150"
    y1="150"
    x2="180"
    y2="180"
    stroke="currentColor"
    strokeWidth="4"
  />,
];

export const PLATFORM = [
  <line
    x1="50"
    y1="20"
    x2="150"
    y2="20"
    stroke="currentColor"
    strokeWidth="4"
  />,
  <line
    x1="150"
    y1="20"
    x2="150"
    y2="30"
    stroke="currentColor"
    strokeWidth="4"
  />,
  <line
    x1="50"
    y1="20"
    x2="50"
    y2="200"
    stroke="currentColor"
    strokeWidth="4"
  />,
  <line
    x1="30"
    y1="200"
    x2="70"
    y2="200"
    stroke="currentColor"
    strokeWidth="4"
  />,
];
