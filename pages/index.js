import MyButton from "../components/Button";
import MyCard from "../components/Card";

export default function Home() {
  return (
    <>
      <h1>
        Remote App
      </h1>
      <MyCard
        title="Card Title"
        content="This is the content of the card."
      >
        <MyButton onClick={()=>console.log("Hello from My Button")}>MUI Button</MyButton>
      </MyCard>
    </>
  )
}
