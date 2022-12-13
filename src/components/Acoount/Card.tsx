import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";


const MasterCard = () => {
  const Somename = 'John Doe'
  return (
    <>
      <Card
        name={`${Somename}`}
        number="5555 4444 3333 1111"
        expiry="10/25"
        cvc="737"
        issuer="Ficti Bank"
      />
    </>
  )
}

export default MasterCard