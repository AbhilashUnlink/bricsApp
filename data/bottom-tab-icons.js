import USERS from "./users";

const BottomTabIcons = [
  {
    name: "Home",
    active:
      "data:image/png;base64,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",
    inactive: "",
  },
  {
    name: "Search",
    active:
      "data:image/png;base64,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",
    inactive: "",
  },
  {
    name: "Reels",
    active:
      "data:image/png;base64,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",
    inactive:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Kima9SusFHPdkX88Avv-MDn665z4kVZZyAaFFIlH3EhZrv79zNYOCjSxFVjAWKjqxCE&usqp=CAU",
  },
  {
    name: "Shop",
    active:
      "data:image/png;base64,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",
    inactive: "",
  },
  {
    name: USERS[0].user,
    active: USERS[0].image,
  },
];
export default BottomTabIcons;