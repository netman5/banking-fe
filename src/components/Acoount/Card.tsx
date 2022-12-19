import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";


const MasterCard = (props: any) => {
  return (
    <>
      <Card
        name={`${props.name}`}
        number="5555 4444 3333 1111"
        expiry="10/25"
        cvc="737"
        preview={true}
      />
    </>
  )
}

export default MasterCard