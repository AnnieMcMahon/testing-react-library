import { Button, Card } from "react-ts-library";

const myCard = {
  id: 4,
  title: "Write a Bad Song",
  image: "https://www.leedyer.com/assets/wabsScreenShot.png",
  technology: "HTML, CSS, JavaScript",
  summary: "This is A social Media website based around songwriting that encourages quantity over quality, and promotes collaboration. This project was developed by Lee Robert Dyer.",
  gitHubLink: "https://github.com/leerobertdyer/wabs",
  gitHubTitle: "leerobertdyer/wabs",
  webPageLink: "https://writeabadsong.com/",
  webPageTitle: "writeabadsong.com"
}

function App() {
  return (
  <>
    <Button label="Easy Button" color="pink"/>
    <Card card={myCard}/>
  </>
  )
}

export default App;